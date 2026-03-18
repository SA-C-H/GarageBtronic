import { Award, Users, Clock, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-6 py-2 bg-red-100 rounded-full">
              <span className="text-red-600 font-semibold">À propos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Garage B-TRONIC AUTO
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Garage B-TRONIC AUTO est un garage automobile situé à Ouagadougou Zone 1 avec plus de 5 ans d'expérience dans l'entretien et la réparation de véhicules.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Notre équipe accompagne particuliers et entreprises pour maintenir leurs véhicules en parfait état. Nous disposons d'équipements modernes et de mécaniciens qualifiés pour tous types de réparations.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-red-600 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">5+ ans</h4>
                  <p className="text-sm text-gray-600">D'expérience</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-red-600 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Équipe</h4>
                  <p className="text-sm text-gray-600">Professionnelle</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-red-600 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Service</h4>
                  <p className="text-sm text-gray-600">Rapide</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-red-600 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Zone 1</h4>
                  <p className="text-sm text-gray-600">Ouagadougou</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nos Atouts</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span>Équipements modernes de diagnostic</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span>Mécaniciens qualifiés et expérimentés</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span>Pièces de rechange de qualité</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span>Service rapide et fiable</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span>Tarifs transparents et compétitifs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span>Garantie sur nos prestations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
