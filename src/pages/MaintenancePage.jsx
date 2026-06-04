import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { maintenanceItems } from '../data/siteData.js';
import { useReveal, useMagnetic } from '../lib/interactions.js';

export default function MaintenancePage({ goToPage }) {
  const introRef = useReveal();
  const dashRef = useReveal();
  const gridRef = useReveal();
  const cta = useMagnetic(0.35);

  return (
    <div className="nx-page">
      <section className="nx-intro" ref={introRef}>
        <div className="nx-intro-inner">
          <p className="nx-eyebrow">Care plan</p>
          <h1 className="nx-intro-title">Keep your website <span className="nx-ital">current</span> after launch.</h1>
          <p className="nx-intro-text">Monthly plans covering hosting checks, content updates, fixes and support. From €50/month.</p>
        </div>
      </section>

      <section className="nx-dash" ref={dashRef}>
        <div className="nx-dash-shell">
          <div className="nx-dash-bar">
            <span /><span /><span />
            <strong>Website Care Overview</strong>
            <em className="nx-dash-live"><i /> Live</em>
          </div>
          <div className="nx-dash-grid">
            <div className="nx-dash-card nx-dash-card--status">
              <p>Site status</p>
              <h3>Online</h3>
              <div className="nx-dash-pulse" aria-hidden="true"><span /></div>
              <small>Basic checks keep the live site reliable.</small>
            </div>
            <div className="nx-dash-card">
              <p>Recent support</p>
              <h3>Content update</h3>
              <small>Hours, menu notes, images or small text changes.</small>
            </div>
            <div className="nx-dash-card">
              <p>Monthly check</p>
              <h3>Review</h3>
              <small>Links, layout, contact details and forms checked.</small>
            </div>
            <div className="nx-dash-card nx-dash-card--wide">
              <p>Typical care tasks</p>
              <ul>
                <li><CheckCircle2 size={15} /> Check the live site is loading</li>
                <li><CheckCircle2 size={15} /> Update small content changes</li>
                <li><CheckCircle2 size={15} /> Confirm enquiry paths still work</li>
                <li><CheckCircle2 size={15} /> Keep the project backed up</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="nx-features" ref={gridRef}>
        <div className="nx-section-head">
          <p className="nx-eyebrow">What's covered</p>
          <h2>Practical support for the changes that happen after launch.</h2>
          <p>Built for businesses that update menus, hours, photos or seasonal information.</p>
        </div>
        <div className="nx-feature-grid">
          {maintenanceItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <article className="nx-feature" key={item.title} style={{ '--d': `${i * 0.06}s` }}>
                <div className="nx-feature-icon"><Icon size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="nx-cta nx-cta--inset">
        <div className="nx-cta-inner">
          <p className="nx-eyebrow">Not sure what level you need?</p>
          <h2 className="nx-cta-h2">Start with basic care and <span className="nx-ital">scale up later.</span></h2>
          <button className="nx-btn-primary nx-btn-lg" ref={cta} onClick={() => goToPage('contact')}>
            <span>Ask about care plans</span> <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
