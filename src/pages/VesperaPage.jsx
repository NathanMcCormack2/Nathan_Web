import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BottleWine,
  CalendarDays,
  ChefHat,
  Clock3,
  Diamond,
  Flame,
  Flower2,
  Gem,
  KeyRound,
  Sparkles,
  Star,
  Utensils,
  Wine
} from 'lucide-react';
import heroImage from '../assets/vespera-hero.png';
import courseImage from '../assets/vespera-course.png';
import cellarImage from '../assets/vespera-cellar.png';
import privateDiningImage from '../assets/vespera-private-dining.png';
import logoImage from '../assets/vespera-logo.svg';
import '../styles/vespera.css';

const navItems = [
  ['Home', '#vespera-home'],
  ['Tasting', '#vespera-tasting'],
  ['Cellar', '#vespera-cellar'],
  ['Salon', '#vespera-salon'],
  ['Reserve', '#vespera-reserve']
];

const diningNotes = [
  { icon: Clock3, label: 'Two seatings', value: '18:30 and 21:15' },
  { icon: ChefHat, label: 'Menu', value: '12-course nocturne' },
  { icon: Wine, label: 'Cellar', value: '1,200 private labels' }
];

const tastingActs = [
  {
    id: 'tide',
    number: 'Act I',
    icon: Sparkles,
    title: 'Tide in black glass',
    mood: 'Cold smoke, silver service, and a first pour from the Champagne trolley.',
    courses: [
      'Native oyster, green almond, sea mist',
      'Langoustine, caviar, preserved lemon',
      'Scallop custard, champagne beurre blanc'
    ],
    pairing: 'Grower Champagne flight'
  },
  {
    id: 'garden',
    number: 'Act II',
    icon: Flower2,
    title: 'Garden after dark',
    mood: 'A softer chapter built from bitter leaves, truffle, and warm bread service.',
    courses: [
      'Artichoke rose, black truffle, vin jaune',
      'Charred leek, hazelnut, aged comte',
      'Sourdough brioche, cultured butter, fleur de sel'
    ],
    pairing: 'Burgundy white pairing'
  },
  {
    id: 'ember',
    number: 'Act III',
    icon: Flame,
    title: 'Ember and velvet',
    mood: 'The room turns deeper: charcoal, duck press, black fig, and old claret.',
    courses: [
      'Aged duck, black fig, long pepper',
      'Wild turbot, morel, smoked bone sauce',
      'Wagyu rib, brassica, bordelaise'
    ],
    pairing: 'Left Bank reserve pairing'
  },
  {
    id: 'gold',
    number: 'Finale',
    icon: Diamond,
    title: 'The gold room',
    mood: 'Petit fours arrive like jewellery, followed by espresso and the last candle.',
    courses: [
      'Citrus leaf, olive oil, champagne sabayon',
      'Bitter chocolate, tonka, gold leaf',
      'Petit four cabinet at the table'
    ],
    pairing: 'Sauternes and rare tea'
  }
];

const cellarLines = [
  ['Signature pour', '1998 Grand Cru Burgundy by Coravin'],
  ['Pairing style', 'Classic French, Japanese whisky, rare tea'],
  ['Private cellar', 'Bottles held for returning guests']
];

const salonDetails = [
  { icon: KeyRound, title: 'The Onyx Salon', text: 'Eight to twelve guests, black marble table, dedicated sommelier, private music brief.' },
  { icon: Gem, title: 'The Velvet Room', text: 'A softer room for celebrations, late suppers, proposal dinners, and board-level hosting.' },
  { icon: CalendarDays, title: 'Chef table', text: 'Four seats facing the pass, released monthly to the reservations list first.' }
];

