import { Search, Wrench, CheckCircle, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnostic du véhicule',
    description: 'Analyse complète de votre véhicule pour identifier tous les problèmes et besoins d\'entretien.'
  },
  {
    icon: Wrench,
    number: '02',
    title: 'Analyse et réparation',
    description: 'Nos mécaniciens experts effectuent les réparations nécessaires avec des pièces de qualité.'
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Test du véhicule',
    description: 'Vérification minutieuse du bon fonctionnement de toutes les réparations effectuées.'
  },
  {
    icon: ThumbsUp,
    number: '04',
    title: 'Livraison au client',
    description: 'Remise de votre véhicule avec explications détaillées des travaux réalisés.'
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-100 rounded-full">
            <span className="text-red-600 font-semibold">Notre processus</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment nous travaillons
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple et transparent pour votre tranquillité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="bg-red-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.number}
                  </div>
                  <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-red-200">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
