import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Amadou Traoré',
    role: 'Chef d\'entreprise',
    comment: 'Service excellent et rapide. J\'ai confié l\'entretien de toute ma flotte de véhicules à B-TRONIC AUTO. Équipe professionnelle et prix compétitifs.',
    rating: 5
  },
  {
    name: 'Fatima Ouédraogo',
    role: 'Particulier',
    comment: 'Très satisfaite du diagnostic et de la réparation de ma voiture. L\'équipe est compétente et honnête. Je recommande vivement ce garage.',
    rating: 5
  },
  {
    name: 'Ibrahim Sawadogo',
    role: 'Chauffeur professionnel',
    comment: 'Garage sérieux avec des mécaniciens qualifiés. Mon véhicule utilitaire est entre de bonnes mains. Service rapide et tarifs transparents.',
    rating: 5
  },
  {
    name: 'Marie Kaboré',
    role: 'Commerçante',
    comment: 'Excellent travail sur la carrosserie de mon véhicule. Comme neuf ! Merci à toute l\'équipe de B-TRONIC AUTO.',
    rating: 5
  },
  {
    name: 'Boureima Compaoré',
    role: 'Entrepreneur',
    comment: 'Je fais confiance à ce garage depuis 3 ans. Toujours un service impeccable et des conseils avisés pour l\'entretien de mes véhicules.',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-600/20 border border-red-600 rounded-full">
            <span className="text-red-600 font-semibold">Témoignages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Avis de nos clients
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ce que disent nos clients satisfaits
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-300 mb-8 italic leading-relaxed text-center">
                    "{testimonial.comment}"
                  </p>
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-1">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-red-600 w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
