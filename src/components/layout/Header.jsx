import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, X } from 'lucide-react';
import { navLinks } from '../../data/siteData.js';
import { useMagnetic } from '../../lib/interactions.js';

export default function Header({ activePage, goToPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ctaRef = useMagnetic(0.4);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    goToPage(id);
  };

  return (
    <header className={`nx-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nx-header-inner">
        <button className="nx-brand" onClick={() => handleNav('home')} aria-label="McCormack Web Designs — home">
          <span className="nx-brand-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="nx-brand-text">
            <strong>McCormack</strong>
            <em>Web&nbsp;Atelier</em>
          </span>
        </button>

        <nav className="nx-nav" aria-label="Primary">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              className={`nx-nav-link ${activePage === link.id ? 'is-active' : ''}`}
              onClick={() => handleNav(link.id)}
              style={{ '--i': i }}
            >
              <span className="nx-nav-idx">0{i + 1}</span>
              <span className="nx-nav-label">{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="nx-header-right">
          <button className="nx-header-cta" ref={ctaRef} onClick={() => handleNav('contact')}>
            <span>Free audit</span>
            <ArrowUpRight size={15} />
          </button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className="nx-burger" aria-label="Open menu">
                <span />
                <span />
                <span />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="nx-menu-overlay" />
              <Dialog.Content className="nx-menu-panel" aria-describedby={undefined}>
                <Dialog.Title className="nx-sr-only">Navigation menu</Dialog.Title>
                <div className="nx-menu-top">
                  <span className="nx-menu-kicker">Menu</span>
                  <Dialog.Close asChild>
                    <button className="nx-menu-close" aria-label="Close menu">
                      <X size={22} />
                    </button>
                  </Dialog.Close>
                </div>
                <nav className="nx-menu-list" aria-label="Mobile">
                  {navLinks.map((link, i) => (
                    <button
                      key={link.id}
                      className={`nx-menu-item ${activePage === link.id ? 'is-active' : ''}`}
                      onClick={() => handleNav(link.id)}
                      style={{ '--d': `${i * 0.05}s` }}
                    >
                      <span className="nx-menu-idx">0{i + 1}</span>
                      {link.label}
                      <ArrowUpRight size={20} />
                    </button>
                  ))}
                </nav>
                <button className="nx-menu-foot" onClick={() => handleNav('contact')}>
                  Request a free website audit <ArrowUpRight size={18} />
                </button>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
