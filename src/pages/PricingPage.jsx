import PageIntro from '../components/ui/PageIntro.jsx';
import PackageCard from '../components/ui/PackageCard.jsx';
import { faqs, packages } from '../data/siteData.js';

export default function PricingPage({ goToPage }) {
  return (
    <>
      <PageIntro
        eyebrow="Pricing"
        title="Clear website packages with a simple monthly care plan."
        text="Each website has an upfront build fee, then a minimum monthly care plan from €30/month if you want me to host, monitor and maintain the live site."
      />

      <section className="container pricing-layout-section pricing-layout-refined">
        <div className="pricing-side-note">
          <p className="eyebrow">How pricing works</p>

          <h2>Pay once for the build, then monthly to keep the site live and supported.</h2>

          <p>
            The upfront fee covers the design, development and launch of the website.
            The monthly care plan starts from €25/month and covers the basic running setup:
            hosting/deployment support, SSL/domain checks, small fixes and light support from me.
          </p>

          <div className="pricing-note-list">
            <span>Upfront build fee for the website</span>
            <span>Minimum care plan from €25/month</span>
            <span>Basic hosting/deployment support included</span>
            <span>Small updates and fixes depending on the care level</span>
          </div>
        </div>

        <div className="pricing-grid">
          {packages.map((plan) => (
            <PackageCard key={plan.name} plan={plan} goToPage={goToPage} />
          ))}
        </div>
      </section>

      <section className="container monthly-care-strip">
        <div>
          <p className="eyebrow">Monthly care</p>
          <h2>The minimum monthly fee keeps the website live and looked after.</h2>
        </div>

        <p>
          For the starter tier, the monthly charge is mainly there to cover the practical
          running setup of the website and a small amount of support from me. Higher care
          plans can include more regular content updates, checks and improvements.
        </p>
      </section>

      <section className="faq-section">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">FAQ</p>

            <h2>Common questions before starting.</h2>

            <p className="faq-intro">
              Straight answers around upfront cost, monthly care, timelines, content,
              maintenance and what is included before the website goes live.
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