import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Loader2 } from 'lucide-react';
import { useReveal } from '../lib/interactions.js';

const contactEmail = 'nmccormack@zohomail.eu';

const initialForm = {
  name: '', businessName: '', email: '', phone: '',
  enquiryType: '', businessType: '', currentLink: '', message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const introRef = useReveal();
  const formRef = useReveal();

  const updateField = (field, value) => setForm((c) => ({ ...c, [field]: value }));

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    const formData = new FormData();
    formData.append('access_key', '0767b7c9-bfcd-4e39-bc2c-1b7764926e73');
    formData.append('subject', `Website enquiry from ${form.businessName || form.name}`);
    formData.append('from_name', form.name);
    formData.append('replyto', form.email);
    formData.append('name', form.name);
    formData.append('business_name', form.businessName);
    formData.append('email', form.email);
    formData.append('phone', form.phone || 'Not provided');
    formData.append('enquiry_type', form.enquiryType);
    formData.append('business_type', form.businessType);
    formData.append('current_link', form.currentLink || 'Not provided');
    formData.append('message', form.message);
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success) { setStatus('success'); setForm(initialForm); }
      else setStatus('error');
    } catch { setStatus('error'); }
  }

  if (status === 'success') {
    return (
      <div className="nx-page">
        <section className="nx-intro">
          <div className="nx-intro-inner">
            <p className="nx-eyebrow">Contact</p>
            <h1 className="nx-intro-title">Enquiry <span className="nx-ital">received.</span></h1>
          </div>
        </section>
        <section className="nx-contact-success">
          <div className="nx-success-inner">
            <div className="nx-success-icon"><CheckCircle2 size={40} /></div>
            <h2>Thanks — that's come through.</h2>
            <p>I'll review your details and reply within one business day. If you included a link to your
            current website or social page, I'll look at that before getting back to you.</p>
            <button className="nx-btn-primary" onClick={() => setStatus('idle')}>
              <span>Send another enquiry</span> <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="nx-page">
      <section className="nx-intro" ref={introRef}>
        <div className="nx-intro-inner">
          <p className="nx-eyebrow">Contact</p>
          <h1 className="nx-intro-title">Start with a free audit or a <span className="nx-ital">clear project enquiry.</span></h1>
          <p className="nx-intro-text">Send over your business details, current website, social page or Google listing.
          I can review what's already online before recommending a build, redesign or care plan.</p>
        </div>
      </section>

      <section className="nx-contact" ref={formRef}>
        <div className="nx-contact-inner">
          <form className="nx-form" onSubmit={handleSubmit} noValidate>
            <div className="nx-form-head">
              <p className="nx-eyebrow">Project brief</p>
              <h2>Tell me what you need help with.</h2>
              <p>You don't need everything prepared. A current website, social page or Google listing is
              enough for me to start reviewing what could be improved.</p>
            </div>

            <div className="nx-form-row">
              <label className="nx-field">
                <span>Your name</span>
                <input type="text" value={form.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Your name" required />
              </label>
              <label className="nx-field">
                <span>Business name</span>
                <input type="text" value={form.businessName} onChange={(e) => updateField('businessName', e.target.value)} placeholder="Example Café" required />
              </label>
            </div>

            <div className="nx-form-row">
              <label className="nx-field">
                <span>Email</span>
                <input type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} placeholder="you@example.com" required />
              </label>
              <label className="nx-field">
                <span>Phone</span>
                <input type="tel" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="Optional" />
              </label>
            </div>

            <label className="nx-field">
              <span>What do you want to start with?</span>
              <select value={form.enquiryType} onChange={(e) => updateField('enquiryType', e.target.value)} required>
                <option value="" disabled>Choose one</option>
                <option>Free website audit</option>
                <option>New website quote</option>
                <option>Redesign my current website</option>
                <option>Monthly care / updates</option>
              </select>
            </label>

            <label className="nx-field">
              <span>What kind of business is it?</span>
              <select value={form.businessType} onChange={(e) => updateField('businessType', e.target.value)} required>
                <option value="" disabled>Choose one</option>
                <option>Restaurant / takeaway</option>
                <option>Café / shop</option>
                <option>Salon / barber</option>
                <option>Trade / local service</option>
                <option>Other local business</option>
              </select>
            </label>

            <label className="nx-field">
              <span>Current website, Google listing or social page</span>
              <input type="text" value={form.currentLink} onChange={(e) => updateField('currentLink', e.target.value)} placeholder="Paste a link if you have one" />
            </label>

            <label className="nx-field">
              <span>Tell me what you need</span>
              <textarea rows="6" value={form.message} onChange={(e) => updateField('message', e.target.value)} placeholder="Tell me about the business, what's not working online, and whether you have photos, menus, prices or text ready." required />
            </label>

            {status === 'error' && (
              <p className="nx-form-error">Something went wrong — please try again or email me directly at {contactEmail}.</p>
            )}

            <button className="nx-btn-primary nx-btn-lg" type="submit" disabled={status === 'sending'}>
              {status === 'sending'
                ? <><Loader2 size={18} className="nx-spin" /> Sending…</>
                : <><span>Send enquiry</span> <ArrowRight size={18} /></>}
            </button>
          </form>

          <aside className="nx-contact-aside">
            <p className="nx-eyebrow nx-eyebrow--light">What happens next</p>
            <h2>A short, clear process.</h2>
            <ol className="nx-contact-steps">
              <li><span>01</span> I review your current website, social page or Google listing.</li>
              <li><span>02</span> I identify the biggest customer-facing issues.</li>
              <li><span>03</span> We agree the pages, content and rough scope.</li>
              <li><span>04</span> I provide a clear starting quote if a build makes sense.</li>
            </ol>
            <div className="nx-contact-note">
              <span className="nx-eyebrow">Best first step</span>
              <p>Send a current website, Instagram, Facebook page or Google listing — I can use it to give a far more useful first response.</p>
            </div>
            <a className="nx-contact-mail" href={`mailto:${contactEmail}`}>
              <Mail size={18} /> {contactEmail}
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}
