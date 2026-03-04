import Image from "next/image";

import { Button } from "@/components/ui/button";
import { revealDelay } from "@/lib/reveal-style";

export function RSVPForm({ content, id }) {
  return (
    <section className="contact-grid" id={id}>
      <div className="contact-image" data-reveal>
        <Image alt="Wedding bouquet" fill sizes="(max-width: 1024px) 100vw, 40vw" src={content.image} />
      </div>

      <div className="contact-copy" data-reveal style={revealDelay(90)}>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>

        <form className="rsvp-form" noValidate>
          {content.fields.map((label, index) => {
            const inputId = `rsvp-field-${index}`;

            return (
              <div key={label}>
                <label htmlFor={inputId}>{label}</label>
                <input id={inputId} name={inputId} type="text" />
              </div>
            );
          })}

          <Button>{content.cta}</Button>
        </form>
      </div>
    </section>
  );
}
