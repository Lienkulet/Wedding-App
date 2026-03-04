import Image from "next/image";

import { Button } from "@/components/ui/button";
import { revealDelay } from "@/lib/reveal-style";

export function Hero({ content, id }) {
  return (
    <section className="hero-grid" id={id}>
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <Button>{content.cta}</Button>
      </div>

      <div className="hero-image" data-reveal style={revealDelay(100)}>
        <Image alt="Wedding couple" fill priority sizes="(max-width: 1024px) 100vw, 60vw" src={content.image} />
      </div>
    </section>
  );
}
