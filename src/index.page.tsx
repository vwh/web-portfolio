export const layout = "layout.tsx";
export const title = "About Me";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    {/* ASCII Art - Responsive */}
    <section class="mb-6">
      {/* Hide on very small screens */}
      <pre
        class="hidden sm:block font-mono text-xs sm:text-sm overflow-x-auto"
        style="color: #a2c9eb"
      >
        {`
 ██╗   ██╗ █████╗ ███████╗ █████╗ ███╗   ██╗
 ╚██╗ ██╔╝██╔══██╗╚══███╔╝██╔══██╗████╗  ██║
  ╚████╔╝ ███████║  ███╔╝ ███████║██╔██╗ ██║
   ╚██╔╝  ██╔══██║ ███╔╝  ██╔══██║██║╚██╗██║
    ██║   ██║  ██║███████╗██║  ██║██║ ╚████║
    ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
`}
      </pre>

      {/* Simple text version for very small screens */}
      <div class="sm:hidden mb-4">
        <h1 class="text-3xl font-bold" style="color: #a2c9eb">
          {data.resume.name}
        </h1>
      </div>
    </section>

    {/* About */}
    <section id="about" class="mb-8">
      <p class="text-gray-300 mb-2">Hey.</p>
      <div
        class="text-gray-300 mb-2"
        dangerouslySetInnerHTML={{ __html: data.resume.about }}
      />
      <p class="text-gray-300">
        Currently based in{" "}
        <a
          href={data.resume.locationLink}
          target="_blank"
          class="underline"
          style="color: #a2c9eb"
        >
          {data.resume.location}
        </a>
        .
      </p>
    </section>

    {/* Contact */}
    <section id="contact" class="mb-8">
      <h2 class="mb-3" style="color: #a2c9eb">
        Contact
      </h2>
      <div class="space-y-1">
        <div>
          <a
            href={`mailto:${data.resume.contact.email}`}
            class="underline break-all"
            style="color: #a2c9eb"
          >
            {data.resume.contact.email}
          </a>
        </div>
        {Object.entries(data.resume.contact.social).map(
          ([key, social]: [string, any]) => (
            <div>
              <a
                href={social.url}
                target="_blank"
                class="underline"
                style="color: #a2c9eb"
              >
                {social.name}
              </a>
            </div>
          )
        )}
        {data.resume.resume?.url && (
          <div>
            <a
              href={data.resume.resume.url}
              target="_blank"
              class="underline"
              style="color: #a2c9eb"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </section>

    {/* Languages */}
    <section id="languages" class="mb-8">
      <h2 class="mb-3" style="color: #a2c9eb">
        Languages
      </h2>
      <div
        class="text-gray-300 mb-4"
        dangerouslySetInnerHTML={{ __html: data.resume.languagesSummary }}
      />
    </section>

    {/* Runtimes */}
    <section id="runtimes" class="mb-8">
      <h2 class="mb-3" style="color: #a2c9eb">
        Runtime Environments
      </h2>
      <div
        class="text-gray-300 mb-4"
        dangerouslySetInnerHTML={{ __html: data.resume.runtimesSummary }}
      />
    </section>

    {/* Skills */}
    <section id="skills" class="mb-8">
      <h2 class="mb-3" style="color: #a2c9eb">
        Skills
      </h2>
      <div class="flex flex-wrap gap-x-4 gap-y-1">
        {data.resume.skills.map((skill: string) => (
          <span class="text-gray-300">{skill}</span>
        ))}
      </div>
    </section>

    {/* Projects */}
    <section id="projects" class="mb-8">
      <h2 class="mb-3" style="color: #a2c9eb">
        Projects
      </h2>
      <div class="space-y-6">
        {data.resume.projects.map((project: any) => (
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
              {project.links.map((link: any) => (
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

    {/* Future */}
    <section class="mb-8">
      <h2 class="mb-3" style="color: #a2c9eb">
        What's Next
      </h2>
      <div
        class="text-gray-300"
        dangerouslySetInnerHTML={{ __html: data.resume.futurePlans }}
      />
    </section>
  </>
);
