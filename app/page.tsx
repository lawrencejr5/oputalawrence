import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const socials = [
  {
    name: "GitHub",
    icon: "/images/icons/github.png",
    href: "https://github.com/oputalawrence",
  },
  {
    name: "LinkedIn",
    icon: "/images/icons/linkedin.png",
    href: "https://linkedin.com/in/oputalawrence",
  },
  {
    name: "Twitter",
    icon: "/images/icons/twitter.png",
    href: "https://twitter.com/oputalawrence",
  },
  {
    name: "Threads",
    icon: "/images/icons/threads.png",
    href: "https://threads.net/@oputalawrence",
  },
  {
    name: "WhatsApp",
    icon: "/images/icons/whatsapp.png",
    href: "https://wa.me/oputalawrence",
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
              href="https://lawjunlabs.com"
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
                <a
                  href="mailto:hello@oputalawrence.com?subject=Your%20bot%20says%20hi"
                  className={styles.botLink}
                >
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
