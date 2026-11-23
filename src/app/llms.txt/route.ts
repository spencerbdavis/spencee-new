import { ALL_PROJECTS, GROUP_LABELS, type ProjectGroup } from "@/lib/projects";
import { SERVICE_PAGES } from "@/lib/services";
import { AVAILABILITY, SITE_CONFIG, SUB_HEADLINE } from "@/lib/config";

// llms.txt (llmstxt.org): a plain-text map of the site for AI answer engines (GEO).
// Generated from the same data as the pages, so it never drifts.
export const dynamic = "force-static";

export function GET() {
  const u = SITE_CONFIG.url;
  const groups: ProjectGroup[] = ["independent", "lab", "work", "other"];
  const sections = groups
    .map((g) => {
      const items = ALL_PROJECTS.filter((p) => (p.group ?? "other") === g);
      if (!items.length) return "";
      const lines = items.map((p) => {
        const extra = [p.repo && `source: ${p.repo}`, p.live && `live: ${p.live}`].filter(Boolean).join("; ");
        return `- [${p.title}](${u}/projects/${p.slug}): ${p.outcome}${extra ? ` (${extra})` : ""}`;
      });
      return `## ${GROUP_LABELS[g].title}\n\n${GROUP_LABELS[g].blurb}\n\n${lines.join("\n")}`;
    })
    .filter(Boolean)
    .join("\n\n");

  const body = `# ${SITE_CONFIG.name} (Spencer Davis)

> ${SUB_HEADLINE}

${AVAILABILITY}

Key facts:
- Name: ${SITE_CONFIG.name}, also written Spencer Davis; GitHub and LinkedIn handle "spencerbdavis".
- Location: Renton / Seattle area, Washington, USA.
- Focus: applied AI and model evaluation, API integrations (Yardi, RentCafe, Google Business Profile), internal tools, data pipelines, Next.js and WordPress sites with local SEO, iOS (SwiftUI, HealthKit, CoreBluetooth), Android kiosks, and hardware/radio projects (weather radar, ADS-B).
- Contact: ${SITE_CONFIG.email}
- Profiles: ${SITE_CONFIG.linkedin} · ${SITE_CONFIG.github}

## Main pages

- [Home](${u}): overview, featured work, contact
- [Projects](${u}/projects): every case study
- [About](${u}/about): background and how I work
- [Services](${u}/services): freelance web, SEO and AI automation for Seattle-area businesses
- [Résumé (PDF)](${u}/spencer-davis-resume.pdf)

${sections}

## Services

${SERVICE_PAGES.map((s) => `- [${s.name}](${u}/services/${s.slug}): ${s.description}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
