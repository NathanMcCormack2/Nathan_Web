import { useEffect, useRef } from 'react';
import { ArrowLeft, Phone, MapPin, Clock3, Star } from 'lucide-react';
import heroImage from '../assets/marios-pizza-hero.png';
import closeupImage from '../assets/marios-pizza-closeup.png';
import storefrontImage from '../assets/marios-pizza-storefront.png';
import logoImage from '../assets/marios-pizza-logo.svg';
import '../styles/mariosPizza.css';

const menu = [
  {
    num: 'I',
    category: 'Pizze al Forno a Legna',
    note: 'Dough slow-proved 48 hrs · San Marzano tomato · fior di latte · wood-fired at 450°C',
    items: [
      { name: 'Margherita Tradizionale', desc: 'Tomato, fior di latte, fresh basil, extra virgin olive oil', price: '12.50' },
      { name: 'Diavola', desc: 'Calabrian salami, chilli honey, mozzarella, torn basil', price: '14.90' },
      { name: 'Galway Funghi', desc: 'Roasted wild mushrooms, garlic cream, thyme, aged parmesan', price: '14.40' },
      { name: "Mario's Special", desc: 'Prosciutto di Parma, artichoke, olives, rocket, shaved parmesan', price: '16.50' },
    ],
  },
  {
    num: 'II',
    category: 'Dal Tavolo',
    note: 'Sharing plates, antipasti & dolci — easy plates for families and long evenings',
    items: [
      { name: 'Pane al Forno', desc: 'Wood-fired bread, garlic butter, flat-leaf parsley', price: '6.50' },
      { name: 'Antipasti Board', desc: 'Cured meats, olives, roasted peppers, warm focaccia', price: '15.00' },
      { name: 'Insalata della Casa', desc: 'Wild rocket, cherry tomato, parmesan, lemon dressing', price: '7.00' },
      { name: 'Tiramisù Classico', desc: 'Coffee-soaked sponge, mascarpone, dark cocoa — nonna\'s recipe', price: '6.90' },
    ],
  },
];

