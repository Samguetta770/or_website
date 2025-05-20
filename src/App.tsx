import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from 'react-scroll-to-top';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Success from './pages/Success';
import FacialAesthetics from './components/FacialAesthetics';
import MedicalEquipment from './components/MedicalEquipment';
import WomensHealth from './components/WomensHealth';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ContactSection from './components/ContactSection';
import { CartProvider } from './context/CartContext';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <CartProvider>
      <Router>
        <ScrollToTopOnMount />
        <div className="min-h-screen bg-light-gray">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/facial-aesthetics" element={<FacialAesthetics />} />
              <Route path="/medical-equipment" element={<MedicalEquipment />} />
              <Route path="/womens-health" element={<WomensHealth />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/products" element={<Products />} />
              <Route path="/success" element={<Success />} />
            </Routes>
            <ContactSection />
          </main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop 
            smooth 
            component={<span className="p-2">↑</span>}
            className="flex items-center justify-center !bg-primary hover:!bg-primary-dark text-white rounded-full transition-all duration-300"
          />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;