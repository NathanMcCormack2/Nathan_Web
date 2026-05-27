import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { maintenanceItems } from '../data/siteData.js';

export default function MaintenancePage({ goToPage }) {
  return (
    <>
      <PageIntro
        eyebrow="Monthly care plan"
        title="Keep your website updated after launch."
        text="Care plans cover hosting checks, small updates, fixes and support when your business details change."
      />

      <section className="container maintenance-dashboard-section">
        <div className="dashboard-shell care-dashboard-refined">
          <div className="dashboard-topbar">
            <span /><span /><span />
            <strong>Website Care Overview</strong>
          </div>

          <div className="dashboard-grid">
            <div className="dash-card status-card">
              <p>Site status</p>
              <h3>Online</h3>
              <span className="status-line" />
              <small>Basic checks keep the live site reliable.</small>
            </div>

            <div className="dash-card">
              <p>Recent support</p>
              <h3>Content update</h3>
              <small>Hours, menu notes, images or small text changes.</small>
            </div>

            <div className="dash-card">
              <p>Monthly check</p>
              <h3>Review</h3>
              <small>Links, layout, contact details and forms checked.</small>
            </div>

            <div className="dash-card wide">
              <p>Typical care tasks</p>

              <ul>
                <li><CheckCircle2 /> Check the live site is loading</li>
                <li><CheckCircle2 /> Update small content changes</li>
                <li><CheckCircle2 /> Confirm enquiry paths still work</li>
                <li><CheckCircle2 /> Keep the project backed up</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading
          eyebrow="What is covered"
          title="Practical support for the small changes that happen after launch."
          text="Useful for businesses that update menus, hours, photos, services or seasonal information."
        />

        <div className="maintenance-grid">
          {maintenanceItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className="pricing-card care-feature-card" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container care-plan-pricing-note">
        <div>
          <p className="eyebrow">Minimum care plan</p>
          <h2>Starter care from €30/month.</h2>
        </div>

        <div className="care-plan-note-copy">
          <p>
            Designed for brochure-style websites that need basic monitoring, light support and small fixes.
          </p>

          <ul>
            <li><CheckCircle2 /> Hosting and deployment support</li>
            <li><CheckCircle2 /> Small content edits</li>
            <li><CheckCircle2 /> Larger updates quoted separately</li>
          </ul>
        </div>
      </section>

      <section className="container care-plan-cta">
        <div>
          <span>Not sure what level of support you need?</span>
          <h2>Start with basic care and increase support later.</h2>
        </div>

        <button className="btn btn-primary" onClick={() => goToPage?.('contact')}>
          Ask about care plans <ArrowRight size={18} />
        </button>
      </section>
    </>
  );
}
