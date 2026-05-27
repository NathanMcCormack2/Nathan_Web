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
        title="Focused websites for local businesses."
        text="I build practical, mobile-friendly websites that make your business easier to trust, understand and contact."
      />

      <section className="container service-system-section">
        <div className="service-system-card dark-panel">
          <p className="eyebrow dark">Website system</p>

          <h2>Every build has three jobs.</h2>

          <div className="system-steps">
            <div>
              <span>01</span>
              <strong>Make the first impression feel professional.</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Put the important details where customers expect them.</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Make the next step clear: call, visit, enquire or order.</strong>
            </div>
          </div>
        </div>

        <div className="service-system-copy">
          <h2>What you receive</h2>

          <p>
            A responsive website with the right pages, clear calls to action, key business details, launch setup and optional ongoing support.
          </p>

          <button className="btn btn-primary" onClick={() => goToPage('pricing')}>
            View website packages <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="container section-pad services-included-section">
        <div className="services-included-heading">
          <SectionHeading
            eyebrow="Included"
            title="The essentials, handled properly."
            text="No filler features. Just the pieces a local-business website needs to work well."
          />

          <div className="included-note">
            <span>Built for clarity</span>
            <p>Mobile layout, contact details, content structure and launch support working together.</p>
          </div>
        </div>

        <div className="service-feature-wall">
          {serviceFeatures.slice(0, 6).map((feature, index) => (
            <FeaturePanel key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </section>

      <section className="process-page-section">
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            title="Simple process from audit to launch."
            text="Clear steps, clear feedback points and no vague handover."
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

            <h2>Ready for real customers.</h2>

            <ul>
              <li><CheckCircle2 /> Responsive desktop and mobile pages</li>
              <li><CheckCircle2 /> Clear calls to action</li>
              <li><CheckCircle2 /> Contact, location and social links</li>
              <li><CheckCircle2 /> Deployment and launch support</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Added later if needed</p>

            <h2>No expensive extras before you need them.</h2>

            <ul>
              <li><CheckCircle2 /> Booking systems</li>
              <li><CheckCircle2 /> Online payments</li>
              <li><CheckCircle2 /> E-commerce</li>
              <li><CheckCircle2 /> Admin dashboards</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
