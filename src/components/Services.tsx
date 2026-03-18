import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-100 rounded-full">
            <span className="text-red-600 font-semibold">Nos Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services professionnels
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour l'entretien et la réparation de votre véhicule
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group block min-w-[260px] md:min-w-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-red-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-700 transition-colors">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.shortDescription}</p>
                <div className="mt-4 text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                  En savoir plus →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
