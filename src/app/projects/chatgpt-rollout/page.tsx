import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectLayout } from "@/components/projects/project-layout";
import { CaseSection, Decisions, Pipeline, Prose } from "@/components/projects/case";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Rolling Out ChatGPT Enterprise to 48 Property Management Staff | Spencer D'Avis",
  description:
    "Case study: taking ChatGPT Enterprise from evaluation to a company-wide rollout across 48 users at a Seattle property manager, with executive demos, custom GPTs for accounting and investor letters, and follow-up with teams that weren't using it.",
  path: "/projects/chatgpt-rollout",
  ogSlug: "chatgpt-rollout",
});

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "chatgpt-rollout")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="Problem" title="Licenses don't change how people work">
        <Prose>
          <p>{project.problem}</p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="How it ran" title="From evaluation to everyday use">
        <Pipeline
          steps={[
            { title: "Evaluate", desc: "Tried it on real company work before recommending a purchase." },
            { title: "Show leadership", desc: "Executive demos so the decision was made on what it could actually do for us." },
            { title: "Procure", desc: "Took it through procurement to a company account." },
            { title: "Roll out", desc: "Brought 48 users across the organization onto it." },
            { title: "Build custom GPTs", desc: "Purpose-built assistants for accounting automation and for drafting property investment letters." },
            { title: "Follow up", desc: "Tracked how it was being used and reached out to teams that were under-using it." },
          ]}
        />
      </CaseSection>

      <CaseSection n="03" label="Approach" title="What makes a rollout stick">
        <Decisions
          items={[
            { decision: "Start from the job, not the tool", why: "Demos and training are built around the work people already do, not generic prompts." },
            { decision: "Give teams something built for them", why: "A custom GPT that already knows a team's formats is easier to pick up than a blank chat box." },
            { decision: "Launch isn't the finish line", why: "Usage shows who needs a better example. Following up with those teams is part of the rollout." },
            { decision: "Be honest about limits", why: "Show where it gets things wrong and how to check its work, not only what it gets right." },
          ]}
        />
      </CaseSection>

      <CaseSection n="04" label="Workshops" title="How I teach it to a small business">
        <Prose>
          <p>
            The same format works for a five-person shop. We start with the owner&apos;s real week: the emails, quotes,
            reviews and paperwork that eat their time. We pick one task, build the assistant for it together on their own
            files, and practice checking its work. They leave with something running and the confidence to build the next one
            themselves.
          </p>
        </Prose>
      </CaseSection>
    </ProjectLayout>
  );
}
