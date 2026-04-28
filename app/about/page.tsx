import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Me — Oputa Lawrence",
  description:
    "Learn more about Oputa Lawrence — a versatile Software and AI Engineer from Delta State, Nigeria.",
};

const techStack = [
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "MongoDB",
  "Convex",
  "TypeScript",
  "Canva",
  "Vercel",
  "Antigravity",
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
          quality={80}
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
              I&apos;m a Software and AI Engineer based in Asaba, originally
              from Aboh, Delta State. Currently, I&apos;m pouring my energy into
              building <strong>Lawjun Labs</strong>—my own mini-startup focused
              on shipping products that make a real impact.
            </p>
            <p>
              I thrive on tackling complex challenges and crafting elegant,
              scalable solutions. But my interests extend far beyond the code
              editor. I have a deep fascination with psychology and history,
              constantly exploring how the past and the human mind shape our
              world.
            </p>
            <p>
              I&apos;m an avid football fan (Hala Madrid!) and will always have
              a special appreciation for the Gareth Bale era. I consider myself
              a highly versatile individual with a diverse palate—I love
              exploring different tastes in music, films, food, and culture.
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/14elV06TENpPtigYSw0LkMxnU6puaEfMn/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            Download Resume <span className={styles.arrow}>→</span>
          </a>
        </section>

        <div className={styles.stackSection}>
          <h2 className={styles.stackTitle}>My Tech Stack</h2>
          <div className={styles.stackGrid}>
            {techStack.map((tech) => (
              <span key={tech} className={styles.stackItem}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
