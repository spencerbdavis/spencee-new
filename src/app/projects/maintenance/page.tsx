import type { Metadata } from "next";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { Tabs } from "@/components/ui/tabs";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Bonavista Maintenance Suite",
  description:
    "Work order management, mobile execution, and Yardi integration, built in-house to replace a $30K/year vendor.",
  alternates: { canonical: "https://spenc.ee/projects/maintenance" },
};

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-hairline border-t border-hairline">
      {items.map((item) => (
        <li key={item} className="py-3 text-sm leading-relaxed text-ink-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

function TabHeader({ description, tech }: { description: string; tech: string }) {
  return (
    <div className="mb-8">
      <p className="text-base font-semibold text-ink">{description}</p>
      <p className="label-mono mt-2">{tech}</p>
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
  "Geofenced check-in with GPS property radius validation (configurable 1 to 5 miles)",
  "NFC equipment checkout/check-in with offline-first local SQLite storage",
  "iOS Live Activities via native Swift ActivityKit: Dynamic Island and Lock Screen countdown",
  "Weekly performance reviews with question snapshot locking",
  "Receipt capture and OCR submission via camera and document scanner",
  "Offline-first: SQLite property cache (500+ properties), background sync on reconnect",
  "Deep linking for direct check-in navigation",
];

const extensionFeatures = [
  "Injects into Yardi's web interface via content scripts, extracting work order and property data from the DOM",
  "Schedule work orders, turns, and move-out inspections from within Yardi without manual re-entry",
  "Calendar preview with real-time technician availability and busy-time percentage",
  "Automated PDF download from employee portal and upload to Yardi work orders",
  "Property autocomplete search and invitee management with role-based controls",
  "ASP.NET WebForms automation via __doPostBack for Yardi form manipulation",
  "Multi-phase OAuth authentication with Microsoft Graph integration",
];

function Plate({ src, alt }: { src: string; alt: string }) {
  return (
    <div>
      <div className="relative aspect-video border border-hairline">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
      </div>
      <p className="label-mono mt-2">{alt}</p>
    </div>
  );
}

export default function MaintenancePage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "maintenance")!;

  return (
    <ProjectLayout project={project}>
      {/* Problem */}
      <div>
        <p className="label-mono mb-6">The Problem</p>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">{project.problem}</p>
      </div>

      {/* Tabs */}
      <Tabs
        tabs={[
          {
            label: "Panel",
            content: (
              <>
                <TabHeader
                  description="The supervisor's command center: 1,295 commits, 252 API routes, 207 components."
                  tech="Next.js 15 · TypeScript · Microsoft Graph API · MySQL · FullCalendar · Resend + Mailgun · AWS S3 · Puppeteer · APNs"
                />
                <FeatureList items={panelFeatures} />
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Plate src="/screenshots/maintenance/panel-homepage.webp" alt="Maintenance Panel homepage" />
                  <Plate src="/screenshots/maintenance/panel-work-order.webp" alt="Work order view" />
                  <Plate src="/screenshots/maintenance/panel-work-order-pdf.webp" alt="Work order PDF export" />
                  <Plate
                    src="/screenshots/maintenance/panel-extension-schedule.webp"
                    alt="Schedule view with Graph API"
                  />
                </div>
              </>
            ),
          },
          {
            label: "iOS App",
            content: (
              <>
                <TabHeader
                  description="The technician's field tool, published on the App Store. 108 commits, 34 screens."
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
                  description="The Yardi bridge: Chrome Extension (Manifest V3)."
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
