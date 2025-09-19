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
      <div class="space-y-4">
        {projects.map((project, index) => (
          <div class="bg-white/5 border border-white/10 rounded-xl p-6">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 class="text-white font-semibold text-lg mb-1">
                  {project.title}
                </h3>
              </div>
              <div class="flex gap-3 flex-wrap">
                {project.links.map((link, _linkIndex) => (
                  <Link
                    href={link.href}
                    className="text-sm text-accent hover:text-accent-hover underline transition-colors"
                  >
                    {link.type}
                  </Link>
                ))}
              </div>
            </div>
            <p class="text-gray-300 leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
