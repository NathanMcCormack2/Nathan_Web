import PageIntro from '../components/ui/PageIntro.jsx';
import PackageCard from '../components/ui/PackageCard.jsx';
import { faqs, packages } from '../data/siteData.js';

export default function PricingPage({ goToPage }) {
  return (
    <>
      <PageIntro
        eyebrow="Pricing"
        title="Clear packages, flexible enough for different local businesses."
        text="These are starting prices. Final quotes depend on page count, content, images, copywriting help and how much ongoing support the client wants."
      />

      <section className="container pricing-layout-section">
        <div className="pricing-side-note">
          <p className="eyebrow">How to sell this</p>
          <h2>Charge for the build. Charge monthly for keeping it useful.</h2>
          <p>
            The upfront fee covers design, development and launch. The monthly fee covers care: hosting support, updates, checks and ongoing help.
          </p>
        </div>
        <div className="pricing-grid">
          {packages.map((plan) => (
            <PackageCard key={plan.name} plan={plan} goToPage={goToPage} />
          ))}
        </div>
      </section>

      <section className="container value-comparison">
        <div className="comparison-card bad">
          <span>Without a proper site</span>
          <h3>Customers have to work too hard.</h3>
          <p>They search through old posts, screenshots, outdated pages or missing menus before deciding whether to contact the business.</p>
        </div>
        <div className="comparison-card good">
          <span>With a focused site</span>
          <h3>Customers get the answer quickly.</h3>
          <p>The business has one polished place for menus, services, location, hours, photos, calls and enquiries.</p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Questions clients are likely to ask.</h2>
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
