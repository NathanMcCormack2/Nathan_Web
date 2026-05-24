import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';

const contactEmail = 'your-email@example.com';
const contactPhone = 'Add your phone number';

const initialForm = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  enquiryType: '',
  businessType: '',
  currentLink: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `Website enquiry from ${form.businessName || form.name || 'a local business'}`;

    const body = `
Name: ${form.name}
Business name: ${form.businessName}
Email: ${form.email}
Phone: ${form.phone || 'Not provided'}

Enquiry type: ${form.enquiryType}
Business type: ${form.businessType}
Current website/social/Google listing: ${form.currentLink || 'Not provided'}

Message:
${form.message}
    `.trim();

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start with a free website audit or a clear project enquiry."
        text="Send over your business details, current website, social page or Google listing. I can review what is already online before recommending a new build, redesign or care plan."
      />

      <section className="container contact-layout contact-layout-refined">
        <form className="brief-form contact-brief-refined" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <p className="eyebrow">Project brief</p>
            <h2>Tell me what you need help with.</h2>
            <p>
              You do not need to have everything prepared. A current website, social page
              or Google listing is enough for me to start reviewing what could be improved.
            </p>
          </div>

          <div className="form-row">
            <label>
              Your name
              <input
                type="text"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Business name
              <input
                type="text"
                value={form.businessName}
                onChange={(event) => updateField('businessName', event.target.value)}
                placeholder="Example Café"
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Email
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Phone
              <input
                type="tel"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                placeholder="Optional"
              />
            </label>
          </div>

          <label>
            What do you want to start with?
            <select
              value={form.enquiryType}
              onChange={(event) => updateField('enquiryType', event.target.value)}
              required
            >
              <option value="" disabled>Choose one</option>
              <option>Free website audit</option>
              <option>New website quote</option>
              <option>Redesign my current website</option>
              <option>Monthly care / updates</option>
            </select>
          </label>

          <label>
            What kind of business is it?
            <select
              value={form.businessType}
              onChange={(event) => updateField('businessType', event.target.value)}
              required
            >
              <option value="" disabled>Choose one</option>
              <option>Restaurant / takeaway</option>
              <option>Café / shop</option>
              <option>Salon / barber</option>
              <option>Trade / local service</option>
              <option>Other local business</option>
            </select>
          </label>

          <label>
            Current website, Google listing or social page
            <input
              type="text"
              value={form.currentLink}
              onChange={(event) => updateField('currentLink', event.target.value)}
              placeholder="Paste a link if you have one"
            />
          </label>

          <label>
            Tell me what you need
            <textarea
              rows="7"
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
              placeholder="Tell me about the business, what is not working online, and whether you already have photos, menus, prices or text ready."
              required
            />
          </label>

          <div className="contact-form-actions">
            <button className="btn btn-primary" type="submit">
              Send enquiry <ArrowRight size={18} />
            </button>

            <p className="form-note">
              This opens your email app with the enquiry filled in. A direct form handler can be added before launch.
            </p>
          </div>
        </form>

        <aside className="contact-side-panel contact-side-refined">
          <p className="eyebrow dark">What happens next</p>

          <h2>A short, clear process.</h2>

          <ul>
            <li><CheckCircle2 /> I review your current website, social page or Google listing.</li>
            <li><CheckCircle2 /> I identify the biggest customer-facing issues.</li>
            <li><CheckCircle2 /> We agree the pages, content and rough scope.</li>
            <li><CheckCircle2 /> I provide a clear starting quote if a build makes sense.</li>
          </ul>

          <div className="contact-response-note">
            <span>Best first step</span>
            <p>
              Send a current website, Instagram, Facebook page or Google listing.
              I can use that to give a more useful first response.
            </p>
          </div>

          <div className="direct-contact-box">
            <a href={`mailto:${contactEmail}`}>
              <Mail size={18} /> {contactEmail}
            </a>

            <div>
              <Phone size={18} /> {contactPhone}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}