"use client";

import { useEffect, useRef } from "react";

import { Footer } from "@/components/sections/footer/footer";
import { Navbar } from "@/components/sections/navbar/navbar";
import { Container } from "@/components/ui/container/container";
import { useLanguage } from "@/lib/language-context";
import styles from "./app-shell.module.css";

export function AppShell({ children }) {
  const { content, language, languages, setLanguage } = useLanguage();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/Gawk Gawk Gawk Gawk Sound Effect (Sound FX) - Sound FX.mp3");
    audio.preload = "auto";
    audioRef.current = audio;

    const playAudio = () => {
      if (!audioRef.current) return;
      audioRef.current.currentTime = 0;
      void audioRef.current.play().catch(() => {});
    };

    playAudio();
    const intervalId = window.setInterval(playAudio, 20000);

    const onFirstInteraction = () => {
      playAudio();
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
    };

    window.addEventListener("pointerdown", onFirstInteraction, { once: true });
    window.addEventListener("keydown", onFirstInteraction, { once: true });
    window.addEventListener("touchstart", onFirstInteraction, { once: true });

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

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
