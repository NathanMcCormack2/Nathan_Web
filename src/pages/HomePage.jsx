import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import AtelierField from '../components/visual/AtelierField.jsx';
import { useReveal, useMagnetic, useParallax } from '../lib/interactions.js';

const demos = [
  { num: '01', label: 'Inn · Bar · Kitchen · Co. Mayo', title: 'Tigh Mhóir', desc: 'Atmospheric Irish inn — GSAP parallax, smooth scroll, live events, full room booking.', accent: '#c8873e', page: 'inn-demo' },
  { num: '02', label: 'Fish Restaurant · West Coast', title: "Sandy's Fish", desc: 'Coastal seafood with an animated hero, fresh-catch menu and gallery.', accent: '#3d86b0', page: 'sandys-fish-demo' },
  { num: '03', label: 'American Diner · Galway', title: "Rocky's Diner", desc: 'Bold Americana atmosphere, full menu board and family callout.', accent: '#c43f48', page: 'rockys-diner-demo' },
  { num: '04', label: 'Pizza Restaurant · Galway', title: "Mario's Pizza", desc: 'Warm Italian character, wood-fired menu and polaroid gallery.', accent: '#c02b19', page: 'pizza-demo' },
  { num: '05', label: 'Café · Galway', title: 'CTRL Coffee', desc: 'Indie café energy with drink highlights and study seating.', accent: '#c4471a', page: 'common-room-cafe-demo' },
  { num: '06', label: 'Fine Dining · London', title: 'Vespera', desc: 'Editorial luxury, tasting-menu storytelling and private dining.', accent: '#b98d54', page: 'vespera-demo' },
];

const pillars = [
  { k: 'Design', t: 'A look made for your business — never a template pulled off a shelf. Every line, type choice and motion is decided on purpose.' },
  { k: 'Build', t: 'Fast, mobile-first and properly coded in React. Hosted, secured and deployed for you on launch day.' },
  { k: 'Maintain', t: 'Monthly care plans so the site stays accurate, updated and supported long after it goes live.' },
];

function HeroHeadline() {
  const lines = ['Websites for the', 'businesses that make', 'your town worth living in.'];
  return (
    <h1 className="nx-hero-h1">
      {lines.map((line, i) => (
        <span className="nx-hero-line" key={i}>
          <span className="nx-hero-line-inner" style={{ '--d': `${0.25 + i * 0.13}s` }}>{line}</span>
        </span>
      ))}
    </h1>
  );
}

function WorkRow({ demo, goToPage, onHover }) {
  return (
    <button
      className="nx-work-row"
      style={{ '--ac': demo.accent }}
      onMouseEnter={() => onHover(demo)}
      onClick={() => goToPage(demo.page)}
    >
      <span className="nx-work-num">{demo.num}</span>
      <span className="nx-work-title">{demo.title}</span>
      <span className="nx-work-label">{demo.label}</span>
      <span className="nx-work-desc">{demo.desc}</span>
      <span className="nx-work-go"><ArrowUpRight size={20} /></span>
    </button>
  );
}

export default function HomePage({ goToPage }) {
  const [active, setActive] = useState(demos[0]);
  const ctaRef = useMagnetic(0.4);
  const statsRef = useReveal();
  const pillarRef = useReveal();
  const workRef = useReveal();
  const ctaSecRef = useReveal();
  const markerRef = useParallax(0.06);

  return (
    <div className="nx-home">
      {/* ── HERO ── */}
      <section className="nx-hero">
        <AtelierField />
        <div className="nx-hero-veil" aria-hidden="true" />
        <div className="nx-hero-inner">
          <p className="nx-hero-eyebrow"><span className="nx-dot" /> Web Design Atelier · Galway, Ireland</p>
          <HeroHeadline />
          <p className="nx-hero-sub" style={{ '--d': '0.75s' }}>
            Design, build and monthly care — for restaurants, cafés, shops and the local services
            that hold a place together.
          </p>
          <div className="nx-hero-actions" style={{ '--d': '0.92s' }}>
            <button className="nx-btn-primary" ref={ctaRef} onClick={() => goToPage('contact')}>
              <span>Get a free audit</span> <ArrowRight size={17} />
            </button>
            <button className="nx-btn-ghost" onClick={() => goToPage('work')}>See the work</button>
          </div>
        </div>
        <div className="nx-hero-scroll" aria-hidden="true">
          <span className="nx-hero-scroll-line" />
          <span className="nx-hero-scroll-word">Scroll</span>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="nx-stats" ref={statsRef}>
        <div className="nx-stats-inner">
          {[
            ['€600–€1,500', 'Typical build cost'],
            ['1–2 weeks', 'Typical turnaround'],
            ['from €50/mo', 'Ongoing care plan'],
            ['6', 'Demo builds to explore'],
          ].map(([big, small], i) => (
            <div className="nx-stat" key={big} style={{ '--d': `${i * 0.08}s` }}>
              <strong>{big}</strong>
              <span>{small}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="nx-manifesto">
        <div className="nx-manifesto-inner">
          <span className="nx-marker" ref={markerRef} aria-hidden="true">✶</span>
          <p className="nx-eyebrow">The idea</p>
          <p className="nx-manifesto-text">
            Most local businesses live on a single phone snap and a half-finished social page.
            I build the <em>real thing</em> — a fast, beautiful website that earns trust in the
            first three seconds and tells a customer exactly what to do next.
          </p>
        </div>
      </section>

      {/* ── WORK INDEX ── */}
      <section className="nx-work" ref={workRef}>
        <div className="nx-work-head">
          <p className="nx-eyebrow">Selected work</p>
          <button className="nx-work-all" onClick={() => goToPage('work')}>View all <ArrowRight size={14} /></button>
        </div>
        <div className="nx-work-grid">
          <div className="nx-work-list">
            {demos.map((demo) => (
              <WorkRow key={demo.title} demo={demo} goToPage={goToPage} onHover={setActive} />
            ))}
          </div>
          <aside className="nx-work-stage" style={{ '--ac': active.accent }}>
            <div className="nx-work-card">
              <div className="nx-work-card-top"><span /><span /><span /></div>
              <div className="nx-work-card-body">
                <span className="nx-work-card-label">{active.label}</span>
                <strong className="nx-work-card-title">{active.title}</strong>
                <div className="nx-work-card-bars">
                  <i style={{ width: '78%' }} /><i style={{ width: '54%' }} /><i style={{ width: '90%' }} />
                </div>
                <button className="nx-work-card-cta" onClick={() => goToPage(active.page)}>
                  Open live demo <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="nx-pillars" ref={pillarRef}>
        <div className="nx-pillars-inner">
          {pillars.map((p, i) => (
            <article className="nx-pillar" key={p.k} style={{ '--d': `${i * 0.1}s` }}>
              <span className="nx-pillar-idx">0{i + 1}</span>
              <h3>{p.k}</h3>
              <p>{p.t}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="nx-cta" ref={ctaSecRef}>
        <div className="nx-cta-inner">
          <h2 className="nx-cta-h2">Start with a <span className="nx-ital">free audit.</span></h2>
          <p className="nx-cta-sub">I'll review your current online presence and tell you exactly what I'd improve first — no charge, no obligation.</p>
          <div className="nx-cta-actions">
            <button className="nx-btn-primary nx-btn-lg" onClick={() => goToPage('contact')}>
              <span>Request your free audit</span> <ArrowRight size={18} />
            </button>
            <button className="nx-btn-ghost" onClick={() => goToPage('pricing')}>View pricing</button>
          </div>
        </div>
      </section>
    </div>
  );
}
