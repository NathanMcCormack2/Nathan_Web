import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  Camera,
  Clock3,
  Coffee,
  CupSoda,
  Headphones,
  LaptopMinimalCheck,
  ListMusic,
  MapPin,
  Phone,
  PlugZap,
  QrCode,
  ScanQrCode,
  Sparkles,
  Star,
  Wifi
} from 'lucide-react';
import heroImage from '../assets/common-room-cafe-hero.png';
import drinksImage from '../assets/common-room-cafe-drinks.png';
import studyImage from '../assets/common-room-cafe-study.png';
import logoImage from '../assets/common-room-cafe-logo.svg';

const navItems = [
  ['Home', '#common-home'],
  ['Menu', '#common-menu'],
  ['Vibe', '#common-vibe'],
  ['Gallery', '#common-gallery'],
  ['Contact', '#common-contact']
];

const quickDetails = [
  { icon: CupSoda, label: 'Pickup shelf', value: 'Order ahead' },
  { icon: PlugZap, label: 'Seats with plugs', value: '34 spots' },
  { icon: Clock3, label: 'Open today', value: '7:30 - 21:30' }
];

const drinkMenu = [
  ['Iced cloud latte', 'Espresso, oat milk, salted vanilla cold foam', '$5.80'],
  ['Matcha split', 'Ceremonial matcha, milk, strawberry layer', '$6.20'],
  ['Espresso tonic', 'Double shot, citrus tonic, orange peel', '$5.60'],
  ['Cold brew hour', 'House cold brew, ice, optional sweet cream', '$4.90']
];

const foodMenu = [
  ['Breakfast focaccia', 'Egg, cheddar, chilli jam, rocket, toasted focaccia', '$8.75'],
  ['Cinnamon bun', 'Cardamom sugar, vanilla glaze, warmed to order', '$4.60'],
  ['Study toast', 'Avocado, lemon, seeds, soft egg add-on', '$7.90'],
  ['After-class brownie', 'Dark chocolate, espresso salt, cut thick', '$4.20']
];

const vibeNotes = [
  { icon: Wifi, title: 'Fast Wi-Fi', text: 'Stable enough for lecture notes, group projects, and a last-minute submission.' },
  { icon: Headphones, title: 'Playlist hours', text: 'Lo-fi mornings, indie afternoons, louder Fridays after 6pm.' },
  { icon: BatteryCharging, title: 'Low-battery mercy', text: 'Counter chargers, table plugs, and no side-eye for staying a while.' },
  { icon: QrCode, title: 'Stamp wallet', text: 'Scan for every drink. Sixth iced coffee is on the house.' }
];

const galleryShots = [
  {
    title: 'Counter rush',
    text: 'Iced drinks, pickup bags, blue tile, and a room that moves quickly.',
    image: heroImage
  },
  {
    title: 'Desk snacks',
    text: 'Matcha, cold brew, focaccia, and a pastry within laptop reach.',
    image: drinksImage
  },
  {
    title: 'Plug-in tables',
    text: 'A study corner that still feels like a cafe, not a library.',
    image: studyImage
  }
];

