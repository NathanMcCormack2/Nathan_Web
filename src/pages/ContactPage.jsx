import { ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start with a simple website quote."
        text="This form is front-end only for now. Connect it to Formspree, Netlify Forms, EmailJS, a FastAPI backend or your preferred contact method before launch."
      />

      <section className="container contact-layout">
        <form className="brief-form" onSubmit={(event) => event.preventDefault()}>
          <div className="form-row">
            <label>
              Your name
              <input type="text" placeholder="Nathan McCormack" />
            </label>
            <label>
              Business name
              <input type="text" placeholder="Example Café" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Phone
              <input type="tel" placeholder="Optional" />
            </label>
          </div>
          <label>
            What kind of website do you need?
            <select defaultValue="">
              <option value="" disabled>Choose one</option>
              <option>Restaurant / takeaway</option>
              <option>Café / shop</option>
              <option>Salon / barber / service</option>
              <option>Other local business</option>
            </select>
          </label>
          <label>
            Tell me what you need
            <textarea rows="7" placeholder="Tell me about the business, what pages you need, and whether you already have photos/text." />
          </label>
          <button className="btn btn-primary" type="submit">Send enquiry <ArrowRight size={18} /></button>
          <p className="form-note">Replace this demo form with a working form handler before publishing.</p>
        </form>

        <aside className="contact-side-panel">
          <p className="eyebrow dark">What happens next</p>
          <h2>A short, clear process.</h2>
          <ul>
            <li><CheckCircle2 /> I review what the business needs online.</li>
            <li><CheckCircle2 /> We agree pages, content and rough scope.</li>
            <li><CheckCircle2 /> I provide a clear starting quote.</li>
            <li><CheckCircle2 /> If approved, I build and launch the site.</li>
          </ul>
          <div className="direct-contact-box">
            <div><Mail size={18} /> your-email@example.com</div>
            <div><Phone size={18} /> Add your phone number</div>
          </div>
        </aside>
      </section>
    </>
  );
}
