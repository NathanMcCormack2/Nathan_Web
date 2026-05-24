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
        title="Websites that give local customers the answers they came for."
        text="I design, build and maintain focused websites for local businesses that need a clear online presence without unnecessary booking systems, payment features or bloated agency costs."
      />

      <section className="container service-system-section">
        <div className="service-system-card dark-panel">
          <p className="eyebrow dark">Website system</p>

          <h2>Every build is designed to do three jobs.</h2>

          <div className="system-steps">
            <div>
              <span>01</span>
              <strong>Build trust quickly when someone lands on the site.</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Answer the practical questions customers already have.</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Make the next step obvious: call, visit, enquire or get directions.</strong>
            </div>
          </div>
        </div>

        <div className="service-system-copy">
          <h2>What you receive</h2>

          <p>
            A professional, mobile-friendly website built around your business:
            services, menus, opening hours, images, location, contact details,
            social links and clear calls to action. I also handle the launch setup
            and can keep the website updated through an optional monthly care plan.
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
            title="A focused website setup, not a pile of unnecessary extras."
            text="Each feature is there for a reason: to help customers understand the business, trust what they see and take the next step without friction."
          />

          <div className="included-note">
            <span>Built for clarity</span>
            <p>Mobile layout, key business details, launch setup and ongoing support all work together as one system.</p>
          </div>
        </div>

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
            title="A clear build process from audit to launch."
            text="You know what is happening at each stage: what I need from you, what I am building, when the site is reviewed and how it goes live."
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

            <h2>Professional, practical and ready to launch.</h2>

            <ul>
              <li><CheckCircle2 /> Responsive pages for desktop and mobile</li>
              <li><CheckCircle2 /> Clear calls to action</li>
              <li><CheckCircle2 /> Business-specific page structure</li>
              <li><CheckCircle2 /> Contact, location and social links</li>
              <li><CheckCircle2 /> Deployment and launch support</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Added later if needed</p>

            <h2>No expensive complexity before you need it.</h2>

            <ul>
              <li><CheckCircle2 /> Booking systems</li>
              <li><CheckCircle2 /> Online payments</li>
              <li><CheckCircle2 /> E-commerce functionality</li>
              <li><CheckCircle2 /> Custom admin dashboards</li>
              <li><CheckCircle2 /> Database-backed features</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}