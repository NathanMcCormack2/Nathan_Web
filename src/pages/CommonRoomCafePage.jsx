import { useEffect, useRef } from 'react';
import {
  ArrowLeft, ArrowRight, Phone, MapPin, Clock3,
  Wifi, BatteryCharging, Music2, Coffee, Star
} from 'lucide-react';
import heroImage from '../assets/common-room-cafe-hero.png';
import drinksImage from '../assets/common-room-cafe-drinks.png';
import studyImage from '../assets/common-room-cafe-study.png';
import logoImage from '../assets/common-room-cafe-logo.svg';
import '../styles/commonRoomCafe.css';

const drinks = [
  { name: 'Iced Cloud Latte', desc: 'Espresso, oat milk, salted vanilla cold foam', price: '5.80' },
  { name: 'Matcha Split', desc: 'Ceremonial grade matcha, whole milk, strawberry layer', price: '6.20' },
  { name: 'Espresso Tonic', desc: 'Double shot, Galway Bay tonic, orange peel', price: '5.60' },
  { name: 'Cold Brew Hour', desc: 'House cold brew, ice, optional sweet cream top', price: '4.90' },
  { name: 'Flat White', desc: 'Double ristretto, steamed whole milk, light latte art', price: '3.90' },
];

const food = [
  { name: 'Breakfast Focaccia', desc: 'Egg, cheddar, chilli jam, rocket, toasted focaccia', price: '8.75' },
  { name: 'Cinnamon Bun', desc: 'Cardamom sugar, vanilla glaze, warmed on request', price: '4.60' },
  { name: 'Avocado Toast', desc: 'Sourdough, avocado, lemon, seeds, soft egg optional', price: '7.90' },
  { name: 'Espresso Brownie', desc: 'Dark chocolate, espresso salt, cut thick', price: '4.20' },
  { name: 'Toasted Banana Bread', desc: 'House-baked daily, served with salted butter', price: '3.80' },
];

const perks = [
  { icon: Wifi, title: 'Fast Wi-Fi', text: 'Strong enough for a submission, comfortable enough for a scroll.' },
  { icon: BatteryCharging, title: 'Always plugged in', text: 'Table plugs, counter chargers, and no side-eye for staying a while.' },
  { icon: Music2, title: 'Daily playlist', text: 'Lo-fi until noon, indie afternoons, something louder Fridays after 6.' },
  { icon: Coffee, title: 'Loyalty stamp', text: 'Every drink earns a stamp. Your sixth coffee is on the house.' },
];

