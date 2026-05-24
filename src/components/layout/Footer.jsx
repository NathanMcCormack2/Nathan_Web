import { ArrowUpRight, Mail } from 'lucide-react';
import { navLinks } from '../../data/siteData.js';

export default function Footer({ goToPage }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <p className="footer-kicker">McCormack Digital</p>

          <h2>Websites for local businesses that need to be found, trusted and contacted.</h2>

          <p>
            Clean, mobile-friendly websites for restaurants, cafés, shops and local services —
            built properly and maintained after launch.
          </p>

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
          <h3>Contact</h3>

          <p>
            Send your current website, Facebook page, Instagram profile or Google listing
            and I’ll review what could be improved first.
          </p>

          <a href="mailto:nathanmccormack1@gmail.com">
            <Mail size={16} />
            nathanmccormack1@gmail.com
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} McCormack Digital</p>
        <p>Design · Build · Maintain</p>
      </div>
    </footer>
  );
}