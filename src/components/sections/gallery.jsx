import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { revealDelay } from "@/lib/reveal-style";

export function Gallery({ content, id }) {
  return (
    <section className="gallery-shell" data-reveal id={id}>
      <div className="gallery-head" data-reveal style={revealDelay(80)}>
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
        </div>
        <Button variant="muted">{content.cta}</Button>
      </div>

      <div className="gallery-grid">
        {content.images.map((image, index) => (
          <Card className="gallery-card" delayMs={140 + index * 90} key={image} reveal>
            <Image alt={`Gallery image ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" src={image} />
          </Card>
        ))}
      </div>
    </section>
  );
}
