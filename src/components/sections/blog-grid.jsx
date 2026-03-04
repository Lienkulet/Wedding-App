import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { revealDelay } from "@/lib/reveal-style";

export function BlogGrid({ content, id }) {
  return (
    <section className="blog-shell" data-reveal id={id}>
      <div className="blog-head" data-reveal style={revealDelay(60)}>
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>
        <Button>{content.cta}</Button>
      </div>

      <div className="blog-grid">
        {content.cards.map((card, index) => (
          <Card className="blog-card" delayMs={130 + index * 90} key={card.title} reveal>
            <div className="blog-card-image">
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
