import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "My Works — Oputa Lawrence",
  description:
    "Projects built by Oputa Lawrence — from AI-powered web monitoring to ride-hailing and habit tracking apps.",
};

interface Project {
  slug: string;
  company: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl: string;
  githubUrl?: string;
}

const featuredProject: Project = {
  slug: "snoopa",
  company: "Lawjun Labs",
  title: "Snoopa",
  description:
    "A conversational AI agent that tracks the topics you care about. From injury reports to market shifts, Snoopa monitors the front page of the web 24/7 and pings you the moment something changes. Don't search — just snoop.",
  image: "/images/projects/snoopa_1.png",
  stack: ["React Native", "Convex"],
  liveUrl: "https://snoopa.lawjun.ng/",
  githubUrl: "https://github.com/lawrencejr5/snoopa",
};

const otherProjects: Project[] = [
  {
    slug: "igle",
    company: "Omyann Technologies",
    title: "Igle",
    description:
      "The all-in-one app for reliable rides and swift package deliveries. Go anywhere, grab anything — with real-time tracking, instant fare estimates, and seamless driver matching.",
    image: "/images/projects/igle_2.png",
    stack: ["React Native", "Node.js", "MongoDB"],
    liveUrl: "https://igleride.com/",
    githubUrl: "https://github.com/lawrencejr5/igle",
  },
  {
    slug: "habibee",
    company: "Lawjun Labs",
    title: "Habibee",
    description:
      "Build atomic habits, track streaks with beautiful activity grids, get AI-powered coaching, and stay accountable with your inner circle — all in one app.",
    image: "/images/projects/habibee_1.png",
    stack: ["React Native", "Convex"],
    liveUrl: "https://habibee.lawjun.ng/",
    githubUrl: "https://github.com/lawrencejr5/habibee",
  },
];

export default function Works() {
  return (
    <>
      {/* Fixed background */}
      <div className={styles.background}>
        <Image
          src="/images/backgrounds/background_1.jpg"
          alt=""
          fill
          className={styles.backgroundImage}
          loading="eager"
          quality={80}
        />
      </div>
      <div className={styles.backgroundOverlay} />

      <div className={styles.page} id="works-page">
        {/* Featured */}
        <section className={styles.featured}>
          <p className={styles.sectionLabel}>Featured Project</p>
          <div className={styles.featuredCard}>
            <div className={styles.featuredImageWrap}>
              <Image
                src={featuredProject.image}
                alt={`${featuredProject.title} screenshots`}
                fill
                className={styles.featuredImage}
                quality={90}
              />
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.company}>{featuredProject.company}</span>
              <h2 className={styles.projectTitle}>{featuredProject.title}</h2>
              <p className={styles.projectDesc}>
                {featuredProject.description}
              </p>
              <div className={styles.stack}>
                {featuredProject.stack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <Image
                      src="/images/icons/github.png"
                      alt="GitHub"
                      width={18}
                      height={18}
                      className={styles.linkIcon}
                    />
                    Source Code
                  </a>
                )}
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <Image
                    src="/images/icons/link.png"
                    alt="Link"
                    width={18}
                    height={18}
                    className={styles.linkIcon}
                  />
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className={styles.otherProjects}>
          <p className={styles.sectionLabel}>Other Projects</p>
          <div className={styles.projectGrid}>
            {otherProjects.map((project) => (
              <div key={project.slug} className={styles.projectCard}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshots`}
                    fill
                    className={styles.cardImage}
                    quality={85}
                  />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.company}>{project.company}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.stack}>
                    {project.stack.map((tech) => (
                      <span key={tech} className={styles.stackTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <Image
                          src="/images/icons/github.png"
                          alt="GitHub"
                          width={16}
                          height={16}
                          className={styles.linkIcon}
                        />
                        Source Code
                      </a>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <Image
                        src="/images/icons/link.png"
                        alt="Link"
                        width={16}
                        height={16}
                        className={styles.linkIcon}
                      />
                      Visit Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
