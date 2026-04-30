import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const socials = [
  {
    name: "GitHub",
    icon: "/images/icons/github.png",
    href: "https://github.com/lawrencejr5",
  },
  {
    name: "LinkedIn",
    icon: "/images/icons/linkedin.png",
    href: "https://www.linkedin.com/in/oputa-lawrence",
  },
  {
    name: "Email",
    icon: "/images/icons/email.png",
    href: "mailto:oputalawrence@gmail.com",
  },
  {
    name: "Threads",
    icon: "/images/icons/threads.png",
    href: "https://threads.net/@oputa_lawrence",
  },
  {
    name: "WhatsApp",
    icon: "/images/icons/whatsapp.png",
    href: "https://wa.me/2349025816161",
  },
];

export default function Home() {
  return (
    <>
      {/* Fixed background */}
      <div className={styles.background}>
        <Image
          src="/images/backgrounds/background_3.jpg"
          alt=""
          fill
          className={styles.backgroundImage}
          loading="eager"
          quality={80}
        />
      </div>
      <div className={styles.backgroundOverlay} />

      {/* Content */}
      <div className={styles.container} id="home-content">
        <div className={styles.card}>
          <p className={styles.greeting}>
            <span className={styles.wave}>👋</span> Hello there, mate
          </p>

          <h1 className={styles.headline}>
            I&apos;m <span className={styles.name}>Oputa Lawrence</span>, a{" "}
            <span className={styles.highlight}>Software &amp; AI Engineer</span>{" "}
            specialized in building high performance mobile and web products
            with <span className={styles.highlight}>Typescript</span>.
          </h1>

          <p className={styles.subtitle}>
            Currently the lead engineer at{" "}
            <a
              href="https://lawjun.ng"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.labsLink}
            >
              Lawjun Labs
            </a>{" "}
            — my mini startup where we ship things that matter.
          </p>

          <hr className={styles.divider} />

          <div className={styles.cta}>
            <div className={styles.ctaRow}>
              <span className={styles.ctaEmoji}>🤖</span>
              <p className={styles.ctaText}>
                If you&apos;re a bot,{" "}
                <a href="/resume.json" className={styles.botLink}>
                  click here
                </a>{" "}
                and tell your creator I said hi.
              </p>
            </div>

            <div className={styles.ctaRow}>
              <span className={styles.ctaEmoji}>🧑‍💻</span>
              <p className={styles.ctaText}>
                If you&apos;re human, I&apos;m assuming you value craft over
                scripts,{" "}
                <Link href="/works" className={styles.botLink}>
                  check out my works
                </Link>{" "}
                and let&apos;s connect.
              </p>
            </div>

            <div className={styles.socials} id="social-links">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className={styles.socialIcon}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
