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
          <p>
            Each example should explain the business problem, the structure chosen and the customer action the page is designed to support.
          </p>
        </div>

        <div className="work-index-card secondary">
          <span>02</span>
          <h2>Show your process.</h2>
          <p>
            Local businesses trust people who can explain decisions clearly. This section gives you a more professional sales angle.
          </p>
        </div>
      </section>

      <section className="container featured-demo-stack">
        <div className="featured-demo-card">
          <div className="featured-demo-content">
            <p className="eyebrow">Featured demo</p>
            <h2>Mario's Pizza Galway</h2>
            <p>
              A full demo website for a warm local pizza restaurant, built around phone orders, a clear menu, opening times, atmosphere and a sense of place.
            </p>

            <div className="featured-demo-points">
              <span>Mobile friendly</span>
              <span>Phone order focused</span>
              <span>Vintage Italian art direction</span>
            </div>

            <button className="btn btn-primary" onClick={() => goToPage('pizza-demo')}>
              View Mario's Pizza demo <ArrowRight size={18} />
            </button>
          </div>

          <div className="featured-demo-preview" aria-hidden="true">
            <div className="pizza-preview-window">
              <div className="pizza-preview-top">
                <span />
                <span />
                <span />
              </div>

              <div className="pizza-preview-hero">
                <div>
                  <small>Mario's</small>
                  <strong>Wood-fired pizza, warm Galway nights.</strong>
                </div>
                <div className="pizza-preview-circle">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="pizza-preview-menu">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="featured-demo-card fish-demo-card">
          <div className="featured-demo-content">
            <p className="eyebrow">Featured demo</p>
            <h2>Sandy's Fish Restaurant</h2>
            <p>
              A full coastal fish restaurant demo with a cinematic storefront hero, fresh-catch menu board, warm family copy, gallery, opening hours and direct call path.
            </p>

            <div className="featured-demo-points">
              <span>Tourist focused</span>
              <span>Family friendly</span>
              <span>Rustic coastal art direction</span>
            </div>

            <button className="btn btn-primary" onClick={() => goToPage('sandys-fish-demo')}>
              View Sandy's fish demo <ArrowRight size={18} />
            </button>
          </div>

          <div className="featured-demo-preview" aria-hidden="true">
            <div className="fish-preview-window">
              <div className="fish-preview-top">
                <span />
                <span />
                <span />
              </div>

              <div className="fish-preview-hero">
                <div>
                  <small>Sandy's</small>
                  <strong>Warm fish suppers by the West Coast.</strong>
                </div>
                <div className="fish-preview-plate" />
              </div>

              <div className="fish-preview-menu">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="featured-demo-card rocky-demo-card">
          <div className="featured-demo-content">
            <p className="eyebrow">Featured demo</p>
            <h2>Rockys Diner</h2>
            <p>
              A nostalgic American diner demo with a cinematic chrome storefront hero, booth-and-counter atmosphere, full menu board, gallery, hours and direct call/directions path.
            </p>

            <div className="featured-demo-points">
              <span>Tourist friendly</span>
              <span>Family focused</span>
              <span>Classic American diner art direction</span>
            </div>

            <button className="btn btn-primary" onClick={() => goToPage('rockys-diner-demo')}>
              View Rockys Diner demo <ArrowRight size={18} />
            </button>
          </div>

          <div className="featured-demo-preview" aria-hidden="true">
            <div className="rockys-preview-window">
              <div className="rockys-preview-top">
                <span />
                <span />
                <span />
              </div>

              <div className="rockys-preview-hero">
                <div>
                  <small>Rockys</small>
                  <strong>Chrome, coffee, burgers, shakes.</strong>
                </div>
                <div className="rockys-preview-sign">Open<br />7am</div>
              </div>

              <div className="rockys-preview-menu">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
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
          <p>
            After your first few jobs, swap these concept projects for real client screenshots, before/after notes and measurable improvements.
          </p>
        </div>

        <button className="btn btn-primary" onClick={() => goToPage('contact')}>
          Request a quote flow <ArrowRight size={18} />
        </button>
      </section>
    </>
  );
}
