import { ArrowRight } from 'lucide-react';
import { processSteps, serviceFeatures } from '../data/siteData.js';
import { useReveal, useMagnetic } from '../lib/interactions.js';

function NxIntro({ eyebrow, title, text }) {
  const ref = useReveal();
  return (
    <section className="nx-intro" ref={ref}>
      <div className="nx-intro-inner">
        <p className="nx-eyebrow">{eyebrow}</p>
        <h1 className="nx-intro-title">{title}</h1>
        {text && <p className="nx-intro-text">{text}</p>}
      </div>
    </section>
  );
}

export default function ServicesPage({ goToPage }) {
  const cta = useMagnetic(0.35);
  const a = useReveal();
  const b = useReveal();
  const c = useReveal();

  return (
    <div className="nx-page">
      <NxIntro
        eyebrow="Services"
        title={<>Focused websites for <span className="nx-ital">local businesses.</span></>}
        text="Mobile-friendly, properly built, and maintained long after launch."
      />

      <section className="nx-jobs" ref={a}>
        <div className="nx-jobs-inner">
          <div className="nx-jobs-panel">
            <p className="nx-eyebrow nx-eyebrow--light">The approach</p>
            <h2>Every build has three jobs.</h2>
            <ol className="nx-jobs-list">
              <li><span>01</span> Make the first impression feel unmistakably professional.</li>
              <li><span>02</span> Put the details customers want exactly where they look.</li>
              <li><span>03</span> Make the next step obvious — call, visit, or enquire.</li>
            </ol>
          </div>
          <div className="nx-jobs-copy">
            <h2>What you receive</h2>
            <p>A responsive website with the right pages, clear calls to action, your key business
            details, full launch setup, and optional ongoing support.</p>
            <button className="nx-btn-primary" ref={cta} onClick={() => goToPage('pricing')}>
              <span>View pricing</span> <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="nx-features" ref={b}>
        <div className="nx-section-head">
          <p className="nx-eyebrow">Included</p>
          <h2>The essentials, handled properly.</h2>
          <p>No filler — just what a local-business website needs to work hard.</p>
        </div>
        <div className="nx-feature-grid">
          {serviceFeatures.slice(0, 6).map((f, i) => {
            const Icon = f.icon;
            return (
              <article className="nx-feature" key={f.title} style={{ '--d': `${i * 0.06}s` }}>
                <span className="nx-feature-idx">{String(i + 1).padStart(2, '0')}</span>
                <div className="nx-feature-icon"><Icon size={22} /></div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="nx-process" ref={c}>
        <div className="nx-section-head">
          <p className="nx-eyebrow">Process</p>
          <h2>From first conversation to live website.</h2>
          <p>Five clear steps with no vague handovers.</p>
        </div>
        <div className="nx-roadmap">
          <div className="nx-roadmap-line" aria-hidden="true" />
          {processSteps.map((s, i) => (
            <article className="nx-step" key={s.number} style={{ '--d': `${i * 0.08}s` }}>
              <span className="nx-step-num">{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
