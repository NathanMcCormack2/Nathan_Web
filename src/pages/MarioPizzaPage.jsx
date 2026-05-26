import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Flame,
  MapPin,
  Phone,
  Star,
  Utensils
} from 'lucide-react';
import heroImage from '../assets/marios-pizza-hero.png';
import closeupImage from '../assets/marios-pizza-closeup.png';
import storefrontImage from '../assets/marios-pizza-storefront.png';
import logoImage from '../assets/marios-pizza-logo.svg';

const menuSections = [
  {
    title: 'Wood-fired pizzas',
    note: 'Slow dough, San Marzano tomato, fior di latte, baked hard and fast.',
    items: [
      ['Margherita Tradizionale', 'Tomato, fior di latte, basil, extra virgin olive oil', 'EUR 12.50'],
      ['Diavola', 'Spicy salami, chilli honey, mozzarella, torn basil', 'EUR 14.90'],
      ['Galway Funghi', 'Roasted mushrooms, garlic cream, thyme, parmesan', 'EUR 14.40'],
      ["Mario's Special", 'Prosciutto, artichoke, olives, rocket, shaved parmesan', 'EUR 16.50']
    ]
  },
  {
    title: 'For the table',
    note: 'Easy plates for families, late lunches, and the first glass of wine.',
    items: [
      ['Garlic bread al forno', 'Wood-fired bread, garlic butter, parsley', 'EUR 6.50'],
      ['Antipasti board', 'Cured meats, olives, roasted peppers, warm bread', 'EUR 15.00'],
      ['House salad', 'Rocket, cherry tomato, parmesan, lemon dressing', 'EUR 7.00'],
      ['Tiramisu', 'Coffee-soaked sponge, mascarpone, cocoa', 'EUR 6.90']
    ]
  }
];

const galleryShots = [
  {
    title: 'The oven table',
    text: 'Evening service, timber counters, and the smell of basil hitting hot dough.',
    image: heroImage
  },
  {
    title: 'Pizza for sharing',
    text: 'Crisp edges, melted cheese, and enough on the table for everyone.',
    image: closeupImage
  },
  {
    title: 'Galway evenings',
    text: 'A red awning, warm windows, and a quick walk from the city centre.',
    image: storefrontImage
  }
];

const navItems = [
  ['Home', '#marios-home'],
  ['Menu', '#marios-menu'],
  ['About', '#marios-about'],
  ['Gallery', '#marios-gallery'],
  ['Contact', '#marios-contact']
];

