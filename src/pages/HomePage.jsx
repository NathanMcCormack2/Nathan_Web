import { ArrowRight } from 'lucide-react';

const demos = [
  {
    num: '01', label: "Fish Restaurant · West Coast",
    title: "Sandy's Fish Restaurant",
    desc: 'Coastal seafood with animated hero, fresh-catch menu and gallery.',
    color: '#0D3355', accent: '#D64832', textLight: true,
    page: 'sandys-fish-demo',
  },
  {
    num: '02', label: 'American Diner · Galway',
    title: 'Rockys Diner',
    desc: 'Bold Americana atmosphere, full menu board and family callout.',
    color: '#172245', accent: '#B51E2B', textLight: true,
    page: 'rockys-diner-demo',
  },
  {
    num: '03', label: 'Pizza Restaurant · Galway',
    title: "Mario's Pizza",
    desc: 'Warm Italian character, wood-fired menu and polaroid gallery.',
    color: '#1C0F0A', accent: '#C02B19', textLight: true,
    page: 'pizza-demo',
  },
  {
    num: '04', label: 'Café · Galway',
    title: 'Common Room Café',
    desc: 'Indie café energy with drink highlights and study seating.',
    color: '#F5E4C4', accent: '#C4471A', textLight: true,
    page: 'common-room-cafe-demo',
  },
  {
    num: '05', label: 'Fine Dining · London',
    title: 'Vespera',
    desc: 'Editorial luxury, tasting-menu storytelling and private dining.',
    color: '#070706', accent: '#B98D54', textLight: true,
    page: 'vespera-demo',
  },
];

export default function HomePage({ goToPage }) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hp-hero">
        <div className="container hp-hero-inner">
          <div className="hp-hero-copy">
            <p className="hp-hero-eyebrow">Web Design · Galway, Ireland</p>
            <h1 className="hp-hero-h1">
              Websites for the businesses that make your town worth living in.
            </h1>
            <p className="hp-hero-sub">
              Design, build and monthly care — for restaurants, cafés, shops and local services.
            </p>
            <div className="hp-hero-actions">
              <button className="hp-btn-primary" onClick={() => goToPage('contact')}>
                Get a free audit <ArrowRight size={17} />
              </button>
              <button className="hp-btn-ghost" onClick={() => goToPage('work')}>
                See all demos
              </button>
            </div>
          </div>
          <div className="hp-hero-meta">
            <div className="hp-hero-meta-item">
              <strong>From €450</strong>
              <span>Complete build</span>
            </div>
            <div className="hp-hero-meta-item">
              <strong>2–3 weeks</strong>
              <span>Typical turnaround</span>
            </div>
            <div className="hp-hero-meta-item">
              <strong>€30/mo</strong>
              <span>Care plan from</span>
            </div>
          </div>
        </div>
        <div className="hp-hero-scroll" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="hp-work">
        <div className="container">
          <div className="hp-work-head">
            <p className="hp-work-label">Selected work</p>
            <button className="hp-work-all" onClick={() => goToPage('work')}>
              View all <ArrowRight size={14} />
            </button>
          </div>
          <div className="hp-work-list">
            {demos.map((demo) => (
              <button
                key={demo.title}
                className={`hp-work-row ${demo.textLight ? 'hp-work-row--light' : 'hp-work-row--dark'}`}
                onClick={() => goToPage(demo.page)}
                style={{ '--row-bg': demo.color, '--row-ac': demo.accent }}
              >
                <span className="hp-row-num">{demo.num}</span>
                <div className="hp-row-swatch" aria-hidden="true" />
                <div className="hp-row-info">
                  <span className="hp-row-label">{demo.label}</span>
                  <strong className="hp-row-title">{demo.title}</strong>
                </div>
                <p className="hp-row-desc">{demo.desc}</p>
                <span className="hp-row-cta">
                  View demo <ArrowRight size={14} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFER ── */}
      <section className="hp-offer">
        <div className="container hp-offer-grid">
          <div className="hp-offer-item">
            <h3>Design</h3>
            <p>A look that fits your business — not a template pulled off a shelf.</p>
          </div>
          <div className="hp-offer-divider" aria-hidden="true" />
          <div className="hp-offer-item">
            <h3>Build</h3>
            <p>Fast, mobile-first and properly coded. Hosted and deployed on launch day.</p>
          </div>
          <div className="hp-offer-divider" aria-hidden="true" />
          <div className="hp-offer-item">
            <h3>Maintain</h3>
            <p>Monthly care plans so the site stays accurate, updated and supported.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hp-cta">
        <div className="container hp-cta-inner">
          <h2 className="hp-cta-h2">Start with a free audit.</h2>
          <p className="hp-cta-sub">
            I'll review your current online presence and tell you exactly what I'd improve first.
          </p>
          <button className="hp-btn-cta" onClick={() => goToPage('contact')}>
            Request your free audit <ArrowRight size={17} />
          </button>
          <button className="hp-cta-secondary" onClick={() => goToPage('pricing')}>
            View packages & pricing
          </button>
        </div>
      </section>
    </>
  );
}
