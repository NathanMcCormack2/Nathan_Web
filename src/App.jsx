import { useEffect, useMemo, useState } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
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
  'home',
  'services',
  'work',
  'pricing',
  'maintenance',
  'about',
  'contact',
  'pizza-demo',
  'sandys-fish-demo',
  'rockys-diner-demo',
  'common-room-cafe-demo',
  'vespera-demo',
  'inn-demo'
];

const getPageFromHash = () => {
  const hashPage = window.location.hash.replace('#', '');
  return pageIds.includes(hashPage) ? hashPage : null;
};

export default function App() {
  const [activePage, setActivePage] = useState(() => getPageFromHash() || 'home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const goToPage = (page) => {
    setActivePage(page);
    setMobileOpen(false);
    if (pageIds.includes(page) && window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getPageFromHash();
      if (!nextPage) return;

      setActivePage(nextPage);
      setMobileOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentPage = useMemo(() => {
    const props = { goToPage };
    switch (activePage) {
      case 'services':
        return <ServicesPage {...props} />;
      case 'work':
        return <WorkPage {...props} />;
      case 'pricing':
        return <PricingPage {...props} />;
      case 'maintenance':
        return <MaintenancePage {...props} />;
      case 'about':
        return <AboutPage {...props} />;
      case 'contact':
        return <ContactPage {...props} />;
      case 'pizza-demo':
        return <MarioPizzaPage {...props} />;
      case 'sandys-fish-demo':
        return <SandyFishPage {...props} />;
      case 'rockys-diner-demo':
        return <RockysDinerPage {...props} />;
      case 'common-room-cafe-demo':
        return <CommonRoomCafePage {...props} />;
      case 'vespera-demo':
        return <VesperaPage {...props} />;
      case 'inn-demo':
        return <InnPage {...props} />;
      default:
        return <HomePage {...props} />;
    }
  }, [activePage]);

  const isStandaloneDemo = activePage === 'pizza-demo' || activePage === 'sandys-fish-demo' || activePage === 'rockys-diner-demo' || activePage === 'common-room-cafe-demo' || activePage === 'vespera-demo' || activePage === 'inn-demo';

  return (
    <div className={`app-shell ${isStandaloneDemo ? 'demo-app-shell' : ''}`}>
      {!isStandaloneDemo && (
        <Header
          activePage={activePage}
          goToPage={goToPage}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      )}
      <main>{currentPage}</main>
      {!isStandaloneDemo && <Footer goToPage={goToPage} />}
    </div>
  );
}
