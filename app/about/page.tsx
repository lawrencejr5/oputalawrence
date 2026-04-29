import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Me — Oputa Lawrence",
  description:
    "Learn more about Oputa Lawrence — a versatile Software and AI Engineer from Delta State, Nigeria.",
};

const techStack = [
  { name: "TypeScript", icon: "/images/stack/typescript.svg" },
  { name: "React Native", icon: "/images/stack/react_dark.svg" },
  { name: "Next.js", icon: "/images/stack/nextjs_icon_dark.svg" },
  { name: "Node.js", icon: "/images/stack/nodejs.svg" },
  { name: "MongoDB", icon: "/images/stack/mongodb-icon-dark.svg" },
  { name: "Convex", icon: "/images/stack/convex.svg" },
  { name: "Git", icon: "/images/stack/git.svg" },
  { name: "Canva", icon: "/images/stack/canva.svg" },
  { name: "Vercel", icon: "/images/stack/vercel_dark.svg" },
  { name: "Antigravity", icon: "/images/stack/antigravity.svg" },
  { name: "Render", icon: "/images/stack/render_white.svg" },
  { name: "Firebase", icon: "/images/stack/firebase.svg" },
];

const experiences = [
  {
    company: "Lawjun Labs (My Startup)",
    role: "Lead Engineer",
    duration: "May 2025 – Present",
    url: "https://lawjun.ng",
    description:
      "As the technical lead at Lawjun Labs, I am currently focused on architecting and shipping AI-driven products like Snoopa and Habibee. My role involves overseeing the entire product lifecycle—from conceptualizing intelligent features to deploying scalable mobile and web solutions using React Native, TypeScript, and Convex.",
  },
  {
    company: "Yan Kontent Factory (NYSC)",
    role: "Video Editor & Developer",
    duration: "May 2024 – April 2025",
    url: "https://yankontentfactory.com/",
    description:
      "During my NYSC service, I worked as a creative intern where I mastered Adobe Premiere Pro for cinematography and editing. Recognizing a gap in the company’s workflow, I took the initiative to build Yanhub, a custom web application designed to track and manage the status of video projects from shooting to final delivery.",
  },
  {
    company: "Nexainnova (Remote)",
    role: "Fullstack Developer",
    duration: "August 2023 – May 2024",
    url: "http://nexainnova.com/",
    description:
      "Immediately after university, I joined this remote startup to help build and ship production-ready applications. As a Fullstack Developer, I spent my time in the trenches of high-velocity development, leveraging my skills in PHP and modern web frameworks to deliver robust backend solutions for various client projects.",
  },
  {
    company: "Coriftech Solutions (Internship)",
    role: "Software Developer Intern",
    duration: "March 2021 – September 2021",
    url: "https://coriftech.com/",
    description:
      "I began my professional career with a six-month intensive internship during my third year of university. This period was pivotal for my growth, as I mastered the fundamentals of PHP development and gained my first leadership experience by tutoring junior secondary students on the basics of programming and logic.",
  },
];

export default function About() {
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

      <div className={styles.page} id="about-page">
        {/* Left Side: Image */}
        <section className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/me/profile_1.jpg"
              alt="Oputa Lawrence"
              fill
              className={styles.profileImage}
              priority
              quality={90}
            />
          </div>
        </section>

        {/* Right Side: Content */}
        <section className={styles.contentSection}>
          <h1 className={styles.title}>
            Hello, I&apos;m <span className={styles.highlight}>Lawrence</span>
          </h1>

          <div className={styles.bio}>
            <p>
              I’m a <strong>Software and AI Engineer</strong> based in{" "}
              <strong>Asaba, Delta State</strong> (originally from Aboh), with a
              drive for building products that matter. I graduated from{" "}
              <strong>Godfrey Okoye University</strong> with a degree in{" "}
              <strong>Computer Science</strong> and a <strong>4.15 CGPA</strong>
              , a journey that solidified my technical foundation and fueled my
              transition into the world of entrepreneurship. Today, I’m the
              founder of <strong>Lawjun Labs</strong>, where I focus on shipping
              intelligent, high-impact solutions.
            </p>
            <p>
              I thrive on tackling complex challenges and turning them into{" "}
              <strong>elegant, scalable code</strong>. My portfolio reflects a{" "}
              <strong>&quot;build-and-ship&quot; philosophy</strong>: from{" "}
              <strong>GoBook</strong>—a social media platform I developed for my
              university as my final year project—to <strong>Habibee</strong>, a
              productivity-focused tool that let&apos;s users keep streaks and
              build new habits to <strong>Snoopa</strong>, an AI agent built to
              revolutionize how we track and verify information.
            </p>
            <p>
              Beyond the code editor, I’m a student of the world. I have a deep
              fascination with <strong>psychology and history</strong>,
              constantly exploring how the human mind and our past shape the
              present. When I’m not building, you’ll find me cheering for{" "}
              <strong>Real Madrid</strong> (<strong>Hala Madrid!</strong>) and
              huge fan of <strong>Gareth Bale</strong>. I consider myself a{" "}
              <strong>versatile explorer of culture</strong>, with a diverse
              palate for music, films, and food that keeps my perspective fresh.
            </p>
          </div>

          <a
            href="/oputa-lawrence-cv-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            Download Resume <span className={styles.arrow}>→</span>
          </a>
        </section>

        <div className={styles.stackSection}>
          <h2 className={styles.sectionTitle}>My Tech Stack</h2>
          <div className={styles.stackGrid}>
            {techStack.map((tech) => (
              <div key={tech.name} className={styles.stackItem}>
                {tech.icon ? (
                  <div className={styles.techIcon}>
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className={styles.iconImage}
                    />
                  </div>
                ) : (
                  <div className={styles.techPlaceholder}>
                    {tech.name.charAt(0)}
                  </div>
                )}
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experiences Section */}
        <div className={styles.experienceSection}>
          <h2 className={styles.sectionTitle}>My Experiences</h2>
          <div className={styles.experienceTimeline}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.experienceDate}>{exp.duration}</div>
                <div className={styles.experienceContent}>
                  <div className={styles.experienceHeader}>
                    <h3 className={styles.experienceCompany}>{exp.company}</h3>
                    <span className={styles.experienceRole}>{exp.role}</span>
                  </div>
                  <p className={styles.experienceDesc}>{exp.description}</p>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.visitLink}
                  >
                    Visit Company <span className={styles.arrow}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
