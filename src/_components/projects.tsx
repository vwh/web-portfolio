import Section from "./blocks/Section.tsx";
import Link from "./blocks/Link.tsx";

type ProjectsProps = Pick<Lume.Data["resume"], "projects">;

export default function ({ projects }: ProjectsProps) {
  return (
    <Section id="projects" title="Projects">
      <div class="space-y-6">
        {projects.map((project) => (
          <div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <h3 class="text-white font-semibold">{project.title}</h3>
              {project.active && <span class="text-sm">[active]</span>}
            </div>
            <p class="text-gray-300 mb-2">{project.description}</p>
            <div class="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <Link href={link.href}>{link.type}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
