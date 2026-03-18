import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      setIsMenuOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      (isScrolled || location.pathname !== '/') ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-black rounded-lg overflow-hidden">
              <img
                src="/btronic-logo.png"
                alt="B-TRONIC AUTO"
                className="h-14 w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">B-TRONIC AUTO</h1>
              <p className="text-red-600 text-xs font-semibold">Garage Professionnel</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-red-600 transition-colors font-medium">
              Accueil
            </button>
            <button onClick={() => navigate('/services')} className="text-white hover:text-red-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-red-600 transition-colors font-medium">
              À propos
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-red-600 transition-colors font-medium">
              Galerie
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-red-600 transition-colors font-medium">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:70003438" className="flex items-center space-x-2 text-white hover:text-red-600 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">70 00 34 38</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Prendre rendez-vous
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 pb-6">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-red-600 transition-colors text-left px-4 py-2">
                Accueil
              </button>
              <button onClick={() => { setIsMenuOpen(false); navigate('/services'); }} className="text-white hover:text-red-600 transition-colors text-left px-4 py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-red-600 transition-colors text-left px-4 py-2">
                À propos
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-red-600 transition-colors text-left px-4 py-2">
                Galerie
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-red-600 transition-colors text-left px-4 py-2">
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mx-4 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Prendre rendez-vous
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