export default function MarioPizzaPage({ goToPage }) {
  const revealRef = useRef(null);

  useEffect(() => {
    revealRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealRef.current.observe(el));
    return () => revealRef.current?.disconnect();
  }, []);

  return (
    <div className="mp">
      {/* grain filter definition */}
      <svg width="0" height="0" className="mp-svg-filters" aria-hidden="true">
        <defs>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
          <filter id="sepia-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
            <feColorMatrix type="matrix" values="0.393 0.769 0.189 0 0  0.349 0.686 0.168 0 0  0.272 0.534 0.131 0 0  0 0 0 1 0" in="blended" />
          </filter>
        </defs>
      </svg>

      {/* ── HEADER ── */}
      <header className="mp-header">
        <button className="mp-back" onClick={() => goToPage('work')} type="button">
          <ArrowLeft size={14} strokeWidth={2.5} />
          <span>Portfolio</span>
        </button>

        <div className="mp-header-brand">
          <img src={logoImage} alt="Mario's Pizza" />
        </div>

        <nav className="mp-nav" aria-label="Page sections">
          {[['Menu','#mp-menu'],['About','#mp-about'],['Gallery','#mp-gallery'],['Contact','#mp-contact']].map(([l,h]) => (
            <a key={l} href={h}>{l}</a>
          ))}
        </nav>

        <a className="mp-header-call" href="tel:+35391555149">
          <Phone size={13} strokeWidth={2.5} />
          091 555 149
        </a>
      </header>

      {/* ── HERO ── */}
      <section className="mp-hero" id="mp-hero">
        <div className="mp-hero-photo">
          <img src={heroImage} alt="" />
          <div className="mp-hero-warmth" />
          <div className="mp-grain-overlay" aria-hidden="true" />
        </div>

        <div className="mp-hero-frame" aria-hidden="true" />

        <div className="mp-hero-body">
          <div className="mp-hero-eyebrow reveal">
            <span className="mp-ornament">✦</span>
            <span>Family Pizza House · Galway City · Est. 1998</span>
            <span className="mp-ornament">✦</span>
          </div>

          <h1 className="mp-hero-title reveal">
            <span className="mp-hero-title-mario">Mario's</span>
            <span className="mp-hero-title-pizza">Pizza</span>
          </h1>

          <p className="mp-hero-tagline reveal">
            Wood-fired dough, warm tables &amp; proper Italian comfort —<br/>
            for families, tourists and late Galway evenings.
          </p>

          <div className="mp-hero-actions reveal">
            <a className="mp-btn-red" href="tel:+35391555149">
              <Phone size={15} />
              Call 091 555 149
            </a>
            <a className="mp-btn-outline" href="#mp-menu">See the menu</a>
          </div>
        </div>

        <div className="mp-hero-open">
          <span className="mp-open-dot" />
          <span>Open now · Until 10:30 pm</span>
        </div>
      </section>

      {/* ── RIBBON ── */}
      <div className="mp-ribbon" aria-hidden="true">
        {Array.from({length:12}).map((_,i) => (
          <span key={i}>✦ Wood-fired pizza ✦ Galway since 1998 ✦ Walk-in & collection</span>
        ))}
      </div>

      {/* ── INFO BAND ── */}
      <div className="mp-band">
        <div className="mp-band-item">
          <Phone size={17} className="mp-band-icon" />
          <div>
            <span>Phone orders</span>
            <strong>091 555 149</strong>
          </div>
        </div>
        <div className="mp-band-sep" aria-hidden="true">✦</div>
        <div className="mp-band-item">
          <MapPin size={17} className="mp-band-icon" />
          <div>
            <span>Find us</span>
            <strong>18 Quay St, Galway</strong>
          </div>
        </div>
        <div className="mp-band-sep" aria-hidden="true">✦</div>
        <div className="mp-band-item">
          <Clock3 size={17} className="mp-band-icon" />
          <div>
            <span>Open daily</span>
            <strong>12 noon – 10:30 pm</strong>
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="mp-about" id="mp-about">
        <div className="mp-about-photos">
          <figure className="mp-photo-main reveal">
            <div className="mp-photo-inner">
              <img src={storefrontImage} alt="Mario's Pizza on Quay Street" />
              <div className="mp-grain-overlay" aria-hidden="true" />
            </div>
            <figcaption>Quay Street · Galway</figcaption>
          </figure>
          <figure className="mp-photo-inset reveal">
            <div className="mp-photo-inner">
              <img src={closeupImage} alt="Wood-fired pizza" />
              <div className="mp-grain-overlay" aria-hidden="true" />
            </div>
            <figcaption>From the oven</figcaption>
          </figure>
          <div className="mp-stamp reveal">
            <span>Est.</span>
            <strong>1998</strong>
            <span>Galway</span>
          </div>
        </div>

        <div className="mp-about-copy">
          <p className="mp-label reveal">About the restaurant</p>
          <div className="mp-ornament-rule reveal" aria-hidden="true"><span>✦</span></div>
          <h2 className="mp-section-heading reveal">
            A small Galway pizza room with old Italian manners.
          </h2>
          <p className="mp-body reveal">
            Mario's keeps things simple: dough made each morning, tomato sauce
            simmering in the back, and a room that feels easy after a day around
            the city. Families come in early, tourists drift over from Quay
            Street, and regulars call ahead when they want collection.
          </p>
          <p className="mp-body reveal">
            The oven runs hot, the tables are close, and the menu hasn't needed
            much changing in twenty-five years. That's the point.
          </p>
          <ul className="mp-features reveal">
            {['Family-friendly tables','48-hour slow dough','Sit in or collect','A short walk from the Latin Quarter'].map(f => (
              <li key={f}><span className="mp-feat-dot" />{ f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── MENU ── */}
      <section className="mp-menu-section" id="mp-menu">
        <div className="mp-menu-heading reveal">
          <p className="mp-label centered">From the kitchen</p>
          <div className="mp-ornament-rule" aria-hidden="true"><span>✦</span></div>
          <h2 className="mp-menu-title">The Menu</h2>
          <p className="mp-menu-sub">Phone-order favourites and sharing plates from the wood-fired kitchen on Quay Street.</p>
        </div>

        <div className="mp-menu-parchment reveal">
          <div className="mp-menu-parchment-header">
            <img src={logoImage} alt="" className="mp-menu-logo" />
            <div className="mp-ornament-rule"><span>✦</span></div>
            <p>Galway · Phone orders · Sit in · Collect</p>
          </div>

          <div className="mp-menu-grid">
            {menu.map(section => (
              <div className="mp-menu-col" key={section.category}>
                <div className="mp-menu-col-head">
                  <span className="mp-menu-num">{section.num}</span>
                  <h3>{section.category}</h3>
                  <p>{section.note}</p>
                </div>
                <ul className="mp-menu-items">
                  {section.items.map(item => (
                    <li key={item.name} className="mp-menu-item">
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.desc}</span>
                      </div>
                      <b className="mp-price">€{item.price}</b>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <footer className="mp-menu-foot">
            <span>Fresh dough daily</span>
            <span className="mp-ornament">✦</span>
            <span>Extra chilli on request</span>
            <span className="mp-ornament">✦</span>
            <span>Ask about kids portions</span>
          </footer>
        </div>
      </section>

      {/* ── QUOTE BAND ── */}
      <div className="mp-quote-band">
        <blockquote className="mp-quote reveal">
          <span className="mp-quote-mark">&ldquo;</span>
          <p>The kind of pizza that makes you understand why Italians are so particular about it.</p>
          <footer>
            <Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" />
            <cite>— Regular, Quay Street</cite>
          </footer>
        </blockquote>
      </div>

      {/* ── GALLERY ── */}
      <section className="mp-gallery" id="mp-gallery">
        <div className="mp-gallery-head">
          <p className="mp-label reveal">Gallery</p>
          <div className="mp-ornament-rule reveal" aria-hidden="true"><span>✦</span></div>
          <h2 className="mp-section-heading reveal">A look inside Mario's</h2>
        </div>

        <div className="mp-polaroids">
          {[
            { img: heroImage, cap: 'The Oven Table', sub: 'Evening service, timber counters, basil on hot stone.' },
            { img: closeupImage, cap: 'Pizza for Sharing', sub: 'Crisp edges, melted cheese — enough for everyone.' },
            { img: storefrontImage, cap: 'Galway Evenings', sub: 'A red awning and warm windows on Quay Street.' },
          ].map((p,i) => (
            <figure className={`mp-polaroid reveal`} key={p.cap} style={{ '--delay': `${i * 0.12}s` }}>
              <div className="mp-polaroid-photo">
                <img src={p.img} alt={p.cap} />
                <div className="mp-grain-overlay" aria-hidden="true" />
              </div>
              <figcaption>
                <strong>{p.cap}</strong>
                <span>{p.sub}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="mp-contact" id="mp-contact">
        <div className="mp-contact-inner">
          <div className="mp-contact-copy reveal">
            <p className="mp-label">Visit or order</p>
            <div className="mp-ornament-rule" aria-hidden="true"><span>✦</span></div>
            <h2 className="mp-section-heading light">
              Phone first if you<br/>want collection ready.
            </h2>
            <p className="mp-body light">
              Call ahead for collection, ask about tables, or just drop in.
              We're an easy walk from the Latin Quarter — the red awning and
              warm front window are hard to miss.
            </p>
            <a className="mp-btn-red" href="tel:+35391555149">
              <Phone size={15} />
              Call Mario's — 091 555 149
            </a>
          </div>

          <div className="mp-hours reveal">
            <div className="mp-hours-inner">
              <span className="mp-hours-label">Opening Hours</span>
              <dl>
                <div><dt>Mon – Thu</dt><dd>12:00 – 22:00</dd></div>
                <div><dt>Fri – Sat</dt><dd>12:00 – 22:30</dd></div>
                <div><dt>Sunday</dt><dd>13:00 – 21:30</dd></div>
              </dl>
              <address>
                18 Quay Street<br/>Galway, Ireland
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mp-footer">
        <button type="button" onClick={() => goToPage('work')} className="mp-footer-back">
          <ArrowLeft size={14} strokeWidth={2.5} />
          Return to portfolio
        </button>
        <p>Mario's Pizza · Demo site · McCormack Web Designs</p>
      </footer>

      {/* ── MOBILE CALL ── */}
      <a className="mp-floating-call" href="tel:+35391555149" aria-label="Call Mario's Pizza">
        <Phone size={19} strokeWidth={2} />
        <span>Call to order</span>
      </a>
    </div>
  );
}