export default function CommonRoomCafePage({ goToPage }) {
  const obs = useRef(null);

  useEffect(() => {
    obs.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('crc-in')),
      { threshold: 0.07, rootMargin: '0px 0px -32px 0px' }
    );
    document.querySelectorAll('.crc-reveal').forEach((el) => obs.current.observe(el));
    return () => obs.current?.disconnect();
  }, []);

  return (
    <div className="crc">

      {/* ── HEADER ── */}
      <header className="crc-header">
        <button className="crc-back" type="button" onClick={() => goToPage('work')}>
          <ArrowLeft size={14} strokeWidth={2.5} />
          Portfolio
        </button>
        <a className="crc-logo-link" href="#crc-hero">
          <img src={logoImage} alt="Common Room Cafe" />
        </a>
        <nav className="crc-nav">
          {[['Menu','#crc-menu'],['About','#crc-about'],['Vibe','#crc-vibe'],['Contact','#crc-contact']].map(([l,h]) => (
            <a key={l} href={h}>{l}</a>
          ))}
        </nav>
        <a className="crc-header-cta" href="tel:+35391550100">
          <Phone size={13} strokeWidth={2.5} />
          <span>091 550 100</span>
        </a>
      </header>

      {/* ── HERO ── */}
      <section className="crc-hero" id="crc-hero">
        <div className="crc-hero-bg">
          <img src={heroImage} alt="" />
          <div className="crc-hero-layer" />
          <div className="crc-hero-grain" />
          <div className="crc-hero-vignette" />
        </div>

        {/* Vertical side text */}
        <p className="crc-hero-vert" aria-hidden="true">Good Coffee · Galway · Est. 2019</p>

        <div className="crc-hero-body">
          <p className="crc-hero-overline crc-reveal">
            <span className="crc-dot-accent" />
            Abbeygate Street · Galway City
            <span className="crc-dot-accent" />
          </p>

          <h1 className="crc-hero-title crc-reveal">
            <span className="crc-hero-common">Common</span>
            <span className="crc-hero-room">Room</span>
          </h1>
          <p className="crc-hero-word crc-reveal">Café</p>

          <p className="crc-hero-tag crc-reveal">
            Iced drinks, warm seats &amp; proper coffee for Galway's students,<br />
            creatives and late-morning regulars.
          </p>

          <div className="crc-hero-actions crc-reveal">
            <a className="crc-btn-terra" href="tel:+35391550100">
              <Phone size={15} />
              Call to order
            </a>
            <a className="crc-btn-ghost" href="#crc-menu">
              See the menu
            </a>
          </div>
        </div>

        <div className="crc-hero-badge crc-reveal" aria-label="Open now">
          <span className="crc-pulse" />
          <strong>Open now</strong>
          <span>Until 9:30 pm</span>
        </div>

        {/* Coffee ring decorative */}
        <div className="crc-ring-deco" aria-hidden="true" />
      </section>

      {/* ── MARQUEE ── */}
      <div className="crc-marquee" aria-hidden="true">
        {[...Array(10)].map((_,i) => (
          <span key={i}>✦ Good Coffee ✦ Galway City ✦ Wi-Fi ✦ Iced Drinks ✦ Study Seats ✦ Stamp Card</span>
        ))}
      </div>

      {/* ── INFO STRIP ── */}
      <div className="crc-strip">
        <div className="crc-strip-item">
          <Phone size={16} />
          <span>Order ahead</span>
          <strong>091 550 100</strong>
        </div>
        <div className="crc-strip-rule" aria-hidden="true" />
        <div className="crc-strip-item">
          <MapPin size={16} />
          <span>Find us</span>
          <strong>14 Abbeygate St, Galway</strong>
        </div>
        <div className="crc-strip-rule" aria-hidden="true" />
        <div className="crc-strip-item">
          <Clock3 size={16} />
          <span>Open daily</span>
          <strong>7:30 am – 9:30 pm</strong>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="crc-about" id="crc-about">
        <div className="crc-about-image">
          <div className="crc-about-photo">
            <img src={studyImage} alt="Inside Common Room Cafe" />
            <div className="crc-about-grain" />
          </div>
          <div className="crc-about-tag crc-reveal">
            <span>Est.</span>
            <strong>2019</strong>
            <span>Galway</span>
          </div>
        </div>

        <div className="crc-about-copy">
          <p className="crc-label crc-reveal">About the cafe</p>
          <h2 className="crc-about-heading crc-reveal">
            A corner of Galway that belongs to whoever needs it most that morning.
          </h2>
          <blockquote className="crc-pull-quote crc-reveal">
            "We built Common Room for the people who drink their coffee with a purpose."
          </blockquote>
          <p className="crc-body crc-reveal">
            We opened on Abbeygate Street in 2019 because Galway needed a cafe that felt
            like a living room — somewhere between a proper coffee shop and somewhere you
            actually wanted to stay. Students come for the Wi-Fi and the iced matcha.
            Freelancers come for the long tables. Regulars come because they always have.
          </p>
          <p className="crc-body crc-reveal">
            Every drink is made to order. The playlist changes after noon. The brownies
            are baked in-house. We're not trying to be a chain. We're trying to be yours.
          </p>
          <ul className="crc-about-list crc-reveal">
            <li><span />Speciality coffee & matcha</li>
            <li><span />Long tables &amp; plug-in seats</li>
            <li><span />Student loyalty stamp card</li>
            <li><span />Tuesday student discount</li>
          </ul>
        </div>
      </section>

      {/* ── MENU ── */}
      <section className="crc-menu" id="crc-menu">
        <div className="crc-menu-hero-img">
          <img src={drinksImage} alt="" />
          <div className="crc-menu-img-overlay" />
        </div>

        <div className="crc-menu-content">
          <div className="crc-menu-title-block crc-reveal">
            <p className="crc-label light">From the counter</p>
            <h2 className="crc-menu-title">The Menu</h2>
            <p className="crc-menu-sub">Made fresh, ordered fast. No tablecloths required.</p>
          </div>

          <div className="crc-menu-board crc-reveal">
            <div className="crc-menu-col">
              <div className="crc-menu-col-header">
                <span className="crc-menu-roman">I</span>
                <div>
                  <h3>Drinks</h3>
                  <p>Iced, hot &amp; everything between</p>
                </div>
              </div>
              {drinks.map(item => (
                <div key={item.name} className="crc-menu-item">
                  <div>
                    <strong>{item.name}</strong>
                    <em>{item.desc}</em>
                  </div>
                  <span className="crc-dots" aria-hidden="true" />
                  <b>€{item.price}</b>
                </div>
              ))}
            </div>

            <div className="crc-menu-divider" aria-hidden="true" />

            <div className="crc-menu-col">
              <div className="crc-menu-col-header">
                <span className="crc-menu-roman">II</span>
                <div>
                  <h3>Food</h3>
                  <p>Baked fresh · travels to a lecture hall</p>
                </div>
              </div>
              {food.map(item => (
                <div key={item.name} className="crc-menu-item">
                  <div>
                    <strong>{item.name}</strong>
                    <em>{item.desc}</em>
                  </div>
                  <span className="crc-dots" aria-hidden="true" />
                  <b>€{item.price}</b>
                </div>
              ))}
            </div>
          </div>

          <p className="crc-menu-note crc-reveal">
            Oat milk &amp; soy available at no extra charge · Ask about daily specials · Stamp card accepted
          </p>
        </div>
      </section>

      {/* ── VIBE ── */}
      <section className="crc-vibe" id="crc-vibe">
        <div className="crc-vibe-intro">
          <p className="crc-label crc-reveal">The room</p>
          <h2 className="crc-vibe-heading crc-reveal">
            Built for the way people<br />actually use a cafe in 2025.
          </h2>
        </div>

        <div className="crc-perks">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="crc-perk crc-reveal" style={{ '--delay': `${i * 0.1}s` }}>
                <div className="crc-perk-icon"><Icon size={20} strokeWidth={1.5} /></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            );
          })}
        </div>

        <div className="crc-study-banner crc-reveal">
          <div className="crc-study-photo">
            <img src={studyImage} alt="Study corner at Common Room" />
            <div className="crc-study-overlay" />
          </div>
          <div className="crc-study-copy">
            <p className="crc-label light">Study corner</p>
            <h3>Stay twenty minutes or three hours. Just keep ordering coffee.</h3>
            <p>Long tables, plugs in reach, softer music before lunch. Tuesday student discount with ID. We won't rush you.</p>
            <a className="crc-btn-cream" href="#crc-contact">Find a table <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="crc-gallery" id="crc-gallery">
        <div className="crc-gallery-head crc-reveal">
          <p className="crc-label">Gallery</p>
          <h2 className="crc-section-heading">A look inside Common Room.</h2>
        </div>
        <div className="crc-gallery-grid">
          <figure className="crc-gf crc-gf-a crc-reveal">
            <div className="crc-gf-photo">
              <img src={heroImage} alt="Counter at Common Room Cafe" />
              <div className="crc-gf-caption">
                <strong>The Counter</strong>
                <span>Blue tile, warm light, and the best iced latte in Galway.</span>
              </div>
            </div>
          </figure>
          <figure className="crc-gf crc-gf-b crc-reveal">
            <div className="crc-gf-photo">
              <img src={drinksImage} alt="Drinks from Common Room" />
              <div className="crc-gf-caption">
                <strong>Desk Order</strong>
                <span>Matcha, cold brew, focaccia — within laptop reach.</span>
              </div>
            </div>
          </figure>
          <figure className="crc-gf crc-gf-c crc-reveal">
            <div className="crc-gf-photo">
              <img src={studyImage} alt="Study area at Common Room" />
              <div className="crc-gf-caption">
                <strong>The Long Tables</strong>
                <span>A study corner that still feels like a cafe, not a library.</span>
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <div className="crc-quote-band">
        <div className="crc-quote-inner crc-reveal">
          <span className="crc-qmark">&ldquo;</span>
          <p>The best iced coffee in Galway. I've tried to leave and I just keep coming back.</p>
          <footer>
            <Star size={13} fill="currentColor" strokeWidth={0} />
            <Star size={13} fill="currentColor" strokeWidth={0} />
            <Star size={13} fill="currentColor" strokeWidth={0} />
            <Star size={13} fill="currentColor" strokeWidth={0} />
            <Star size={13} fill="currentColor" strokeWidth={0} />
            <cite>— Aoife, NUIG student</cite>
          </footer>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <section className="crc-contact" id="crc-contact">
        <div className="crc-contact-inner">
          <div className="crc-contact-copy crc-reveal">
            <p className="crc-label light">Visit or order</p>
            <h2 className="crc-contact-heading">
              Call ahead, or just<br />walk through the door.
            </h2>
            <p className="crc-contact-body">
              Phone for pickup, ask about table space, or get directions from the Latin Quarter.
              We're a four-minute walk from Eyre Square. Look for the warm windows.
            </p>
            <a className="crc-btn-terra" href="tel:+35391550100">
              <Phone size={15} />
              Call 091 550 100
            </a>
          </div>

          <div className="crc-hours crc-reveal">
            <span className="crc-hours-label">Opening Hours</span>
            <dl>
              <div><dt>Mon – Fri</dt><dd>7:30 – 21:30</dd></div>
              <div><dt>Saturday</dt><dd>8:30 – 22:00</dd></div>
              <div><dt>Sunday</dt><dd>9:00 – 20:00</dd></div>
            </dl>
            <address>
              14 Abbeygate Street<br />
              Galway, Ireland
            </address>
            <p className="crc-hours-note">
              <Star size={12} fill="currentColor" strokeWidth={0} />
              Tuesday student discount with ID
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="crc-footer">
        <button type="button" onClick={() => goToPage('work')} className="crc-footer-back">
          <ArrowLeft size={14} strokeWidth={2.5} />
          Back to portfolio
        </button>
        <p>Common Room Cafe · Demo site · McCormack Web Designs</p>
      </footer>

      {/* ── MOBILE CALL ── */}
      <a className="crc-float-call" href="tel:+35391550100" aria-label="Call Common Room">
        <Phone size={19} strokeWidth={2} />
        <span>Call to order</span>
      </a>

    </div>
  );
}