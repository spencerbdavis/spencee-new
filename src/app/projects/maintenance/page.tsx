import type { Metadata } from "next";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { Tabs } from "@/components/ui/tabs";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis — Bonavista Maintenance Suite",
  description:
    "Work order management, mobile execution, and Yardi integration — built in-house to replace a $30K/year vendor.",
  alternates: { canonical: "https://spenc.ee/projects/maintenance" },
};

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: 1.6, color: "var(--muted-foreground)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--border)", marginTop: 8, flexShrink: 0 }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TabHeader({
  description,
  tech,
}: {
  description: string;
  tech: string;
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)" }}>
        {description}
      </p>
      <p style={{ marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)" }}>
        {tech}
      </p>
    </div>
  );
}

const panelFeatures = [
  "Supervisors authenticate via Microsoft 365 OAuth (Azure AD / MSAL) with delegated calendar access",
  "Work orders, unit turns, move-out inspections, and grounds submissions managed from a single dashboard",
  "Auto-generates Outlook calendar events for assigned technicians via Microsoft Graph API",
  "FullCalendar-based drag-and-drop rescheduling with resource views",
  "PDF report generation via Puppeteer headless rendering with direct upload to Yardi",
  "15+ automated email notification templates via Resend + Mailgun",
  "Equipment checkout system with NFC tag tracking, cost calculation, and overdue reminders",
  "Weekly performance review system with questionnaires, scoring, and bonus calculations",
  "GPS radius tracking and location discrepancy detection during work hours",
  "Analytics dashboard with performance metrics and real-time activity feed",
  "5 Vercel cron jobs running automated notifications and summaries",
];

const appFeatures = [
  "Technicians receive assigned work orders, turns, move-outs, and grounds jobs",
  "After-action reports route to property manager and supervisor for review",
  "Resident notifications at each stage: scheduling, arrival, and completion",
  "Geofenced check-in with GPS property radius validation (configurable 1–5 miles)",
  "NFC equipment checkout/check-in with offline-first local SQLite storage",
  "iOS Live Activities via native Swift ActivityKit — Dynamic Island and Lock Screen countdown",
  "Weekly performance reviews with question snapshot locking",
  "Receipt capture and OCR submission via camera and document scanner",
  "Offline-first: SQLite property cache (500+ properties), background sync on reconnect",
  "Deep linking for direct check-in navigation",
];

const extensionFeatures = [
  "Injects into Yardi's web interface via content scripts — extracts work order and property data from the DOM",
  "Schedule work orders, turns, and move-out inspections from within Yardi without manual re-entry",
  "Calendar preview with real-time technician availability and busy-time percentage",
  "Automated PDF download from employee portal and upload to Yardi work orders",
  "Property autocomplete search and invitee management with role-based controls",
  "ASP.NET WebForms automation via __doPostBack for Yardi form manipulation",
  "Multi-phase OAuth authentication with Microsoft Graph integration",
];

export default function MaintenancePage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "maintenance")!;

  return (
    <ProjectLayout project={project}>
      {/* Problem */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          The Problem
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--muted-foreground)", maxWidth: 640 }}>
          {project.problem}
        </p>
      </div>

      {/* Tabs */}
      <Tabs
        tabs={[
          {
            label: "Panel",
            content: (
              <>
                <TabHeader
                  description="The supervisor's command center — 1,295 commits, 252 API routes, 207 components."
                  tech="Next.js 15 · TypeScript · Microsoft Graph API · MySQL · FullCalendar · Resend + Mailgun · AWS S3 · Puppeteer · APNs"
                />
                <FeatureList items={panelFeatures} />
                <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
                  <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)" }}>
                    <Image src="/screenshots/maintenance/panel-homepage.png" alt="Maintenance Panel homepage" width={600} height={400} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)" }}>
                    <Image src="/screenshots/maintenance/panel-work-order.png" alt="Work order view" width={600} height={400} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)" }}>
                    <Image src="/screenshots/maintenance/panel-work-order-pdf.png" alt="Work order PDF export" width={600} height={400} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)" }}>
                    <Image src="/screenshots/maintenance/panel-extension-schedule.png" alt="Schedule view with Graph API" width={600} height={400} style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
              </>
            ),
          },
          {
            label: "iOS App",
            content: (
              <>
                <TabHeader
                  description="The technician's field tool — published on the App Store. 108 commits, 34 screens."
                  tech="React Native 0.76 · TypeScript · Swift (ActivityKit) · SQLite · PostHog Analytics"
                />
                <FeatureList items={appFeatures} />
              </>
            ),
          },
          {
            label: "Extension",
            content: (
              <>
                <TabHeader
                  description="The Yardi bridge — Chrome Extension (Manifest V3)."
                  tech="React 19 · Vite · CRXJS · Zustand · TanStack React Query · Zod"
                />
                <FeatureList items={extensionFeatures} />
              </>
            ),
          },
        ]}
      />
    </ProjectLayout>
  );
}
