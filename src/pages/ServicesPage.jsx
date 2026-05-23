import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import FeaturePanel from '../components/ui/FeaturePanel.jsx';
import { processSteps, serviceFeatures } from '../data/siteData.js';

export default function ServicesPage({ goToPage }) {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="A complete website build, shaped around what customers need to know."
        text="This is not about throwing a business into a generic template. The structure, pages and sections are chosen around the business type, customer behaviour and future maintenance."
      />

      <section className="container service-system-section">
        <div className="service-system-card dark-panel">
          <p className="eyebrow dark">Website system</p>
          <h2>Every build has three jobs.</h2>
          <div className="system-steps">
            <div><span>01</span><strong>Make the business look credible.</strong></div>
            <div><span>02</span><strong>Make key information easy to find.</strong></div>
            <div><span>03</span><strong>Make contact or directions obvious.</strong></div>
          </div>
        </div>
        <div className="service-system-copy">
          <h2>What the client actually receives</h2>
          <p>
            A professional, mobile-friendly website with pages and sections for services, menus, opening hours, images, location, social links and contact. I also handle launch setup and can keep it updated through a monthly care plan.
          </p>
          <button className="btn btn-primary" onClick={() => goToPage('pricing')}>View packages <ArrowRight size={18} /></button>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading
          eyebrow="Included"
          title="Practical features that small businesses actually need."
          text="The feature set is intentionally focused. It avoids expensive complexity while still making the business look professional."
        />
        <div className="service-feature-wall">
          {serviceFeatures.map((feature, index) => (
            <FeaturePanel key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </section>

      <section className="process-page-section">
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            title="A proper build process from audit to launch."
            text="This page is designed to show clients you are organised, not just someone who can make a page look nice."
          />
          <div className="process-roadmap">
            {processSteps.map((step) => (
              <article className="roadmap-item" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <div className="included-not-included">
          <div>
            <p className="eyebrow">Built in</p>
            <h2>Simple, professional and useful.</h2>
            <ul>
              <li><CheckCircle2 /> Responsive pages</li>
              <li><CheckCircle2 /> Clear calls to action</li>
              <li><CheckCircle2 /> Local business content structure</li>
              <li><CheckCircle2 /> Deployment support</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Added later if needed</p>
            <h2>No unnecessary complexity at the start.</h2>
            <ul>
              <li><CheckCircle2 /> Booking systems</li>
              <li><CheckCircle2 /> Online payments</li>
              <li><CheckCircle2 /> Custom admin dashboards</li>
              <li><CheckCircle2 /> Database-backed features</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
