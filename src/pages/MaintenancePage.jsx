import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { maintenanceItems } from '../data/siteData.js';

export default function MaintenancePage({ goToPage }) {
  return (
    <>
      <PageIntro
        eyebrow="Monthly care plan"
        title="Keep your website live, updated and looked after after launch."
        text="The website build is the first step. The monthly care plan covers the practical support needed after launch: hosting/deployment support, checks, small updates and help when business details change."
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
              <small>Basic checks help make sure the website stays accessible.</small>
            </div>

            <div className="dash-card">
              <p>Recent support</p>
              <h3>Content update</h3>
              <small>Opening hours, menu notes or small text changes when needed.</small>
            </div>

            <div className="dash-card">
              <p>Monthly check</p>
              <h3>Review</h3>
              <small>Links, images, layout, contact details and form checks.</small>
            </div>

            <div className="dash-card wide">
              <p>Typical care tasks</p>

              <ul>
                <li><CheckCircle2 /> Check the live site is loading correctly</li>
                <li><CheckCircle2 /> Update small text, image or opening-hour changes</li>
                <li><CheckCircle2 /> Confirm contact links and enquiry paths still work</li>
                <li><CheckCircle2 /> Keep the project backed up and maintainable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading
          eyebrow="What is covered"
          title="Practical support without turning every small change into a new project."
          text="The care plan gives you a reliable point of contact after launch. It is useful for businesses where opening hours, menus, images, services or seasonal information change over time."
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
          <h2>Starter care from €25/month.</h2>
        </div>

        <div className="care-plan-note-copy">
          <p>
            The starter monthly plan covers the basic running setup of the website:
            hosting/deployment support, SSL/domain checks, light support and small fixes.
            It is designed for simple brochure-style websites without bookings, payments
            or database-backed features.
          </p>

          <ul>
            <li><CheckCircle2 /> Keeps the website hosted and looked after</li>
            <li><CheckCircle2 /> Covers a small amount of support from me</li>
            <li><CheckCircle2 /> Larger updates or new pages can be quoted separately</li>
          </ul>
        </div>
      </section>

      <section className="container care-plan-breakdown care-plan-breakdown-refined">
        <div>
          <p className="eyebrow">Why it matters</p>
          <h2>A website is more useful when someone is responsible for it.</h2>
        </div>

        <p>
          After launch, I can keep your website up to date with small edits,
          technical checks, deployment support and help when your business details
          change. That is especially useful for restaurants, cafés, shops and service
          businesses where menus, hours, images and offers change regularly.
        </p>
      </section>

      <section className="container care-plan-cta">
        <div>
          <span>Not sure what level of support you need?</span>
          <h2>Start with the basic care plan and increase support later if needed.</h2>
        </div>

        <button className="btn btn-primary" onClick={() => goToPage?.('contact')}>
          Ask about care plans <ArrowRight size={18} />
        </button>
      </section>
    </>
  );
}