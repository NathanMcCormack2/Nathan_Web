import { ArrowUpRight } from 'lucide-react';
import { navLinks } from '../../data/siteData.js';
import { useMagnetic, useReveal } from '../../lib/interactions.js';

export default function Footer({ goToPage }) {
  const year = new Date().getFullYear();
  const ctaRef = useMagnetic(0.35);
  const revealRef = useReveal();

  return (
    <footer className="nx-footer" ref={revealRef}>
      <div className="nx-footer-glow" aria-hidden="true" />
      <div className="nx-footer-inner">
        <div className="nx-footer-lead">
          <span className="nx-eyebrow">Let's begin</span>
          <h2 className="nx-footer-h2">
            Your business deserves<br />
            <span className="nx-ital">a website worth visiting.</span>
          </h2>
          <button className="nx-footer-cta" ref={ctaRef} onClick={() => goToPage('contact')}>
            <span>Request a free audit</span>
            <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="nx-footer-cols">
          <div className="nx-footer-col">
            <h3>Navigate</h3>
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => goToPage(link.id)}>{link.label}</button>
            ))}
          </div>
          <div className="nx-footer-col">
            <h3>Studio</h3>
            <a href="mailto:nmccormack@zohomail.eu">nmccormack@zohomail.eu</a>
            <span className="nx-footer-place">Galway · Ireland</span>
            <span className="nx-footer-place">Design · Build · Maintain</span>
          </div>
        </div>
      </div>

      <div className="nx-footer-marquee" aria-hidden="true">
        <div className="nx-marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>McCormack Web Atelier <i>✶</i> Websites for local business <i>✶</i> </span>
          ))}
        </div>
      </div>

      <div className="nx-footer-bottom">
        <p>© {year} McCormack Web Atelier</p>
        <p>Crafted in Galway, Ireland</p>
      </div>
    </footer>
  );
}
