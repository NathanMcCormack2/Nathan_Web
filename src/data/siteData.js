import {
  BarChart3,
  Bell,
  Brush,
  CheckCircle2,
  Clock3,
  Code2,
  FileText,
  Globe2,
  Images,
  LayoutDashboard,
  MapPin,
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
  { title: 'Mobile-first design', text: 'Layouts built for how customers actually browse: on phones, quickly, while deciding where to go.', icon: MonitorSmartphone },
  { title: 'Clear business information', text: 'Opening hours, menu/services, location, social links and contact options placed where customers expect them.', icon: Store },
  { title: 'Local SEO foundations', text: 'Clean page structure, useful headings, metadata and Google-friendly content basics.', icon: Search },
  { title: 'Deployment handled', text: 'Hosting, domain connection, SSL and launch support included so the client does not deal with technical setup.', icon: Globe2 },
  { title: 'Fast loading pages', text: 'Lean React/Vite build, compressed assets and simple architecture for brochure-style websites.', icon: Zap },
  { title: 'Maintainable codebase', text: 'Version-controlled project structure, reusable components and update-friendly content files.', icon: Code2 },
  { title: 'Content guidance', text: 'Help turning rough business details into clear sections that customers can scan quickly.', icon: FileText },
  { title: 'Ongoing support', text: 'Small edits, fixes and checks available through the monthly website care plan.', icon: Wrench }
];

export const businessTypes = [
  {
    type: 'Restaurants & Takeaways',
    problem: 'People cannot find the menu, phone number or opening hours quickly.',
    build: 'A menu-led website with food sections, call button, map, gallery and social links.',
    icon: PhoneCall
  },
  {
    type: 'Cafés & Local Shops',
    problem: 'The business is relying on Instagram, but customers want simple details fast.',
    build: 'A warm local-business site with opening hours, products, photos and directions.',
    icon: Sparkles
  },
  {
    type: 'Barbers, Salons & Services',
    problem: 'Services, prices and contact details are scattered or unclear.',
    build: 'A polished service site with pricing, staff info, FAQs and contact options.',
    icon: Brush
  }
];

export const processSteps = [
  { number: '01', title: 'Website audit', text: 'I look at what the business currently has online and identify what customers cannot find quickly.' },
  { number: '02', title: 'Content map', text: 'We decide what pages and sections are needed: services, menu, hours, gallery, location and contact.' },
  { number: '03', title: 'Design direction', text: 'I create a clean visual direction that fits the business instead of dropping them into a generic template.' },
  { number: '04', title: 'Build and test', text: 'The site is built responsively, checked on mobile/desktop and prepared for deployment.' },
  { number: '05', title: 'Launch and support', text: 'I deploy the site, help with domain setup and keep it maintainable through the care plan.' }
];

export const examples = [
  {
    type: 'Restaurant concept',
    title: 'The Harbour Table',
    description: 'A food-led site with a strong menu preview, direct call button, location block and image-heavy specials section.',
    tags: ['Menu-first', 'Mobile CTA', 'Gallery'],
    imageNote: 'Replace with restaurant screenshot/image'
  },
  {
    type: 'Café concept',
    title: 'Corner & Steam',
    description: 'A warm café website with product highlights, opening hours, Google Maps link and seasonal message panel.',
    tags: ['Hours', 'Photos', 'Local'],
    imageNote: 'Replace with café screenshot/image'
  },
  {
    type: 'Salon concept',
    title: 'Northline Studio',
    description: 'A clean service-led site with price categories, staff introduction, contact options and trust-building sections.',
    tags: ['Pricing', 'Services', 'Trust'],
    imageNote: 'Replace with salon screenshot/image'
  }
];

export const packages = [
  {
    name: 'Essential Presence',
    price: 'From €450',
    monthly: 'Care from €30/month',
    bestFor: 'A business that needs a clean site customers can trust.',
    features: ['Homepage or compact multi-page structure', 'Mobile-first layout', 'Opening hours, location and contact', 'Basic SEO setup', 'Deployment support'],
    highlight: false
  },
  {
    name: 'Local Business Site',
    price: 'From €850',
    monthly: 'Care from €55/month',
    bestFor: 'Restaurants, cafés, shops and service businesses with more content.',
    features: ['Multiple pages', 'Menu/services structure', 'Gallery/image sections', 'Contact form or direct enquiry path', 'Stronger content and conversion layout', 'Launch checklist'],
    highlight: true
  },
  {
    name: 'Signature Build',
    price: 'From €1,250',
    monthly: 'Care from €85/month',
    bestFor: 'A business that wants a more distinctive brand presence.',
    features: ['Custom visual direction', 'Advanced page sections', 'Testimonials/reviews area', 'Polished case-study style layout', 'Analytics-ready setup', 'Priority support option'],
    highlight: false
  }
];

export const maintenanceItems = [
  { title: 'Hosting and deployment checks', text: 'Keep the site online and correctly deployed.', icon: LayoutDashboard },
  { title: 'Small content updates', text: 'Menus, hours, images, announcements and service text.', icon: MessageSquare },
  { title: 'Technical fixes', text: 'Broken links, layout issues, form checks and small bugs.', icon: ShieldCheck },
  { title: 'Performance review', text: 'Basic checks to keep the site fast and usable.', icon: BarChart3 },
  { title: 'Change log', text: 'Track updates so the client knows what changed.', icon: Clock3 },
  { title: 'Client reminders', text: 'Prompt businesses when seasonal updates are needed.', icon: Bell }
];

export const stackItems = ['React', 'JavaScript', 'CSS', 'Vite', 'GitHub', 'VS Code', 'GitHub Codespaces', 'Python'];

export const faqs = [
  {
    q: 'Do I need a website if I already use Instagram or Facebook?',
    a: 'Yes. Social platforms are useful, but a website gives your business a professional home online where customers can quickly find your key details without scrolling through posts.'
  },
  {
    q: 'Can the site include bookings or payments later?',
    a: 'The first packages focus on brochure-style websites. Bookings, payments or admin systems can be scoped later as a separate upgrade.'
  },
  {
    q: 'Can you update my menu or opening hours later?',
    a: 'Yes. The monthly care plan is designed for exactly that: small changes, technical support and keeping the website current.'
  },
  {
    q: 'Do I need to provide all the wording?',
    a: 'You provide the business facts. I can help structure them into clean website content that customers understand quickly.'
  }
];
