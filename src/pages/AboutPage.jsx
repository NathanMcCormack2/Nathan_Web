import { Briefcase, Code2, GraduationCap, TerminalSquare } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';
import { stackItems } from '../data/siteData.js';
import profilePhoto from '../assets/nathan-profile.jpg';

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A technical background, applied to practical websites for local businesses."
        text="I build clean, maintainable websites for small businesses that need to look professional online without paying for unnecessary complexity."
      />

      <section className="container about-split-section">
        <div className="portrait-placeholder">
          <img
            className="portrait-photo"
            src={profilePhoto}
            alt="Nathan McCormack"
          />
        </div>

        <div className="about-copy-card">
          <p className="eyebrow">Nathan McCormack</p>

          <h2>Websites built with structure, care and long-term support in mind.</h2>

          <p>
            I am a Software and Electronic Engineering graduate focused on building
            professional websites for local businesses such as restaurants, cafés,
            shops, salons and service providers.
          </p>

          <p>
            My goal is to give small businesses a clear, trustworthy online presence:
            somewhere customers can quickly find what they need, understand the business,
            and take the next step.
          </p>

          <p>
            I do not start by adding unnecessary booking systems, payment features or
            complicated dashboards. I focus first on the parts that matter most:
            mobile-friendly pages, clear contact details, useful content, strong layout
            and a website that can be maintained after launch.
          </p>
        </div>
      </section>

      <section className="container credibility-grid">
        <article>
          <GraduationCap size={26} />

          <h3>Software & Electronic Engineering</h3>

          <p>
            I have a Level 8 degree in Software & Electronic Engineering, giving me
            a strong foundation in software development, problem solving and technical
            project work.
          </p>
        </article>

        <article>
          <Briefcase size={26} />

          <h3>Professional software experience</h3>

          <p>
            Before building websites independently, I worked as an undergraduate
            software developer at Jaguar Land Rover. That experience shaped how I
            approach structure, maintainability and reliable delivery.
          </p>
        </article>

        <article>
          <Code2 size={26} />

          <h3>Built properly, not just visually</h3>

          <p>
            I care about how a website is put together behind the scenes: clean code,
            version control, deployment setup and a structure that can be updated as
            the business changes.
          </p>
        </article>
      </section>

      <section className="tool-stack-section">
        <div className="container tool-stack-inner">
          <div>
            <p className="eyebrow dark">How I work</p>

            <p>
              I use a practical web development workflow so each site can be built,
              reviewed, launched and maintained properly. My clients don't need to
              understand the tools - they just get a clean, reliable website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}