const ascii = `
 ██╗   ██╗ █████╗ ███████╗ █████╗ ███╗   ██╗
 ╚██╗ ██╔╝██╔══██╗╚══███╔╝██╔══██╗████╗  ██║
  ╚████╔╝ ███████║  ███╔╝ ███████║██╔██╗ ██║
   ╚██╔╝  ██╔══██║ ███╔╝  ██╔══██║██║╚██╗██║
    ██║   ██║  ██║███████╗██║  ██║██║ ╚████║
    ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
`;

export const resume = {
  name: "Yazan",
  ascii,

  location: "Jordan, Amman",
  locationLink: "https://www.google.com/maps/place/amman",

  about:
    "I’m a <strong>recent CS graduate</strong> and <strong>full-stack JavaScript/TypeScript developer</strong>, daily <a href='https://github.com/vwh/nixos-config' target='_blank' class='underline break-all' style='color: #a2c9eb'>NixOS</a> user and <strong>GNU/Linux enthusiast</strong> exploring system programming to deepen my expertise.",

  languagesSummary:
    "Using <strong>TypeScript</strong> for type safety, <strong>JavaScript</strong> for flexibility, <strong>Python</strong> for scripting and rapid prototyping, and <strong>C</strong> for low-level system programming.",

  runtimesSummary:
    "Experienced with <strong>Node.js</strong>, <strong>Bun</strong>, <strong>Deno</strong>, <strong>Cloudflare Workers</strong>, and <strong>browsers</strong>, building high-performance applications across server, edge, and front-end environments.",

  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "C",
    "WebAssembly",
    "Vite",
    "React",
    "Next.js",
    "Zustand",
    "React Query",
    "Tailwind",
    "ShadcnUI",
    "SQLite",
    "PostgreSQL",
    "Redis",
    "Drizzle",
    "Prisma",
    "Node",
    "Bun",
    "Deno",
    "tRPC",
    "Express",
    "Hono",
    "Cloudflare",
    "Docker",
    "Linux",
    "Nix",
    "Git",
  ],

  contact: {
    email: "vwh.e@pm.me",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vwh",
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/Vimboy",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vwh-yazan/",
      },
    },
  },

  resumeLink: "./documents/resume.pdf",

  futurePlans:
    "Diving into <strong>system programming</strong> with <strong>C</strong>, <strong>Zig</strong>, and <strong>Rust</strong> to master systems and performance optimization, while exploring diverse databases and back-end technologies for efficient, scalable web apps.",

  projects: [
    {
      title: "SQLite Viewer",
      active: true,
      description: "WebAssembly browser-based SQLite viewer.",
      links: [
        {
          type: "Website",
          href: "https://vwh.github.io/sqlite-online",
        },
        {
          type: "Source",
          href: "https://github.com/vwh/sqlite-viewer",
        },
      ],
    },
    {
      title: "MiftahDB",
      active: true,
      description: "Fast and lightweight key-value database library.",
      links: [
        {
          type: "Source",
          href: "https://github.com/miftahDB/miftahdb",
        },
      ],
    },
    {
      title: "VWH Email",
      active: true,
      description: "Open source temp mail service, anonymous and free.",
      links: [
        {
          type: "Website",
          href: "https://email.vwh.sh",
        },
        {
          type: "Source",
          href: "https://github.com/vwh/vwh-email",
        },
      ],
    },
    {
      title: "Crust",
      active: true,
      description: "Simple toy scripting language.",
      links: [
        {
          type: "Source",
          href: "https://github.com/vwh/crust",
        },
      ],
    },
  ],
} as const;

declare global {
  namespace Lume {
    interface Data {
      resume: typeof resume;
    }
  }
}
