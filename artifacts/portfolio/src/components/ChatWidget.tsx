import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

type FormStatus = "idle" | "submitting" | "submitted" | "error";

const SUGGESTED = [
  "What have I built?",
  "How do I approach decisions?",
  "Curious about my background?",
  "What's my current harness?",
];

const API_BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", company: "", phone: "" });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming, showContactForm]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(newMessages);
    setInput("");
    setStreaming(true);
    setShowContactForm(false);

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      let terminated = false;
      while (!terminated) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") { terminated = true; break; }

          let parsed: { text?: string; error?: string; form?: string } | null = null;
          try {
            parsed = JSON.parse(data);
          } catch {
            continue;
          }

          if (parsed?.error) {
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                role: "assistant",
                content: "Something went wrong on my end. Try again.",
              };
              return updated;
            });
            terminated = true;
            break;
          }

          if (parsed?.form === "contact") {
            setShowContactForm(true);
            setFormData({ name: "", email: "", company: "", phone: "" });
            setFormStatus("idle");
          }

          if (parsed?.text) {
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                role: "assistant",
                content: updated[updated.length - 1].content + parsed!.text,
              };
              return updated;
            });
          }
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Network error — check your connection and try again.",
        };
        return updated;
      });
    } finally {
      setStreaming(false);
    }
  }

  async function submitContact(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setFormStatus("submitting");
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setFormStatus("submitted");
    } catch {
      setFormStatus("error");
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  const isEmpty = messages.length === 0;

  return (
    <>
      {!open && (
        <button
          className="chat-trigger"
          onClick={() => setOpen(true)}
          aria-label="Chat with August"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span>Ask August</span>
        </button>
      )}

      {open && (
        <div className="chat-panel" role="dialog" aria-label="Chat with August">
          <div className="chat-panel__header">
            <div className="chat-panel__title">
              <span className="chat-panel__dot" />
              <span>august@krys <span className="chat-panel__sub">— ask me anything</span></span>
            </div>
            <button className="chat-panel__close" onClick={() => setOpen(false)} aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className="chat-panel__messages">
            {isEmpty && (
              <div className="chat-empty">
                <p className="chat-empty__lead">I'm August. Ask me anything.</p>
                <div className="chat-chips">
                  {SUGGESTED.map((s) => (
                    <button key={s} className="chat-chip" onClick={() => send(s)}>{s}</button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`chat-msg chat-msg--${m.role}`}>
                {m.role === "assistant" && <span className="chat-msg__label">august</span>}
                <div className="chat-msg__bubble">
                  {m.content || (streaming && i === messages.length - 1 ? (
                    <span className="chat-typing"><span /><span /><span /></span>
                  ) : "")}
                </div>
              </div>
            ))}

            {/* CrystalCodex contact form */}
            {showContactForm && (
              <div className="contact-card">
                {formStatus === "submitted" ? (
                  <div className="contact-card__success">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <div>
                      <strong>Got it.</strong>
                      <p>I'll be in touch.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="contact-card__header">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      <span>CrystalCodex — Request Access</span>
                    </div>
                    <p className="contact-card__sub">Leave your info and I'll reach out directly.</p>
                    <form className="contact-form" onSubmit={submitContact}>
                      <div className="contact-form__row">
                        <input
                          className="contact-form__input"
                          type="text"
                          placeholder="Name *"
                          value={formData.name}
                          onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                          required
                          disabled={formStatus === "submitting"}
                        />
                        <input
                          className="contact-form__input"
                          type="email"
                          placeholder="Email *"
                          value={formData.email}
                          onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                          required
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                      <div className="contact-form__row">
                        <input
                          className="contact-form__input"
                          type="text"
                          placeholder="Company"
                          value={formData.company}
                          onChange={(e) => setFormData((f) => ({ ...f, company: e.target.value }))}
                          disabled={formStatus === "submitting"}
                        />
                        <input
                          className="contact-form__input"
                          type="tel"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
                          disabled={formStatus === "submitting"}
                        />
                      </div>
                      {formStatus === "error" && (
                        <p className="contact-form__error">Something went wrong. Try again.</p>
                      )}
                      <button
                        className="contact-form__submit"
                        type="submit"
                        disabled={formStatus === "submitting" || !formData.name.trim() || !formData.email.trim()}
                      >
                        {formStatus === "submitting" ? "Sending…" : "Send Request"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="chat-panel__input-wrap">
            <textarea
              ref={inputRef}
              className="chat-panel__input"
              placeholder="Ask me anything…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              rows={1}
              disabled={streaming}
            />
            <button
              className="chat-panel__send"
              onClick={() => send(input)}
              disabled={!input.trim() || streaming}
              aria-label="Send"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
