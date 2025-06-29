export const resume = {
  name: "Yazan",

  location: "Jordan, Amman",
  locationLink: "https://www.google.com/maps/place/amman",

  about:
    "I’m a fresh computer‐science graduate and full-stack developer specializing in JavaScript/TypeScript. A passionate GNU/Linux enthusiast running NixOS daily, I love pushing the web’s boundaries and exploring system programming to deepen my technical expertise.",

  languagesSummary:
    "Primarily using TypeScript for its powerful type safety and tooling, making development smoother and more reliable. I also work with JavaScript for its flexibility, Python for scripting and quick prototyping, and C for system programming, where I am deepening my skills in low-level development.",
  languages: [
    {
      name: "TypeScript",
      image: "/languages/TypeScript.webp",
      url: "https://www.typescriptlang.org/",
      size: 80,
    },
    {
      name: "JavaScript",
      image: "/languages/JavaScript.webp",
      url: "https://www.javascript.com/",
    },
    {
      name: "Python",
      image: "/languages/Python.webp",
      url: "https://www.python.org/",
    },
    {
      name: "C",
      image: "/languages/Clang.webp",
      url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
  ],

  runtimesSummary:
    "Experienced with Node.js, Bun, Deno, Cloudflare Workers, and browsers. I work seamlessly across all these environments. That allows me to architect and implement high-performance applications that shine in any context, from server-side processing to edge computing and responsive front-ends.",
  runtimes: [
    {
      name: "Node.js",
      image: "/runtimes/Node.svg",
      url: "https://nodejs.org/",
      size: 72,
    },
    {
      name: "Cloudflare Workers",
      image: "/runtimes/CloudflareWorkers.svg",
      url: "https://developers.cloudflare.com/workers/",
      size: 80,
    },
    {
      name: "Deno",
      image: "/runtimes/Deno.svg",
      url: "https://deno.land/",
      size: 80,
    },
    {
      name: "Bun",
      image: "/runtimes/Bun.svg",
      url: "https://bun.sh/",
      size: 90,
    },
    {
      name: "Browsers",
      image: "/runtimes/Browsers.svg",
      url: "#",
      size: 96,
    },
  ],

  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
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
    "Git",
  ],

  contact: {
    email: "vwh.e@pm.me",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vwh",
        // icon: Icons.github,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/Vimboy",
        // icon: Icons.telegram,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vwh-yazan/",
        // icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vwh.e@pm.me",
        // icon: Icons.email,
        navbar: false,
      },
    },
  },

  resume: {
    url: "./resume.pdf",
  },

  futurePlans:
    "I’m currently diving deeper into system programming, focusing on languages like C and Zig to expand my understanding of systems and performance optimization. I’m also strengthening my web development skills, exploring different database types and various back-end technologies to build more efficient and scalable web applications.",

  projects: [
    {
      title: "SQLite Viewer",
      href: "https://sqlite3.online",
      active: true,
      description: "WebAssembly browser-based SQLite viewer.",
      technologies: [
        "Typescript",
        "WebAssembly",
        "Vite",
        "React",
        "Zustand",
        "Tailwind",
        "ShadcnUI",
        "SQLite",
        "SQL.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://sqlite3.online",
          // icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vwh/sqlite-viewer",
          // icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://github.com/user-attachments/assets/a0fc7725-5c6a-4d48-bab9-52b9b1466d55",
      video: "",
    },
    {
      title: "MiftahDB",
      href: "https://github.com/miftahDB/miftahdb",
      active: true,
      description: "Fast and lightweight key-value database library.",
      technologies: ["Typescript", "SQLite", "Node", "Bun"],
      links: [
        {
          type: "Source",
          href: "https://github.com/miftahDB/miftahdb",
          // icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
} as const;
