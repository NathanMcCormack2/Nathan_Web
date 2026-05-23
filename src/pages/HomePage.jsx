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
              <span className="eyebrow">Local business websites</span>
              <span className="micro-proof">Built with React, CSS, GitHub and care plans</span>
            </div>
            <h1>Websites that make small businesses look established before customers even walk in.</h1>
            <p>
              I build clean, distinctive websites for restaurants, cafés, shops and local services that need more than a Facebook page — without paying agency prices for features they do not need.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goToPage('contact')}>Get a website quote <ArrowRight size={18} /></button>
              <button className="btn btn-outline" onClick={() => goToPage('work')}>See example builds</button>
            </div>
          </div>

          <div className="audit-board" aria-label="Website audit style preview">
            <div className="audit-header">
              <span className="pulse-dot" /> Website readiness snapshot
            </div>
            <div className="audit-score-wrap">
              <div className="audit-score">87</div>
              <div>
                <strong>Customer-ready score</strong>
                <p>What a finished small-business site should make obvious.</p>
              </div>
            </div>
            <div className="audit-checks">
              <div><CheckCircle2 /> Menu/services visible</div>
              <div><CheckCircle2 /> Tap-to-call working</div>
              <div><CheckCircle2 /> Mobile layout clean</div>
              <div><CheckCircle2 /> Google Maps path clear</div>
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
            <p><Search size={18} /> Searchers need clear pages, not scattered posts.</p>
            <p><PhoneCall size={18} /> Mobile users need instant contact options.</p>
            <p><MousePointer2 size={18} /> Visitors need obvious next steps.</p>
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading
          eyebrow="Who I build for"
          title="Designed around the real questions local customers ask."
          text="Each business type gets a slightly different structure, because a restaurant site should not feel like a barber site with different photos pasted in."
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
          <span>mobile-first</span><span>maintainable</span><span>local SEO basics</span><span>fast loading</span><span>clear CTAs</span><span>care plans</span>
          <span>mobile-first</span><span>maintainable</span><span>local SEO basics</span><span>fast loading</span><span>clear CTAs</span><span>care plans</span>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading
          eyebrow="Build quality"
          title="A site that looks good, works properly and can be maintained after launch."
          text="The visible design matters, but so does the setup behind it: clean code, version control, deployment and repeatable updates."
        />
        <div className="feature-mosaic">
          {serviceFeatures.slice(0, 6).map((feature, index) => (
            <FeaturePanel key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </section>

      <section className="cta-slab">
        <div className="container cta-slab-inner">
          <Sparkles size={32} />
          <h2>Give customers one clear place to understand your business.</h2>
          <p>Not a generic template. A focused website that shows what you do, where you are and why customers should trust you.</p>
          <button className="btn btn-inverted" onClick={() => goToPage('contact')}>Start with a free quote</button>
        </div>
      </section>
    </>
  );
}
