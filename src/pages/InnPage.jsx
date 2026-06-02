import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft, Phone, MapPin, Clock3, Star,
  Music2, Utensils, BedDouble, Wifi, Car,
  Coffee, Dog, Users, ChevronDown, ArrowRight
} from 'lucide-react';
import '../styles/inn.css';

gsap.registerPlugin(ScrollTrigger);

/* ── PHOTOS ── */
const PHOTOS = {
  hero:      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&auto=format&fit=crop&q=85',
  interior:  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&auto=format&fit=crop&q=85',
  fireplace: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1000&auto=format&fit=crop&q=85',
  food:      'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1000&auto=format&fit=crop&q=85',
  breakfast: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&auto=format&fit=crop&q=85',
  bar:       'https://images.unsplash.com/photo-1574068468668-a05a11f871da?w=1000&auto=format&fit=crop&q=85',
  music:     'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&auto=format&fit=crop&q=85',
  coast:     'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=85',
  room1:     'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=85',
  room2:     'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&auto=format&fit=crop&q=85',
  room3:     'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=85',
  room4:     'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&auto=format&fit=crop&q=85',
  sunday:    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=85',
  quiz:      'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800&auto=format&fit=crop&q=85',
};

/* ── DATA ── */
const rooms = [
  { name: 'The Heather Room',   type: 'Standard Double', price: '€89',  img: 'room1', features: ['En suite shower','Sea views','Free Wi-Fi','Tea & coffee'] },
  { name: 'The Turf Suite',     type: 'Family Suite',    price: '€149', img: 'room2', features: ['Two bedrooms','Sitting area','Bunk beds','Cot available'] },
  { name: 'The Bay Room',       type: 'Sea View Double', price: '€129', img: 'room3', features: ['Clew Bay views','En suite bath','Sash windows','Blackout blinds'] },
  { name: 'The Snug Room',      type: 'Cosy Double',     price: '€109', img: 'room4', features: ['Original beams','Character features','En suite shower','Free Wi-Fi'] },
];

const menuHighlights = [
  { name: 'Irish Beef Stew',           price: '€16.50', note: 'Slow-cooked · brown bread' },
  { name: "Tigh Mhóir Fish & Chips",   price: '€17.90', note: 'Day-boat · tartare · mushy peas' },
  { name: 'Bacon & Cabbage',           price: '€15.90', note: 'Connacht cured · parsley sauce' },
  { name: 'Grilled Clare Island Salmon', price: '€22.00', note: 'Dill cream · new potatoes' },
  { name: '8oz Connacht Sirloin',      price: '€28.50', note: 'Dry-aged · hand-cut chips' },
  { name: 'Sunday Roast',              price: '€18.00', note: 'Sun only · 12:30–4pm · book ahead' },
];

const drinks = [
  { name: 'Guinness',           note: 'Poured properly. Always.',        price: '€5.80' },
  { name: 'Jameson 12 Year',    note: 'Neat or with a drop — your call', price: '€7.50' },
  { name: 'Connemara Peated',   note: 'Smooth with a coastal smoke',     price: '€8.00' },
  { name: 'Famine Road IPA',    note: 'Local craft · hoppy · 4.8%',      price: '€6.50' },
  { name: 'Hot Whiskey',        note: 'Jameson · clove · lemon · honey', price: '€7.00' },
];

const events = [
  { title: 'Trad Sessions',     when: 'Every Friday & Saturday',   time: 'From 9pm',       img: 'music',   color: '#1B3A2F', desc: "Live traditional music in the front bar. No PA, no setlist — just the real thing. Sessions often run past midnight." },
  { title: 'Sunday Roast',      when: 'Every Sunday',              time: '12:30 – 4pm',    img: 'sunday',  color: '#8B2635', desc: "Roast Connacht lamb or beef with all the trimmings. Our most popular sitting. Book ahead — this one fills quickly." },
  { title: 'Wednesday Quiz',    when: 'Every Wednesday',           time: 'From 8:30pm',    img: 'quiz',    color: '#2D5944', desc: "Teams of 2–6. Expect GAA, county history and at least one question about Mayo football. €2 entry. Prizes behind the bar." },
  { title: 'Afternoon Trad',    when: 'Every Sunday',              time: '4pm – 7pm',      img: 'fireplace', color: '#7A4A1C', desc: "Informal session in the snug. Come for one pint, stay for three. Families welcome until the kids are ready for bed." },
];

