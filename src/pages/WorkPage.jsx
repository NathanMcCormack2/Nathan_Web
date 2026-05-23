import { ArrowRight } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';
import CaseStudyCard from '../components/ui/CaseStudyCard.jsx';
import { examples } from '../data/siteData.js';

export default function WorkPage({ goToPage }) {
  return (
    <>
      <PageIntro
        eyebrow="Example work"
        title="Concept websites that show the quality clients can expect."
        text="Until real client projects are added, these demo builds show the visual direction, structure and business thinking behind the service. Replace the image slots with screenshots or photos as you create projects."
      />

      <section className="container work-index-section">
        <div className="work-index-card">
          <span>01</span>
          <h2>Not just screenshots.</h2>
          <p>Each example should explain the business problem, the structure chosen and the customer action the page is designed to support.</p>
        </div>
        <div className="work-index-card secondary">
          <span>02</span>
          <h2>Show your process.</h2>
          <p>Local businesses trust people who can explain decisions clearly. This section gives you a more professional sales angle.</p>
        </div>
      </section>

      <section className="container case-study-stack">
        {examples.map((example, index) => (
          <CaseStudyCard key={example.title} example={example} index={index} />
        ))}
      </section>

      <section className="container work-cta-panel">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>Turn these demos into real proof.</h2>
          <p>After your first few jobs, swap these concept projects for real client screenshots, before/after notes and measurable improvements.</p>
        </div>
        <button className="btn btn-primary" onClick={() => goToPage('contact')}>Request a quote flow <ArrowRight size={18} /></button>
      </section>
    </>
  );
}
