import { Code2, GraduationCap, TerminalSquare } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';
import { stackItems } from '../data/siteData.js';

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Technical enough to build properly. Practical enough to keep it simple."
        text="This page should make you feel credible without overwhelming small business owners with developer jargon."
      />

      <section className="container about-split-section">
        <div className="portrait-placeholder">
          <div className="portrait-frame-text">Add your profile photo here</div>
        </div>
        <div className="about-copy-card">
          <p className="eyebrow">My background</p>
          <h2>I am a Software & Electronic Engineering graduate building websites for local businesses.</h2>
          <p>
            I have completed a Level 8 degree in Software & Electronic Engineering, giving me a strong foundation in software development, web technologies, problem solving, testing, deployment and maintainable systems.
          </p>
          <p>
            For clients, that means I am not only thinking about how the website looks. I am also thinking about how it performs, how it is structured, how it is deployed and how it can be updated later.
          </p>
        </div>
      </section>

      <section className="container credibility-grid">
        <article>
          <GraduationCap size={27} />
          <h3>Engineering background</h3>
          <p>Strong technical base from software and electronic engineering.</p>
        </article>
        <article>
          <Code2 size={27} />
          <h3>Modern web skills</h3>
          <p>Comfortable with JavaScript, React, CSS, Python and GitHub workflows.</p>
        </article>
        <article>
          <TerminalSquare size={27} />
          <h3>Maintainable builds</h3>
          <p>Projects structured so future updates are not messy or fragile.</p>
        </article>
      </section>

      <section className="tool-stack-section">
        <div className="container tool-stack-inner">
          <div>
            <p className="eyebrow dark">Tools I use</p>
            <h2>Built with tools I know properly.</h2>
            <p>The tools are not the sales pitch, but they show clients the website is backed by a real development workflow.</p>
          </div>
          <div className="stack-cloud">
            {stackItems.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
