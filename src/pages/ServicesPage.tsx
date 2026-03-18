import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-6 py-2 bg-red-600/20 border border-red-600 rounded-full">
              <span className="text-red-600 font-semibold">Nos Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Services professionnels
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Des solutions complètes pour l’entretien et la réparation de votre véhicule, avec un diagnostic clair et un service sérieux.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group block"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="bg-red-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-700 transition-colors">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.shortDescription}</p>
                  <div className="mt-4 text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                    Voir les détails →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

