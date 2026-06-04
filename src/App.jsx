import { useEffect, useMemo, useState } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Atmosphere from './components/visual/Atmosphere.jsx';
import useLenis, { scrollToTop } from './lib/useLenis.js';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import MaintenancePage from './pages/MaintenancePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import MarioPizzaPage from './pages/MarioPizzaPage.jsx';
import SandyFishPage from './pages/SandyFishPage.jsx';
import RockysDinerPage from './pages/RockysDinerPage.jsx';
import CommonRoomCafePage from './pages/CommonRoomCafePage.jsx';
import VesperaPage from './pages/VesperaPage.jsx';
import InnPage from './pages/InnPage.jsx';

const pageIds = [
  'home', 'services', 'work', 'pricing', 'maintenance', 'about', 'contact',
  'pizza-demo', 'sandys-fish-demo', 'rockys-diner-demo', 'common-room-cafe-demo', 'vespera-demo', 'inn-demo',
];

const demoPages = new Set(['pizza-demo', 'sandys-fish-demo', 'rockys-diner-demo', 'common-room-cafe-demo', 'vespera-demo', 'inn-demo']);

const getPageFromHash = () => {
  const hashPage = window.location.hash.replace('#', '');
  return pageIds.includes(hashPage) ? hashPage : null;
};

export default function App() {
  const [activePage, setActivePage] = useState(() => getPageFromHash() || 'home');
  const isStandaloneDemo = demoPages.has(activePage);

  // Lenis smooth scroll only on the main site (demos manage their own scroll/GSAP).
  useLenis(isStandaloneDemo);

  const goToPage = (page) => {
    setActivePage(page);
    if (pageIds.includes(page) && window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    scrollToTop();
  };

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getPageFromHash();
      if (!nextPage) return;
      setActivePage(nextPage);
      scrollToTop();
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nx-theme', !isStandaloneDemo);
    return () => document.body.classList.remove('nx-theme');
  }, [isStandaloneDemo]);

  const currentPage = useMemo(() => {
    const props = { goToPage };
    switch (activePage) {
      case 'services': return <ServicesPage {...props} />;
      case 'work': return <WorkPage {...props} />;
      case 'pricing': return <PricingPage {...props} />;
      case 'maintenance': return <MaintenancePage {...props} />;
      case 'about': return <AboutPage {...props} />;
      case 'contact': return <ContactPage {...props} />;
      case 'pizza-demo': return <MarioPizzaPage {...props} />;
      case 'sandys-fish-demo': return <SandyFishPage {...props} />;
      case 'rockys-diner-demo': return <RockysDinerPage {...props} />;
      case 'common-room-cafe-demo': return <CommonRoomCafePage {...props} />;
      case 'vespera-demo': return <VesperaPage {...props} />;
      case 'inn-demo': return <InnPage {...props} />;
      default: return <HomePage {...props} />;
    }
  }, [activePage]);

  return (
    <div className={`app-shell ${isStandaloneDemo ? 'demo-app-shell' : 'nx-shell'}`}>
      {!isStandaloneDemo && <Atmosphere />}
      {!isStandaloneDemo && <Header activePage={activePage} goToPage={goToPage} />}
      <main>{currentPage}</main>
      {!isStandaloneDemo && <Footer goToPage={goToPage} />}
    </div>
  );
}
