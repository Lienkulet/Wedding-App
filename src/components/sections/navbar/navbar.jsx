"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button/button";
import { Container } from "@/components/ui/container/container";
import { cn } from "@/lib/cn";
import styles from "./navbar.module.css";

const NAV_SECTION_IDS = ["hero", "about", "services", "blog", "contact"];

export function Navbar({ language, languages, logo, navItems, actionLabel, onLanguageChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const activeLanguage = languages.find((item) => item.code === language)?.label ?? "EN";

  return (
    <>
      {/* <Link className={styles.skipLink} href="#main-content">
        Skip to content
      </Link> */}
      <div aria-hidden="true" className={styles.offset} />
      <header className={cn(styles.fixed, isScrolled && styles.scrolled)}>
        <Container className={styles.shell}>
          <Link aria-label="Go to homepage" href="#hero" className={styles.logoBtn}>
            <Image alt="Enchanted Weddings" className={styles.logo} height={82} src={logo} width={176} />
          </Link>

          <nav aria-label="Main navigation" className={styles.links}>
            {navItems.map((item, index) => (
              <Link href={`#${NAV_SECTION_IDS[index] ?? "hero"}`} key={item}>
                {item}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <div className={styles.dropdown} ref={menuRef}>
              <button
                aria-expanded={isMenuOpen}
                aria-haspopup="menu"
                className={cn(styles.trigger, isScrolled ? styles.triggerSecondary : styles.triggerPrimary)}
                onClick={() => setIsMenuOpen((value) => !value)}
                type="button"
              >
                <span>{activeLanguage}</span>
                <span aria-hidden="true" className={cn(styles.caret, isMenuOpen && styles.caretOpen)}>
                  ▾
                </span>
              </button>

              <ul className={cn(styles.menu, isMenuOpen && styles.menuOpen)} role="menu">
                {languages.map((item) => (
                  <li key={item.code} role="none">
                    <button
                      aria-checked={item.code === language}
                      className={cn(styles.option, item.code === language && styles.optionActive)}
                      onClick={() => {
                        onLanguageChange(item.code);
                        setIsMenuOpen(false);
                      }}
                      role="menuitemradio"
                      type="button"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <Button className={isScrolled ? "primary" : "secondary"}>{actionLabel}</Button>
          </div>
        </Container>
      </header>
    </>
  );
}
