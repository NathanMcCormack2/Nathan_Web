import { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Clock, ChevronRight, Mail, Globe } from 'lucide-react';

const PAGES = ['home', 'menu', 'about', 'gallery', 'contact'];

const menuData = {
  Pizzas: [
    { name: 'Margherita',       desc: 'San Marzano tomato, fior di latte, fresh basil, olive oil', price: '€13.50' },
    { name: 'Marinara',         desc: 'San Marzano tomato, garlic, oregano, olive oil — no cheese', price: '€11.50' },
    { name: 'Calabrese',        desc: 'Spicy Calabrian sausage, roasted peppers, smoked scamorza, chilli oil', price: '€16.50' },
    { name: 'Galway Bay',       desc: 'Smoked salmon, capers, crème fraîche, red onion, dill', price: '€17.00' },
    { name: 'Truffle Fungi',    desc: 'Wild mushrooms, black truffle paste, fontina, thyme, parmesan', price: '€18.00' },
    { name: 'Prosciutto',       desc: 'San Daniele prosciutto, rocket, cherry tomato, parmesan, lemon', price: '€17.50' },
    { name: 'Quattro Formaggi', desc: 'Fior di latte, gorgonzola, fontina, aged parmesan', price: '€16.00' },
    { name: "Mario's Special",  desc: 'House secret — ask your server what is on today', price: '€19.50' },
  ],
  Starters: [
    { name: 'Bruschetta al Pomodoro', desc: 'Grilled sourdough, San Marzano tomato, garlic, basil', price: '€7.50' },
    { name: 'Burrata',                desc: 'Fresh burrata, heritage tomato, basil oil, Sicilian sea salt', price: '€11.50' },
    { name: 'Arancini',               desc: 'Saffron risotto balls, mozzarella centre, nduja dipping sauce', price: '€9.50' },
    { name: 'Antipasto Board',        desc: 'Cured meats, marinated vegetables, olives, grilled bread', price: '€14.50' },
  ],
  Salads: [
    { name: 'Rucola & Parmesan', desc: 'Wild rocket, shaved parmesan, pine nuts, lemon dressing', price: '€8.50' },
    { name: 'Caprese',           desc: 'Buffalo mozzarella, heritage tomato, basil, aged balsamic', price: '€10.50' },
  ],
  Desserts: [
    { name: 'Tiramisu',    desc: "Mario's grandmother's recipe — made fresh daily", price: '€7.50' },
    { name: 'Panna Cotta', desc: 'Vanilla panna cotta, seasonal berry compote', price: '€6.50' },
    { name: 'Affogato',    desc: 'Espresso, house vanilla gelato — add a shot of Baileys for €2', price: '€5.50' },
  ],
  Drinks: [
    { name: 'Aperol Spritz',      desc: 'Aperol, Prosecco, soda, orange', price: '€9.00' },
    { name: 'House Red / White',  desc: "Italian regional selection — ask your server", price: '€7.50' },
    { name: 'Peroni Nastro',      desc: '330ml bottle', price: '€5.50' },
    { name: 'San Pellegrino',     desc: 'Sparkling or Still 750ml', price: '€4.00' },
  ],
};

