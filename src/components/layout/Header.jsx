import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/siteData.js';

export default function Header({ activePage, goToPage, mobileOpen, setMobileOpen }) {
  return (
    <header className="site-header">
      <div className="header-rail" aria-label="Studio notice">
        <span>Independent web design for local businesses</span>
        <button type="button" onClick={() => goToPage('contact')}>
          Free website audit available
        </button>
      </div>

      <div className="container header-inner">
        <button className="brand" onClick={() => goToPage('home')} aria-label="Go to homepage">
          <span className="brand-text">
            <strong>McCormack Digital</strong>
            <small>Design · Build · Maintain</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${activePage === link.id ? 'is-active' : ''}`}
              onClick={() => goToPage(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="availability-pill" onClick={() => goToPage('contact')}>
            <span className="pulse-dot" /> Free audit
          </button>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-nav-wrap">
          <div className="container mobile-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`mobile-nav-link ${activePage === link.id ? 'is-active' : ''}`}
                onClick={() => goToPage(link.id)}
              >
                {link.label}
              </button>
            ))}

            <button className="mobile-quote-link" onClick={() => goToPage('contact')}>
              Request a free website audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
