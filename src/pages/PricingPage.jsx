import { ArrowRight, CheckCircle2, Plus } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { faqs } from '../data/siteData.js';
import { useReveal, useMagnetic } from '../lib/interactions.js';

const costFactors = [
  { label: 'Number of pages', detail: 'A 3-page site takes less time than a 7-page build with individual layouts for each section.' },
  { label: 'Content readiness', detail: 'Photos, text and a clear brief ready up front means the build moves faster and costs less.' },
  { label: 'Design complexity', detail: 'A clean, focused site costs less than one with custom animations, illustrations or unusual layouts.' },
  { label: 'Ongoing changes', detail: 'Frequent menu updates, seasonal changes and new photos are ongoing work — that is what the care plan is for.' },
  { label: 'Turnaround time', detail: 'A tight deadline (under 2 weeks) takes priority over other projects and is priced accordingly.' },
  { label: 'Third-party tools', detail: 'Booking systems, payment links or third-party integrations add scope and cost to a build.' },
];

const careCovered = [
  'Hosting and deployment checks',
  'Menu, price or hours updates',
  'Photo swaps and small content edits',
  'Contact form and link checks',
  'Questions answered same day',
  'Seasonal update reminders',
];

export default function PricingPage({ goToPage }) {
  const introRef = useReveal();
  const rangeRef = useReveal();
  const factorsRef = useReveal();
  const careRef = useReveal();
  const faqRef = useReveal();
  const cta = useMagnetic(0.35);

  return (
    <div className="nx-page">
      <section className="nx-intro" ref={introRef}>
        <div className="nx-intro-inner">
          <p className="nx-eyebrow">Pricing</p>
          <h1 className="nx-intro-title">Straightforward pricing for <span className="nx-ital">real businesses.</span></h1>
          <p className="nx-intro-text">No packages to decode. An honest range, a clear explanation of what
          moves the number, and a free conversation before anything is agreed.</p>
        </div>
      </section>

      <section className="nx-price-range" ref={rangeRef}>
        <div className="nx-price-range-inner">
          <div className="nx-price-card">
            <span className="nx-price-tag">Build fee</span>
            <strong className="nx-price-big">€600 – €1,500</strong>
            <p>Paid once. Covers design, build, content setup and launch. Most local-business
            sites land in this range depending on what the site needs to do.</p>
          </div>
          <div className="nx-price-card nx-price-card--alt">
            <span className="nx-price-tag">Monthly care</span>
            <strong className="nx-price-big">from €50<em>/mo</em></strong>
            <p>Optional, cancel anytime. Hosting support, small content updates, fixes, and ongoing
            access to me whenever something needs changing.</p>
          </div>
          <div className="nx-price-note">
            <CheckCircle2 size={16} />
            <p>You'll get a specific number — not a range — after a free audit. Most clients know
            their exact cost before any work begins.</p>
          </div>
        </div>
      </section>

      <section className="nx-factors" ref={factorsRef}>
        <div className="nx-section-head">
          <p className="nx-eyebrow">What affects the cost</p>
          <h2>The price depends on the project — here's what moves it.</h2>
        </div>
        <div className="nx-factor-grid">
          {costFactors.map((f, i) => (
            <article className="nx-factor" key={f.label} style={{ '--d': `${i * 0.05}s` }}>
              <strong>{f.label}</strong>
              <p>{f.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="nx-care" ref={careRef}>
        <div className="nx-care-inner">
          <div className="nx-care-copy">
            <p className="nx-eyebrow nx-eyebrow--light">Monthly care</p>
            <h2>What happens after the site goes live.</h2>
            <p>Menus change, photos get updated, opening hours shift. The care plan means you have
            someone to call rather than logging into a CMS yourself.</p>
            <p>It also covers the practical side — making sure the site is loading, links work, and
            contact forms reach your inbox. Small things that matter when a customer is trying to reach you.</p>
          </div>
          <div className="nx-care-aside">
            <p className="nx-care-aside-title">No long-term contract</p>
            <p className="nx-care-aside-sub">Care plans run month to month. If the site is stable and you don't need updates, pause or cancel any time.</p>
            <p className="nx-eyebrow">Typically covered</p>
            <ul>
              {careCovered.map((item) => <li key={item}><CheckCircle2 size={14} /> {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="nx-faq" ref={faqRef}>
        <div className="nx-faq-inner">
          <div className="nx-faq-head">
            <p className="nx-eyebrow">FAQ</p>
            <h2>Common questions.</h2>
            <p>Straight answers on cost, timelines, content and what happens after launch.</p>
          </div>
          <Accordion.Root type="single" collapsible className="nx-acc">
            {faqs.map((faq, i) => (
              <Accordion.Item value={`q${i}`} key={faq.q} className="nx-acc-item">
                <Accordion.Header>
                  <Accordion.Trigger className="nx-acc-trigger">
                    <span>{faq.q}</span>
                    <Plus className="nx-acc-icon" size={20} />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="nx-acc-content">
                  <p>{faq.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <section className="nx-cta nx-cta--inset">
        <div className="nx-cta-inner">
          <h2 className="nx-cta-h2">Get a specific quote — <span className="nx-ital">free.</span></h2>
          <p className="nx-cta-sub">Send your current website, social page or a rough brief. I'll review it and come back with a real number and a clear breakdown.</p>
          <button className="nx-btn-primary nx-btn-lg" ref={cta} onClick={() => goToPage('contact')}>
            <span>Start with a free audit</span> <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
