import {
  BarChart3,
  Bell,
  Brush,
  Clock3,
  Code2,
  FileText,
  Globe2,
  LayoutDashboard,
  MessageSquare,
  MonitorSmartphone,
  PhoneCall,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  Wrench,
  Zap
} from 'lucide-react';

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'maintenance', label: 'Care Plan' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

export const serviceFeatures = [
  { title: 'Mobile-first design', text: 'Layouts built for customers browsing quickly on their phone.', icon: MonitorSmartphone },
  { title: 'Clear business details', text: 'Hours, location, menu/services and contact options placed upfront.', icon: Store },
  { title: 'Local SEO basics', text: 'Clean headings, page structure and metadata foundations.', icon: Search },
  { title: 'Launch handled', text: 'Hosting, domain connection, SSL and deployment support.', icon: Globe2 },
  { title: 'Fast loading pages', text: 'Lean React/Vite builds with compressed assets.', icon: Zap },
  { title: 'Maintainable setup', text: 'Reusable components and a codebase that is easy to update.', icon: Code2 },
  { title: 'Content guidance', text: 'Help turning rough notes into clear website sections.', icon: FileText },
  { title: 'Ongoing support', text: 'Small edits and fixes available through a care plan.', icon: Wrench }
];

export const businessTypes = [
  {
    type: 'Restaurants & Takeaways',
    problem: 'Menus, hours and phone details are hard to find.',
    build: 'A menu-led site with call buttons, gallery, map and opening hours.',
    icon: PhoneCall
  },
  {
    type: 'Cafés & Local Shops',
    problem: 'Customers rely on scattered social posts for basic info.',
    build: 'A warm local-business site with products, photos and directions.',
    icon: Sparkles
  },
  {
    type: 'Barbers, Salons & Services',
    problem: 'Prices, services and contact options are unclear.',
    build: 'A polished service site with pricing, FAQs and enquiry paths.',
    icon: Brush
  }
];

export const processSteps = [
  { number: '01', title: 'Audit', text: 'Review what customers currently see online.' },
  { number: '02', title: 'Content map', text: 'Choose the pages, sections and calls to action.' },
  { number: '03', title: 'Design direction', text: 'Create a look that fits the business.' },
  { number: '04', title: 'Build and test', text: 'Build responsively and check desktop/mobile.' },
  { number: '05', title: 'Launch', text: 'Deploy the site and support the handover.' }
];

export const examples = [
  {
    type: 'Restaurant concept',
    title: 'The Harbour Table',
    description: 'A food-led site with menu previews, direct calls, location and image-led specials.',
    tags: ['Menu-first', 'Mobile CTA', 'Gallery'],
    imageNote: 'Replace with restaurant screenshot/image'
  },
  {
    type: 'Café concept',
    title: 'Corner & Steam',
    description: 'A warm café website with product highlights, opening hours and directions.',
    tags: ['Hours', 'Photos', 'Local'],
    imageNote: 'Replace with café screenshot/image'
  },
  {
    type: 'Salon concept',
    title: 'Northline Studio',
    description: 'A clean service-led site with pricing, staff information and contact options.',
    tags: ['Pricing', 'Services', 'Trust'],
    imageNote: 'Replace with salon screenshot/image'
  }
];

// Replace the existing `packages` array in siteData.js with this:

export const packages = [
  {
    name: 'Essential Presence',
    price: '€450 – €650',
    monthly: 'Care from €50/month',
    firstYear: '€810 – €1,010',
    bestFor: 'A business that needs a clean, trustworthy site fast.',
    features: [
      'Homepage or compact 2–3 page structure',
      'Mobile-first layout',
      'Opening hours, location and contact',
      'Tap-to-call and directions button',
      'Basic SEO setup',
      'Deployment and launch support',
    ],
    highlight: false,
  },
  {
    name: 'Local Business Site',
    price: '€850 – €1,200',
    monthly: 'Care from €55/month',
    firstYear: '€1,510 – €1,860',
    bestFor: 'Restaurants, cafés, shops and service businesses.',
    features: [
      '4–6 pages with full content structure',
      'Menu, services or product sections',
      'Gallery and image sections',
      'Contact form with email delivery',
      'Stronger conversion layout',
      'Launch checklist and handover',
    ],
    highlight: true,
  },
  {
    name: 'Signature Build',
    price: '€1,250 – €1,800',
    monthly: 'Care from €85/month',
    firstYear: '€2,270 – €2,820',
    bestFor: 'A business that wants a distinctive, premium presence.',
    features: [
      'Custom visual direction and brand feel',
      'Advanced page sections and animations',
      'Testimonials and social proof layout',
      'Analytics setup and reporting',
      'Priority support option',
      'Fully documented handover',
    ],
    highlight: false,
  },
];

export const maintenanceItems = [
  { title: 'Hosting checks', text: 'Make sure the live site stays accessible.', icon: LayoutDashboard },
  { title: 'Small content edits', text: 'Menus, hours, images and short announcements.', icon: MessageSquare },
  { title: 'Technical fixes', text: 'Broken links, layout issues and form checks.', icon: ShieldCheck },
  { title: 'Performance review', text: 'Basic speed and usability checks.', icon: BarChart3 },
  { title: 'Change log', text: 'Track what was updated and when.', icon: Clock3 },
  { title: 'Seasonal reminders', text: 'Prompts for offers, holidays and opening-hour changes.', icon: Bell }
];

export const stackItems = ['React', 'JavaScript', 'CSS', 'Vite', 'GitHub', 'VS Code', 'GitHub Codespaces', 'Python'];

export const faqs = [
  {
    q: 'Do I need a website if I already use Instagram or Facebook?',
    a: 'Yes. Social platforms are useful, but a website gives your business a professional home online where customers can quickly find your key details without scrolling through posts.'
  },
  {
    q: 'Can the site include bookings or a payment system?',
    a: 'Not at the moment. I currently build brochure-style websites — the kind that give your business a clear, professional presence online and make it easy for customers to call, find you or get in touch. Booking systems and payment integrations are more complex and not something I offer right now. If that is something you need, I will tell you upfront rather than take the project on.'
  },
  {
    q: 'Can you update my menu or opening hours later?',
    a: 'Yes. The monthly care plan is designed for small changes, technical support and keeping the website current.'
  },
  {
    q: 'Do I need to provide all the wording?',
    a: 'You provide the business facts. I can help structure them into clean website content that customers understand quickly.'
  }
];
