"use client";

import { Footer } from "@/components/sections/footer/footer";
import { Navbar } from "@/components/sections/navbar/navbar";
import { Container } from "@/components/ui/container/container";
import { useLanguage } from "@/lib/language-context";
import styles from "./app-shell.module.css";

export function AppShell({ children }) {
  const { content, language, languages, setLanguage } = useLanguage();

  return (
    <>
      <Navbar
        actionLabel={content.navButton}
        language={language}
        languages={languages}
        logo={content.logo}
        navItems={content.nav}
        onLanguageChange={setLanguage}
      />

      <main className={styles.main} id="main-content">
        {children}
      </main>


      <Footer content={content.footer} />
    </>
  );
}
