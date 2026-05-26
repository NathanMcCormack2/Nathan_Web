import {
  Anchor,
  ArrowLeft,
  ArrowRight,
  Camera,
  Clock3,
  Fish,
  MapPin,
  Phone,
  Star,
  Utensils,
  Waves
} from 'lucide-react';
import heroImage from '../assets/sandys-fish-hero.png';
import tableImage from '../assets/sandys-fish-table.png';
import interiorImage from '../assets/sandys-fish-interior.png';
import logoImage from '../assets/sandys-fish-logo.svg';

const navItems = [
  ['Home', '#sandys-home'],
  ['Menu', '#sandys-menu'],
  ['About', '#sandys-about'],
  ['Gallery', '#sandys-gallery'],
  ['Contact', '#sandys-contact']
];

const menuColumns = [
  {
    number: '01',
    title: 'From the fryer',
    note: 'Crisp, generous, and made for sandy shoes after the beach.',
    items: [
      ['Harbour fish & chips', 'Day-boat white fish, beef dripping chips, tartare, lemon', 'EUR 16.90'],
      ['Kids sandy basket', 'Small battered fish, chips, peas, apple juice', 'EUR 8.50'],
      ['Scampi in a paper cone', 'Golden scampi, sea salt, lemon mayo', 'EUR 12.40'],
      ['Smoked haddock croquette', 'Parsley crumb, pickled onion, dill cream', 'EUR 9.80']
    ]
  },
  {
    number: '02',
    title: 'Coastal grill',
    note: 'Simple plates with butter, herbs, and whatever came in fresh.',
    items: [
      ['Catch of the day', 'Ask the counter, grilled with seaweed butter and greens', 'Market'],
      ['Lemon sole supper', 'Brown butter, capers, baby potatoes, garden leaves', 'EUR 19.50'],
      ['Mackerel on toast', 'Charred sourdough, tomato relish, pickled fennel', 'EUR 13.80'],
      ['Mussels pot', 'West coast mussels, cider cream, brown bread', 'EUR 15.20']
    ]
  },
  {
    number: '03',
    title: 'For the table',
    note: 'Warm bowls, easy sides, and family extras that disappear quickly.',
    items: [
      ["Sandy's chowder", 'Smoked fish, potatoes, sweet corn, warm brown bread', 'EUR 10.90'],
      ['Sea-salt chips', 'Thick cut chips, malt vinegar on the table', 'EUR 4.80'],
      ['Crab toasties', 'White crab, cheddar, spring onion, grilled sourdough', 'EUR 11.60'],
      ['Warm berry sponge', 'Custard, cream, two spoons if you ask nicely', 'EUR 7.20']
    ]
  }
];

const galleryShots = [
  {
    title: 'The counter at dusk',
    text: 'Fresh fish on ice, warm windows, and the door open to the harbour path.',
    image: heroImage
  },
  {
    title: 'Family fish supper',
    text: 'Big plates, chips for sharing, mussels in the middle, and lemon on everything.',
    image: tableImage
  },
  {
    title: 'Tables by the windows',
    text: 'Timber booths, sea-green trim, and a view that changes with the weather.',
    image: interiorImage
  }
];

