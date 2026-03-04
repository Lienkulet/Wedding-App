import { revealDelay } from "@/lib/reveal-style";
import styles from "./footer.module.css";
import { Container } from "@/components/ui/container/container";

export function Footer({ content }) {
  return (
    <footer className={styles.footer} data-reveal>
      <Container className={styles.footerBlock}>
        <div>
          <h2 data-reveal style={revealDelay(50)}>
            {content.title}
          </h2>
          <div>
            <p>{content.copyright}</p>
            <a href="#">{content.terms}</a>
            <a href="#">{content.privacy}</a>
          </div>
        </div>


        <div className={styles.rightBlock} data-reveal style={revealDelay(100)}>
          <div className={styles.meta}>
            <h3>Sitemap</h3>
            <nav aria-label="Footer sitemap">
              {content.sitemap.map((item) => (
                <a href="#" key={item}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3>Newsletter</h3>
            <nav aria-label="Footer sitemap">
              {content.sitemap.map((item) => (
                <a href="#" key={item}>
                  {item}
                </a>
              ))}
            </nav>
          </div>

        </div>
      </Container>
    </footer>
  );
}
