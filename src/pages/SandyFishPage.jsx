import { useEffect, useRef } from 'react';
import { ArrowLeft, Phone, MapPin, Clock3, Star } from 'lucide-react';
import heroImage   from '../assets/sandys-fish-hero.png';
import tableImage  from '../assets/sandys-fish-table.png';
import interiorImage from '../assets/sandys-fish-interior.png';
import logoImage   from '../assets/sandys-fish-logo.svg';
import '../styles/sandysFish.css';

/* ─────────────────── inline SVG illustrations ─────────────────── */
const FishSVG = ({ size = 48, color = 'currentColor', className = '' }) => (
  <svg viewBox="0 0 100 50" width={size} height={size * 0.5}
    className={className} aria-hidden="true" fill={color}>
    <path d="M72,25 C65,8 42,3 12,25 C42,47 65,42 72,25Z"/>
    <path d="M72,25 L93,10 L89,25 L93,40Z"/>
    <circle cx="22" cy="21" r="4" fill="white" opacity=".7"/>
    <circle cx="21" cy="20" r="2" fill="#000" opacity=".5"/>
    <line x1="38" y1="12" x2="38" y2="38" stroke="white" strokeWidth="1" opacity=".2"/>
    <line x1="50" y1="10" x2="50" y2="40" stroke="white" strokeWidth="1" opacity=".2"/>
  </svg>
);

const CrabSVG = ({ size = 44 }) => (
  <svg viewBox="0 0 80 60" width={size} height={size * 0.75} aria-hidden="true" fill="currentColor">
    <ellipse cx="40" cy="32" rx="18" ry="14"/>
    <circle cx="40" cy="22" r="8"/>
    <circle cx="36" cy="20" r="2.5" fill="white"/>
    <circle cx="35" cy="19" r="1.2" fill="#000"/>
    <circle cx="44" cy="20" r="2.5" fill="white"/>
    <circle cx="43" cy="19" r="1.2" fill="#000"/>
    {[[-20,-8,-12,-2],[- 22,2,-13,6],[-20,14,-12,18]].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={40+x1} y1={32+y1} x2={40+x2} y2={32+y2} stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    ))}
    {[[20,-8,12,-2],[22,2,13,6],[20,14,12,18]].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={40+x1} y1={32+y1} x2={40+x2} y2={32+y2} stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    ))}
    <path d="M28,24 C24,18 22,14 24,10 C26,6 28,10 28,14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M52,24 C56,18 58,14 56,10 C54,6 52,10 52,14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
);

const AnchorSVG = ({ size = 36, color = 'currentColor' }) => (
  <svg viewBox="0 0 60 80" width={size * 0.75} height={size} aria-hidden="true" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round">
    <circle cx="30" cy="14" r="10" fill="none"/>
    <line x1="30" y1="24" x2="30" y2="72"/>
    <path d="M10,40 C6,56 14,68 30,72 C46,68 54,56 50,40"/>
    <line x1="20" y1="14" x2="40" y2="14"/>
  </svg>
);

