import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectLayout } from "@/components/projects/project-layout";
import { BenchTable, CaseSection, CompareTable, Decisions, Pipeline, Prose } from "@/components/projects/case";
import { LiveCams } from "@/components/live/live-demos";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Traffic Camera Analysis with YOLOX & OpenVINO | Spencer D'Avis",
  description:
    "Case study: vehicle counting and jam/closure detection across 42 public traffic cameras using YOLOX on an Intel Iris Xe iGPU via OpenVINO, per-camera baselines, and LLM incident captions capped at $0.25/day.",
  path: "/projects/traffic-cameras",
  ogSlug: "traffic-cameras",
});

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "traffic-cameras")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="Problem" title="A camera still is not an alert">
        <Prose>
          <p>
            WSDOT, King County, SDOT and the Park Service publish public camera stills around Renton. They are tiny
            (<strong>335×244</strong>), update roughly every 70 seconds, and sometimes arrive half-uploaded, frozen or blank.
            A person can glance at one and say “that&apos;s a jam”. I wanted the site to say it first, for all 42 at once,
            on hardware I already own and for almost no running cost.
          </p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="Live demo" title="What the counter sees right now">
        <LiveCams />
      </CaseSection>

      <CaseSection n="03" label="Architecture">
        <Pipeline
          steps={[
            { title: "Conditional polling", desc: "All 42 cameras every 30 s with If-None-Match / If-Modified-Since. Most checks are 304s; half-uploaded JPEGs are refused without saving validators." },
            { title: "Frame store", desc: "Every new picture kept 24 h, stamped with the camera's own Last-Modified time, so playback and “taken at” are honest." },
            { title: "Vehicle detection", desc: "YOLOX-m on the full frame plus a 2×2 grid of overlapping, enlarged tiles to catch small, distant cars." },
            { title: "Stopped share", desc: "Vehicles whose box overlaps one in the previous frame ~70 s earlier. Moving traffic has left; in a jam it's still there." },
            { title: "Per-camera baselines", desc: "Compared with the same camera at the same hour and day type: stopped, heavy, light (possible closure), plus stale/offline/blank." },
            { title: "Incident caption", desc: "A flagged frame gets a one-line description from a small vision model: once at onset, every 20 min while it lasts, max 3." },
          ]}
        />
      </CaseSection>

      <CaseSection n="04" label="Benchmarks" title="Cost and performance">
        <BenchTable
          caption="Traffic camera pipeline benchmarks"
          head={["Measure", "Value"]}
          rows={[
            ["Inference per picture (Iris Xe iGPU, OpenVINO)", "~250 ms"],
            ["Share of the iGPU used (shared with Frigate NVR)", "~9%"],
            ["Fallback (ONNX Runtime on CPU)", "1 frame / camera / 5 min"],
            ["Vision-model caption cost", "~$0.00002 / call"],
            ["Daily caption cap", "150 calls · $0.25"],
            ["Frame history / hourly volume history", "24 h / 90 days"],
          ]}
          note="Measured on the production deployment. Frigate showed no measurable slowdown while sharing the GPU."
        />
      </CaseSection>

      <CaseSection n="05" label="Engineering decisions">
        <Decisions
          items={[
            { decision: "A density index, not a count", why: "At 335×244, far cars are missed. The UI calls it vehicles in view and judges change against that camera's own history, which is robust to the bias." },
            { decision: "Edge GPU with automatic fallback", why: "Counting runs on another machine's iGPU over Tailscale. If it stops answering, the main server counts locally on CPU at a lower rate and retries after a minute." },
            { decision: "Baselines only from the current model", why: "Swapping detectors silently shifts counts. History from a previous model is never mixed into today's baseline." },
            { decision: "Warm-up instead of false alarms", why: "A new camera reports `warming` until it has ~300 frames for a rough baseline and two days for same-hour comparisons." },
          ]}
        />
      </CaseSection>

      <CaseSection n="06" label="Comparison" title="Build vs. buy">
        <CompareTable
          caption="This pipeline compared with a commercial traffic analytics API"
          columns={["This pipeline", "Commercial camera analytics"]}
          rows={[
            { label: "Running cost", values: ["≤ $0.25/day + existing hardware", "Per-camera monthly licences"] },
            { label: "Cameras", values: ["Any public JPEG feed", "Usually vendor or partner cameras"] },
            { label: "Anomaly logic", values: ["Per-camera, per-hour baselines; tunable", "Black box"] },
            { label: "Data ownership", values: ["90 days of hourly volume, mine", "Vendor-hosted"] },
            { label: "Accuracy", values: ["Density index on low-res stills", "Typically higher on HD feeds"] },
          ]}
        />
      </CaseSection>

      <CaseSection n="07" label="API">
        <Prose>
          <p>
            The service exposes a small CORS-open JSON API behind Cloudflare: <code>/v1/cams</code>,{" "}
            <code>/v1/cams/&#123;slug&#125;/history</code>, <code>/v1/cams/&#123;slug&#125;/volume?days=7</code> and{" "}
            <code>/v1/events</code>, with immutable, year-long caching on individual frames. RntWx and the live demo above
            are both plain clients of it.
          </p>
        </Prose>
      </CaseSection>
    </ProjectLayout>
  );
}
