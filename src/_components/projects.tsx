interface ProjectsProps {
  projects: {
    title: string;
    description: string;
    active?: boolean;
    links: {
      type: string;
      href: string;
    }[];
  }[];
}

export default function ({ projects }: ProjectsProps) {
  return (
    <section id="projects" class="mb-8">
      <h2 class="mb-3" style="color: #a2c9eb">
        Projects
      </h2>
      <div class="space-y-6">
        {projects.map((project) => (
          <div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <h3 class="text-white font-semibold">{project.title}</h3>
              {project.active && (
                <span class="text-sm" style="color: #a2c9eb">
                  [active]
                </span>
              )}
            </div>
            <p class="text-gray-300 mb-2">{project.description}</p>
            <div class="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                  style="color: #a2c9eb"
                >
                  {link.type}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
