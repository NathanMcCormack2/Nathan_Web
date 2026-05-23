import { Code2, Menu, X } from 'lucide-react';
import { navLinks } from '../../data/siteData.js';

export default function Header({ activePage, goToPage, mobileOpen, setMobileOpen }) {
  return (
    <header className="site-header">
      <div className="header-rail" aria-hidden="true">
        <span>LOCAL WEB STUDIO</span>
        <span>IRELAND</span>
      </div>

      <div className="container header-inner">
        <button className="brand" onClick={() => goToPage('home')} aria-label="Go to homepage">
          <span className="brand-mark"><Code2 size={22} /></span>
          <span className="brand-text">
            <strong>Nathan Web Studio</strong>
            <small>Websites with care plans</small>
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

        <button className="availability-pill" onClick={() => goToPage('contact')}>
          <span className="pulse-dot" /> Available for new builds
        </button>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
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
          </div>
        </div>
      )}
    </header>
  );
}