export default function VesperaPage({ goToPage }) {
  const [selectedActId, setSelectedActId] = useState('tide');
  const [requestStatus, setRequestStatus] = useState('');

  const selectedAct = useMemo(
    () => tastingActs.find((act) => act.id === selectedActId) || tastingActs[0],
    [selectedActId]
  );

  const handleReservationSubmit = (event) => {
    event.preventDefault();
    setRequestStatus('Request noted. The reservations desk will reply within one service day.');
  };

  return (
    <article className="vespera-page">
      <header className="vespera-site-header" aria-label="Vespera demo navigation">
        <button className="vespera-back-link" type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={17} />
          Work
        </button>

        <a className="vespera-brand" href="#vespera-home" aria-label="Vespera homepage">
          <img src={logoImage} alt="Vespera" />
        </a>

        <nav className="vespera-nav" aria-label="Vespera sections">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="vespera-reserve-link" href="#vespera-reserve">
          Request a table
          <ArrowRight size={17} />
        </a>
      </header>

      <section className="vespera-hero" id="vespera-home">
        <img
          className="vespera-hero-image"
          src={heroImage}
          alt="Candlelit Vespera dining room with black lacquer walls, marble tables, and burgundy velvet seating"
        />
        <div className="vespera-hero-shade" />
        <div className="vespera-hero-frame" aria-hidden="true" />

        <div className="vespera-hero-inner">
          <div className="vespera-hero-copy">
            <p className="vespera-kicker">Mayfair tasting rooms</p>
            <h1>Vespera</h1>
            <p>
              A candlelit restaurant for late reservations, rare bottles, polished service,
              and a tasting menu that moves through the room like theatre.
            </p>

            <div className="vespera-hero-actions">
              <a className="vespera-button primary" href="#vespera-reserve">
                Request a table
                <ArrowRight size={18} />
              </a>
              <a className="vespera-button secondary" href="#vespera-tasting">
                Explore the menu
                <Utensils size={18} />
              </a>
            </div>
          </div>

          <aside className="vespera-invitation" aria-label="Reservation summary">
            <span>Tonight's service</span>
            <strong>Chef's nocturne</strong>
            <p>12 courses, cellar pairing available, jacket preferred after 7pm.</p>
            <dl>
              <div><dt>Seats</dt><dd>28</dd></div>
              <div><dt>Menu</dt><dd>GBP 285</dd></div>
              <div><dt>Pairing</dt><dd>GBP 145</dd></div>
            </dl>
          </aside>
        </div>

        <div className="vespera-vertical-note" aria-hidden="true">
          Lacquer room / candle service / late table
        </div>
      </section>

      <section className="vespera-ledger" aria-label="Restaurant quick details">
        {diningNotes.map((note) => {
          const Icon = note.icon;
          return (
            <div key={note.label}>
              <Icon size={21} />
              <span>{note.label}</span>
              <strong>{note.value}</strong>
            </div>
          );
        })}
      </section>

      <section className="vespera-tasting" id="vespera-tasting">
        <div className="vespera-section-lead">
          <p className="vespera-kicker dark">The menu</p>
          <h2>A tasting menu arranged like four private acts.</h2>
          <p>
            Each service is paced around the room: the first course lands quietly,
            the centre of the menu burns richer, and dessert closes with table-side
            petit fours, coffee, and a final pour.
          </p>
        </div>

        <div className="vespera-act-stage">
          <div className="vespera-act-tabs" role="tablist" aria-label="Tasting menu acts">
            {tastingActs.map((act) => {
              const Icon = act.icon;
              return (
                <button
                  key={act.id}
                  type="button"
                  role="tab"
                  aria-selected={act.id === selectedAct.id}
                  className={act.id === selectedAct.id ? 'is-active' : ''}
                  onClick={() => setSelectedActId(act.id)}
                >
                  <span>{act.number}</span>
                  <Icon size={19} />
                  {act.title}
                </button>
              );
            })}
          </div>

          <figure className="vespera-course-portrait">
            <img src={courseImage} alt="Fine dining shellfish course with caviar and gold leaf on black ceramic" />
            <figcaption>
              <span>Current plate</span>
              <strong>{selectedAct.title}</strong>
            </figcaption>
          </figure>

          <aside className="vespera-menu-paper" aria-live="polite">
            <span>{selectedAct.number}</span>
            <h3>{selectedAct.title}</h3>
            <p>{selectedAct.mood}</p>
            <ul>
              {selectedAct.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
            <div className="vespera-pairing-line">
              <BottleWine size={18} />
              {selectedAct.pairing}
            </div>
          </aside>
        </div>
      </section>

      <section className="vespera-rooms" id="vespera-rooms">
        <div className="vespera-room-image">
          <img src={heroImage} alt="Vespera main dining room set for evening service" />
          <span>Black lacquer, smoked mirror, burgundy velvet</span>
        </div>

        <div className="vespera-room-copy">
          <p className="vespera-kicker">The room</p>
          <h2>Dinner as a private theatre.</h2>
          <p>
            Vespera is designed for guests who want a restaurant to feel like a
            destination before the first glass is poured. Low lamps, heavy curtains,
            polished marble, and a quiet reservations desk set the rhythm from arrival.
          </p>
          <p>
            Service is choreographed around those materials: coats taken quietly,
            first glasses poured at the table, and each course introduced without
            ever breaking the spell of the room.
          </p>

          <div className="vespera-material-ledger" aria-label="Interior materials">
            <div><span>01</span><strong>Black marble</strong></div>
            <div><span>02</span><strong>Oxidised gold</strong></div>
            <div><span>03</span><strong>Smoked mirror</strong></div>
            <div><span>04</span><strong>Velvet banquettes</strong></div>
          </div>
        </div>
      </section>

      <section className="vespera-cellar" id="vespera-cellar">
        <figure className="vespera-cellar-image">
          <img src={cellarImage} alt="Candlelit wine cellar with sommelier pouring red wine beside rare bottles" />
        </figure>

        <div className="vespera-cellar-copy">
          <p className="vespera-kicker">The cellar</p>
          <h2>Old bottles, quiet hands, and pairings built at the table.</h2>
          <p>
            The cellar is not treated as an afterthought. Guests can choose a classic
            pairing, rare wine flight, Japanese whisky close, or a non-alcoholic tea
            progression prepared with the same service theatre.
          </p>

          <div className="vespera-cellar-ledger">
            {cellarLines.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <a className="vespera-text-link" href="#vespera-reserve">
            Speak with the sommelier
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section
        className="vespera-salon"
        id="vespera-salon"
        style={{ '--vespera-salon-image': `url(${privateDiningImage})` }}
      >
        <div className="vespera-salon-copy">
          <p className="vespera-kicker">Private dining</p>
          <h2>The salon is built for celebrations that need gravity.</h2>
          <p>
            A long table, fireplace, private cellar selection, and a dedicated service
            team make the salon suitable for destination birthdays, investor dinners,
            wedding weekends, and discreet client hosting.
          </p>
        </div>

        <div className="vespera-salon-grid">
          {salonDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <article key={detail.title}>
                <Icon size={23} />
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="vespera-gallery" aria-label="Vespera gallery">
        <figure className="large">
          <img src={privateDiningImage} alt="Private Vespera dining salon with chandelier and long table" />
          <figcaption>Private salon</figcaption>
        </figure>
        <figure>
          <img src={courseImage} alt="Vespera tasting menu course on a black plate" />
          <figcaption>Gold leaf course</figcaption>
        </figure>
        <figure>
          <img src={cellarImage} alt="Vespera wine cellar service" />
          <figcaption>Cellar table</figcaption>
        </figure>
      </section>

      <section className="vespera-reserve" id="vespera-reserve">
        <div className="vespera-reserve-copy">
          <p className="vespera-kicker dark">Reservations</p>
          <h2>Request the table, then let the room do the rest.</h2>
          <p>
            Vespera releases a small number of online tables each week. Larger parties,
            private salon enquiries, and cellar-led dinners are handled directly by the
            reservations desk.
          </p>

          <address>
            14 Audley Lane, Mayfair, London<br />
            <a href="tel:+442071830428">+44 20 7183 0428</a>
          </address>

          <div className="vespera-hours">
            <div><span>Tue - Thu</span><strong>18:30 - 23:30</strong></div>
            <div><span>Fri - Sat</span><strong>18:00 - 00:30</strong></div>
            <div><span>Sun - Mon</span><strong>Closed</strong></div>
          </div>
        </div>

        <form className="vespera-reserve-form" onSubmit={handleReservationSubmit}>
          <div className="vespera-form-row">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Guests
              <select name="guests" defaultValue="2">
                <option value="2">2 guests</option>
                <option value="4">4 guests</option>
                <option value="6">6 guests</option>
                <option value="private">Private salon</option>
              </select>
            </label>
          </div>

          <div className="vespera-form-row">
            <label>
              Preferred date
              <input type="date" name="date" />
            </label>
            <label>
              Seating
              <select name="seating" defaultValue="18:30">
                <option value="18:30">18:30</option>
                <option value="21:15">21:15</option>
                <option value="salon">Salon enquiry</option>
              </select>
            </label>
          </div>

          <label>
            Occasion
            <textarea name="occasion" rows="4" placeholder="Birthday, client dinner, cellar pairing, dietary notes" />
          </label>

          <button className="vespera-button primary" type="submit">
            Send reservation request
            <ArrowRight size={18} />
          </button>

          {requestStatus && <p className="vespera-form-status">{requestStatus}</p>}
        </form>
      </section>

      <footer className="vespera-footer">
        <button type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={17} />
          Return to portfolio work
        </button>
        <p>Vespera demo site for McCormack Digital.</p>
      </footer>

      <a className="vespera-mobile-reserve" href="#vespera-reserve">
        <Star size={18} />
        Request a table
      </a>
    </article>
  );
}