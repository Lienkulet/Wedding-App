"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

const NAV_SECTION_IDS = ["hero", "about", "services", "blog", "contact"];

export function Navbar({ language, languages, logo, navItems, actionLabel, onLanguageChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

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
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="navbar-offset" aria-hidden="true" />
      <header className={`navbar-fixed${isScrolled ? " is-scrolled" : ""}`}>
        <div className="layout-container navbar-shell" data-reveal>
          <a aria-label="Go to homepage" href="#hero">
            <Image alt="Enchanted Weddings" className="navbar-logo" height={82} src={logo} width={176} />
          </a>

          <nav aria-label="Main navigation" className="navbar-links">
            {navItems.map((item, index) => (
              <a href={`#${NAV_SECTION_IDS[index] ?? "hero"}`} key={item}>
                {item}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <div className="lang-dropdown" ref={menuRef}>
              <button
                aria-expanded={isMenuOpen}
                aria-haspopup="menu"
                className="lang-trigger"
                onClick={() => setIsMenuOpen((value) => !value)}
                type="button"
              >
                <span>{activeLanguage}</span>
                <span aria-hidden="true" className={isMenuOpen ? "lang-caret is-open" : "lang-caret"}>
                  ▾
                </span>
              </button>

              <ul className={isMenuOpen ? "lang-menu is-open" : "lang-menu"} role="menu">
                {languages.map((item) => (
                  <li key={item.code} role="none">
                    <button
                      className={item.code === language ? "lang-option is-active" : "lang-option"}
                      aria-checked={item.code === language}
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

            <Button>{actionLabel}</Button>
          </div>
        </div>
      </header>
    </>
  );
}
