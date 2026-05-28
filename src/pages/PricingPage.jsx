import PageIntro from '../components/ui/PageIntro.jsx';
import PackageCard from '../components/ui/PackageCard.jsx';
import { faqs, packages } from '../data/siteData.js';

export default function PricingPage({ goToPage }) {
  return (
    <>
      <PageIntro
        eyebrow="Pricing"
        title="Clear packages. No hidden costs."
        text="An upfront build fee, then a monthly care plan to keep the site live and supported."
      />

      <section className="container pricing-layout-section pricing-layout-refined">
        <div className="pricing-side-note">
          <p className="eyebrow">How pricing works</p>
          <h2>Pay once to build. Monthly to maintain.</h2>
          <p>
            The build fee covers design, development and launch.
            Monthly care starts from €30/month and covers hosting support,
            small fixes and ongoing access to me.
          </p>
          <div className="pricing-note-list">
            <span>Upfront build fee</span>
            <span>Monthly care from €30/month</span>
            <span>Hosting and deployment support</span>
            <span>Small updates included by tier</span>
          </div>
        </div>

        <div className="pricing-grid">
          {packages.map((plan) => (
            <PackageCard key={plan.name} plan={plan} goToPage={goToPage} />
          ))}
        </div>
      </section>

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