export default function CommonRoomCafePage({ goToPage }) {
  return (
    <article className="common-page">
      <header className="common-site-header" aria-label="Common Room Cafe demo navigation">
        <button className="common-back-link" type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={17} />
          Back to work
        </button>

        <a className="common-brand" href="#common-home" aria-label="Common Room Cafe homepage">
          <img src={logoImage} alt="Common Room Cafe" />
        </a>

        <nav className="common-nav" aria-label="Common Room Cafe pages">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="common-order-link" href="tel:+12125550137">
          <Phone size={17} />
          Order ahead
        </a>
      </header>

      <section className="common-hero" id="common-home">
        <img className="common-hero-image" src={heroImage} alt="" />
        <div className="common-hero-wash" />
        <div className="common-hero-grid" />

        <div className="common-hero-inner">
          <div className="common-hero-copy">
            <p className="common-kicker">Campus edge cafe - iced drinks - study seats</p>
            <h1>Common Room Cafe</h1>
            <p>
              Iced coffee, matcha, desk snacks, playlists, and plug-in tables for
              students, creatives, and anyone with thirty minutes between plans.
            </p>

            <div className="common-hero-actions">
              <a className="common-button primary" href="tel:+12125550137">
                <Phone size={18} />
                Order pickup
              </a>
              <a className="common-button secondary" href="#common-menu">
                Scan the menu
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <aside className="common-phone-card" aria-label="Order pickup status">
            <span>Pickup board</span>
            <strong>12 min</strong>
            <p>Order on the way from class and grab it from the blue tile shelf.</p>
            <div className="common-pickup-row">
              <ScanQrCode size={21} />
              <small>Scan for stamps</small>
            </div>
          </aside>
        </div>
      </section>

      <section className="common-detail-strip" aria-label="Cafe quick details">
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

      <section className="common-marquee" aria-label="Cafe highlights">
        <div>
          <span>Iced matcha</span>
          <i />
          <span>Cold brew</span>
          <i />
          <span>Plug-in seats</span>
          <i />
          <span>Stamp wallet</span>
          <i />
          <span>Playlist Fridays</span>
        </div>
      </section>

      <section className="common-menu-section" id="common-menu">
        <div className="common-menu-lead">
          <div>
            <p className="common-kicker dark">Menu</p>
            <h2>Fast drinks, proper snacks, and nothing that needs a white tablecloth.</h2>
          </div>
          <p>
            The menu is built for quick choices: iced drinks at the top, food that
            travels to a lecture hall, and a few reasons to come back after 4pm.
          </p>
        </div>

        <div className="common-menu-board">
          <div className="common-menu-photo">
            <img src={drinksImage} alt="" />
            <span>Current desk order</span>
          </div>

          <section className="common-menu-list" aria-labelledby="common-drinks">
            <div className="common-menu-heading">
              <CupSoda size={23} />
              <h3 id="common-drinks">Iced drinks</h3>
            </div>
            {drinkMenu.map(([name, description, price]) => (
              <article className="common-menu-item" key={name}>
                <div>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </div>
                <span aria-hidden="true" />
                <strong>{price}</strong>
              </article>
            ))}
          </section>

          <section className="common-menu-list food" aria-labelledby="common-food">
            <div className="common-menu-heading">
              <Coffee size={23} />
              <h3 id="common-food">Desk snacks</h3>
            </div>
            {foodMenu.map(([name, description, price]) => (
              <article className="common-menu-item" key={name}>
                <div>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </div>
                <span aria-hidden="true" />
                <strong>{price}</strong>
              </article>
            ))}
          </section>
        </div>
      </section>

      <section className="common-vibe" id="common-vibe">
        <div className="common-vibe-copy">
          <p className="common-kicker dark">The room</p>
          <h2>Built for the half-study, half-social way people actually use cafes now.</h2>
          <p>
            Common Room is not pretending everyone sits quietly with a paperback.
            Some people are revising, some are catching up, some are waiting for
            the group chat to decide where next. The site sells that rhythm clearly.
          </p>
          <a className="common-text-link" href="#common-contact">
            Find a table <ArrowRight size={17} />
          </a>
        </div>

        <div className="common-vibe-panel">
          {vibeNotes.map((note) => {
            const Icon = note.icon;
            return (
              <article key={note.title}>
                <Icon size={24} />
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="common-study-band">
        <figure>
          <img src={studyImage} alt="Students studying inside Common Room Cafe" />
        </figure>
        <div>
          <p className="common-kicker">Study corner</p>
          <h2>Stay for twenty minutes or three hours. Just keep ordering coffee.</h2>
          <p>
            Long tables, plugs in reach, softer music before lunch, and enough buzz
            to make work feel less like being stuck at home.
          </p>
          <div className="common-study-stats">
            <span><LaptopMinimalCheck size={18} /> Laptop tables</span>
            <span><ListMusic size={18} /> Live playlist</span>
            <span><Sparkles size={18} /> Student discount Tue</span>
          </div>
        </div>
      </section>

      <section className="common-gallery" id="common-gallery">
        <div className="common-gallery-lead">
          <div>
            <p className="common-kicker dark">Gallery</p>
            <h2>A cafe that looks like the audience already belongs there.</h2>
          </div>
          <a className="common-text-link" href="#common-contact">
            Visit today <ArrowRight size={17} />
          </a>
        </div>

        <div className="common-gallery-grid">
          {galleryShots.map((shot, index) => (
            <figure key={shot.title} className={`common-gallery-shot shot-${index + 1}`}>
              <img src={shot.image} alt={shot.title} />
              <figcaption>
                <strong>{shot.title}</strong>
                <span>{shot.text}</span>
              </figcaption>
            </figure>
          ))}

          <div className="common-gallery-note">
            <Camera size={20} />
            <strong>Visual story</strong>
            <p>Images show the counter, the products, and the study culture without relying on generic stock portraits.</p>
          </div>
        </div>
      </section>

      <section
        className="common-contact"
        id="common-contact"
        style={{ '--common-contact-image': `url(${heroImage})` }}
      >
        <div className="common-contact-copy">
          <p className="common-kicker">Contact</p>
          <h2>Order before you leave class, or come find the blue tile counter.</h2>
          <p>
            Call for pickup, ask about table space, or get directions to the cafe.
            Evening seats move fastest after lectures and before gigs.
          </p>
          <div className="common-contact-actions">
            <a className="common-button primary" href="tel:+12125550137">
              <Phone size={18} />
              Call Common Room
            </a>
            <a className="common-button secondary" href="https://maps.google.com/?q=88+Mercer+Street+New+York+NY" target="_blank" rel="noreferrer">
              Get directions
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <aside className="common-hours-card" aria-label="Opening hours and address">
          <span className="common-board-label">Open hours</span>
          <dl>
            <div><dt>Mon - Thu</dt><dd>7:30 - 21:30</dd></div>
            <div><dt>Fri</dt><dd>7:30 - 23:00</dd></div>
            <div><dt>Sat - Sun</dt><dd>8:30 - 22:00</dd></div>
          </dl>
          <address>
            88 Mercer Street<br />
            New York, NY
          </address>
          <div className="common-rating-note">
            <Star size={17} />
            Student discount on Tuesdays with ID. Plugs are first come, first served.
          </div>
        </aside>
      </section>

      <footer className="common-footer">
        <button type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={17} />
          Return to portfolio work
        </button>
        <p>Common Room Cafe demo site for McCormack Digital.</p>
      </footer>

      <a className="common-mobile-call" href="tel:+12125550137">
        <Phone size={18} />
        Order pickup
      </a>
    </article>
  );
}
