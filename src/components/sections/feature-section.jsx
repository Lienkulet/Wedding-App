import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { revealDelay } from "@/lib/reveal-style";

export function FeatureSection({ feature, id }) {
  return (
    <section className={cn("feature-grid", feature.reverse && "feature-grid-reverse")} id={id}>
      <div className="feature-visual-wrap" data-reveal>
        <div className="feature-visual-main">
          <Image alt={feature.title} fill sizes="(max-width: 1024px) 100vw, 50vw" src={feature.imageMain} />
        </div>
        {feature.imageAccent ? (
          <div className="feature-visual-accent" data-reveal style={revealDelay(120)}>
            <Image alt="Wedding detail" fill sizes="170px" src={feature.imageAccent} />
          </div>
        ) : null}
      </div>

      <div className="feature-copy" data-reveal style={revealDelay(80)}>
        <p className="eyebrow">{feature.eyebrow}</p>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>

        {feature.menu ? (
          <ul className="menu-list">
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
