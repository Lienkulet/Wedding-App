import { revealDelay } from "@/lib/reveal-style";

export function Footer({ content }) {
  return (
    <footer className="footer-shell" data-reveal>
      <h2 data-reveal style={revealDelay(50)}>
        {content.title}
      </h2>

      <div className="footer-meta" data-reveal style={revealDelay(100)}>
        <nav aria-label="Footer sitemap">
          {content.sitemap.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div>
          <p>{content.copyright}</p>
          <a href="#">{content.terms}</a>
          <a href="#">{content.privacy}</a>
        </div>
      </div>
    </footer>
  );
}
