import { Router, type IRouter, type Request, type Response } from "express";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

const DATA_DIR = resolve(process.cwd(), "data");
const LEADS_FILE = resolve(DATA_DIR, "leads.json");

if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });

interface Lead {
  name: string;
  email: string;
  company: string;
  phone: string;
  timestamp: string;
  source: string;
}

const router: IRouter = Router();

router.post("/contact", (req: Request, res: Response) => {
  const { name, email, company, phone } = req.body as Partial<Lead>;

  if (!name?.trim() || !email?.trim()) {
    res.status(400).json({ error: "name and email are required" });
    return;
  }

  const lead: Lead = {
    name: name.trim(),
    email: email.trim(),
    company: (company ?? "").trim(),
    phone: (phone ?? "").trim(),
    timestamp: new Date().toISOString(),
    source: "crystalcodex-chat",
  };

  let leads: Lead[] = [];
  try {
    if (existsSync(LEADS_FILE)) {
      leads = JSON.parse(readFileSync(LEADS_FILE, "utf-8"));
    }
  } catch {
    leads = [];
  }

  leads.push(lead);

  try {
    writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
    console.log(`[contact] new lead: ${lead.name} <${lead.email}>`);
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "Failed to save. Please try again." });
  }
});

router.get("/contact/leads", (_req: Request, res: Response) => {
  try {
    if (!existsSync(LEADS_FILE)) { res.json([]); return; }
    const leads = JSON.parse(readFileSync(LEADS_FILE, "utf-8"));
    res.json(leads);
  } catch {
    res.status(500).json({ error: "Failed to read leads" });
  }
});

export default router;
