import { ArrowRight, CheckCircle2, MousePointer2, PhoneCall, Search, Sparkles } from 'lucide-react';
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
              <span className="eyebrow">Professional builds · clear pricing · ongoing support</span>
            </div>
            <h1>Websites that make small businesses look professional before customers even walk in.</h1>
            <p>
              I design, build and maintain clean websites for restaurants, cafés, shops and local services that need a proper online home — without bloated agency costs.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goToPage('contact')}>Get a free website audit <ArrowRight size={18} /></button>
              <button className="btn btn-outline" onClick={() => goToPage('work')}>See example builds</button>
            </div>
          </div>

          <div className="audit-board" aria-label="Website audit style preview">
            <div className="audit-header">
              <span className="pulse-dot" /> Example readiness audit snapshot
            </div>
            <div className="audit-score-wrap">
              <div className="audit-score">87</div>
              <div>
                <strong>Customer clarity score</strong>
                <p>What a finished small-business site should make obvious.</p>
              </div>
            </div>
            <div className="audit-checks">
              <div><CheckCircle2 /> Menu/services visible</div>
              <div><CheckCircle2 /> Tap-to-call working</div>
              <div><CheckCircle2 /> Mobile layout clean</div>
              <div><CheckCircle2 /> Location and opening hours clear</div>
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
            <h2>Most small business websites do not fail because of code. They fail because customers cannot find what they need fast enough.</h2>
          </div>
          <div className="statement-list">
            <p><Search size={18} /> Customers need menus, prices and services without digging through social posts.</p>
            <p><PhoneCall size={18} /> Mobile users should be able to call, message or get directions instantly.</p>
            <p><MousePointer2 size={18} /> Visitors need one obvious next step: call, visit, enquire or order.</p>
          </div>
        </div>
      </section>

      <section className="free-audit-section">
        <div className="container free-audit-grid">
          <div className="free-audit-copy">
            <p className="eyebrow">Free website audit</p>
            <h2>Before you commit to a new website, I’ll show you what is holding your current online presence back.</h2>
            <p>
              Send over your current website, Facebook page, Instagram profile or Google listing. I’ll review what customers see first: trust, mobile layout, contact clarity, menu/services visibility and whether the next step is obvious.
            </p>

            <div className="audit-proof-list" aria-label="Audit checks">
              <div><CheckCircle2 size={18} /> Mobile clarity</div>
              <div><CheckCircle2 size={18} /> Contact path</div>
              <div><CheckCircle2 size={18} /> Trust signals</div>
              <div><CheckCircle2 size={18} /> Menu/services visibility</div>
            </div>

            <button className="btn btn-primary audit-main-cta" onClick={() => goToPage('contact')}>
              Request a free audit <ArrowRight size={18} />
            </button>
          </div>

          <div className="audit-diagnostic-panel" aria-label="Example website audit report">
            <div className="diagnostic-topline">
              <span>Audit preview</span>
              <strong>No obligation</strong>
            </div>

            <div className="audit-meter-card">
              <div>
                <span className="meter-label">Customer friction</span>
                <strong>High impact fixes</strong>
              </div>
              <div className="meter-ring" aria-hidden="true">4</div>
            </div>

            <div className="diagnostic-stack">
              <div className="diagnostic-row is-strong">
                <span>Opening hours</span>
                <strong>Clear</strong>
              </div>
              <div className="diagnostic-row is-warning">
                <span>Menu / services</span>
                <strong>Hard to find</strong>
              </div>
              <div className="diagnostic-row is-warning">
                <span>Mobile call button</span>
                <strong>Missing</strong>
              </div>
              <div className="diagnostic-row">
                <span>First impression</span>
                <strong>Needs polish</strong>
              </div>
            </div>

            <div className="audit-note-card">
              <Sparkles size={19} />
              <p>
                You get a short, plain-English review of what I would improve first — useful even if you do not go ahead with a full website build.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading
          eyebrow="Who I build for"
          title="Designed around the real questions local customers ask."
          text="A restaurant, barber, café and local shop all need different website structures. I build around what their customers actually look for first."
        />
        <div className="business-type-grid">
          {businessTypes.map((item) => {
            const Icon = item.icon;
            return (
              <article className="business-type-card" key={item.type}>
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
          <span>mobile-friendly</span><span>easy to update</span><span>clear contact buttons</span><span>fast loading</span><span>constant support</span><span>care plans</span>
          <span>mobile-friendly</span><span>easy to update</span><span>clear contact buttons</span><span>fast loading</span><span>constant support</span><span>care plans</span>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading
          eyebrow="Build quality"
          title="A site that looks good, works properly and can be maintained after launch."
          text="The design is what customers see. The setup behind it is what keeps the site fast, stable and easy to update after launch."
        />
        <div className="feature-mosaic">
          {serviceFeatures.slice(0, 6).map((feature, index) => (
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
              Start with a free audit and I’ll show you the first things I would improve:
              mobile layout, contact clarity, trust, and how easy it is for customers to take action.
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
