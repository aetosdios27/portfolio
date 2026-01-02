import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

// trademark colors for each skill
const SKILL_COLORS: Record<string, string> = {
  TypeScript: "from-blue-500 to-blue-700",
  Rust: "from-orange-500 to-red-600",
  Python: "from-yellow-400 to-blue-600",
  "C++": "from-blue-600 to-indigo-800",
  SQL: "from-orange-500 to-red-700",
  "Next.js": "from-black to-gray-800",
  React: "from-cyan-400 to-blue-600",
  "Tailwind CSS": "from-cyan-400 to-blue-600",
  "Framer Motion": "from-pink-500 to-purple-700",
  "Node.js": "from-green-500 to-green-700",
  Prisma: "from-slate-600 to-slate-900",
  PostgreSQL: "from-blue-500 to-blue-800",
  SQLite: "from-sky-400 to-blue-600",
  Supabase: "from-emerald-500 to-green-700",
  Tauri: "from-yellow-500 to-orange-600",
};

// Map project titles to specific images
const PROJECT_IMAGES: Record<string, string> = {
  WebNotes: "/webnotes.png",
  Uniway: "/uniway.png",
};

// Map education institutions to specific logos
const EDUCATION_LOGOS: Record<string, string> = {
  "Manipal University Jaipur": "/muj.png",
};

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10 relative isolate">
      {/* Hero */}
      <section id="hero" className="relative">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5 relative z-0">
              <BlurFade delay={BLUR_FADE_DELAY}>
                {/* Container for name + arrow */}
                <div className="relative inline-block w-fit">
                  {/* Arrow */}
                  <img
                    src="/48.png"
                    alt="arrow pointing to name"
                    className="absolute -left-28 -top-14 w-24 h-24 opacity-70 rotate-[30deg] pointer-events-none dark:invert grayscale"
                  />

                  <HoverCard openDelay={0}>
                    <HoverCardTrigger asChild>
                      <h1 className="relative cursor-pointer text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-foreground to-foreground bg-[length:0%_3px] bg-no-repeat bg-bottom hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                        {DATA.name}
                      </h1>
                    </HoverCardTrigger>

                    <HoverCardContent
                      className="w-80 p-4 shadow-2xl border bg-white/80 dark:bg-black/80 backdrop-blur-xl data-[state=open]:duration-[2000ms] data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95"
                      side="bottom"
                      align="start"
                      sideOffset={12}
                      style={{ zIndex: 9999 }}
                    >
                      <p className="text-sm text-muted-foreground">
                        {DATA.summary}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </BlurFade>

              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Work */}
      {DATA.work.length > 0 && (
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-bold">Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 4 + id * 0.05}
              >
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} — ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => {
            // Override logic: Check map first, then fallback to DATA, then generic fallback
            const logoUrl =
              EDUCATION_LOGOS[education.school] || education.logoUrl;

            return (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  href={education.href}
                  logoUrl={logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} — ${education.end}`}
                />
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => {
              const gradientColor =
                SKILL_COLORS[skill] || "from-gray-500 to-gray-700";

              return (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.03}>
                  <Badge className="group relative cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105">
                    <span
                      className={`absolute inset-0 bg-gradient-to-r ${gradientColor} translate-x-[-100%] opacity-90 transition-transform duration-500 ease-out group-hover:translate-x-0`}
                    ></span>
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      {skill}
                    </span>
                  </Badge>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Things I&apos;ve built
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From native desktop applications to full-stack web platforms.
                  Performance-focused, shipped to production.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.projects.map((project, id) => {
              const projectImage =
                PROJECT_IMAGES[project.title] || project.image;

              return (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={projectImage}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Let&apos;s talk
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind or want to collaborate?{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  DM me on X
                </Link>{" "}
                or{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="text-blue-500 hover:underline"
                >
                  send an email
                </Link>
                .
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
