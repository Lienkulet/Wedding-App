"use client";

import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/lib/language-context";

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

      <main id="main-content">
        <Container>{children}</Container>
      </main>

      <Container>
        <Footer content={content.footer} />
      </Container>
    </>
  );
}
