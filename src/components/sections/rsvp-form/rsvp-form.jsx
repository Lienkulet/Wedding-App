import Image from "next/image";

import { Button } from "@/components/ui/button/button";
import { revealDelay } from "@/lib/reveal-style";
import styles from "./rsvp-form.module.css";

export function RSVPForm({ content, id }) {
  return (
    <section className={styles.contact} id={id}>
      <div className={styles.image} data-reveal>
        <Image alt="Wedding bouquet" fill sizes="(max-width: 1024px) 100vw, 40vw" src={content.image} />
      </div>

      <div className={styles.copy} data-reveal style={revealDelay(90)}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2>{content.title}</h2>

        <form className={styles.form} noValidate>
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