/* ── Nav ── */
function PizzaNav({ activePage, setPage, goToWork }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="pz-nav">
      <div className="pz-nav-inner">
        <button className="pz-back-btn" onClick={goToWork}>
          <ArrowLeft size={13} /> Portfolio
        </button>
        <button className="pz-brand" onClick={() => { setPage('home'); setOpen(false); }}>
          <span className="pz-brand-logo">Mario's</span>
          <span className="pz-brand-sub">Pizzeria · Est. 1994</span>
        </button>
        <ul className="pz-desktop-nav">
          {PAGES.map(p => (
            <li key={p}>
              <button className={`pz-nav-link ${activePage === p ? 'active' : ''}`} onClick={() => setPage(p)}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <a href="tel:091532881" className="pz-phone-cta">
          <Phone size={13} /> 091 532 881
        </a>
        <button className="pz-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>
      {open && (
        <div className="pz-mobile-menu">
          {PAGES.map(p => (
            <button key={p} className="pz-mobile-link" onClick={() => { setPage(p); setOpen(false); }}>
              {p.charAt(0).toUpperCase() + p.slice(1)} <ChevronRight size={16} />
            </button>
          ))}
          <a href="tel:091532881" className="pz-mobile-phone"><Phone size={15} /> 091 532 881</a>
        </div>
      )}
    </nav>
  );
}

/* ── Home ── */
function PizzaHome({ setPage }) {
  return (
    <div className="pz-home">

      {/* HERO */}
      <section className="pz-hero">
        <div className="pz-hero-bg" />
        <div className="pz-hero-texture" />
        <div className="pz-hero-vignette" />

        <div className="pz-hero-content">
          {/* Vintage SVG seal */}
          <div className="pz-hero-seal">
            <svg className="pz-seal-svg" viewBox="0 0 160 160">
              <defs>
                <path id="pz-arc-top"    d="M 80,80 m -58,0 a 58,58 0 1,1 116,0" />
                <path id="pz-arc-bottom" d="M 80,80 m -52,0 a 52,52 0 0,0 104,0" />
              </defs>
              <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,245,228,0.2)" strokeWidth="1" />
              <circle cx="80" cy="80" r="64" fill="none" stroke="rgba(255,245,228,0.35)" strokeWidth="0.5" />
              <circle cx="80" cy="80" r="56" fill="none" stroke="rgba(178,34,34,0.4)"   strokeWidth="0.5" />
              <text fontSize="9.5" fontFamily="Josefin Sans, sans-serif" fontWeight="700" letterSpacing="3.5" fill="rgba(255,245,228,0.65)" textAnchor="middle">
                <textPath href="#pz-arc-top" startOffset="50%">ESTABLISHED · GALWAY · IRELAND</textPath>
              </text>
              <text fontSize="9.5" fontFamily="Josefin Sans, sans-serif" fontWeight="700" letterSpacing="3.5" fill="rgba(255,245,228,0.65)" textAnchor="middle">
                <textPath href="#pz-arc-bottom" startOffset="50%">· WOOD FIRED · SINCE 1994 ·</textPath>
              </text>
              <text x="80" y="68" textAnchor="middle" fontFamily="Josefin Sans, sans-serif" fontSize="8" fontWeight="700" letterSpacing="3" fill="rgba(255,245,228,0.5)">EST.</text>
              <text x="80" y="98" textAnchor="middle" fontFamily="Alfa Slab One, serif" fontSize="34" fill="rgba(255,245,228,0.85)">1994</text>
            </svg>
          </div>

          <h1 className="pz-hero-title">Mario's</h1>

          <div className="pz-hero-hr">
            <span />
            <span className="pz-hero-hr-icon">🍕</span>
            <span />
          </div>

          <p className="pz-hero-subtitle">Pizzeria &amp; Kitchen</p>
          <p className="pz-hero-location">Galway · Ireland</p>
          <p className="pz-hero-tagline">"Wood-fired since the nineties. Same dough, same table."</p>

          <div className="pz-hero-ctas">
            <button className="pz-btn-primary" onClick={() => setPage('menu')}>See Our Menu</button>
            <a href="tel:091532881" className="pz-btn-ghost"><Phone size={14} /> Call to Order</a>
          </div>
        </div>

        <div className="pz-hero-info-bar">
          <span><Clock size={12} /> Mon–Sun 12pm–10pm</span>
          <span className="pz-info-sep">|</span>
          <span><MapPin size={12} /> 14 Shop Street, Galway</span>
          <span className="pz-info-sep">|</span>
          <span><Phone size={12} /> 091 532 881</span>
        </div>

        <div className="pz-hero-checkers" />
      </section>

      {/* INTRO */}
      <section className="pz-intro">
        <div className="pz-intro-inner">
          <div className="pz-intro-text">
            <span className="pz-eyebrow">Our Story</span>
            <h2 className="pz-intro-heading">Thirty years of proper pizza.</h2>
            <p className="pz-intro-body">
              Mario Esposito arrived in Galway from Naples in 1991 with four hundred euro and a notebook of
              his grandmother's recipes. Three years later he opened on Shop Street with a wood-fired oven
              shipped from Tuscany and a handful of tables. The dough is still made every morning. The oven
              hasn't cooled.
            </p>
            <button className="pz-text-link" onClick={() => setPage('about')}>
              Read the full story <ChevronRight size={14} />
            </button>
          </div>
          <div className="pz-intro-visual">
            <div className="pz-vintage-frame">
              <div className="pz-vintage-frame-inner">🔥</div>
              <p className="pz-frame-caption">The original oven — still burning since 1994</p>
            </div>
          </div>
        </div>
        <div className="pz-pillars">
          {[
            { icon: '🔥', title: 'Wood-Fired Oven', text: 'A Valoriani oven from Tuscany, fired to 450°C every evening since 1994.' },
            { icon: '🌾', title: '48-Hour Dough',   text: 'Tipo 00 flour, cold proved for two days, hand-stretched to order. Never rolled.' },
            { icon: '🍅', title: 'Italian Produce',  text: 'San Marzano tomatoes from the same family farm in Campania since 1998.' },
          ].map(p => (
            <div key={p.title} className="pz-pillar">
              <span className="pz-pillar-icon">{p.icon}</span>
              <h3 className="pz-pillar-title">{p.title}</h3>
              <p className="pz-pillar-text">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU TEASER — Chalkboard */}
      <section className="pz-menu-teaser">
        <div className="pz-menu-teaser-bg" />
        <div className="pz-menu-teaser-top-stripe" />
        <div className="pz-menu-teaser-inner">
          <div className="pz-menu-board-header">
            <div className="pz-ornament-divider light"><span>✦</span></div>
            <span className="pz-eyebrow pz-eyebrow-light" style={{ marginTop: 10 }}>From the Kitchen</span>
            <h2 className="pz-board-title">Tonight's Favourites</h2>
            <div className="pz-board-divider"><span>· · ·</span></div>
            <p className="pz-board-sub">All pizzas wood-fired to order. 12" hand-stretched base.</p>
          </div>
          <div className="pz-board-items">
            {[
              { num: '01', name: 'Margherita',    desc: 'San Marzano tomato, fior di latte, fresh basil, cold-pressed olive oil', price: '€13.50', badge: 'Classic' },
              { num: '02', name: 'Calabrese',     desc: 'Spicy Calabrian sausage, roasted peppers, smoked scamorza, chilli oil',  price: '€16.50', badge: 'House Favourite' },
              { num: '03', name: 'Galway Bay',    desc: 'Smoked salmon, capers, crème fraîche, red onion, dill — a local twist',  price: '€17.00', badge: 'Signature' },
              { num: '04', name: 'Truffle Fungi', desc: 'Wild mushrooms, black truffle paste, fontina, thyme, aged parmesan',     price: '€18.00', badge: 'Seasonal' },
            ].map(item => (
              <div key={item.name} className="pz-board-item">
                <span className="pz-board-item-num">{item.num}</span>
                <div className="pz-board-item-info">
                  <h3 className="pz-board-item-name">{item.name}</h3>
                  <p className="pz-board-item-desc">{item.desc}</p>
                </div>
                <span className="pz-board-item-badge">{item.badge}</span>
                <span className="pz-board-price">{item.price}</span>
              </div>
            ))}
          </div>
          <button className="pz-btn-cream" onClick={() => setPage('menu')}>Full Menu →</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pz-features">
        <div className="pz-features-top-stripe" />
        <div className="pz-features-bottom-stripe" />
        <div className="pz-features-inner">
          <h2 className="pz-features-heading">Why people keep coming back</h2>
          <div className="pz-features-grid">
            {[
              { icon: '🪑', title: 'Walk-ins Welcome',  text: "No booking system, no waiting list. If there's a table, it's yours. We've been doing it this way since 1994." },
              { icon: '🍕', title: 'Real Ingredients',  text: 'Everything is made in-house. No frozen bases, no bottled sauce. If it is not fresh, it is not on the menu.' },
              { icon: '🍷', title: 'Italian Wines',     text: 'A small, carefully chosen list of Italian regional wines. Affordable, honest bottles that pair well with pizza.' },
            ].map(f => (
              <div key={f.title} className="pz-feature-card">
                <span className="pz-feature-icon">{f.icon}</span>
                <h3 className="pz-feature-title">{f.title}</h3>
                <p className="pz-feature-text">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pz-cta-banner">
        <div className="pz-cta-inner">
          <div className="pz-cta-ornament">Mario's</div>
          <h2 className="pz-cta-heading">Hungry right now?</h2>
          <p className="pz-cta-sub">
            Call us and your pizza will be ready for collection in 20 minutes. No apps, no delivery fees. Just food made with care.
          </p>
          <a href="tel:091532881" className="pz-btn-primary large"><Phone size={17} /> Call 091 532 881</a>
          <p className="pz-cta-note">Mon – Sun · 12pm – 10pm · 14 Shop Street, Galway</p>
        </div>
      </section>

    </div>
  );
}

/* ── Menu ── */
function PizzaMenu() {
  const [active, setActive] = useState('Pizzas');
  return (
    <div className="pz-menu-page">
      <div className="pz-inner-hero">
        <div className="pz-inner-hero-stripe" />
        <div className="pz-inner-hero-content">
          <span className="pz-eyebrow pz-eyebrow-light">14 Shop Street, Galway</span>
          <h1 className="pz-page-title">Our Menu</h1>
          <p className="pz-page-sub">All pizzas made with Tipo 00 flour, proved 48 hours, fired at 450°C.</p>
        </div>
      </div>
      <div className="pz-menu-body">
        <div className="pz-menu-tabs">
          {Object.keys(menuData).map(cat => (
            <button key={cat} className={`pz-menu-tab ${active === cat ? 'active' : ''}`} onClick={() => setActive(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div className="pz-menu-section-hdr">
          <span className="pz-menu-section-rule" />
          <h2 className="pz-menu-section-name">{active}</h2>
          <span className="pz-menu-section-rule" />
        </div>
        <div className="pz-menu-items">
          {menuData[active].map(item => (
            <div key={item.name} className="pz-menu-item">
              <div className="pz-menu-item-left">
                <h3 className="pz-menu-item-name">{item.name}</h3>
                <p className="pz-menu-item-desc">{item.desc}</p>
              </div>
              <span className="pz-menu-item-price">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="pz-menu-footer-note">
          All pizzas available gluten-free (add €2) · Dietary information available on request · Allergens: please speak to your server
        </div>
      </div>
    </div>
  );
}

/* ── About ── */
function PizzaAbout() {
  return (
    <div className="pz-about-page">
      <div className="pz-inner-hero">
        <div className="pz-inner-hero-stripe" />
        <div className="pz-inner-hero-content">
          <span className="pz-eyebrow pz-eyebrow-light">Since 1994</span>
          <h1 className="pz-page-title">Our Story</h1>
        </div>
      </div>
      <div className="pz-about-body">
        <div className="pz-about-editorial">
          <blockquote className="pz-about-pullquote">
            "I didn't open a restaurant. I opened the kitchen I wished existed in Galway."
            <cite>— Mario, 1994</cite>
          </blockquote>
          <div className="pz-about-text">
            <p>Mario Esposito arrived in Galway from Naples in 1991. He spent three years working in a kitchen on Quay Street before he scraped together enough to rent a small space on Shop Street. The oven — a Valoriani wood-fired oven — was the first thing he bought. The tables came second.</p>
            <p>The dough recipe he uses today is the same one he wrote down in a notebook on his first weekend in Galway, adapted from his grandmother's version in Sorrento. It is proved for 48 hours, hand-stretched, never rolled.</p>
            <p>Thirty years on, Mario still opens the restaurant himself, still sources his tomatoes from the same producer in Campania, and still insists that the simplest pizza on the menu — the Marinara, with no cheese — tells you more about a kitchen than anything else on the list.</p>
          </div>
        </div>

        <div className="pz-timeline">
          {[
            { year: '1991', text: 'Mario arrives in Galway from Naples with €400 and a notebook of recipes.' },
            { year: '1994', text: "Mario's Pizza opens on Shop Street. The Valoriani oven is installed. A queue forms on the first night." },
            { year: '1998', text: 'Extended the dining room. The Calabrese pizza — spicy sausage and roasted peppers — added to the menu.' },
            { year: '2006', text: 'The Galway Bay pizza created. Smoked salmon, capers, crème fraîche — a nod to the city that became home.' },
            { year: '2014', text: '20 years. Same oven. Same dough. Same table by the window.' },
            { year: '2024', text: 'Still here. Still burning.' },
          ].map((item, i) => (
            <div key={i} className="pz-tl-item">
              <div className="pz-tl-dot" />
              <span className="pz-tl-year">{item.year}</span>
              <p className="pz-tl-text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="pz-values">
          {[
            { title: 'The Oven',     text: 'A Valoriani wood-fired oven, shipped from Tuscany. It reaches 450°C and has never been replaced.' },
            { title: 'The Dough',    text: '48-hour cold prove. Tipo 00 flour. Hand-stretched to order. No rolling pins, no machines.' },
            { title: 'The Tomatoes', text: "San Marzano DOP, from the same family farm in Campania since 1998. Mario won't use anything else." },
          ].map(v => (
            <div key={v.title} className="pz-value-card">
              <h3 className="pz-value-title">{v.title}</h3>
              <p className="pz-value-text">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Gallery ── */
function PizzaGallery() {
  const items = [
    { label: 'Wood-fired Margherita', tag: 'Pizza',    size: 'large',  n: 1 },
    { label: 'The dining room',       tag: 'Interior', size: 'small',  n: 2 },
    { label: 'Fresh dough',           tag: 'Kitchen',  size: 'small',  n: 3 },
    { label: 'Calabrese — house favourite', tag: 'Pizza', size: 'medium', n: 4 },
    { label: 'The open oven',         tag: 'Kitchen',  size: 'medium', n: 5 },
    { label: 'Evening service',       tag: 'Interior', size: 'small',  n: 6 },
    { label: 'Burrata starter',       tag: 'Starter',  size: 'small',  n: 3 },
    { label: 'Galway Bay pizza',      tag: 'Signature',size: 'large',  n: 4 },
  ];
  return (
    <div className="pz-gallery-page">
      <div className="pz-gallery-inner-hero">
        <span className="pz-eyebrow pz-eyebrow-light" style={{ position:'relative', zIndex:1 }}>A look inside</span>
        <h1 className="pz-page-title" style={{ position:'relative', zIndex:1 }}>Gallery</h1>
        <p className="pz-page-sub" style={{ position:'relative', zIndex:1, color:'rgba(255,245,228,0.5)', margin:'6px auto 0' }}>The kitchen, the dining room, the pizza.</p>
      </div>
      <div className="pz-gallery-grid">
        {items.map((item, i) => (
          <div key={i} className={`pz-gal-item pz-gal-${item.size} pz-gal-${item.n}`}>
            <div className="pz-gal-overlay">
              <span className="pz-gal-tag">{item.tag}</span>
              <p className="pz-gal-label">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Contact ── */
function PizzaContact() {
  return (
    <div className="pz-contact-page">
      <div className="pz-inner-hero">
        <div className="pz-inner-hero-stripe" />
        <div className="pz-inner-hero-content">
          <span className="pz-eyebrow pz-eyebrow-light">Shop Street, Galway</span>
          <h1 className="pz-page-title">Find Us</h1>
          <p className="pz-page-sub">Walk-ins always welcome. No reservations needed.</p>
        </div>
      </div>
      <div className="pz-contact-body">
        <div className="pz-contact-grid">
          <div>
            <div className="pz-contact-block">
              <span className="pz-contact-block-label">Address</span>
              <p>14 Shop Street<br />Galway City<br />Co. Galway, Ireland</p>
            </div>
            <div className="pz-contact-block">
              <span className="pz-contact-block-label">Opening Hours</span>
              <table className="pz-hours-table">
                <tbody>
                  <tr><td>Monday – Thursday</td><td>12pm – 9:30pm</td></tr>
                  <tr><td>Friday – Saturday</td><td>12pm – 10:30pm</td></tr>
                  <tr><td>Sunday</td><td>1pm – 9pm</td></tr>
                </tbody>
              </table>
            </div>
            <div className="pz-contact-block">
              <span className="pz-contact-block-label">Get in Touch</span>
              <div className="pz-contact-links">
                <a href="tel:091532881" className="pz-contact-link"><Phone size={15} /> 091 532 881</a>
                <a href="mailto:hello@mariospizza.ie" className="pz-contact-link"><Mail size={15} /> hello@mariospizza.ie</a>
                <a href="#" className="pz-contact-link"><Globe size={15} /> @mariospizzagalway</a>
              </div>
            </div>
          </div>
          <div className="pz-map-box">
            <div className="pz-map-inner">
              <MapPin size={38} />
              <strong>14 Shop Street, Galway</strong>
              <span>5 min walk from Eyre Square · Main pedestrian street</span>
              <a href="https://maps.google.com/?q=Shop+Street+Galway" target="_blank" rel="noopener noreferrer" className="pz-btn-primary" style={{ marginTop: 8 }}>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
        <div className="pz-contact-note-strip">
          <p>🍕 We do not take reservations — walk-ins are welcome any time. For groups of 8 or more, please call ahead.</p>
          <p>🧾 We accept card and cash. Service charge is not included.</p>
        </div>
      </div>
    </div>
  );
}

/* ── Footer ── */
function PizzaFooter({ setPage }) {
  return (
    <footer className="pz-footer">
      <div className="pz-footer-inner">
        <div className="pz-footer-brand">
          <span className="pz-footer-logo">Mario's</span>
          <p className="pz-footer-tagline">Wood-fired since 1994 · 14 Shop Street, Galway</p>
        </div>
        <nav className="pz-footer-nav">
          {PAGES.map(p => (
            <button key={p} className="pz-footer-navlink" onClick={() => setPage(p)}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </nav>
        <div className="pz-footer-contact">
          <a href="tel:091532881" className="pz-footer-phone"><Phone size={14} /> 091 532 881</a>
          <span className="pz-footer-hours">Mon – Sun · 12pm – 10pm</span>
        </div>
      </div>
      <div className="pz-footer-rule">© 2024 Mario's Pizza · Galway, Ireland · All rights reserved</div>
    </footer>
  );
}

/* ── Root ── */
export default function PizzaDemoPage({ goToPage }) {
  const [page, setPage] = useState('home');
  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const renderPage = () => {
    switch (page) {
      case 'menu':    return <PizzaMenu />;
      case 'about':   return <PizzaAbout />;
      case 'gallery': return <PizzaGallery />;
      case 'contact': return <PizzaContact />;
      default:        return <PizzaHome setPage={go} />;
    }
  };

  return (
    <div className="pz-root">
      <div className="pz-demo-notice">
        <span>📌 Portfolio Demo — Concept website for Mario's Pizza, Galway.</span>
        <button onClick={() => goToPage('work')}>← Back to Work</button>
      </div>
      <PizzaNav activePage={page} setPage={go} goToWork={() => goToPage('work')} />
      <main className="pz-main">{renderPage()}</main>
      <PizzaFooter setPage={go} />
    </div>
  );
}