"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/works", label: "My Works" },
  { href: "/about", label: "About Me" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} id="main-nav">
      <Link href="/" className={styles.wordmark}>
        Oputa_Lawrence
      </Link>
      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
