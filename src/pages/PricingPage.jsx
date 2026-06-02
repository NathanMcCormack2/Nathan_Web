import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';
import { faqs } from '../data/siteData.js';

const costFactors = [
  { label: 'Number of pages',    detail: 'A 3-page site takes less time than a 7-page build with individual layouts for each section.' },
  { label: 'Content readiness',  detail: 'If you have photos, text and a clear brief ready, the build moves faster and costs less.' },
  { label: 'Design complexity',  detail: 'A clean, focused site costs less than one with custom animations, illustrations or unusual layouts.' },
  { label: 'Ongoing changes',    detail: 'Frequent menu updates, seasonal changes and new photos are ongoing work — this is what the care plan is for.' },
  { label: 'Turnaround time',    detail: 'A tight deadline (under 2 weeks) takes priority over other projects and is priced accordingly.' },
  { label: 'Third-party tools',  detail: 'Booking systems, payment links or third-party integrations add scope and cost to a build.' },
];

export default function PricingPage({ goToPage }) {
  return (
    <>
      <PageIntro
        eyebrow="Pricing"
        title="Straightforward pricing for real businesses."
        text="No packages to pick from. Just an honest range, a clear explanation of what affects the final number, and a free conversation before anything is agreed."
      />

      {/* ── PRICE RANGE ── */}
      <section className="pricing-range-section">
        <div className="container pricing-range-inner">

          <div className="pricing-range-card">
            <div className="pricing-range-block">
              <span>Build fee</span>
              <strong>€600 – €1,500</strong>
              <p>
                Paid once. Covers the design, build, content setup and launch.
                Most local business websites land somewhere in this range depending
                on what the site needs to do.
              </p>
            </div>
            <div className="pricing-range-divider" aria-hidden="true" />
            <div className="pricing-range-block">
              <span>Monthly care</span>
              <strong>from €50 / month</strong>
              <p>
                Optional, cancel any time. Covers hosting support, small content
                updates, fixes and ongoing access to me when something needs changing.
              </p>
            </div>
          </div>

          <div className="pricing-range-note">
            <CheckCircle2 size={16} />
            <p>
              I'll give you a specific number — not a range — after a free audit.
              Most clients know their exact cost before any work begins.
            </p>
          </div>

        </div>
      </section>

      {/* ── WHAT AFFECTS THE COST ── */}
      <section className="container pricing-factors-light">
        <div className="pricing-factors-head">
          <p className="eyebrow">What affects the cost</p>
          <h2>The price depends on the project — here is what moves it.</h2>
          <p>
            Two businesses can need very different sites. A simple 3-page café
            website is a different scope to a full restaurant build with a gallery,
            seasonal menus and a contact form. These are the things I look at when
            putting together a quote.
          </p>
        </div>

        <div className="pricing-factors-list">
          {costFactors.map((f) => (
            <div key={f.label} className="pricing-factor-row">
              <strong>{f.label}</strong>
              <p>{f.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CARE PLAN ── */}
      <section className="pricing-care-section">
        <div className="container pricing-care-inner">
          <div className="pricing-care-copy">
            <p className="eyebrow dark">Monthly care</p>
            <h2>What happens after the site goes live.</h2>
            <p>
              A website needs occasional attention — menus change, photos get
              updated, opening hours shift. The monthly care plan means you have
              someone to call rather than logging into a CMS and doing it yourself.
            </p>
            <p>
              It also covers the practical side: making sure the site is loading,
              links are working and contact forms are reaching your inbox. Small
              things that matter when a customer is trying to get in touch.
            </p>
            <div className="pricing-care-range">
            </div>
          </div>
          <div className="pricing-care-aside">
            <p className="pricing-care-aside-title">No long-term contract</p>
            <p>Care plans run month to month. If the site is stable and you don't need updates, you can pause or cancel at any time.</p>
            <div className="pricing-care-included">
              <p className="eyebrow">Typically covered</p>
              {[
                'Hosting and deployment checks',
                'Menu, price or hours updates',
                'Photo swaps and small content edits',
                'Contact form and link checks',
                'Questions answered same day',
                'Seasonal update reminders',
              ].map(item => (
                <div key={item}><CheckCircle2 size={14} />{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pricing-cta-section">
        <div className="container pricing-cta-inner">
          <h2>Get a specific quote — free, no commitment.</h2>
          <p>
            Send me your current website, social page or a rough brief. I'll review
            it and come back with a real number and a clear breakdown of what's included.
          </p>
          <button className="btn btn-primary" onClick={() => goToPage('contact')}>
            Start with a free audit <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Common questions.</h2>
            <p className="faq-intro">
              Straight answers on cost, timelines, content and what happens after launch.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}