const SeagullSVG = ({ x = 0, y = 0, scale = 1 }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`} aria-hidden="true">
    <path d="M0,0 C-8,-6 -18,-4 -20,0" stroke="white" strokeWidth="2" fill="none" opacity=".7"/>
    <path d="M0,0 C8,-6 18,-4 20,0" stroke="white" strokeWidth="2" fill="none" opacity=".7"/>
  </g>
);

const WaveDivider = ({ id, topBg = 'transparent', bottomBg, animated = false }) => (
  <div className={`sf-wave-div ${animated ? 'sf-wave-div--anim' : ''}`} style={{ background: topBg }} aria-hidden="true">
    <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      {animated && (
        <>
          <path className="sf-wave-path sf-wave-path--1"
            d="M0,45 C180,75 360,15 540,45 C720,75 900,15 1080,45 C1260,75 1380,20 1440,45 L1440,90 L0,90 Z"
            fill={bottomBg} opacity=".4"/>
          <path className="sf-wave-path sf-wave-path--2"
            d="M0,55 C200,25 400,75 600,50 C800,25 1000,75 1200,50 C1320,35 1400,60 1440,55 L1440,90 L0,90 Z"
            fill={bottomBg} opacity=".6"/>
        </>
      )}
      <path className={animated ? 'sf-wave-path sf-wave-path--3' : ''}
        d="M0,50 C240,85 480,15 720,50 C960,85 1200,15 1440,50 L1440,90 L0,90 Z"
        fill={bottomBg}/>
    </svg>
  </div>
);

/* ─────────────────── data ─────────────────── */
const menu = [
  {
    cat: 'From the Fryer', emoji: '🍟', roman: 'I',
    note: 'Crisp, generous, made for sandy shoes',
    items: [
      { name: 'Harbour Fish & Chips', desc: 'Day-boat white fish, beef dripping chips, tartare, lemon', price: '16.90' },
      { name: 'Kids Sandy Basket', desc: 'Small battered fish, chips, peas, apple juice', price: '8.50' },
      { name: 'Scampi Cone', desc: 'Golden scampi, sea salt, lemon mayo, paper cone', price: '12.40' },
      { name: 'Haddock Croquette', desc: 'Parsley crumb, pickled onion, dill cream', price: '9.80' },
    ]
  },
  {
    cat: 'Coastal Grill', emoji: '🐟', roman: 'II',
    note: 'Simple plates with butter, herbs & whatever came in fresh',
    items: [
      { name: 'Catch of the Day', desc: 'Ask at the counter — grilled with seaweed butter & greens', price: 'Market' },
      { name: 'Lemon Sole Supper', desc: 'Brown butter, capers, baby potatoes, garden leaves', price: '19.50' },
      { name: 'Mackerel on Toast', desc: 'Charred sourdough, tomato relish, pickled fennel', price: '13.80' },
      { name: 'Mussels Pot', desc: 'West coast mussels, cider cream, warm brown bread', price: '15.20' },
    ]
  },
  {
    cat: 'For the Table', emoji: '🦀', roman: 'III',
    note: 'Warm bowls & easy plates that disappear fast',
    items: [
      { name: "Sandy's Chowder", desc: 'Smoked fish, potatoes, sweet corn, brown bread', price: '10.90' },
      { name: 'Sea-Salt Chips', desc: 'Thick cut, malt vinegar on the table', price: '4.80' },
      { name: 'Crab Toasties', desc: 'White crab, cheddar, spring onion, grilled sourdough', price: '11.60' },
      { name: 'Warm Berry Sponge', desc: 'Custard, cream — two spoons if you ask nicely', price: '7.20' },
    ]
  },
];

/* ─────────────────── component ─────────────────── */
export default function SandyFishPage({ goToPage }) {
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('sf-in')),
      { threshold: 0.06, rootMargin: '0px 0px -28px 0px' }
    );
    document.querySelectorAll('.sf-reveal').forEach(el => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  return (
    <div className="sf">

      {/* ── HEADER ── */}
      <header className="sf-header">
        <button className="sf-back" type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={14} strokeWidth={2.5} /> Portfolio
        </button>
        <a className="sf-logo-link" href="#sf-hero">
          <img src={logoImage} alt="Sandy's Fish Restaurant" />
        </a>
        <nav className="sf-nav">
          {[['Menu','#sf-menu'],['About','#sf-about'],['Gallery','#sf-gallery'],['Contact','#sf-contact']].map(([l,h]) => (
            <a key={l} href={h}>{l}</a>
          ))}
        </nav>
        <a className="sf-header-call" href="tel:+35398555028">
          <Phone size={13} strokeWidth={2.5} />
          <span>Book a table</span>
        </a>
      </header>

      {/* ── HERO ── */}
      <section className="sf-hero" id="sf-hero">
        <div className="sf-hero-bg">
          <img src={heroImage} alt="" />
          <div className="sf-hero-overlay" />
          <div className="sf-hero-grain" />
        </div>

        {/* Seagulls SVG layer */}
        <svg className="sf-seagulls" viewBox="0 0 1440 300" aria-hidden="true">
          <SeagullSVG x={180} y={60} scale={1.2}/>
          <SeagullSVG x={320} y={40} scale={.8}/>
          <SeagullSVG x={480} y={80} scale={1}/>
          <SeagullSVG x={900} y={50} scale={1.4}/>
          <SeagullSVG x={1100} y={70} scale={.9}/>
          <SeagullSVG x={1280} y={45} scale={1.1}/>
        </svg>

        {/* Fish swimming in hero sky */}
        <div className="sf-hero-fish" aria-hidden="true">
          <FishSVG size={28} color="rgba(255,255,255,0.12)" className="sf-fish-swim sf-fish-1" />
          <FishSVG size={20} color="rgba(255,255,255,0.08)" className="sf-fish-swim sf-fish-2" />
        </div>

        <div className="sf-hero-body">
          <div className="sf-hero-banner sf-reveal" aria-label="Fresh catch announcement">
            <span className="sf-banner-flag" aria-hidden="true">🚩</span>
            <span>Tonight: Haddock · Sole · Clew Bay Mussels</span>
            <span className="sf-banner-flag" aria-hidden="true">🚩</span>
          </div>

          <h1 className="sf-hero-title sf-reveal">
            <span className="sf-hero-sandys">Sandy's</span>
            <span className="sf-hero-fish-rest">Fish Restaurant</span>
          </h1>

          <p className="sf-hero-sub sf-reveal">
            A warm harbour-side fish room for families, tourists<br/>
            &amp; anyone coming in hungry off the coast road.
          </p>

          <div className="sf-hero-ctas sf-reveal">
            <a className="sf-btn-primary" href="tel:+35398555028">
              <Phone size={15}/> Call 098 555 028
            </a>
            <a className="sf-btn-ghost" href="#sf-menu">
              See today's board
            </a>
          </div>

          {/* Sticker on hero */}
          <div className="sf-sticker sf-sticker-open sf-reveal" aria-label="Open now">
            <span>Open</span>
            <strong>Now!</strong>
            <span>🐟</span>
          </div>
        </div>

        {/* Animated wave transition */}
        <div className="sf-hero-waves" aria-hidden="true">
          <svg viewBox="0 0 1440 130" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path className="sf-wave sf-wave-back" d="M0,70 C180,30 360,100 540,65 C720,30 900,95 1080,65 C1260,35 1380,85 1440,60 L1440,130 L0,130 Z"/>
            <path className="sf-wave sf-wave-mid" d="M0,80 C200,45 400,105 600,75 C800,45 1000,110 1200,75 C1340,52 1420,88 1440,80 L1440,130 L0,130 Z"/>
            <path className="sf-wave sf-wave-front" d="M0,95 C240,60 480,120 720,90 C960,60 1200,115 1440,85 L1440,130 L0,130 Z"/>
          </svg>
        </div>
      </section>

      {/* ── CATCH TICKER ── */}
      <div className="sf-ticker" aria-label="Fresh catch updates">
        <div className="sf-ticker-inner">
          {[...Array(6)].map((_,i) => (
            <span key={i} className="sf-ticker-group">
              <FishSVG size={20} color="rgba(255,255,255,0.6)" className="sf-ticker-fish"/>
              <b>Fresh Haddock In</b>
              <FishSVG size={16} color="rgba(255,255,255,0.4)" className="sf-ticker-fish sf-ticker-fish--small"/>
              <b>Clew Bay Mussels</b>
              <span className="sf-anchor-sep"><AnchorSVG size={18} color="rgba(255,255,255,0.5)"/></span>
              <b>Catch of the Day: Ask at the Counter</b>
              <FishSVG size={20} color="rgba(255,255,255,0.6)" className="sf-ticker-fish"/>
              <b>Kids Baskets from 12pm</b>
              <span className="sf-anchor-sep"><AnchorSVG size={18} color="rgba(255,255,255,0.5)"/></span>
              <b>Chowder Bubbling Now</b>
            </span>
          ))}
        </div>
      </div>

      {/* ── INFO STRIP ── */}
      <div className="sf-strip">
        <div className="sf-strip-item">
          <div className="sf-strip-icon"><FishSVG size={28} color="var(--sf-ocean)"/></div>
          <span>Fresh fish</span><strong>Delivered daily</strong>
        </div>
        <div className="sf-strip-rule" aria-hidden="true"/>
        <div className="sf-strip-item">
          <div className="sf-strip-icon"><MapPin size={20} color="var(--sf-ocean)"/></div>
          <span>Find us</span><strong>Harbour Rd, Westport</strong>
        </div>
        <div className="sf-strip-rule" aria-hidden="true"/>
        <div className="sf-strip-item">
          <div className="sf-strip-icon"><Clock3 size={20} color="var(--sf-ocean)"/></div>
          <span>Today</span><strong>12:00 – 21:00</strong>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="sf-about" id="sf-about">
        <div className="sf-about-photo-wrap">
          <figure className="sf-about-photo sf-reveal">
            <img src={interiorImage} alt="Inside Sandy's Fish Restaurant"/>
            <div className="sf-about-grain"/>
          </figure>
          <figure className="sf-about-photo-small sf-reveal">
            <img src={tableImage} alt="Family table at Sandy's"/>
            <div className="sf-about-grain"/>
          </figure>
          {/* Stickers on the photo column */}
          <div className="sf-sticker sf-sticker-family sf-reveal" aria-label="Family friendly">
            <span>Family</span><strong>Friendly!</strong><span>❤️</span>
          </div>
          <div className="sf-sticker sf-sticker-since sf-reveal">
            <span>Est.</span><strong>1987</strong><span>Co. Mayo</span>
          </div>
          <div className="sf-note-tag sf-reveal">
            <span>🌊 Sea-view tables available</span>
          </div>
        </div>

        <div className="sf-about-copy">
          <p className="sf-label sf-reveal">About Sandy's</p>
          <h2 className="sf-about-heading sf-reveal">
            A small fish room<br/>with the welcome<br/>turned all the way up.
          </h2>
          <p className="sf-body sf-reveal">
            Sandy's sits just off the harbour wall, close enough to hear the
            gulls and smell the salt on a wet day. We've been serving fish suppers
            on this stretch of Mayo coast since 1987 — and the recipe hasn't changed much.
          </p>
          <p className="sf-body sf-reveal">
            Tourists find us after the coast road. Locals come for chowder, chips,
            and a table by the window when the weather is doing something dramatic.
            Families get looked after without any fuss.
          </p>
          <ul className="sf-about-perks sf-reveal">
            <li><FishSVG size={20} color="var(--sf-ocean)"/> Day-boat fish, fresh daily</li>
            <li><CrabSVG size={22}/> Kids menu &amp; high chairs</li>
            <li><AnchorSVG size={20} color="var(--sf-ocean)"/> Sea-view window tables</li>
            <li><FishSVG size={20} color="var(--sf-ocean)"/> Takeaway window in summer</li>
          </ul>
        </div>
      </section>

      {/* Wave into menu */}
      <WaveDivider bottomBg="var(--sf-chalk)" topBg="var(--sf-sand-light)" animated={false}/>

      {/* ── MENU ── */}
      <section className="sf-menu" id="sf-menu">
        {/* Spinning catch badge */}
        <div className="sf-catch-badge" aria-label="Catch of the day">
          <div className="sf-catch-badge-spin">
            <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
              <path id="sf-circle-text" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" fill="none"/>
              <text fontSize="10.5" fontWeight="700" letterSpacing="2.5" fill="white" fontFamily="'Alfa Slab One', serif">
                <textPath href="#sf-circle-text">★ CATCH OF THE DAY ★ ASK THE COUNTER ★</textPath>
              </text>
            </svg>
          </div>
          <div className="sf-catch-badge-center">
            <FishSVG size={36} color="white"/>
          </div>
        </div>

        <div className="sf-menu-header sf-reveal">
          <p className="sf-label light">From the kitchen</p>
          <h2 className="sf-menu-title">The Fish Board</h2>
          <p className="sf-menu-sub">The menu changes with the boats. These are the favourites.</p>
        </div>

        {/* Bubbles decoration */}
        <div className="sf-bubbles" aria-hidden="true">
          {[...Array(12)].map((_,i) => <div key={i} className={`sf-bubble sf-bubble-${i%6}`}/>)}
        </div>

        <div className="sf-menu-columns sf-reveal">
          {menu.map((col) => (
            <div key={col.cat} className="sf-menu-col">
              <div className="sf-menu-col-head">
                <span className="sf-menu-roman">{col.roman}</span>
                <div>
                  <h3>{col.cat}</h3>
                  <p>{col.note}</p>
                </div>
                <span className="sf-menu-emoji" aria-hidden="true">{col.emoji}</span>
              </div>
              {col.items.map(item => (
                <div key={item.name} className="sf-menu-item">
                  <div>
                    <strong>{item.name}</strong>
                    <em>{item.desc}</em>
                  </div>
                  <span className="sf-dots" aria-hidden="true"/>
                  <b>€{item.price}</b>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="sf-menu-foot sf-reveal">
          <span>Ask about gluten-free batter</span>
          <span className="sf-menu-foot-fish" aria-hidden="true"><FishSVG size={18} color="rgba(255,255,255,0.4)"/></span>
          <span>High chairs &amp; booster seats</span>
          <span className="sf-menu-foot-fish" aria-hidden="true"><FishSVG size={18} color="rgba(255,255,255,0.4)"/></span>
          <span>Takeaway window open in summer</span>
        </div>
      </section>

      {/* Wave out of menu */}
      <WaveDivider bottomBg="var(--sf-sand-light)" topBg="var(--sf-chalk)" animated={false}/>

      {/* ── FAMILY CALLOUT ── */}
      <section className="sf-family">
        <div className="sf-family-stickers" aria-hidden="true">
          <div className="sf-sticker sf-sticker-kids">
            <span>Kids</span><strong>Welcome!</strong><span>🐠</span>
          </div>
          <div className="sf-sticker sf-sticker-gf">
            <span>Gluten-Free</span><strong>on Request</strong>
          </div>
          <div className="sf-sticker sf-sticker-takeaway">
            <span>Takeaway</span><strong>Window 🪟</strong>
          </div>
        </div>

        <div className="sf-family-copy sf-reveal">
          <h2 className="sf-family-heading">
            Bring sandy shoes,<br/>hungry kids &amp; a jumper<br/>for the walk home.
          </h2>
          <p className="sf-body">
            The room is casual on purpose. Easy tables, quick chips for children,
            proper plates for grown-ups, and enough warmth to dry off after the
            wind has had its say. We've been doing it since 1987 and we haven't
            had a complaint about the chips yet.
          </p>
          <div className="sf-family-facts">
            <div><strong>£8.50</strong><span>Kids basket — fish, chips, juice</span></div>
            <div><strong>High chairs</strong><span>Available — just ask at the door</span></div>
            <div><strong>Tuesdays</strong><span>Kids eat half price with adult main</span></div>
          </div>
          <a className="sf-btn-ocean" href="tel:+35398555028">
            <Phone size={15}/> Book a family table
          </a>
        </div>

        <div className="sf-family-img sf-reveal">
          <img src={tableImage} alt="Family enjoying fish supper at Sandy's"/>
          <div className="sf-family-img-banner">
            <span>🐟</span>
            <strong>Seafood Not Seen Food</strong>
            <span>🐟</span>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="sf-gallery" id="sf-gallery">
        <div className="sf-gallery-header sf-reveal">
          <p className="sf-label">Gallery</p>
          <h2 className="sf-section-heading">Fish, timber, windows &amp; weather.</h2>
        </div>
        <div className="sf-gallery-grid">
          <figure className="sf-gf sf-gf-a sf-reveal">
            <div className="sf-gf-frame">
              <img src={heroImage} alt="Sandy's Fish Restaurant counter"/>
              <div className="sf-gf-caption">
                <strong>The Counter at Dusk</strong>
                <span>Fresh fish on ice, warm windows and the harbour right outside.</span>
              </div>
            </div>
            <div className="sf-gf-sticker" aria-hidden="true">📍 Westport</div>
          </figure>
          <figure className="sf-gf sf-gf-b sf-reveal">
            <div className="sf-gf-frame">
              <img src={tableImage} alt="Family fish supper"/>
              <div className="sf-gf-caption">
                <strong>Fish Supper for Four</strong>
                <span>Big plates, chips in the middle, mussels for everyone.</span>
              </div>
            </div>
          </figure>
          <figure className="sf-gf sf-gf-c sf-reveal">
            <div className="sf-gf-frame">
              <img src={interiorImage} alt="Inside Sandy's"/>
              <div className="sf-gf-caption">
                <strong>Tables by the Windows</strong>
                <span>Timber booths, sea-green trim, and a view that changes with the weather.</span>
              </div>
            </div>
            <div className="sf-gf-sticker sf-gf-sticker-2" aria-hidden="true">⚓ Since 1987</div>
          </figure>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="sf-contact" id="sf-contact">
        <div className="sf-contact-fish-bg" aria-hidden="true">
          <FishSVG size={280} color="rgba(255,255,255,0.03)"/>
        </div>

        <div className="sf-contact-inner">
          <div className="sf-contact-copy sf-reveal">
            <p className="sf-label light">Visit or book</p>
            <h2 className="sf-contact-heading">
              Book a table before<br/>the coast road gets busy.
            </h2>
            <p className="sf-contact-body">
              Call ahead for family tables, ask what came in today, or drop by
              if you're already on the harbour path. We keep a few tables for
              walk-ins, but wet weekends fill quickly.
            </p>
            <a className="sf-btn-primary" href="tel:+35398555028">
              <Phone size={15}/> Call Sandy's — 098 555 028
            </a>
            <div className="sf-contact-reviews">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="var(--sf-buoy)" stroke="none"/>)}
              <span>"Best fish &amp; chips on the west coast." — TripAdvisor</span>
            </div>
          </div>

          <div className="sf-hours sf-reveal">
            <div className="sf-hours-board">
              <span className="sf-hours-label">
                <AnchorSVG size={16} color="var(--sf-sand)"/>
                Opening Hours
              </span>
              <dl>
                <div><dt>Mon – Thu</dt><dd>12:00 – 21:00</dd></div>
                <div><dt>Fri – Sat</dt><dd>12:00 – 22:00</dd></div>
                <div><dt>Sunday</dt><dd>12:30 – 20:30</dd></div>
              </dl>
              <address>
                Harbour Road<br/>
                Westport, Co. Mayo
              </address>
              <p className="sf-hours-note">
                <Star size={12} fill="var(--sf-sand)" stroke="none"/>
                High chairs · Buggy space · Gluten-free on request
              </p>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="sf-contact-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,55 720,5 1080,30 C1260,43 1380,18 1440,30 L1440,60 L0,60 Z" fill="rgba(255,255,255,0.05)"/>
          </svg>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="sf-footer">
        <button type="button" className="sf-footer-back" onClick={() => goToPage('work')}>
          <ArrowLeft size={14} strokeWidth={2.5}/> Back to portfolio
        </button>
        <div className="sf-footer-fish" aria-hidden="true">
          <FishSVG size={24} color="rgba(255,255,255,0.2)"/>
        </div>
        <p>Sandy's Fish Restaurant · Demo · McCormack Web Designs</p>
      </footer>

      {/* ── MOBILE CALL ── */}
      <a className="sf-float-call" href="tel:+35398555028" aria-label="Call Sandy's">
        <Phone size={19} strokeWidth={2}/><span>Call Sandy's</span>
      </a>

    </div>
  );
}