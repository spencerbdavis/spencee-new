import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectLayout } from "@/components/projects/project-layout";
import { BenchTable, CaseSection, Decisions, Pipeline, Prose } from "@/components/projects/case";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "AI Google Review Replies for 60+ Locations, With a Person in the Loop | Spencer D'Avis",
  description:
    "Case study: a Google review response program for 60+ apartment communities. AI drafts replies in the brand's voice, low ratings wait for a person, every new review is answered within 72 hours, and a 1,700-review backlog was cleared without flooding Google.",
  path: "/projects/google-reviews",
  ogSlug: "google-reviews",
});

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "google-reviews")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="Problem" title="Reviews were piling up faster than anyone could answer">
        <Prose>
          <p>{project.problem}</p>
          <p>
            For a local business, the Google Business Profile is the storefront. An unanswered one-star review sits at the
            top of it for anyone comparing options, and a pile of unanswered five-stars says nobody is listening.
          </p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="How it works" title="How a new review moves">
        <Pipeline
          steps={[
            { title: "Collected daily", desc: "Every Business Profile is checked each morning; newly added locations bring in their full history." },
            { title: "Drafted in voice", desc: "A reply is drafted in the brand's voice, naming the property once, naturally." },
            { title: "Routed by rating", desc: "Four- and five-star replies post on a paced schedule. Anything lower waits for a person to approve or edit." },
            { title: "Response deadline", desc: "If a review is still unanswered at 48 hours the manager is alerted; it escalates at 72. Nothing ages out." },
            { title: "Policy check", desc: "Reviews of four stars or lower are screened against Google's policy categories, with report-to-Google steps emailed to the manager." },
          ]}
        />
      </CaseSection>

      <CaseSection n="03" label="The backlog" title="Clearing 1,700 old reviews without looking like spam">
        <Prose>
          <p>
            About 1,700 historical reviews had never been answered. Publishing replies to all of them on day one would look
            like a bot to customers and to Google. Instead the backlog was paced across weeks, with a cadence view showing
            progress and every reply that went out.
          </p>
          <p>
            The automatic deadline only applies to reviews that arrive after a fixed start date. If that date is missing, the
            feature does nothing rather than treating every old review as overdue. Getting that one rule wrong would have
            published the entire backlog in a single morning.
          </p>
        </Prose>
      </CaseSection>

      <CaseSection n="04" label="Guardrails" title="Replies are public and permanent">
        <Decisions
          items={[
            { decision: "A person approves anything below four stars", why: "Unhappy customers deserve a human reading their words before the company answers in public." },
            { decision: "Reject drafts that aren't replies", why: "Models occasionally answer with their own notes or checklist instead of a reply. Those drafts are blocked before anyone can approve them." },
            { decision: "Credit staff only when a review clearly names them", why: "Two employees sharing a surname shouldn't both get credit for one review." },
            { decision: "Keep each location's reviews separate", why: "Properties that share an internal code must never show, or answer, each other's reviews." },
            { decision: "Detect removed reviews", why: "When Google takes a review down, it's marked removed instead of lingering in the queue." },
          ]}
        />
      </CaseSection>

      <CaseSection n="05" label="Scale">
        <BenchTable
          caption="Review program at a glance"
          head={["Measure", "Value"]}
          rows={[
            ["Business Profiles covered", "60+"],
            ["Historical backlog cleared on a paced schedule", "~1,700 reviews"],
            ["Longest a new review waits for a reply", "72 hours"],
            ["Ratings that always get human approval", "3 stars and below"],
            ["Policy categories screened", "8"],
          ]}
        />
      </CaseSection>

      <CaseSection n="06" label="For a small business" title="The same idea at the size of one shop">
        <Prose>
          <p>
            Most small businesses don&apos;t need the cron jobs. They need a short routine: an assistant set up with their
            services and tone that drafts replies, a weekly fifteen minutes to approve them, and a rule that a person always
            answers the unhappy ones. I can set that up in an afternoon and teach the owner to run it.
          </p>
        </Prose>
      </CaseSection>
    </ProjectLayout>
  );
}
