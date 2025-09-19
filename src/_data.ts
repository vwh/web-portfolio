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
    "Bash",
    "C",
    "WebAssembly",
    "Vite",
    "React",
    "Next.js",
    "Tailwind",
    "ShadcnUI",
    "SQLite",
    "PostgreSQL",
    "Redis",
    "Drizzle",
    "Prisma",
    "Node.js",
    "Bun",
    "Deno",
    "Cloudflare",
    "Docker",
    "Grafana",
    "Kamal",
    "Linux",
    "Nix",
    "Git",
    "GitHub",
  ],

  contact: {
    email: "vwhe@proton.me",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vwh",
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/Vimboy",
      },
    },
  },

  resumeLink: "./documents/resume.pdf",

  futurePlans:
    "Diving into <strong>system programming</strong> with <strong>C</strong>, <strong>Zig</strong>, and <strong>Rust</strong> to master systems and performance optimization, while exploring diverse databases and back-end technologies for efficient, scalable web apps.",

  projects: [
    {
      title: "SQLite Viewer",
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
      description: "Fast and lightweight key-value database library.",
      links: [
        {
          type: "Source",
          href: "https://github.com/miftahDB/miftahdb",
        },
      ],
    },
    {
      title: "Temporary mail",
      description: "Cloudflare Worker that acts as a temporary email inbox.",
      links: [
        {
          type: "Source",
          href: "https://github.com/vwh/temp-mail",
        },
      ],
    },
    {
      title: "Crust",
      description: "Simple toy scripting language.",
      links: [
        {
          type: "Source",
          href: "https://github.com/vwh/crust",
        },
      ],
    },
  ],

  experience: [
    {
      company: "Quran.com Foundation",
      position: "DevOps Consultant",
      type: "Part-time",
      period: "Aug 2025 - Present",
      location: "Amman, Jordan · Remote",
      description: [
        "Implemented enhanced Grafana dashboards using TypeScript SDK.",
        "Implemented a comprehensive logging solution with Loki and Promtail for systemd monitoring.",
        "Optimized alerting systems and resolved critical infrastructure issues across production servers.",
        "Enhanced operational visibility through improved data visualization and monitoring capabilities.",
      ],
      skills: [
        "TypeScript",
        "Python",
        "Bash",
        "Grafana",
        "Kamal",
        "Docker",
        "Linux",
      ],
    },
    {
      company: "Freelance",
      position: "Software Engineer",
      type: "Self-employed",
      period: "Mar 2022 - Present",
      location: "Amman, Jordan · Remote",
      description: [
        "Created full-stack web applications for freelance clients and personal projects.",
        "Developed RESTful APIs and server-side applications with Node.js, Deno, and Bun.",
        "Managed databases including SQLite, PostgreSQL, and Redis for efficient data handling and scalability.",
      ],
      skills: [
        "TypeScript",
        "JavaScript",
        "Python",
        "WebAssembly",
        "Node.js",
        "Bun",
        "Deno",
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Drizzle",
        "Prisma ORM",
        "Cloudflare",
        "SQLite",
        "PostgreSQL",
        "NoSQL",
        "Redis",
        "Docker",
        "Bash",
        "Nginx",
        "GitHub",
        "Git",
      ],
    },
  ],

  education: [
    {
      institution: "Jadara University",
      degree: "Bachelor's degree, Computer Science",
      period: "Oct 2021 - Jun 2025",
      description:
        "Studied core computer science topics, including data structures, object-oriented programming, software development, algorithms, and operating systems, with a focus on problem-solving and building scalable, efficient solutions.",
      skills: [
        "Computer Science",
        "Programming",
        "Object-Oriented Programming (OOP)",
        "SQL",
        "Software Testing",
        "Data Structures",
        "Cloud Computing",
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
