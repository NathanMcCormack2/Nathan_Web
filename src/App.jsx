import { useMemo, useState } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import MaintenancePage from './pages/MaintenancePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const goToPage = (page) => {
    setActivePage(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      default:
        return <HomePage {...props} />;
    }
  }, [activePage]);

  return (
    <div className="app-shell">
      <Header
        activePage={activePage}
        goToPage={goToPage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <main>{currentPage}</main>
      <Footer goToPage={goToPage} />
    </div>
  );
}
