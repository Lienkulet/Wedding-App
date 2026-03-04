import Image from "next/image";

import { Button } from "@/components/ui/button/button";
import { revealDelay } from "@/lib/reveal-style";
import styles from "./hero.module.css";

export function Hero({ content, id }) {
  return (
    <section className={styles.hero} id={id}>
      <div className={styles.copy} data-reveal>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <Button>{content.cta}</Button>
      </div>

      <div className={styles.image} data-reveal style={revealDelay(100)}>
        <Image alt="Wedding couple" fill priority sizes="(max-width: 1024px) 100vw, 60vw" src={content.image} />
      </div>
    </section>
  );
}
