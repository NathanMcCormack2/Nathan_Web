import { ArrowRight } from 'lucide-react';
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
        text="Mobile-friendly, professionally built and maintained after launch."
      />

      <section className="container service-system-section">
        <div className="service-system-card dark-panel">
          <p className="eyebrow dark">The approach</p>
          <h2>Every build has three jobs.</h2>
          <div className="system-steps">
            <div><span>01</span><strong>Make the first impression feel professional.</strong></div>
            <div><span>02</span><strong>Put important details where customers expect them.</strong></div>
            <div><span>03</span><strong>Make the next step clear: call, visit or enquire.</strong></div>
          </div>
        </div>

        <div className="service-system-copy">
          <h2>What you receive</h2>
          <p>
            A responsive website with the right pages, clear calls to action,
            key business details, launch setup and optional ongoing support.
          </p>
          <button className="btn btn-primary" onClick={() => goToPage('pricing')}>
            View packages <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="container section-pad services-included-section">
        <div className="services-included-heading">
          <SectionHeading
            eyebrow="Included"
            title="The essentials, handled properly."
            text="No filler. Just what a local-business website needs to work well."
          />
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
            title="From first conversation to live website."
            text="Five clear steps with no vague handovers."
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
    </>
  );
}
