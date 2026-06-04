import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useReveal, useMagnetic } from '../lib/interactions.js';

const projects = [
  {
    eyebrow: 'Inn · Bar · Kitchen', title: 'Tigh Mhóir',
    text: 'A characterful Irish inn and pub on the Mayo coast. Rooms, food menu, trad events and a proper bar — built with GSAP, Motion and Lenis smooth scroll.',
    points: ['Atmospheric design', 'GSAP animations', 'Smooth scroll'],
    page: 'inn-demo', button: 'View Inn demo', preview: 'inn', ac: '#c8873e',
  },
  {
    eyebrow: 'Fish restaurant', title: "Sandy's Fish Restaurant",
    text: 'A coastal seafood website with a strong storefront hero, fresh-catch menu sections, gallery, hours and a direct call path.',
    points: ['Coastal style', 'Family friendly', 'Call focused'],
    page: 'sandys-fish-demo', button: "View Sandy's demo", preview: 'fish', ac: '#3d86b0',
  },
  {
    eyebrow: 'American diner', title: "Rocky's Diner",
    text: 'A classic American diner website built around atmosphere, menu browsing, opening hours and quick directions.',
    points: ['Classic Americana', 'Menu focused', 'Visit-ready'],
    page: 'rockys-diner-demo', button: 'View Diner demo', preview: 'rockys', ac: '#c43f48',
  },
  {
    eyebrow: 'Pizza restaurant', title: "Mario's Pizza Galway",
    text: 'A warm local pizza website built around phone orders, menu clarity, opening times and a cosy vintage Italian feel.',
    points: ['Phone orders', 'Warm style', 'Menu first'],
    page: 'pizza-demo', button: 'View Pizza demo', preview: 'pizza', ac: '#c02b19',
  },
  {
    eyebrow: 'Café', title: 'CTRL Coffee',
    text: 'A digital-first café website with drink highlights, pickup-style UX, study seating, events and a younger customer feel.',
    points: ['Café style', 'Drink focused', 'Modern UX'],
    page: 'common-room-cafe-demo', button: 'View Café demo', preview: 'common', ac: '#c4471a',
  },
  {
    eyebrow: 'Fine dining', title: 'Vespera',
    text: 'A luxury restaurant website with editorial visuals, tasting-menu storytelling, private dining and reservation-focused sections.',
    points: ['Luxury direction', 'Reservation focused', 'Private dining'],
    page: 'vespera-demo', button: 'View Vespera demo', preview: 'vespera', ac: '#b98d54',
  },
];

function ProjectPreview({ type }) {
  if (type === 'rockys') return (
    <div className="rockys-preview-window">
      <div className="rockys-preview-top"><span /><span /><span /></div>
      <div className="rockys-preview-hero"><div><small>Rockys</small><strong>Chrome, coffee, burgers, shakes.</strong></div><div className="rockys-preview-sign">Open<br />7am</div></div>
      <div className="rockys-preview-menu"><span /><span /><span /></div>
    </div>
  );
  if (type === 'vespera') return (
    <div className="vespera-preview-window">
      <div className="vespera-preview-top"><span /><span /><span /></div>
      <div className="vespera-preview-hero"><div><small>Vespera</small><strong>Black lacquer, rare wine, late tables.</strong></div><div className="vespera-preview-seal" /></div>
      <div className="vespera-preview-menu"><span /><span /><span /></div>
    </div>
  );
  if (type === 'fish') return (
    <div className="fish-preview-window">
      <div className="fish-preview-top"><span /><span /><span /></div>
      <div className="fish-preview-hero"><div><small>Sandy's</small><strong>Warm fish suppers by the West Coast.</strong></div><div className="fish-preview-plate" /></div>
      <div className="fish-preview-menu"><span /><span /><span /></div>
    </div>
  );
  if (type === 'common') return (
    <div className="common-preview-window">
      <div className="common-preview-top"><span /><span /><span /></div>
      <div className="common-preview-hero"><div><small>CTRL Coffee</small><strong>Live queue, iced drinks, plug seats.</strong></div><div className="common-preview-phone"><span /><span /><span /></div></div>
      <div className="common-preview-menu"><span /><span /><span /></div>
    </div>
  );
  if (type === 'inn') return (
    <div className="inn-preview-window">
      <div className="inn-preview-top"><span /><span /><span /></div>
      <div className="inn-preview-hero"><div><small>Tigh Mhóir · Since 1892</small><strong>Bar · Inn · Kitchen</strong></div></div>
      <div className="inn-preview-band"><span /><span /><span /></div>
    </div>
  );
  return (
    <div className="pizza-preview-window">
      <div className="pizza-preview-top"><span /><span /><span /></div>
      <div className="pizza-preview-hero"><div><small>Mario's</small><strong>Wood-fired pizza, warm Galway nights.</strong></div><div className="pizza-preview-circle"><span /><span /><span /></div></div>
      <div className="pizza-preview-menu"><span /><span /><span /></div>
    </div>
  );
}

function ProjectCard({ project, index, goToPage }) {
  const ref = useReveal();
  const flip = index % 2 === 1;
  return (
    <article
      className={`nx-case ${flip ? 'nx-case--flip' : ''}`}
      ref={ref}
      style={{ '--ac': project.ac }}
    >
      <div className="nx-case-content">
        <span className="nx-case-num">{String(index + 1).padStart(2, '0')}</span>
        <p className="nx-eyebrow">{project.eyebrow}</p>
        <h2>{project.title}</h2>
        <p className="nx-case-text">{project.text}</p>
        <div className="nx-case-tags">
          {project.points.map((p) => <span key={p}>{p}</span>)}
        </div>
        <button className="nx-btn-primary" onClick={() => goToPage(project.page)}>
          <span>{project.button}</span> <ArrowUpRight size={18} />
        </button>
      </div>
      <div className="nx-case-preview" aria-hidden="true">
        <div className="nx-case-preview-inner"><ProjectPreview type={project.preview} /></div>
      </div>
    </article>
  );
}

export default function WorkPage({ goToPage }) {
  const introRef = useReveal();
  const ctaRef = useReveal();
  const cta = useMagnetic(0.35);

  return (
    <div className="nx-page">
      <section className="nx-intro" ref={introRef}>
        <div className="nx-intro-inner">
          <p className="nx-eyebrow">Work</p>
          <h1 className="nx-intro-title">Demo projects built for real <span className="nx-ital">local business use cases.</span></h1>
          <p className="nx-intro-text">Six fully designed concepts — each one a different industry, mood and layout. Open any of them live.</p>
        </div>
      </section>

      <section className="nx-cases">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} goToPage={goToPage} />
        ))}
      </section>

      <section className="nx-cta nx-cta--inset" ref={ctaRef}>
        <div className="nx-cta-inner">
          <p className="nx-eyebrow">Next step</p>
          <h2 className="nx-cta-h2">Need a site like <span className="nx-ital">one of these?</span></h2>
          <p className="nx-cta-sub">Send your business details and I'll suggest the best layout, style and pages for your website.</p>
          <button className="nx-btn-primary nx-btn-lg" ref={cta} onClick={() => goToPage('contact')}>
            <span>Request a quote</span> <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
