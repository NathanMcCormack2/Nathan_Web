import { CheckCircle2 } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { maintenanceItems } from '../data/siteData.js';

export default function MaintenancePage() {
  return (
    <>
      <PageIntro
        eyebrow="Monthly care plan"
        title="A website should not be abandoned the day it goes live."
        text="The care plan is how you make the monthly fee feel valuable: updates, checks, deployment support and a reliable point of contact when the business needs changes."
      />

      <section className="container maintenance-dashboard-section">
        <div className="dashboard-shell">
          <div className="dashboard-topbar">
            <span /><span /><span />
            <strong>Site Care Dashboard</strong>
          </div>
          <div className="dashboard-grid">
            <div className="dash-card status-card">
              <p>Site status</p>
              <h3>Online</h3>
              <span className="status-line" />
            </div>
            <div className="dash-card">
              <p>Last update</p>
              <h3>Menu edits</h3>
              <small>Opening hours and lunch specials updated</small>
            </div>
            <div className="dash-card">
              <p>Next check</p>
              <h3>Monthly review</h3>
              <small>Links, images, layout and contact forms</small>
            </div>
            <div className="dash-card wide">
              <p>Maintenance queue</p>
              <ul>
                <li><CheckCircle2 /> Check mobile hero layout</li>
                <li><CheckCircle2 /> Replace gallery image</li>
                <li><CheckCircle2 /> Confirm seasonal opening hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <SectionHeading
          eyebrow="What is covered"
          title="Ongoing support that clients can understand."
          text="The care plan should be explained in plain English. Business owners are not paying for mysterious hosting costs; they are paying for confidence, convenience and updates."
        />
        <div className="maintenance-grid">
          {maintenanceItems.map((item) => {
            const Icon = item.icon;
            return (
              <article className="maintenance-card" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container care-plan-breakdown">
        <div>
          <p className="eyebrow">Recommended wording</p>
          <h2>Position it as a website care plan, not a hosting bill.</h2>
        </div>
        <p>
          After launch, I can keep your website up to date with small edits, technical checks, deployment support and help when your business details change. This is useful for restaurants, cafés and service businesses where menus, hours, images and offers change regularly.
        </p>
      </section>
    </>
  );
}