const stats = [
  { number: '130+', label: 'Years open' },
  { number: '10',   label: 'Rooms' },
  { number: '3',    label: 'Nights of live music' },
  { number: '1',    label: 'Proper Irish bar' },
];

/* ── ANIMATION HELPERS ── */
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const staggerFast = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

/* ── COMPONENT ── */
export default function InnPage({ goToPage }) {
  const heroRef    = useRef(null);
  const heroBgRef  = useRef(null);
  const statsRef   = useRef(null);

  /* ─ GSAP: hero parallax + entrance + stats counter ─ */
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Hero photo parallax on scroll */
      gsap.to(heroBgRef.current, {
        yPercent: 28,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        },
      });

      /* Hero text — lines reveal on mount */
      const tl = gsap.timeline({ delay: 0.15, defaults: { ease: 'power4.out' } });
      tl.from('.inn-hero-lines .line', {
          yPercent: 110,
          opacity:  0,
          stagger:  0.14,
          duration: 1.1,
        })
        .from('.inn-hero-sub',   { opacity: 0, y: 18, duration: 0.7 }, '-=0.4')
        .from('.inn-hero-ctas',  { opacity: 0, y: 14, duration: 0.6 }, '-=0.35')
        .from('.inn-hero-facts', { opacity: 0, y: 10, duration: 0.5 }, '-=0.3')
        .from('.inn-scroll-cue', { opacity: 0,         duration: 0.4 }, '-=0.1');

      /* Stats counter animation */
      gsap.utils.toArray('.stat-number').forEach((el) => {
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;
        gsap.from({ val: 0 }, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate() { el.textContent = Math.round(this.targets()[0].val) + (el.dataset.suffix || ''); },
        });
      });

      /* Section headings — clip-path wipe */
      gsap.utils.toArray('.gsap-reveal').forEach((el) => {
        gsap.from(el, {
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          y: 20,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.09, duration: 1.5, smoothWheel: true }}>
    <div className="inn">

      {/* ── LIVE TONIGHT BANNER ── */}
      <div className="inn-tonight-bar">
        <span className="inn-tonight-pulse" aria-hidden="true" />
        <strong>Live tonight</strong>
        <span className="inn-tonight-sep">—</span>
        <span>Trad session · Front bar · 9pm · No cover charge</span>
        <a href="#inn-events" className="inn-tonight-more">See all events <ArrowRight size={12}/></a>
      </div>

      {/* ── HEADER ── */}
      <header className="inn-header">
        <button className="inn-back" onClick={() => goToPage('work')} type="button">
          <ArrowLeft size={14} strokeWidth={2.5}/> Portfolio
        </button>
        <a href="#inn-hero" className="inn-header-brand">
          <span className="inn-header-name">Tigh Mhóir</span>
          <span className="inn-header-tag">Bar · Inn · Kitchen</span>
        </a>
        <nav className="inn-nav">
          {[['Rooms','#inn-rooms'],['Food & Bar','#inn-food'],['Events','#inn-events'],['Find Us','#inn-contact']].map(([l,h]) => (
            <a key={l} href={h}>{l}</a>
          ))}
        </nav>
        <a className="inn-header-cta" href="tel:+35398555237">
          <Phone size={13}/><span>098 555 237</span>
        </a>
      </header>

      {/* ── HERO ── */}
      <section className="inn-hero" id="inn-hero" ref={heroRef}>
        {/* Parallax photo layer */}
        <div className="inn-hero-media" ref={heroBgRef}>
          <img src={PHOTOS.hero} alt="Inside Tigh Mhóir" />
          <div className="inn-hero-overlay" />
        </div>

        {/* Floating badges */}
        <div className="inn-hero-badge inn-hero-badge-open">
          <span className="inn-open-dot" />
          Open now
        </div>
        <div className="inn-hero-badge inn-hero-badge-est">
          Est.<br/>1892
        </div>

        <div className="inn-hero-body">
          <p className="inn-hero-location">
            <MapPin size={13}/> Westport, Co. Mayo
          </p>

          <div className="inn-hero-lines" aria-label="Come in out of the rain">
            <span className="line">Come in out</span>
            <span className="line">of the rain.</span>
          </div>

          <p className="inn-hero-sub">
            A proper west-of-Ireland inn. Warm rooms, good whiskey,
            live trad and a kitchen that actually knows what it's doing.
          </p>

          <div className="inn-hero-ctas">
            <a className="inn-btn-primary" href="tel:+35398555237">
              <BedDouble size={16}/> Book a room
            </a>
            <a className="inn-btn-secondary" href="#inn-food">
              See the menu <ArrowRight size={15}/>
            </a>
          </div>

          <div className="inn-hero-facts">
            <span><Dog size={13}/> Dog friendly</span>
            <span className="inn-sep" aria-hidden="true"/>
            <span><Users size={13}/> Family welcome</span>
            <span className="inn-sep" aria-hidden="true"/>
            <span><Wifi size={13}/> Free Wi-Fi</span>
          </div>
        </div>

        <a href="#inn-welcome" className="inn-scroll-cue" aria-label="Scroll down">
          <ChevronDown size={22}/>
        </a>
      </section>

      {/* ── INFO BAND ── */}
      <div className="inn-band">
        <div className="inn-band-item">
          <Phone size={15}/>
          <span>Call or book</span>
          <strong>098 555 237</strong>
        </div>
        <div className="inn-band-rule" aria-hidden="true"/>
        <div className="inn-band-item">
          <MapPin size={15}/>
          <span>Find us</span>
          <strong>The Quay, Westport, Co. Mayo</strong>
        </div>
        <div className="inn-band-rule" aria-hidden="true"/>
        <div className="inn-band-item">
          <Clock3 size={15}/>
          <span>Bar open daily</span>
          <strong>12 noon · late</strong>
        </div>
        <div className="inn-band-rule" aria-hidden="true"/>
        <div className="inn-band-item">
          <Utensils size={15}/>
          <span>Kitchen</span>
          <strong>12:00 – 21:00</strong>
        </div>
      </div>

      {/* ── WELCOME ── */}
      <section className="inn-welcome" id="inn-welcome">
        <div className="inn-welcome-photos">
          <motion.div className="inn-wp-main"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <img src={PHOTOS.interior} alt="The bar at Tigh Mhóir"/>
          </motion.div>
          <motion.div className="inn-wp-small"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <img src={PHOTOS.fireplace} alt="Fire in the bar"/>
            <div className="inn-wp-caption">The turf fire. Always lit October–May.</div>
          </motion.div>
        </div>

        <div className="inn-welcome-copy">
          <p className="inn-eyebrow gsap-reveal">Welcome to Tigh Mhóir</p>
          <h2 className="inn-welcome-h2 gsap-reveal">
            The same fire has been lit here every winter since 1892.
          </h2>
          <motion.p className="inn-welcome-p"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22,1,.36,1] }}>
            Tigh Mhóir sits on Westport Quay — close enough to the water that you can smell
            the Atlantic when the door opens. We're a bar, a kitchen and a small inn. Family-run,
            not trying to be anything we're not.
          </motion.p>
          <motion.p className="inn-welcome-p"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.25, ease: [0.22,1,.36,1] }}>
            Whether you're stopping for a pint on the Connemara loop, booking a room for the
            week, or coming in with the family for Sunday lunch — you're welcome here.
          </motion.p>

          <motion.div className="inn-welcome-amenities"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-40px' }} variants={staggerFast}>
            {[
              [BedDouble, '10 rooms — B&B available'],
              [Car,       'Free parking on site'],
              [Coffee,    'Full Irish breakfast'],
              [Wifi,      'Free Wi-Fi throughout'],
              [Dog,       'Dogs welcome in the bar'],
              [Music2,    'Live trad 3 nights a week'],
            ].map(([Icon, text]) => (
              <motion.div key={text} className="inn-amenity" variants={fadeUp}>
                <Icon size={18} strokeWidth={1.8}/><span>{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="inn-stats" ref={statsRef}>
        {stats.map(s => (
          <div key={s.label} className="inn-stat">
            <strong
              className="stat-number"
              data-target={parseInt(s.number)}
              data-suffix={s.number.includes('+') ? '+' : ''}>
              {s.number}
            </strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── ROOMS ── */}
      <section className="inn-rooms" id="inn-rooms">
        <div className="inn-section-head">
          <p className="inn-eyebrow gsap-reveal">The Inn</p>
          <h2 className="inn-section-h2 gsap-reveal">Ten rooms. Each one different.</h2>
          <p className="inn-section-sub">
            No two rooms identical. Individually furnished, properly comfortable,
            and all include full Irish breakfast in the morning.
          </p>
        </div>

        <motion.div className="inn-rooms-grid"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }} variants={stagger}>
          {rooms.map(room => (
            <motion.article key={room.name} className="inn-room-card" variants={fadeUp}
              whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: [0.22,1,.36,1] }}>
              <div className="inn-room-img-wrap">
                <img src={PHOTOS[room.img]} alt={room.name} loading="lazy"/>
                <span className="inn-room-badge">{room.type}</span>
              </div>
              <div className="inn-room-body">
                <div className="inn-room-head">
                  <h3>{room.name}</h3>
                  <div className="inn-room-price"><strong>{room.price}</strong><span>/night</span></div>
                </div>
                <ul className="inn-room-features">
                  {room.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="inn-rooms-footer">
          <p>All rooms include full Irish breakfast · Check-in 3pm · Check-out 11am</p>
          <a className="inn-btn-primary" href="tel:+35398555237">
            <Phone size={14}/> Call to book — 098 555 237
          </a>
        </div>
      </section>

      {/* ── FOOD & BAR ── */}
      <section className="inn-food" id="inn-food">
        <div className="inn-food-layout">

          {/* Photo side */}
          <div className="inn-food-photos">
            <motion.div className="inn-food-photo-main"
              initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.9, ease: [0.22,1,.36,1] }}>
              <img src={PHOTOS.food} alt="Tigh Mhóir kitchen"/>
              <div className="inn-food-photo-label">Kitchen open daily · 12:00 – 21:00</div>
            </motion.div>
            <motion.div className="inn-food-photo-bar"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22,1,.36,1] }}>
              <img src={PHOTOS.breakfast} alt="Full Irish breakfast"/>
            </motion.div>
          </div>

          {/* Menu board */}
          <div className="inn-food-content">
            <p className="inn-eyebrow gsap-reveal">Food & Bar</p>
            <h2 className="inn-section-h2 gsap-reveal">The kitchen. The bar.</h2>
            <p className="inn-section-sub">
              Local produce, proper portions, no pretension. The bar has been pouring Guinness since
              before your grandfather was born.
            </p>

            <div className="inn-chalkboard">
              <h3 className="inn-chalkboard-title">Today's Menu</h3>
              <motion.div className="inn-menu-list"
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-40px' }} variants={stagger}>
                {menuHighlights.map(item => (
                  <motion.div key={item.name} className="inn-menu-row" variants={fadeUp}>
                    <div>
                      <strong>{item.name}</strong>
                      <em>{item.note}</em>
                    </div>
                    <b>{item.price}</b>
                  </motion.div>
                ))}
              </motion.div>
              <p className="inn-chalkboard-foot">
                Gluten-free batter available · Kids portions on request · Allergen info at the bar
              </p>
            </div>
          </div>
        </div>

        {/* Bar section — dark, photo-backed */}
        <div className="inn-bar-section">
          <div className="inn-bar-photo">
            <img src={PHOTOS.bar} alt="The bar at Tigh Mhóir" loading="lazy"/>
            <div className="inn-bar-overlay"/>
          </div>
          <motion.div className="inn-bar-content"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-40px' }} variants={stagger}>
            <p className="inn-eyebrow light">The Bar</p>
            <h3 className="inn-bar-h3">A proper Irish bar.<br/>We don't do cocktail lists.</h3>
            <div className="inn-drinks-grid">
              {drinks.map(d => (
                <motion.div key={d.name} className="inn-drink-row" variants={fadeUp}>
                  <div>
                    <strong>{d.name}</strong>
                    <span>{d.note}</span>
                  </div>
                  <b>{d.price}</b>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="inn-events" id="inn-events">
        <div className="inn-section-head">
          <p className="inn-eyebrow gsap-reveal">Live at Tigh Mhóir</p>
          <h2 className="inn-section-h2 gsap-reveal">Something on most nights.</h2>
          <p className="inn-section-sub">No cover charge. No booking needed. Just show up.</p>
        </div>

        <motion.div className="inn-events-grid"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }} variants={stagger}>
          {events.map(ev => (
            <motion.article key={ev.title} className="inn-event-card" variants={fadeUp}
              whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <div className="inn-event-photo" style={{ '--ev-bg': ev.color }}>
                <img src={PHOTOS[ev.img]} alt={ev.title} loading="lazy"/>
                <div className="inn-event-overlay" style={{ background: `linear-gradient(to top, ${ev.color}ee, transparent)` }}/>
                <div className="inn-event-when">
                  <span>{ev.when}</span>
                  <strong>{ev.time}</strong>
                </div>
              </div>
              <div className="inn-event-body">
                <h3>{ev.title}</h3>
                <p>{ev.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Tonight promo banner */}
        <motion.div className="inn-tonight-feature"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22,1,.36,1] }}>
          <div className="inn-tonight-feature-photo">
            <img src={PHOTOS.music} alt="Live music at Tigh Mhóir"/>
          </div>
          <div className="inn-tonight-feature-copy">
            <span className="inn-tonight-live"><span className="inn-open-dot"/>Live tonight</span>
            <h3>Traditional Irish Session</h3>
            <p>
              Front bar · 9pm start · No PA, no playlist, no cover charge.<br/>
              Families welcome until 9pm. Sessions often run past midnight.
            </p>
            <a className="inn-btn-primary" href="#inn-contact">
              <MapPin size={14}/> Get directions
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── GALLERY ── */}
      <section className="inn-gallery">
        <div className="inn-section-head">
          <p className="inn-eyebrow gsap-reveal">Gallery</p>
          <h2 className="inn-section-h2 gsap-reveal">A look inside Tigh Mhóir.</h2>
        </div>

        <motion.div className="inn-gallery-grid"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }} variants={stagger}>
          {[
            { img: 'interior',  label: 'The Bar',         sub: 'Original 1892 counter · turf fire · low beams' },
            { img: 'room3',     label: 'Bay View Room',   sub: 'Clew Bay through sash windows every morning' },
            { img: 'food',      label: 'Kitchen',         sub: 'Local produce · proper portions · daily specials' },
            { img: 'music',     label: 'Live Trad',       sub: 'Front bar · Friday & Saturday from 9pm' },
            { img: 'breakfast', label: 'Irish Breakfast', sub: 'Full Irish every morning · included with rooms' },
            { img: 'coast',     label: 'Clew Bay',        sub: 'Ten minutes walk from the quay' },
          ].map((item, i) => (
            <motion.figure key={item.label} className="inn-gal-item" variants={fadeUp}
              whileHover="hover" initial="rest">
              <motion.div className="inn-gal-photo"
                variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
                transition={{ duration: 0.5, ease: [0.22,1,.36,1] }}>
                <img src={PHOTOS[item.img]} alt={item.label} loading="lazy"/>
                <motion.div className="inn-gal-caption"
                  variants={{ rest: { opacity: 0, y: 8 }, hover: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3 }}>
                  <strong>{item.label}</strong>
                  <span>{item.sub}</span>
                </motion.div>
              </motion.div>
            </motion.figure>
          ))}
        </motion.div>
      </section>

      {/* ── REVIEW BAND ── */}
      <div className="inn-review-band">
        <motion.div className="inn-review"
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22,1,.36,1] }}>
          <div className="inn-review-stars">
            {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" strokeWidth={0}/>)}
          </div>
          <blockquote>
            "We stopped for one pint on the way to Achill. Left three hours later.
            Came back the next evening with the kids. The trad session didn't end until half one."
          </blockquote>
          <cite>— Reviewed on TripAdvisor, August 2024</cite>
        </motion.div>
      </div>

      {/* ── CONTACT ── */}
      <section className="inn-contact" id="inn-contact">
        <div className="inn-contact-bg">
          <img src={PHOTOS.coast} alt="Clew Bay, Westport"/>
          <div className="inn-contact-bg-overlay"/>
        </div>

        <div className="inn-contact-content">
          <motion.div className="inn-contact-copy"
            initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, ease: [0.22,1,.36,1] }}>
            <p className="inn-eyebrow light">Find Us</p>
            <h2>Come in out of the rain. We'll have a fire on.</h2>
            <p>
              We're on Westport Quay — ten minutes walk from the town square.
              Parking out front. Dogs welcome at the bar. Families welcome at all times.
            </p>
            <a className="inn-btn-primary" href="tel:+35398555237">
              <Phone size={15}/> Call Tigh Mhóir — 098 555 237
            </a>
            <div className="inn-contact-info">
              <div><MapPin size={15}/><span>The Quay, Westport, Co. Mayo, F28 XY42</span></div>
              <div><Coffee size={15}/><span>hello@tighmhoir.ie</span></div>
            </div>
          </motion.div>

          <motion.div className="inn-hours-card"
            initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22,1,.36,1] }}>
            <strong className="inn-hours-title">Opening Hours</strong>
            <dl>
              {[['Mon – Thu','12:00 – 23:30'],['Friday','12:00 – 00:00'],['Saturday','12:00 – 00:00'],['Sunday','12:30 – 23:00']].map(([d,t]) => (
                <div key={d}><dt>{d}</dt><dd>{t}</dd></div>
              ))}
            </dl>
            <div className="inn-hours-note"><Utensils size={13}/> Kitchen closes 21:00 daily</div>
            <div className="inn-hours-note"><Music2 size={13}/> Live trad Fri & Sat from 9pm</div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="inn-footer">
        <div className="inn-footer-inner">
          <div className="inn-footer-brand">
            <strong>Tigh Mhóir</strong>
            <span>Bar · Inn · Kitchen · Est. 1892</span>
            <span>The Quay, Westport, Co. Mayo</span>
          </div>
          <nav className="inn-footer-nav">
            {[['Rooms','#inn-rooms'],['Food & Bar','#inn-food'],['Events','#inn-events'],['Find Us','#inn-contact']].map(([l,h]) => (
              <a key={l} href={h}>{l}</a>
            ))}
          </nav>
          <div className="inn-footer-contact">
            <a href="tel:+35398555237"><Phone size={14}/> 098 555 237</a>
            <a href="mailto:hello@tighmhoir.ie">hello@tighmhoir.ie</a>
          </div>
        </div>
        <div className="inn-footer-bottom">
          <button onClick={() => goToPage('work')} className="inn-back-btn">
            <ArrowLeft size={13}/> Back to portfolio
          </button>
          <p>© 2025 Tigh Mhóir · Demo site by McCormack Digital</p>
        </div>
      </footer>

    </div>
    </ReactLenis>
  );
}