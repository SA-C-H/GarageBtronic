import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl">B-TRONIC AUTO</h3>
                <p className="text-red-600 text-sm">Garage Professionnel</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Votre expert en réparation et entretien automobile à Ouagadougou avec plus de 5 ans d'expérience.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-red-600 transition-colors cursor-pointer">Diagnostic automobile</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Réparation moteur</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Vidange</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Changement de pneus</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Carrosserie</li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">Dépannage</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Ouagadougou - Zone 1<br/>Burkina Faso</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p>70 00 34 38</p>
                  <p>78 26 76 36</p>
                  <p>76 68 54 56</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>sawodona4@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horaires</h3>
            <div className="flex items-start space-x-3 text-gray-400 mb-4">
              <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Lundi au Samedi</p>
                <p>7h30 - 17h30</p>
                <p className="mt-2 text-sm">Dimanche: Fermé</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {currentYear} B-TRONIC AUTO. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm">
              Garage automobile professionnel - Ouagadougou, Burkina Faso
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
