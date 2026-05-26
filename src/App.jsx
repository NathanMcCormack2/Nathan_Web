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
import PizzaDemoPage from './pages/PizzaDemoPage.jsx';

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
      case 'pizza-demo':
        return <PizzaDemoPage {...props} />;
      default:
        return <HomePage {...props} />;
    }
  }, [activePage]);

  const isPizzaDemo = activePage === 'pizza-demo';

  return (
    <div className="app-shell">
      {!isPizzaDemo && (
        <Header
          activePage={activePage}
          goToPage={goToPage}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      )}
      <main>{currentPage}</main>
      {!isPizzaDemo && <Footer goToPage={goToPage} />}
    </div>
  );
}
