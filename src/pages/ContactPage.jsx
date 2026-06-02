import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Phone, Loader2 } from 'lucide-react';
import PageIntro from '../components/ui/PageIntro.jsx';

const contactEmail = 'nmccormack@zohomail.eu';

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
  const [form,   setForm]   = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData();
    formData.append('access_key',    '0767b7c9-bfcd-4e39-bc2c-1b7764926e73');
    formData.append('subject',       `Website enquiry from ${form.businessName || form.name}`);
    formData.append('from_name',     form.name);
    formData.append('replyto',       form.email);
    formData.append('name',          form.name);
    formData.append('business_name', form.businessName);
    formData.append('email',         form.email);
    formData.append('phone',         form.phone         || 'Not provided');
    formData.append('enquiry_type',  form.enquiryType);
    formData.append('business_type', form.businessType);
    formData.append('current_link',  form.currentLink   || 'Not provided');
    formData.append('message',       form.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  /* ── SUCCESS STATE ── */
  if (status === 'success') {
    return (
      <>
        <PageIntro
          eyebrow="Contact"
          title="Start with a free website audit or a clear project enquiry."
          text="Send over your business details, current website, social page or Google listing."
        />
        <section className="container contact-success">
          <div className="contact-success-inner">
            <CheckCircle2 size={44} />
            <h2>Enquiry received.</h2>
            <p>
              I'll review your details and reply within one business day.
              If you included a link to your current website or social page,
              I'll look at that before getting back to you.
            </p>
            <button className="btn btn-primary" onClick={() => setStatus('idle')}>
              Send another enquiry <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </>
    );
  }

  /* ── FORM ── */
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start with a free website audit or a clear project enquiry."
        text="Send over your business details, current website, social page or Google listing. I can review what is already online before recommending a new build, redesign or care plan."
      />

      <section className="container contact-layout contact-layout-refined">
        <form className="brief-form contact-brief-refined" onSubmit={handleSubmit} noValidate>

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
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Business name
              <input
                type="text"
                value={form.businessName}
                onChange={(e) => updateField('businessName', e.target.value)}
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
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="Optional"
              />
            </label>
          </div>

          <label>
            What do you want to start with?
            <select
              value={form.enquiryType}
              onChange={(e) => updateField('enquiryType', e.target.value)}
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
              onChange={(e) => updateField('businessType', e.target.value)}
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
              onChange={(e) => updateField('currentLink', e.target.value)}
              placeholder="Paste a link if you have one"
            />
          </label>

          <label>
            Tell me what you need
            <textarea
              rows="7"
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
              placeholder="Tell me about the business, what is not working online, and whether you already have photos, menus, prices or text ready."
              required
            />
          </label>

          {status === 'error' && (
            <p className="form-error">
              Something went wrong — please try again or email me directly at {contactEmail}.
            </p>
          )}

          <div className="contact-form-actions">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <><Loader2 size={18} className="spin" /> Sending…</>
              ) : (
                <>Send enquiry <ArrowRight size={18} /></>
              )}
            </button>
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
          </div>
        </aside>
      </section>
    </>
  );
}