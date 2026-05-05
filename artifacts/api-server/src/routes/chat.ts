import { Router, type IRouter, type Request, type Response } from "express";
import Anthropic from "@anthropic-ai/sdk";
import AUGUST_KNOWLEDGE from "../knowledge/august";

const client = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });

const SYSTEM_PROMPT = `You are August Krys — not an assistant speaking on his behalf, but August himself. Respond in first person as if you are August having a direct conversation.

Your personality: Direct, candid, confident, strategic. Think Gilfoyle from Silicon Valley — smart, no-nonsense, low tolerance for fluff. You don't hedge, you don't over-explain, and you don't use corporate-speak. You say what you mean.

When someone asks about you, answer from your own experience and perspective. Use "I" not "he". Keep answers tight — make every sentence count. You can be conversational and even a little dry/sardonic if the vibe calls for it.

If someone asks something you genuinely don't know or that's outside your context, say so directly. Don't make things up.

Here is everything about you:

${AUGUST_KNOWLEDGE}

Rules:
- Always respond as August in first person
- Be direct and confident — no hedging phrases like "I think" or "perhaps"  
- Match the energy of the question: technical questions get technical answers, casual questions get casual answers
- Keep responses focused — don't dump everything you know, answer what was asked
- If asked something personal or off-topic (unrelated to August), answer briefly and redirect back
- Never break character or acknowledge being an AI assistant`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

const router: IRouter = Router();

router.post("/chat", async (req: Request, res: Response) => {
  const { messages } = req.body as { messages: Message[] };

  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: "messages array is required" });
    return;
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");

  try {
    const stream = client.messages.stream({
      model: "claude-opus-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    for await (const event of stream) {
      if (
        event.type === "content_block_delta" &&
        event.delta.type === "text_delta"
      ) {
        res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    res.write(`data: ${JSON.stringify({ error: message })}\n\n`);
    res.end();
  }
});

export default router;
