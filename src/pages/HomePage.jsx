import { ArrowRight, CheckCircle2, MousePointer2, PhoneCall, Search } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import FeaturePanel from '../components/ui/FeaturePanel.jsx';
import { businessTypes, serviceFeatures } from '../data/siteData.js';

export default function HomePage({ goToPage }) {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid-redesign">
          <div className="hero-copy-block">
            <div className="hero-label-row">
              <span className="eyebrow">Websites for local businesses</span>
            </div>
            <h1>Clear, professional websites that help customers choose you.</h1>
            <p>
              I design, build and maintain websites for restaurants, cafés, shops and local services that need a stronger online presence.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goToPage('contact')}>Get a free website audit <ArrowRight size={18} /></button>
              <button className="btn btn-outline" onClick={() => goToPage('work')}>See example builds</button>
            </div>
          </div>

          <div className="audit-board" aria-label="Website audit style preview">
            <div className="audit-header">
              <span className="pulse-dot" /> Website clarity snapshot
            </div>
            <div className="audit-score-wrap">
              <div className="audit-score">87</div>
              <div>
                <strong>Customer clarity score</strong>
                <p>The key details a good small-business site should make obvious.</p>
              </div>
            </div>
            <div className="audit-checks">
              <div><CheckCircle2 /> Menu/services visible</div>
              <div><CheckCircle2 /> Tap-to-call working</div>
              <div><CheckCircle2 /> Mobile layout clean</div>
              <div><CheckCircle2 /> Location and hours clear</div>
            </div>
            <div className="mini-site-frame">
              <div className="mini-site-sidebar">
                <span /> <span /> <span />
              </div>
              <div className="mini-site-main">
                <div className="mini-site-hero" />
                <div className="mini-site-lines"><span /><span /><span /></div>
                <div className="mini-site-cards"><span /><span /><span /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="split-statement-section">
        <div className="container split-statement-grid">
          <div className="large-number">01</div>
          <div>
            <p className="eyebrow">The problem</p>
            <h2>Customers leave when basic details are hard to find.</h2>
          </div>
          <div className="statement-list">
            <p><Search size={18} /> Menus, prices and services should be easy to scan.</p>
            <p><PhoneCall size={18} /> Calls, messages and directions should be one tap away.</p>
            <p><MousePointer2 size={18} /> Every page should have a clear next step.</p>
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading
          eyebrow="Who I build for"
          title="Built around what each business needs customers to do."
          text="Different businesses need different page structures. I keep the layout focused on the action that matters most."
        />
        <div className="business-type-grid">
          {businessTypes.map((item) => {
            const Icon = item.icon;
            return (
              <article className="pricing-card care-feature-card" key={item.type}>
                <div className="type-icon"><Icon size={24} /></div>
                <h3>{item.type}</h3>
                <div className="problem-build">
                  <div><span>Common issue</span><p>{item.problem}</p></div>
                  <div><span>What I build</span><p>{item.build}</p></div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="studio-strip">
        <div className="studio-strip-track">
          <span>mobile-friendly</span><span>easy to update</span><span>clear contact buttons</span><span>fast loading</span><span>ongoing support</span><span>care plans</span>
          <span>mobile-friendly</span><span>easy to update</span><span>clear contact buttons</span><span>fast loading</span><span>ongoing support</span><span>care plans</span>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading
          eyebrow="Build quality"
          title="A good-looking site that is practical after launch."
          text="The site should be quick, clear and simple to maintain when business details change."
        />
        <div className="feature-mosaic">
          {serviceFeatures.slice(0, 4).map((feature, index) => (
            <FeaturePanel key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </section>

      <section className="final-cta-band">
        <div className="container final-cta-inner">
          <div className="final-cta-copy">
            <span className="final-cta-kicker">Ready to improve your online presence?</span>
            <h2>Make it easier for customers to choose you.</h2>
            <p>
              Start with a free audit. I’ll show you what I would improve first: mobile layout, contact clarity and customer trust.
            </p>
          </div>

          <div className="final-cta-actions">
            <button className="btn btn-primary" onClick={() => goToPage('contact')}>
              Request a free audit <ArrowRight size={18} />
            </button>
            <button className="final-cta-secondary" onClick={() => goToPage('work')}>
              View example builds
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