export default function MarioPizzaPage({ goToPage }) {
  return (
    <article className="marios-page">
      <header className="marios-site-header" aria-label="Mario's Pizza demo navigation">
        <button className="marios-back-link" type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={17} />
          Back to work
        </button>

        <a className="marios-brand" href="#marios-home" aria-label="Mario's Pizza homepage">
          <img src={logoImage} alt="Mario's Pizza Galway" />
        </a>

        <nav className="marios-nav" aria-label="Mario's Pizza pages">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="marios-call-link" href="tel:+35391555149">
          <Phone size={17} />
          Call to order
        </a>
      </header>

      <section className="marios-hero" id="marios-home">
        <img src={heroImage} alt="" className="marios-hero-image" />
        <div className="marios-hero-shade" />
        <div className="marios-hero-grain" />

        <div className="marios-hero-content">
          <p className="marios-kicker">Family pizza house - Galway city</p>
          <h1>Mario's Pizza</h1>
          <p>
            Wood-fired pizza, warm tables, and proper Italian comfort for families,
            tourists, and late Galway evenings.
          </p>

          <div className="marios-hero-actions">
            <a className="marios-button primary" href="tel:+35391555149">
              <Phone size={18} />
              Call 091 555 149
            </a>
            <a className="marios-button secondary" href="#marios-menu">
              View menu
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <aside className="marios-hero-ticket" aria-label="Opening details">
          <span>Tonight</span>
          <strong>Open until 10:30pm</strong>
          <p>Order by phone for collection, or walk in for a table when the oven is glowing.</p>
        </aside>
      </section>

      <section className="marios-info-strip" aria-label="Restaurant quick details">
        <div>
          <Phone size={19} />
          <span>Phone orders</span>
          <strong>091 555 149</strong>
        </div>
        <div>
          <MapPin size={19} />
          <span>Find us</span>
          <strong>Quay Street, Galway</strong>
        </div>
        <div>
          <Clock3 size={19} />
          <span>Open</span>
          <strong>12pm - 10:30pm</strong>
        </div>
      </section>

      <section className="marios-story" id="marios-about">
        <div className="marios-story-copy">
          <p className="marios-kicker dark">About the restaurant</p>
          <h2>A small Galway pizza room with old Italian manners.</h2>
          <p>
            Mario's keeps things simple: dough made each morning, tomato sauce
            simmering in the back, and a room that feels easy after a day around
            the city. Families come in early, tourists drift over from Quay Street,
            and regulars call ahead when they want collection.
          </p>
          <div className="marios-story-proof">
            <span><Star size={17} /> Family-friendly tables</span>
            <span><Flame size={17} /> Wood-fired dough</span>
            <span><Utensils size={17} /> Sit in or collect</span>
          </div>
        </div>

        <div className="marios-story-collage" aria-hidden="true">
          <div className="marios-polaroid large">
            <img src={storefrontImage} alt="" />
            <span>Quay Street evenings</span>
          </div>
          <div className="marios-polaroid small">
            <img src={closeupImage} alt="" />
            <span>Slow dough daily</span>
          </div>
          <div className="marios-menu-stamp">Since 1998</div>
        </div>
      </section>

      <section className="marios-menu-section" id="marios-menu">
        <div className="marios-menu-heading">
          <p className="marios-kicker">Menu favourites</p>
          <h2>From the oven</h2>
          <p>
            Phone-order favourites from Mario's: blistered pizzas, sharing plates,
            and a few easy extras for families coming in from Quay Street.
          </p>
        </div>

        <div className="marios-menu-board">
          <div className="marios-menu-tape tape-left" aria-hidden="true" />
          <div className="marios-menu-tape tape-right" aria-hidden="true" />
          <div className="marios-menu-fold" aria-hidden="true" />
          <div className="marios-menu-cover">
            <img className="marios-menu-logo" src={logoImage} alt="" />
            <span className="marios-menu-ribbon">Mario's family menu</span>
            <strong>Pizza Menu</strong>
            <p>Galway city - phone orders - sit in - collect</p>
          </div>

          {menuSections.map((section) => (
            <section key={section.title} className="marios-menu-column" aria-labelledby={section.title.replaceAll(' ', '-')}>
              <div className="marios-menu-column-head">
                <span>{section.title.includes('pizzas') ? '01' : '02'}</span>
                <h3 id={section.title.replaceAll(' ', '-')}>{section.title}</h3>
                <p>{section.note}</p>
              </div>

              <div className="marios-menu-items">
                {section.items.map(([name, description, price]) => (
                  <article key={name} className="marios-menu-item">
                    <div>
                      <h4>{name}</h4>
                      <p>{description}</p>
                    </div>
                    <span className="marios-price-leader" aria-hidden="true" />
                    <strong>{price}</strong>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <div className="marios-menu-footer-note">
            <span>Fresh dough daily</span>
            <span>Extra chilli on request</span>
            <span>Ask about kids portions</span>
          </div>
        </div>
      </section>

      <section className="marios-gallery" id="marios-gallery">
        <div className="marios-gallery-lead">
          <div>
            <p className="marios-kicker dark">Gallery</p>
            <h2>A look inside Mario's</h2>
          </div>
          <p className="marios-gallery-note">
            Oven light, shared tables, a red Galway shopfront, and the kind of
            food photos that make people ring before they keep scrolling.
          </p>
        </div>

        <div className="marios-gallery-grid">
          {galleryShots.map((shot, index) => (
            <figure key={shot.title} className={`marios-gallery-shot shot-${index + 1}`}>
              <img src={shot.image} alt="" />
              <figcaption>
                <strong>{shot.title}</strong>
                <span>{shot.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="marios-contact"
        id="marios-contact"
        style={{ '--marios-contact-image': `url(${storefrontImage})` }}
      >
        <div className="marios-contact-card">
          <p className="marios-kicker">Visit or order</p>
          <h2>Phone first if you want collection ready.</h2>
          <p>
            Call us for collection, ask about tables, or drop in if you are
            nearby. We are a short walk from the Latin Quarter and easiest to
            spot by the red awning and warm front window.
          </p>
          <a className="marios-button primary" href="tel:+35391555149">
            <Phone size={18} />
            Call Mario's Pizza
          </a>
        </div>

        <div className="marios-hours-board">
          <span className="marios-board-label">Opening hours</span>
          <dl>
            <div><dt>Mon - Thu</dt><dd>12:00 - 22:00</dd></div>
            <div><dt>Fri - Sat</dt><dd>12:00 - 22:30</dd></div>
            <div><dt>Sunday</dt><dd>13:00 - 21:30</dd></div>
          </dl>
          <address>
            18 Quay Street<br />
            Galway, Ireland
          </address>
        </div>
      </section>

      <footer className="marios-footer">
        <button type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={17} />
          Return to portfolio work
        </button>
        <p>Mario's Pizza demo site for McCormack Digital.</p>
      </footer>

      <a className="marios-mobile-call" href="tel:+35391555149">
        <Phone size={18} />
        Call to order
      </a>
    </article>
  );
}