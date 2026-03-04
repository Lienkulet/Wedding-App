import Image from "next/image";

import { Button } from "@/components/ui/button/button";
import { cn } from "@/lib/cn";
import { revealDelay } from "@/lib/reveal-style";
import styles from "./feature-section.module.css";

export function FeatureSection({ feature, id }) {
  return (
    <section className={cn(styles.feature, feature.reverse && styles.reverse)} id={id}>
      <div className={styles.visualWrap} data-reveal>
        <div className={styles.visualMain}>
          <Image alt={feature.title} fill sizes="(max-width: 1024px) 100vw, 50vw" src={feature.imageMain} />
        </div>
        {feature.imageAccent ? (
          <div className={styles.visualAccent} data-reveal style={revealDelay(120)}>
            <Image alt="Wedding detail" fill sizes="170px" src={feature.imageAccent} />
          </div>
        ) : null}
      </div>

      <div className={styles.copy} data-reveal style={revealDelay(80)}>
        <p className={styles.eyebrow}>{feature.eyebrow}</p>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>

        {feature.menu ? (
          <ul className={styles.menu}>
            {feature.menu.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </li>
            ))}
          </ul>
        ) : null}

        <Button>{feature.cta}</Button>
      </div>
    </section>
  );
}
