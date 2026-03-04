import Image from "next/image";

import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card/card";
import { revealDelay } from "@/lib/reveal-style";
import styles from "./gallery.module.css";

export function Gallery({ content, id }) {
  return (
    <section className={styles.gallery} data-reveal id={id}>
      <div className={styles.header} data-reveal style={revealDelay(80)}>
        <div>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>
        <Button variant="muted">{content.cta}</Button>
      </div>

      <div className={styles.grid}>
        {content.images.map((image, index) => (
          <Card className={styles.card} delayMs={140 + index * 90} key={image} reveal>
            <Image alt={`Gallery image ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" src={image} />
          </Card>
        ))}
      </div>
    </section>
  );
}
