/**
 * Repository ledger for the Bonavista operations platform.
 * Counts read from local git history on 2026-11-21 (`git rev-list --count HEAD`,
 * `git shortlog -sn`). Repos are private company code; no links.
 */
export interface RepoEntry {
  name: string;
  role: string;
  stack: string;
  commits: number;
  mine: number; // commits authored by Spencer
  span: string;
  note?: string;
}

export const OPS_REPOS: Record<string, RepoEntry> = {
  bv_admin: {
    name: "bv_admin",
    role: "Admin platform: receipts & reconciliation, SEO engine, GBP/Apple listings, reviews, Matterport, mileage",
    stack: "Next.js · TypeScript · MySQL · Gemini · Vercel Queues · OpenNext on Cloudflare",
    commits: 491,
    mine: 491,
    span: "Apr 2025 – Nov 2026",
    note: "331 API route files, 65 pages, 46 scheduled jobs",
  },
  "receipts-processor": {
    name: "receipts-processor",
    role: "Cloudflare Email Worker: receipts@ inbox → parsed MIME + attachments → admin API",
    stack: "Cloudflare Workers · Email Routing · PostalMime",
    commits: 1,
    mine: 1,
    span: "Jun 2026",
    note: "Imported as a single commit",
  },
  bv_acc_ext: {
    name: "bv_acc_ext",
    role: "Chrome extension: per-employee GL CSVs from bv_admin → Yardi GL Import, then flags receipts as uploaded",
    stack: "Chrome MV3 · Vite 7 · React 19 · zustand · Vitest",
    commits: 46,
    mine: 46,
    span: "May – Jun 2026",
  },
  "maintenance-panel": {
    name: "maintenance-panel",
    role: "Supervisor web app: work orders, turns, move-outs, grounds, scheduling, reviews, equipment",
    stack: "Next.js · TypeScript · MySQL · Microsoft Graph · FullCalendar · APNs",
    commits: 1347,
    mine: 274,
    span: "Apr 2025 – Nov 2026",
    note: "Founded and architected by me; most later commits by a contract developer",
  },
  BVMaintenance: {
    name: "BVMaintenance (iOS)",
    role: "Field app: geofenced check-ins, NFC equipment, receipts, mileage, Live Activities, offline queue",
    stack: "React Native · TypeScript · Swift ActivityKit · SQLite",
    commits: 296,
    mine: 135,
    span: "Jan 2025 – Jun 2026",
    note: "41 screens · ~61k lines of TypeScript; shared with a contract developer",
  },
  "maintenance-ext": {
    name: "maintenance-ext",
    role: "Chrome extension inside Yardi: schedule work from a submission, write technician notes back to Yardi",
    stack: "Chrome MV3 · Vite · React · ASP.NET WebForms automation",
    commits: 2,
    mine: 2,
    span: "Feb – Nov 2026",
    note: "History imported; published on the Chrome Web Store (v2.1.4)",
  },
};

export function reposFor(names: string[]) {
  return names.map((n) => OPS_REPOS[n]).filter(Boolean);
}
