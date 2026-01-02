import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "aetos",
  initials: "AD",
  url: "https://github.com/aetosdios27",
  location: "Jaipur, India",
  locationLink: "https://www.google.com/maps/place/Jaipur,+Rajasthan",
  description:
    "Building high-performance native applications. Systems thinker. Full-stack engineer.",
  summary:
    "Computer Science undergraduate obsessed with shipping real software. I specialize in full-stack development with Next.js and TypeScript, and go deeper with Rust and Tauri to build cross-platform applications that actually perform. Local-first architecture, sub-millisecond queries, native binaries—this is what I care about.",
  avatarUrl: "/me.png",
  skills: [
    "TypeScript",
    "Rust",
    "Python",
    "C++",
    "SQL",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "SQLite",
    "Supabase",
    "Tauri",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pushpendrasinghcs@outlook.com",
    tel: "+91 8829023213",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aetosdios27",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/aetosdios_",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:pushpendrasinghcs@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // FIX: Explicitly type this empty array so TypeScript knows what 'work' looks like
  work: [] as Array<{
    company: string;
    href: string;
    badges: readonly string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }>,

  education: [
    {
      school: "Manipal University Jaipur",
      href: "https://jaipur.manipal.edu/",
      degree: "B.Tech Computer Science & Engineering",
      logoUrl: "/manipal.png",
      start: "2024",
      end: "2028",
    },
  ],

  projects: [
    {
      title: "WebNotes",
      href: "https://github.com/aetosdios27/WebNotes",
      dates: "2024 — Present",
      active: true,
      description:
        "Cross-platform desktop app built with Tauri and Rust. Local-first architecture with SQLite + FTS5 delivering sub-millisecond full-text search. Custom Tiptap rich-text editor with LaTeX support and Google OAuth integration.",
      technologies: [
        "Tauri",
        "Rust",
        "Next.js",
        "TypeScript",
        "SQLite",
        "Prisma",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aetosdios27/WebNotes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/webnotes-demo.png",
      video: "",
    },
    {
      title: "Uniway",
      href: "https://github.com/aetosdios27",
      dates: "2024",
      active: false,
      description:
        "Campus navigation tool with interactive building visualization and real-time pathfinding. Built and shipped in 48 hours at MUJ Hackathon.",
      technologies: ["Next.js", "TypeScript", "Leaflet", "Tailwind CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aetosdios27",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/uniway-demo.png",
      video: "",
    },
  ],
} as const;
