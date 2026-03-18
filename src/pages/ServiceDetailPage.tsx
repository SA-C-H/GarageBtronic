import { Link, useParams } from 'react-router-dom';
import { getServiceBySlug, services } from '../data/services';
import Contact from '../components/Contact';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <main className="min-h-screen bg-white pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service introuvable</h1>
              <p className="text-gray-600 mb-8">
                Le service demandé n’existe pas (ou l’adresse est incorrecte).
              </p>
              <Link
                to="/services"
                className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Retour aux services
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const Icon = service.icon;
  const related = services.filter(s => s.slug !== service.slug).slice(0, 4);
  const serviceGallery = [
    'https://images.pexels.com/photos/4488667/pexels-photo-4488667.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-14">
          <nav className="text-sm text-gray-300 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-white font-semibold">{service.title}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-5 px-6 py-2 bg-red-600/20 border border-red-600 rounded-full">
              <Icon className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-semibold">{service.heroTagline}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
              {service.longDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 font-semibold text-lg"
              >
                Demander un devis
              </a>
              <a
                href="tel:70003438"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg"
              >
                Appeler le 70 00 34 38
              </a>
            </div>
          </div>
        </div>

        <div className="h-20 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Carrousel photos du service */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Quelques vues de ce service
                </h2>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
                    {serviceGallery.map((src) => (
                      <div key={src} className="snap-center shrink-0 w-full">
                        <img
                          src={src}
                          alt={service.title}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ce qui est inclus</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.included.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-600 mt-2"></div>
                      <div className="text-gray-700 font-medium">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Comment ça se passe</h2>
                <div className="space-y-4">
                  {service.process.map((step, idx) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-bold flex items-center justify-center">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 w-full">
                        <div className="font-bold text-gray-900">{step.title}</div>
                        <div className="text-gray-600 mt-1">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-5">Idéal si vous avez…</h3>
                <div className="space-y-3">
                  {service.idealFor.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-600 mt-2"></div>
                      <div className="text-gray-700">{item}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                  <div className="text-white font-bold text-lg">Besoin d’un rendez-vous ?</div>
                  <div className="text-gray-300 mt-2">
                    Contactez-nous et recevez une estimation claire avant intervention.
                  </div>
                  <a
                    href="/#contact"
                    className="mt-4 inline-flex items-center justify-center w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                  >
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-block mb-3 px-6 py-2 bg-red-100 rounded-full">
                <span className="text-red-600 font-semibold">Autres services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Découvrir aussi</h2>
            </div>
            <Link to="/services" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
              Tous les services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((s) => {
              const RelatedIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group block"
                >
                  <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-700 transition-colors">
                    <RelatedIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.shortDescription}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Keep the same design + reuse existing contact section */}
      <Contact />
    </main>
  );
}

