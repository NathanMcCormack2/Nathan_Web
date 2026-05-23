import { ArrowUpRight, Mail } from 'lucide-react';
import { navLinks } from '../../data/siteData.js';

export default function Footer({ goToPage }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <p className="eyebrow dark">Nathan Web Studio</p>
          <h2>Professional websites for small businesses that need to look credible online.</h2>
          <button className="footer-cta" onClick={() => goToPage('contact')}>
            Start a project <ArrowUpRight size={19} />
          </button>
        </div>

        <div className="footer-links-block">
          <h3>Pages</h3>
          <div className="footer-links">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => goToPage(link.id)}>{link.label}</button>
            ))}
          </div>
        </div>

        <div className="footer-contact-card">
          <Mail size={22} />
          <h3>Ready when you are.</h3>
          <p>Replace this with your real email and phone number before launch.</p>
          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </div>
      </div>
    </footer>
  );
}
