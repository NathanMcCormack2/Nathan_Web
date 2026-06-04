import { Briefcase, Code2, GraduationCap } from 'lucide-react';
import profilePhoto from '../assets/nathan-profile.jpg';
import { stackItems } from '../data/siteData.js';
import { useReveal, useParallax } from '../lib/interactions.js';

export default function AboutPage() {
  const introRef = useReveal();
  const splitRef = useReveal();
  const credRef = useReveal();
  const stackRef = useReveal();
  const photoRef = useParallax(0.05);

  const credentials = [
    { icon: GraduationCap, title: 'Software & Electronic Engineering', text: 'A Level 8 degree giving a strong foundation in software development, problem solving and technical project work.' },
    { icon: Briefcase, title: 'Professional software experience', text: 'Worked as an undergraduate software developer at Jaguar Land Rover — experience that shaped how I approach structure, maintainability and reliable delivery.' },
    { icon: Code2, title: 'Built properly, not just visually', text: 'I care about what sits behind the scenes: clean code, version control, deployment setup and a structure that can grow with the business.' },
  ];

  return (
    <div className="nx-page">
      <section className="nx-intro" ref={introRef}>
        <div className="nx-intro-inner">
          <p className="nx-eyebrow">About</p>
          <h1 className="nx-intro-title">A technical background, applied to <span className="nx-ital">practical websites.</span></h1>
          <p className="nx-intro-text">I build clean, maintainable websites for small businesses that need to look
          professional online — without paying for complexity they'll never use.</p>
        </div>
      </section>

      <section className="nx-about" ref={splitRef}>
        <div className="nx-about-inner">
          <div className="nx-about-photo">
            <div className="nx-about-photo-frame" ref={photoRef}>
              <img src={profilePhoto} alt="Nathan McCormack" />
            </div>
            <span className="nx-about-photo-badge">Galway · IE</span>
          </div>
          <div className="nx-about-copy">
            <p className="nx-eyebrow">Nathan McCormack</p>
            <h2>Websites built with structure, care and long-term support in mind.</h2>
            <p>I'm a Software and Electronic Engineering graduate focused on building professional
            websites for local businesses — restaurants, cafés, shops, salons and service providers.</p>
            <p>My goal is to give small businesses a clear, trustworthy online presence: somewhere customers
            can quickly find what they need, understand the business, and take the next step.</p>
            <p>I don't start with unnecessary booking systems or complicated dashboards. I focus first on the
            parts that matter — mobile-friendly pages, clear contact details, useful content, strong layout,
            and a website that can be maintained after launch.</p>
          </div>
        </div>
      </section>

      <section className="nx-cred" ref={credRef}>
        <div className="nx-cred-grid">
          {credentials.map((c, i) => {
            const Icon = c.icon;
            return (
              <article className="nx-cred-card" key={c.title} style={{ '--d': `${i * 0.08}s` }}>
                <div className="nx-cred-icon"><Icon size={24} /></div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="nx-stack" ref={stackRef}>
        <div className="nx-stack-inner">
          <div className="nx-stack-copy">
            <p className="nx-eyebrow nx-eyebrow--light">How I work</p>
            <h2>A real development workflow — so each site can be built, reviewed, launched and maintained properly.</h2>
            <p>My clients don't need to understand the tools. They just get a clean, reliable website.</p>
          </div>
          <div className="nx-stack-tags">
            {stackItems.map((tool, i) => (
              <span key={tool} style={{ '--d': `${i * 0.04}s` }}>{tool}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
