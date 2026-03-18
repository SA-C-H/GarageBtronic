import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import VehicleTypes from '../components/VehicleTypes';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const id = state.scrollTo;
      const scrollElement = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // essaie tout de suite, puis quelques fois si besoin (le temps que la page se rende)
      if (!scrollElement()) {
        let attempts = 0;
        const interval = window.setInterval(() => {
          attempts += 1;
          if (scrollElement() || attempts > 10) {
            window.clearInterval(interval);
          }
        }, 80);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <VehicleTypes />
      <Gallery />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}

