import {
  ArrowLeft,
  ArrowRight,
  Camera,
  CarFront,
  Clock3,
  Coffee,
  CupSoda,
  Hamburger,
  IceCreamBowl,
  MapPin,
  Phone,
  Star,
  Ticket,
  Utensils
} from 'lucide-react';
import heroImage from '../assets/rockys-diner-hero.png';
import interiorImage from '../assets/rockys-diner-interior.png';
import foodImage from '../assets/rockys-diner-food.png';
import logoImage from '../assets/rockys-diner-logo.svg';
import '../styles/rockysDiner.css';

const navItems = [
  ['Home', '#rockys-home'],
  ['Menu', '#rockys-menu'],
  ['About', '#rockys-about'],
  ['Gallery', '#rockys-gallery'],
  ['Contact', '#rockys-contact']
];

const quickDetails = [
  { icon: Coffee, label: 'Fresh coffee', value: 'Poured all day' },
  { icon: MapPin, label: 'Find us', value: 'Route 66, Flagstaff' },
  { icon: Clock3, label: 'Open today', value: '7am - 10pm' }
];

const menuSections = [
  {
    number: '01',
    icon: Utensils,
    title: 'All-day breakfast',
    note: 'Hot griddle plates, bottomless coffee, and pancakes that arrive stacked high.',
    items: [
      ['Rockys breakfast plate', 'Two eggs, bacon, hash browns, toast, house jam', '$12.50'],
      ['Blueberry griddle cakes', 'Three pancakes, warm berries, whipped butter, maple syrup', '$10.75'],
      ['Chicken fried steak & eggs', 'Pepper gravy, two eggs, crispy potatoes, biscuit', '$14.95'],
      ['Kids silver dollar stack', 'Mini pancakes, fruit cup, small milk or juice', '$7.25']
    ]
  },
  {
    number: '02',
    icon: Hamburger,
    title: 'Burgers & baskets',
    note: 'Road-trip lunches with crisp fries, pickles, and enough napkins on the table.',
    items: [
      ['Classic diner burger', 'Smashed beef patty, American cheese, lettuce, tomato, special sauce', '$13.50'],
      ['Route 66 patty melt', 'Swiss, onions, rye bread, diner sauce, fries', '$12.95'],
      ['Crispy chicken basket', 'Buttermilk chicken, slaw, ranch, crinkle fries', '$13.75'],
      ['Chili cheese fries', 'House chili, cheddar, scallions, sour cream', '$8.50']
    ]
  },
  {
    number: '03',
    icon: CupSoda,
    title: 'Shakes & pie',
    note: 'Counter sweets for tourists, kids, and anyone saving room after a burger.',
    items: [
      ['Vanilla bean shake', 'Hand-spun with whipped cream and a cherry', '$6.25'],
      ['Chocolate malt', 'Old-school malt powder, chocolate drizzle, tall glass', '$6.50'],
      ['Cherry pie slice', 'Warm lattice pie with a scoop of vanilla ice cream', '$5.95'],
      ['Banana split', 'Three scoops, warm fudge, pineapple, cherry, peanuts', '$7.75']
    ]
  }
];

const galleryShots = [
  {
    title: 'Chrome at sunset',
    text: 'The roadside glow that makes Rockys easy to spot after a long drive.',
    image: heroImage
  },
  {
    title: 'Red booth mornings',
    text: 'Coffee cups, vinyl seats, counter lights, and tables ready for families.',
    image: interiorImage
  },
  {
    title: 'Burgers, shakes, pie',
    text: 'A table full of the food people picture when they want a true diner stop.',
    image: foodImage
  }
];

