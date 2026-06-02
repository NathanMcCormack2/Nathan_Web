import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { maintenanceItems } from '../data/siteData.js';

export default function MaintenancePage({ goToPage }) {
  return (
    <>
      <PageIntro
        eyebrow="Care Plan"
        title="Keep your website current after launch."
        text="Monthly plans covering hosting checks, content updates, fixes and support. From €50/month."
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
          title="Practical support for the changes that happen after launch."
          text="Useful for businesses that update menus, hours, photos or seasonal information."
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

      <section className="container care-plan-cta">
        <div>
          <span>Not sure what level you need?</span>
          <h2>Start with basic care and scale up later.</h2>
        </div>
        <button className="btn btn-primary" onClick={() => goToPage?.('contact')}>
          Ask about care plans <ArrowRight size={18} />
        </button>
      </section>
    </>
  );
}
