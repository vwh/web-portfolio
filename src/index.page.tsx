export const layout = "layout.tsx";
export const title = "About Me";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    {/* Hero Section */}
    <section id="about" class="mb-12 md:mb-16">
      <div class="mb-8">
        <div class="hidden md:inline-block">
          <pre class="text-[#a2c9eb] text-xs md:text-sm mb-4 opacity-80 font-mono leading-relaxed">
            {`     ___           ___           ___           ___           ___     
    /\\  \\         /\\  \\         /\\__\\         /\\  \\         /\\__\\    
   /::\\  \\       /::\\  \\       /::|  |       /::\\  \\       /::|  |   
  /:/\\:\\  \\     /:/\\:\\  \\     /:|:|  |      /:/\\:\\  \\     /:|:|  |   
 /::\\~\\:\\  \\   /::\\~\\:\\  \\   /:/|:|  |__   /::\\~\\:\\  \\   /:/|:|  |__ 
/:/\\:\\ \\:\\__\\ /:/\\:\\ \\:\\__\\ /:/ |:| /\\__\\ /:/\\:\\ \\:\\__\\ /:/ |:| /\\__\\
\\/__\\:\\/:/  / \\:\\~\\:\\ \\/__/ \\/__|:|/:/  / \\/__\\:\\/:/  / \\/__|:|/:/  /
     \\::/  /   \\:\\ \\:\\__\\       |:/:/  /       \\::/  /      |:/:/  / 
      \\/__/     \\:\\ \\/__/       |::/  /         \\/__/       |::/  /  
                 \\:\\__\\         /:/  /                      /:/  /   
                  \\/__/         \\/__/                       \\/__/    `}
          </pre>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
          Hi, I'm{" "}
          <span class="text-[#a2c9eb] glitch-text">{data.resume.name}</span> 👋
        </h1>
        <div class="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
          <span class="text-[#a2c9eb] font-semibold">$</span>{" "}
          {data.resume.about}
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-gray-400">
          <span class="flex items-center">
            <span class="text-[#a2c9eb] mr-2">📍</span>
            <a
              href={data.resume.locationLink}
              class="hover:text-[#a2c9eb] transition-colors duration-200 underline decoration-dotted hover:decoration-solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.resume.location}
            </a>
          </span>
        </div>
      </div>
    </section>

    {/* Languages Section */}
    <section id="languages" class="mb-12 md:mb-16">
      <div class="mb-8">
        <h2 class="text-xl md:text-2xl font-bold mb-4 text-[#a2c9eb] flex items-center">
          <span class="mr-3">&gt;</span> Languages & Tools
        </h2>
        <p class="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
          {data.resume.languagesSummary}
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {data.resume.languages.map((lang: any) => (
            <a
              href={lang.url}
              target="_blank"
              rel="noopener noreferrer"
              class="group bg-gray-800/50 border border-gray-700 rounded-lg p-3 md:p-4 hover:border-[#a2c9eb] hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#a2c9eb]/20"
            >
              <div class="text-center">
                <div class="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                  <img
                    src={lang.image}
                    alt={lang.name}
                    class="w-full h-full object-contain rounded"
                    loading="lazy"
                  />
                </div>
                <div class="font-medium text-gray-200 group-hover:text-[#a2c9eb] transition-colors text-xs md:text-sm">
                  {lang.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Runtimes Section */}
    <section id="runtimes" class="mb-12 md:mb-16">
      <div class="mb-8">
        <h2 class="text-xl md:text-2xl font-bold mb-4 text-[#a2c9eb] flex items-center">
          <span class="mr-3">&gt;</span> Runtime Environments
        </h2>
        <p class="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
          {data.resume.runtimesSummary}
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {data.resume.runtimes.map((runtime: any) => (
            <a
              href={runtime.url}
              target="_blank"
              rel="noopener noreferrer"
              class="group bg-gray-800/50 border border-gray-700 rounded-lg p-3 md:p-4 hover:border-[#a2c9eb] hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#a2c9eb]/20"
            >
              <div class="text-center">
                <div class="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                  <img
                    src={runtime.image}
                    alt={runtime.name}
                    class="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div class="font-medium text-gray-200 group-hover:text-[#a2c9eb] transition-colors text-xs md:text-sm">
                  {runtime.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section id="skills" class="mb-12 md:mb-16">
      <h2 class="text-xl md:text-2xl font-bold mb-6 text-[#a2c9eb] flex items-center">
        <span class="mr-3">&gt;</span> Tech Stack
      </h2>
      <div class="bg-gray-800/30 border border-gray-700 rounded-lg p-4 md:p-6">
        <div class="flex flex-wrap gap-2">
          {data.resume.skills.map((skill: string) => (
            <span class="group px-2 md:px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs md:text-sm border border-gray-600 hover:border-[#a2c9eb] hover:text-[#a2c9eb] hover:bg-gray-700 transition-all duration-200 cursor-default hover:scale-105">
              <span class="group-hover:animate-pulse">{skill}</span>
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" class="mb-12 md:mb-16">
      <h2 class="text-xl md:text-2xl font-bold mb-6 text-[#a2c9eb] flex items-center">
        <span class="mr-3">&gt;</span> Featured Projects
      </h2>
      <div class="grid gap-6 md:grid-cols-2">
        {data.resume.projects.map((project: any) => (
          <div class="group bg-gray-800/30 border border-gray-700 rounded-lg p-4 md:p-6 hover:border-[#a2c9eb] hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#a2c9eb]/10">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-2 sm:space-y-0">
              <h3 class="text-lg md:text-xl font-semibold text-white group-hover:text-[#a2c9eb] transition-colors">
                {project.title}
              </h3>
              {project.active && (
                <span class="self-start px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 whitespace-nowrap">
                  active
                </span>
              )}
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
              {project.description}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string) => (
                <span class="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded border border-gray-600 group-hover:border-[#a2c9eb]/50 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
            <div class="flex flex-wrap gap-4">
              {project.links.map((link: any) => (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#a2c9eb] hover:text-white transition-colors duration-200 text-sm font-medium flex items-center hover:underline"
                >
                  {link.type === "Website" && "🌐 "}
                  {link.type === "Source" && "📁 "}
                  {link.type}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Future Plans */}
    <section id="future" class="mb-12 md:mb-16">
      <h2 class="text-xl md:text-2xl font-bold mb-6 text-[#a2c9eb] flex items-center">
        <span class="mr-3">&gt;</span> What's Next
      </h2>
      <div class="bg-gray-800/30 border border-gray-700 rounded-lg p-4 md:p-6">
        <p class="text-gray-300 leading-relaxed text-sm md:text-base">
          {data.resume.futurePlans}
        </p>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" class="mb-12 md:mb-16">
      <h2 class="text-xl md:text-2xl font-bold mb-6 text-[#a2c9eb] flex items-center">
        <span class="mr-3">&gt;</span> Get In Touch
      </h2>
      <div class="bg-gray-800/30 border border-gray-700 rounded-lg p-4 md:p-6">
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <h3 class="text-lg font-semibold mb-4 text-white">Contact</h3>
            <a
              href={`mailto:${data.resume.contact.email}`}
              class="flex items-center text-gray-300 hover:text-[#a2c9eb] transition-colors duration-200 mb-3 group"
            >
              <span class="mr-3 group-hover:scale-110 transition-transform">
                📧
              </span>
              <span class="group-hover:underline break-all">
                {data.resume.contact.email}
              </span>
            </a>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4 text-white">Social Links</h3>
            <div class="space-y-3">
              {Object.entries(data.resume.contact.social).map(
                ([key, social]: [string, any]) =>
                  social.navbar && (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center text-gray-300 hover:text-[#a2c9eb] transition-colors duration-200 group"
                    >
                      <span class="mr-3 group-hover:scale-110 transition-transform">
                        {key === "GitHub" && "🐙"}
                        {key === "Telegram" && "💬"}
                        {key === "LinkedIn" && "💼"}
                      </span>
                      <span class="group-hover:underline">{social.name}</span>
                    </a>
                  )
              )}
            </div>
          </div>
        </div>
        {data.resume.resume?.url && (
          <div class="mt-6 pt-6 border-t border-gray-700">
            <a
              href={data.resume.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 bg-[#a2c9eb] text-gray-900 rounded-lg font-medium hover:bg-white transition-colors duration-200 hover:scale-105 transform text-sm md:text-base"
            >
              📄 Download Resume
            </a>
          </div>
        )}
      </div>
    </section>

    <style>
      {`
        .glitch-text {
          position: relative;
          animation: glitch 2s infinite;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .glitch-text {
            animation: none;
          }
        }
      `}
    </style>
  </>
);
