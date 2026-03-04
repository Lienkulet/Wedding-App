import Image from "next/image";

import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card/card";
import { revealDelay } from "@/lib/reveal-style";
import styles from "./blog-grid.module.css";

export function BlogGrid({ content, id }) {
  return (
    <section className={styles.blog} data-reveal id={id}>
      <div className={styles.header} data-reveal style={revealDelay(60)}>
        <div>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>
        <Button>{content.cta}</Button>
      </div>

      <div className={styles.grid}>
        {content.cards.map((card, index) => (
          <Card className={styles.card} delayMs={130 + index * 90} key={card.title} reveal>
            <div className={styles.image}>
              <Image alt={card.title} fill sizes="(max-width: 768px) 100vw, 33vw" src={card.image} />
            </div>
            <p>{card.date}</p>
            <h3>{card.title}</h3>
            <a href="#">{content.readMoreLabel}</a>
          </Card>
        ))}
      </div>
    </section>
  );
}
