import { Phone, Calendar } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 bg-red-600/20 border border-red-600 rounded-full">
            <span className="text-red-600 font-semibold">Plus de 5 ans d'expérience</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Garage <span className="text-red-600">B-TRONIC AUTO</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Votre expert en réparation et entretien automobile à Ouagadougou
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 font-semibold text-lg w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              <span>Prendre rendez-vous</span>
            </button>

            <a
              href="tel:70003438"
              className="flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>Nous appeler</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">5+</div>
              <div className="text-gray-300">Années d'expérience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
              <div className="text-gray-300">Véhicules réparés</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-300">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </section>
  );
}
