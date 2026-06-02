import { ArrowUpRight } from 'lucide-react';
import { navLinks } from '../../data/siteData.js';

export default function Footer({ goToPage }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <p className="footer-kicker">McCormack Web Designs</p>
          <h2>Websites for local businesses.</h2>
          <button className="footer-cta" onClick={() => goToPage('contact')}>
            Request a free audit <ArrowUpRight size={17} />
          </button>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <h3>Pages</h3>
          <div className="footer-links">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => goToPage(link.id)}>
                {link.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="footer-contact">
          <h3>Get in touch</h3>
          <a href="mailto:nathanmccormack1@gmail.com">
            nathanmccormack1@gmail.com
          </a>
          <p>Galway, Ireland</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} McCormack Web Designs</p>
        <p>Design · Build · Maintain</p>
      </div>
    </footer>
  );
}