export default function SandyFishPage({ goToPage }) {
  return (
    <article className="sandys-page">
      <header className="sandys-site-header" aria-label="Sandy's Fish Restaurant demo navigation">
        <button className="sandys-back-link" type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={17} />
          Back to work
        </button>

        <a className="sandys-brand" href="#sandys-home" aria-label="Sandy's Fish Restaurant homepage">
          <img src={logoImage} alt="Sandy's Fish Restaurant" />
        </a>

        <nav className="sandys-nav" aria-label="Sandy's Fish Restaurant pages">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="sandys-call-link" href="tel:+35398555028">
          <Phone size={17} />
          Call ahead
        </a>
      </header>

      <section className="sandys-hero" id="sandys-home">
        <img src={heroImage} alt="" className="sandys-hero-image" />
        <div className="sandys-hero-overlay" />
        <div className="sandys-hero-net" />

        <div className="sandys-hero-inner">
          <div className="sandys-hero-copy">
            <p className="sandys-kicker">West Coast harbour road</p>
            <h1>Sandy's Fish Restaurant</h1>
            <p>
              A warm, salt-air fish restaurant for families, tourists, and anyone
              coming in hungry from the beach path.
            </p>

            <div className="sandys-hero-actions">
              <a className="sandys-button primary" href="tel:+35398555028">
                <Phone size={18} />
                Call 098 555 028
              </a>
              <a className="sandys-button secondary" href="#sandys-menu">
                View the fish board
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <aside className="sandys-catch-ticket" aria-label="Today's catch note">
            <span>Tonight's board</span>
            <strong>Haddock, sole, mussels</strong>
            <p>Kids baskets from 12pm, chowder bubbling by lunch, last tables usually around 8:45pm.</p>
          </aside>
        </div>
      </section>

      <section className="sandys-detail-strip" aria-label="Restaurant quick details">
        <div>
          <Fish size={20} />
          <span>Fresh catch</span>
          <strong>Delivered daily</strong>
        </div>
        <div>
          <MapPin size={20} />
          <span>Find us</span>
          <strong>Harbour Road, West Coast</strong>
        </div>
        <div>
          <Clock3 size={20} />
          <span>Open today</span>
          <strong>12:00 - 21:00</strong>
        </div>
      </section>

      <section className="sandys-supper-banner" aria-label="Restaurant highlights">
        <div>
          <span>Fish suppers</span>
          <i />
          <span>Chowder pots</span>
          <i />
          <span>Family tables</span>
          <i />
          <span>Harbour walks</span>
        </div>
      </section>

      <section className="sandys-story" id="sandys-about">
        <div className="sandys-story-copy">
          <p className="sandys-kicker dark">About Sandy's</p>
          <h2>A small fish room with the welcome turned all the way up.</h2>
          <p>
            Sandy's sits just off the harbour wall, close enough to hear the gulls
            and smell the salt on a wet day. The room is relaxed, the menu changes
            with the boats, and families get looked after without any fuss.
          </p>
          <p>
            Tourists find us after the coast road. Locals come for chowder, chips,
            and a table by the window when the weather is doing something dramatic.
          </p>

          <div className="sandys-story-notes">
            <span><Waves size={17} /> Sea-view tables</span>
            <span><Utensils size={17} /> Kids portions</span>
            <span><Anchor size={17} /> Harbour counter</span>
          </div>
        </div>

        <div className="sandys-story-collage" aria-hidden="true">
          <figure className="sandys-photo-card main">
            <img src={interiorImage} alt="" />
            <figcaption>Warm tables, rough weather outside</figcaption>
          </figure>
          <figure className="sandys-photo-card small">
            <img src={tableImage} alt="" />
            <figcaption>Food for the middle</figcaption>
          </figure>
          <div className="sandys-shell-label">Salt air welcome</div>
        </div>
      </section>

      <section className="sandys-menu-section" id="sandys-menu">
        <div className="sandys-menu-lead">
          <div>
            <p className="sandys-kicker">Menu</p>
            <h2>The fish board changes with the tide.</h2>
          </div>
          <p>
            A practical, family-friendly menu built around fresh fish, good chips,
            chowder, and plates that work after a long day out on the west coast.
          </p>
        </div>

        <div className="sandys-menu-board">
          <div className="sandys-board-head">
            <img src={logoImage} alt="" />
            <span>Fresh fish - warm plates - family tables</span>
          </div>

          {menuColumns.map((column) => (
            <section className="sandys-menu-column" key={column.title}>
              <div className="sandys-menu-column-head">
                <span>{column.number}</span>
                <h3>{column.title}</h3>
                <p>{column.note}</p>
              </div>

              <div className="sandys-menu-items">
                {column.items.map(([name, description, price]) => (
                  <article className="sandys-menu-item" key={name}>
                    <div>
                      <h4>{name}</h4>
                      <p>{description}</p>
                    </div>
                    <span className="sandys-price-line" aria-hidden="true" />
                    <strong>{price}</strong>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <div className="sandys-menu-foot">
            <span>Ask about gluten-free batter</span>
            <span>High chairs available</span>
            <span>Takeaway window in summer</span>
          </div>
        </div>
      </section>

      <section className="sandys-family-callout">
        <div className="sandys-callout-sign">
          <span>After the beach</span>
          <strong>Bring sandy shoes, hungry kids, and a jumper for the walk home.</strong>
        </div>
        <div className="sandys-callout-copy">
          <p>
            The room is casual on purpose: easy tables, quick chips for children,
            proper plates for grown-ups, and enough warmth to dry off after the
            wind has had its say.
          </p>
        </div>
      </section>

      <section className="sandys-gallery" id="sandys-gallery">
        <div className="sandys-gallery-lead">
          <div>
            <p className="sandys-kicker dark">Gallery</p>
            <h2>Fish, timber, windows, weather.</h2>
          </div>
          <a className="sandys-text-link" href="#sandys-contact">
            Plan a visit <ArrowRight size={17} />
          </a>
        </div>

        <div className="sandys-gallery-grid">
          {galleryShots.map((shot, index) => (
            <figure key={shot.title} className={`sandys-gallery-shot shot-${index + 1}`}>
              <img src={shot.image} alt={shot.title} />
              <figcaption>
                <strong>{shot.title}</strong>
                <span>{shot.text}</span>
              </figcaption>
            </figure>
          ))}

          <div className="sandys-gallery-note">
            <Camera size={20} />
            <strong>Real restaurant story</strong>
            <p>Hero imagery focuses on the storefront, counter, table, and room so visitors understand the place fast.</p>
          </div>
        </div>
      </section>

      <section
        className="sandys-contact"
        id="sandys-contact"
        style={{ '--sandys-contact-image': `url(${heroImage})` }}
      >
        <div className="sandys-contact-copy">
          <p className="sandys-kicker">Contact</p>
          <h2>Book a table before the coast road gets busy.</h2>
          <p>
            Call ahead for family tables, ask what came in today, or drop by if
            you are already near the harbour. We keep a few seats for walk-ins,
            but wet weekends fill quickly.
          </p>
          <div className="sandys-contact-actions">
            <a className="sandys-button primary" href="tel:+35398555028">
              <Phone size={18} />
              Call Sandy's
            </a>
            <a className="sandys-button secondary" href="https://maps.google.com/?q=Harbour+Road+West+Coast" target="_blank" rel="noreferrer">
              Get directions
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <aside className="sandys-hours-card" aria-label="Opening hours and address">
          <span className="sandys-board-label">Opening hours</span>
          <dl>
            <div><dt>Mon - Thu</dt><dd>12:00 - 21:00</dd></div>
            <div><dt>Fri - Sat</dt><dd>12:00 - 22:00</dd></div>
            <div><dt>Sunday</dt><dd>12:30 - 20:30</dd></div>
          </dl>
          <address>
            Harbour Road<br />
            West Coast
          </address>
          <div className="sandys-rating-note">
            <Star size={17} />
            Family tables, high chairs, and buggy space near the window.
          </div>
        </aside>
      </section>

      <footer className="sandys-footer">
        <button type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={17} />
          Return to portfolio work
        </button>
        <p>Sandy's Fish Restaurant demo site for McCormack Digital.</p>
      </footer>

      <a className="sandys-mobile-call" href="tel:+35398555028">
        <Phone size={18} />
        Call Sandy's
      </a>
    </article>
  );
}
