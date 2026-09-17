import Link from "next/link";
import { SKILLS, SKILL_PROJECTS } from "@/lib/skills";
import { Reveal } from "@/components/shared/reveal";

function SkillChip({ skill }: { skill: string }) {
  const projects = SKILL_PROJECTS[skill] ?? [];

  if (projects.length === 0) {
    return <span className="tag">{skill}</span>;
  }

  return (
    <Link
      href={`/projects?skill=${encodeURIComponent(skill)}`}
      className="tag invert-hover no-underline"
      title={`View projects using ${skill}`}
    >
      {skill}
      <svg
        width="9"
        height="9"
        viewBox="0 0 10 10"
        fill="none"
        aria-hidden
        className="ml-1 shrink-0"
      >
        <path
          d="M3.5 2L7 5L3.5 8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 rule-thick">
      <div className="container-site py-24 md:py-32">
        <Reveal className="reveal-rise">
          <div className="swiss-grid">
            <p className="label-mono col-span-4 md:col-span-2">03 / Capabilities</p>
            <h2 className="col-span-4 mt-4 text-h2 md:col-span-8 md:mt-0">What I use to ship</h2>
          </div>

          <div className="mt-12 divide-y divide-hairline md:mt-16">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="swiss-grid gap-y-4 py-7 md:py-8"
              >
                <p className="label-mono col-span-4 md:col-span-3">{group.category}</p>
                <div className="col-span-4 flex flex-wrap gap-2 md:col-span-9">
                  {group.items.map((skill) => (
                    <SkillChip key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
