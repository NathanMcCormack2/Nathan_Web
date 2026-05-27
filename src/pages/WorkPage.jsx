import { ArrowRight } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';

const projects = [
  {
    eyebrow: 'Restaurant demo',
    title: 'Rockys Diner',
    text: 'A classic American diner website built around atmosphere, menu browsing, opening hours and quick directions.',
    points: ['Classic diner style', 'Menu focused', 'Visit-ready layout'],
    page: 'rockys-diner-demo',
    button: 'View Diner demo',
    preview: 'rockys',
    cardClass: 'rocky-demo-card'
  },
  {
    eyebrow: 'Fine dining demo',
    title: 'Vespera',
    text: 'A luxury restaurant website with editorial visuals, tasting-menu storytelling, private dining and reservation-focused sections.',
    points: ['Luxury direction', 'Reservation focused', 'Private dining'],
    page: 'vespera-demo',
    button: 'View Vespera demo',
    preview: 'vespera',
    cardClass: 'vespera-demo-card'
  },
  {
    eyebrow: 'Fish restaurant demo',
    title: "Sandy's Fish Restaurant",
    text: 'A coastal seafood website with a strong storefront hero, fresh-catch menu sections, gallery, hours and a direct call path.',
    points: ['Coastal style', 'Family friendly', 'Call focused'],
    page: 'sandys-fish-demo',
    button: "View Sandy's demo",
    preview: 'fish',
    cardClass: 'fish-demo-card'
  },
  {
    eyebrow: 'Pizza restaurant demo',
    title: "Mario's Pizza Galway",
    text: 'A warm local pizza website built around phone orders, menu clarity, opening times and a cosy vintage Italian feel.',
    points: ['Phone orders', 'Warm visual style', 'Menu first'],
    page: 'pizza-demo',
    button: "View Pizza demo",
    preview: 'pizza',
    cardClass: ''
  },
  {
    eyebrow: 'Cafe demo',
    title: 'CTRL Coffee',
    text: 'A digital-first cafe website with drink highlights, pickup-style UX, study seating, events and a younger customer feel.',
    points: ['Cafe style', 'Drink focused', 'Modern UX'],
    page: 'common-room-cafe-demo',
    button: 'View Cafe demo',
    preview: 'common',
    cardClass: 'common-demo-card'
  }
];

function ProjectPreview({ type }) {
  if (type === 'rockys') {
    return (
      <div className="rockys-preview-window">
        <div className="rockys-preview-top"><span /><span /><span /></div>
        <div className="rockys-preview-hero">
          <div>
            <small>Rockys</small>
            <strong>Chrome, coffee, burgers, shakes.</strong>
          </div>
          <div className="rockys-preview-sign">Open<br />7am</div>
        </div>
        <div className="rockys-preview-menu"><span /><span /><span /></div>
      </div>
    );
  }

  if (type === 'vespera') {
    return (
      <div className="vespera-preview-window">
        <div className="vespera-preview-top"><span /><span /><span /></div>
        <div className="vespera-preview-hero">
          <div>
            <small>Vespera</small>
            <strong>Black lacquer, rare wine, late tables.</strong>
          </div>
          <div className="vespera-preview-seal" />
        </div>
        <div className="vespera-preview-menu"><span /><span /><span /></div>
      </div>
    );
  }

  if (type === 'fish') {
    return (
      <div className="fish-preview-window">
        <div className="fish-preview-top"><span /><span /><span /></div>
        <div className="fish-preview-hero">
          <div>
            <small>Sandy's</small>
            <strong>Warm fish suppers by the West Coast.</strong>
          </div>
          <div className="fish-preview-plate" />
        </div>
        <div className="fish-preview-menu"><span /><span /><span /></div>
      </div>
    );
  }

  if (type === 'common') {
    return (
      <div className="common-preview-window">
        <div className="common-preview-top"><span /><span /><span /></div>
        <div className="common-preview-hero">
          <div>
            <small>CTRL Coffee</small>
            <strong>Live queue, iced drinks, plug seats.</strong>
          </div>
          <div className="common-preview-phone"><span /><span /><span /></div>
        </div>
        <div className="common-preview-menu"><span /><span /><span /></div>
      </div>
    );
  }

  return (
    <div className="pizza-preview-window">
      <div className="pizza-preview-top"><span /><span /><span /></div>
      <div className="pizza-preview-hero">
        <div>
          <small>Mario's</small>
          <strong>Wood-fired pizza, warm Galway nights.</strong>
        </div>
        <div className="pizza-preview-circle"><span /><span /><span /></div>
      </div>
      <div className="pizza-preview-menu"><span /><span /><span /></div>
    </div>
  );
}

export default function WorkPage({ goToPage }) {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Demo projects built for real local business use cases."
        text="Each project shows a different direction: diner, fine dining, seafood, pizza and cafe. The goal is simple: make the business feel trustworthy, memorable and easy to contact."
      />

      <section className="container featured-demo-stack">
        {projects.map((project) => (
          <article className={`featured-demo-card ${project.cardClass}`} key={project.title}>
            <div className="featured-demo-content">
              <p className="eyebrow">{project.eyebrow}</p>
              <h2>{project.title}</h2>
              <p>{project.text}</p>

              <div className="featured-demo-points">
                {project.points.map((point) => <span key={point}>{point}</span>)}
              </div>

              <button className="btn btn-primary" onClick={() => goToPage(project.page)}>
                {project.button} <ArrowRight size={18} />
              </button>
            </div>

            <div className="featured-demo-preview" aria-hidden="true">
              <ProjectPreview type={project.preview} />
            </div>
          </article>
        ))}
      </section>

      <section className="container work-cta-panel">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>Need a site like one of these?</h2>
          <p>
            Send me your business details and I can suggest the best layout, style and pages for your website.
          </p>
        </div>

        <button className="btn btn-primary" onClick={() => goToPage('contact')}>
          Request a quote <ArrowRight size={18} />
        </button>
      </section>
    </>
  );
}
