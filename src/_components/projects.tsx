import Section from "./blocks/Section.tsx";
import Link from "./blocks/Link.tsx";

type Project = {
  title: string;
  description: string;
  links: Array<{
    type: string;
    href: string;
  }>;
};

type ProjectsProps = {
  projects: Project[];
};

export default function ({ projects }: ProjectsProps) {
  return (
    <Section id="projects" title="Projects">
      <div class="space-y-2">
        {projects.map((project, index) => (
          <div key={index} class="glass-card">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-lg font-semibold text-white">{project.title}</h3>
              <div class="flex gap-3 flex-wrap">
                {project.links.map((link, linkIndex) => (
                  <Link
                    href={link.href}
                    className="text-sm text-accent hover:text-accent-hover transition-colors"
                  >
                    {link.type}
                  </Link>
                ))}
              </div>
            </div>
            <p class="text-secondary">{project.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
