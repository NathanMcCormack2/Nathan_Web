import { ArrowRight } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';

export default function WorkPage({ goToPage }) {
  return (
    <>
      <PageIntro
        eyebrow="Example work"
        title="Working demo websites for restaurants, cafés and local food businesses."
        text="These demo sites show the kind of design, structure and customer-focused thinking I can bring to a real local business website. Each one is built around the information customers look for first: menus, opening hours, location, atmosphere and a clear next step."
      />

      <section className="container work-index-section">
        <div className="work-index-card">
          <span>01</span>
          <h2>Built around real customer actions.</h2>
          <p>
            A good local business website should make it easy to view the menu,
            check opening hours, get directions, call the business or decide to visit.
          </p>
        </div>

        <div className="work-index-card secondary">
          <span>02</span>
          <h2>Different businesses need different designs.</h2>
          <p>
            A pizza restaurant, fish restaurant, café and diner should not all look
            like the same template with different photos. Each demo has its own tone,
            layout and customer journey.
          </p>
        </div>
      </section>

      <section className="container featured-demo-stack">
        <div className="featured-demo-card">
          <div className="featured-demo-content">
            <p className="eyebrow">Restaurant demo</p>

            <h2>Mario&apos;s Pizza Galway</h2>

            <p>
              A warm, classic pizza restaurant website designed around atmosphere,
              menu browsing, opening times and fast phone orders. The aim is to make
              the business feel established, welcoming and easy to contact.
            </p>

            <div className="featured-demo-points">
              <span>Mobile friendly</span>
              <span>Phone order focused</span>
              <span>Classic Italian feel</span>
            </div>

            <button className="btn btn-primary" onClick={() => goToPage('pizza-demo')}>
              View pizza demo <ArrowRight size={18} />
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
                  <small>Mario&apos;s</small>
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
            <p className="eyebrow">Restaurant demo</p>

            <h2>Sandy&apos;s Fish Restaurant</h2>

            <p>
              A coastal fish restaurant website focused on fresh food, family dining,
              tourist appeal and a clear visit path. The layout supports menus,
              opening hours, gallery sections and direct call/directions actions.
            </p>

            <div className="featured-demo-points">
              <span>Tourist friendly</span>
              <span>Family focused</span>
              <span>Coastal visual style</span>
            </div>

            <button className="btn btn-primary" onClick={() => goToPage('sandys-fish-demo')}>
              View fish restaurant demo <ArrowRight size={18} />
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
                  <small>Sandy&apos;s</small>
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
            <p className="eyebrow">Diner demo</p>

            <h2>Rockys Diner</h2>

            <p>
              A nostalgic American diner website built around personality, menu
              discovery, family visits and a strong sense of place. The design gives
              the business a memorable identity instead of a generic food-site layout.
            </p>

            <div className="featured-demo-points">
              <span>Family friendly</span>
              <span>Strong visual identity</span>
              <span>Classic diner styling</span>
            </div>

            <button className="btn btn-primary" onClick={() => goToPage('rockys-diner-demo')}>
              View diner demo <ArrowRight size={18} />
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

                <div className="rockys-preview-sign">
                  Open
                  <br />
                  7am
                </div>
              </div>

              <div className="rockys-preview-menu">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="featured-demo-card common-demo-card">
          <div className="featured-demo-content">
            <p className="eyebrow">Café demo</p>

            <h2>Common Room Cafe</h2>

            <p>
              A modern café website designed for a younger audience, with a focus on
              iced drinks, study seating, takeaway habits and quick decision-making.
              The structure supports menu browsing, gallery content and clear visit actions.
            </p>

            <div className="featured-demo-points">
              <span>Modern café style</span>
              <span>Order-ahead thinking</span>
              <span>Student audience</span>
            </div>

            <button className="btn btn-primary" onClick={() => goToPage('common-room-cafe-demo')}>
              View café demo <ArrowRight size={18} />
            </button>
          </div>

          <div className="featured-demo-preview" aria-hidden="true">
            <div className="common-preview-window">
              <div className="common-preview-top">
                <span />
                <span />
                <span />
              </div>

              <div className="common-preview-hero">
                <div>
                  <small>Common Room</small>
                  <strong>Iced drinks, plugs, pickup shelf.</strong>
                </div>

                <div className="common-preview-phone">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="common-preview-menu">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}