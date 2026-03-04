import { revealDelay } from "@/lib/reveal-style";
import Link from "next/link";
import styles from "./footer.module.css";
import { Container } from "@/components/ui/container/container";

export function Footer({ content }) {
  return (
    <footer className={styles.footer} data-reveal>
      <Container className={styles.footerwrapper}>
        <div className={styles.leftBlock}>
          <h2 data-reveal style={revealDelay(50)}>
            {content.title}
          </h2>
          <div className={styles.copyrightTerms}>
            <Link href="#">{content.copyright}</Link>
            <Link href="#">{content.terms}</Link>
            <Link href="#">{content.privacy}</Link>
          </div>
        </div>


        <div className={styles.rightBlock} data-reveal style={revealDelay(100)}>
          <div className={styles.dots}>
            <img src="/dots.svg" />
          </div>
          <div className={styles.dots2}>
            <img src="/dots2.svg" />
          </div>
          <div className={styles.meta}>
            <h3>Sitemap</h3>
            <nav aria-label="Footer sitemap">
              {content.sitemap.map((item) => (
                <Link href="#" key={item}>
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className={styles.meta}>
            <h3>{content.newsletterLabel}</h3>
            <form className={styles.newsletterForm} onSubmit={(event) => event.preventDefault()}>
              <label className={styles.srOnly} htmlFor="newsletter-email">
                {content.newsletterPlaceholder}
              </label>
              <input
                className={styles.newsletterInput}
                id="newsletter-email"
                name="newsletter-email"
                placeholder={content.newsletterPlaceholder}
                type="email"
              />
              <button className={styles.newsletterButton} type="submit">
                {content.newsletterAction}
                <span aria-hidden="true" className={styles.arrow}>
                  &gt;
                </span>
              </button>
            </form>
            <div aria-hidden="true" className={styles.line}></div>
          </div>

        </div>
      </Container>
    </footer>
  );
}