export default function RockysDinerPage({ goToPage }) {
  return (
    <article className="rockys-page">
      <header className="rockys-site-header" aria-label="Rockys Diner demo navigation">
        <button className="rockys-back-link" type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={17} />
          Back to work
        </button>

        <a className="rockys-brand" href="#rockys-home" aria-label="Rockys Diner homepage">
          <img src={logoImage} alt="Rockys Diner" />
        </a>

        <nav className="rockys-nav" aria-label="Rockys Diner pages">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="rockys-call-link" href="tel:+19285550148">
          <Phone size={17} />
          Call ahead
        </a>
      </header>

      <section className="rockys-hero" id="rockys-home">
        <img className="rockys-hero-image" src={heroImage} alt="" />
        <div className="rockys-hero-shade" />
        <div className="rockys-hero-halftone" />

        <div className="rockys-hero-inner">
          <div className="rockys-hero-copy">
            <div className="rockys-route-tab">
              <CarFront size={19} />
              Route 66 family diner
            </div>
            <p className="rockys-kicker">Flagstaff, Arizona - open since breakfast</p>
            <h1>Rockys Diner</h1>
            <p>
              Red booths, bottomless coffee, burgers from the flat-top, and hand-spun shakes
              for families, road-trippers, and tourists rolling through town.
            </p>

            <div className="rockys-hero-actions">
              <a className="rockys-button primary" href="tel:+19285550148">
                <Phone size={18} />
                Call (928) 555-0148
              </a>
              <a className="rockys-button secondary" href="#rockys-menu">
                View the menu
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <aside className="rockys-hero-ticket" aria-label="Today's diner note">
            <span>Tonight at Rockys</span>
            <strong>Pie case full until 10pm</strong>
            <p>Booths for six, high chairs by request, kids menus at the counter, and coffee refills without a fuss.</p>
          </aside>
        </div>
      </section>

      <section className="rockys-detail-strip" aria-label="Restaurant quick details">
        {quickDetails.map((detail) => {
          const Icon = detail.icon;
          return (
            <div key={detail.label}>
              <Icon size={20} />
              <span>{detail.label}</span>
              <strong>{detail.value}</strong>
            </div>
          );
        })}
      </section>

      <section className="rockys-counter-banner" aria-label="Diner favourites">
        <div>
          <span>Breakfast plates</span>
          <i />
          <span>Burgers</span>
          <i />
          <span>Milkshakes</span>
          <i />
          <span>Cherry pie</span>
          <i />
          <span>Bottomless coffee</span>
        </div>
      </section>

      <section className="rockys-story" id="rockys-about">
        <div className="rockys-story-copy">
          <p className="rockys-kicker dark">About Rockys</p>
          <h2>A booth, a hot plate, and the kind of welcome that feels familiar fast.</h2>
          <p>
            Rockys is built for the rhythm of the road: early breakfast before a canyon tour,
            burgers after a long drive, shakes for kids, and pie for anyone who says they are
            too full and then orders a fork anyway.
          </p>
          <p>
            The room keeps the old-school diner habits that matter: real counter service,
            laminated menus, chrome edges, strong coffee, and staff who know how to move a
            family table without making it feel rushed.
          </p>

          <div className="rockys-story-notes">
            <span><Star size={17} /> Family booths</span>
            <span><Coffee size={17} /> Bottomless coffee</span>
            <span><Ticket size={17} /> Tourist friendly</span>
          </div>
        </div>

        <div className="rockys-story-collage" aria-hidden="true">
          <figure className="rockys-photo-card main">
            <img src={interiorImage} alt="" />
            <figcaption>Morning light on the red booths</figcaption>
          </figure>
          <figure className="rockys-photo-card small">
            <img src={foodImage} alt="" />
            <figcaption>Shakes, fries, pie</figcaption>
          </figure>
          <div className="rockys-since-label">Since 1978</div>
        </div>
      </section>

      <section className="rockys-menu-section" id="rockys-menu">
        <div className="rockys-menu-lead">
          <div>
            <p className="rockys-kicker">Menu</p>
            <h2>Classic diner plates with room for kids, tourists, and one more refill.</h2>
          </div>
          <p>
            The menu is practical and familiar: breakfast all day, baskets for lunch,
            shakes from the counter, and desserts that make the pie case do the selling.
          </p>
        </div>

        <div className="rockys-menu-board">
          <div className="rockys-board-head">
            <img src={logoImage} alt="" />
            <span>Breakfast - burgers - shakes - pie</span>
          </div>

          {menuSections.map((section) => {
            const Icon = section.icon;
            return (
              <section className="rockys-menu-column" key={section.title}>
                <div className="rockys-menu-column-head">
                  <span>{section.number}</span>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{section.title}</h3>
                  <p>{section.note}</p>
                </div>

                <div className="rockys-menu-items">
                  {section.items.map(([name, description, price]) => (
                    <article className="rockys-menu-item" key={name}>
                      <div>
                        <h4>{name}</h4>
                        <p>{description}</p>
                      </div>
                      <span className="rockys-price-line" aria-hidden="true" />
                      <strong>{price}</strong>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          <div className="rockys-menu-foot">
            <span>Ask for crayons</span>
            <span>Refills on coffee</span>
            <span>Pie by the slice</span>
          </div>
        </div>
      </section>

      <section className="rockys-family-banner">
        <div className="rockys-family-sign">
          <span>Made for road trips</span>
          <strong>Park easy, grab a booth, and let everyone order what they already had in mind.</strong>
        </div>
        <div className="rockys-family-icons" aria-label="Restaurant features">
          <div><CarFront size={28} /><span>Tour bus friendly</span></div>
          <div><IceCreamBowl size={28} /><span>Kids desserts</span></div>
          <div><Coffee size={28} /><span>Early coffee</span></div>
          <div><Utensils size={28} /><span>Big booths</span></div>
        </div>
      </section>

      <section className="rockys-gallery" id="rockys-gallery">
        <div className="rockys-gallery-lead">
          <div>
            <p className="rockys-kicker dark">Gallery</p>
            <h2>Chrome, counter light, red vinyl, and plates that travel well.</h2>
          </div>
          <a className="rockys-text-link" href="#rockys-contact">
            Plan a stop <ArrowRight size={17} />
          </a>
        </div>

        <div className="rockys-gallery-grid">
          {galleryShots.map((shot, index) => (
            <figure key={shot.title} className={`rockys-gallery-shot shot-${index + 1}`}>
              <img src={shot.image} alt={shot.title} />
              <figcaption>
                <strong>{shot.title}</strong>
                <span>{shot.text}</span>
              </figcaption>
            </figure>
          ))}

          <div className="rockys-gallery-note">
            <Camera size={20} />
            <strong>A real diner feeling</strong>
            <p>Every image gives visitors useful context: the storefront, the room, and the food they came to find.</p>
          </div>
        </div>
      </section>

      <section
        className="rockys-contact"
        id="rockys-contact"
        style={{ '--rockys-contact-image': `url(${heroImage})` }}
      >
        <div className="rockys-contact-copy">
          <p className="rockys-kicker">Contact</p>
          <h2>Pull in hungry. Leave with pie boxed for later.</h2>
          <p>
            Call ahead for a big booth, ask what pie is still in the case, or get
            directions before you leave the highway. Walk-ins are welcome all day.
          </p>
          <div className="rockys-contact-actions">
            <a className="rockys-button primary" href="tel:+19285550148">
              <Phone size={18} />
              Call Rockys
            </a>
            <a className="rockys-button secondary" href="https://maps.google.com/?q=1524+West+Route+66+Flagstaff+AZ" target="_blank" rel="noreferrer">
              Get directions
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <aside className="rockys-hours-card" aria-label="Opening hours and address">
          <span className="rockys-board-label">Opening hours</span>
          <dl>
            <div><dt>Mon - Thu</dt><dd>7:00 - 21:00</dd></div>
            <div><dt>Fri - Sat</dt><dd>7:00 - 22:00</dd></div>
            <div><dt>Sunday</dt><dd>8:00 - 20:00</dd></div>
          </dl>
          <address>
            1524 West Route 66<br />
            Flagstaff, AZ
          </address>
          <div className="rockys-rating-note">
            <Star size={17} />
            High chairs, booster seats, counter stools, and space for luggage by the booth.
          </div>
        </aside>
      </section>

      <footer className="rockys-footer">
        <button type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={17} />
          Return to portfolio work
        </button>
        <p>Rockys Diner demo site for McCormack Web Designs.</p>
      </footer>

      <a className="rockys-mobile-call" href="tel:+19285550148">
        <Phone size={18} />
        Call Rockys
      </a>
    </article>
  );
}