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
  icon: string;
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
  icon: "/images/projects/snoopa-icon.png",
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
    icon: "/images/projects/igle-icon.png",
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
    icon: "/images/projects/habibee-icon.png",
    stack: ["React Native", "Convex"],
    liveUrl: "https://habibee.lawjun.ng/",
    githubUrl: "https://github.com/lawrencejr5/habibee",
  },
  {
    slug: "9jablogue",
    company: "Lawjun Labs",
    title: "9jablogue",
    description:
      "A vibrant blog platform dedicated to sharing and celebrating Nigerian content, culture, and stories with the world.",
    image: "/images/projects/9jablogue.png",
    icon: "/images/projects/9jablgue-icon.png",
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://9jablogue.lawjun.ng/",
    githubUrl: "https://github.com/lawrencejr5/9jablogue",
  },
  {
    slug: "yfincs",
    company: "Yield Financial Services",
    title: "Yfincs",
    description:
      "A professional DeFi staking platform designed for Yield Financial Services to provide secure and efficient financial solutions.",
    image: "/images/projects/yfincs.png",
    icon: "/images/projects/yfincs-icon.png",
    stack: ["PHP", "jQuery", "MySql"],
    liveUrl: "https://yfincs.com/",
    githubUrl: "https://github.com/lawrencejr5/youhodler",
  },
  {
    slug: "yanhub",
    company: "Yan Kontent Factory",
    title: "Yanhub",
    description:
      "A custom management dashboard for Yan Kontent Factory to streamline video editing workflows, task assignments, and project delivery tracking.",
    image: "/images/projects/yanhub.png",
    icon: "/images/projects/yanhub-icon.png",
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://yanhub.lawjun.ng/",
    githubUrl: "https://github.com/lawrencejr5/yanhub",
  },
  {
    slug: "aniobi",
    company: "Aniobi Socials",
    title: "Aniobi",
    description:
      "An anonymous messaging platform where users can share public confessions or send private messages securely and anonymously.",
    image: "/images/projects/aniobi.png",
    icon: "/images/projects/aniobi-icon.png",
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://aniobi.lawjun.ng/",
    githubUrl: "https://github.com/lawrencejr5/aniobi",
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
              />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.projectTitleRow}>
                <div className={styles.projectIcon}>
                  <Image
                    src={featuredProject.icon}
                    alt=""
                    width={32}
                    height={32}
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <h2 className={styles.projectTitle}>
                  {featuredProject.title} - {featuredProject.company}
                </h2>
              </div>
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
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.projectTitleRow}>
                    <div className={styles.projectIcon}>
                      <Image
                        src={project.icon}
                        alt=""
                        width={24}
                        height={24}
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                    <h3 className={styles.projectTitle}>
                      {project.title} - {project.company}
                    </h3>
                  </div>
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
