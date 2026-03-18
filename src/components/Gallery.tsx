import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { url: 'https://images.pexels.com/photos/4488667/pexels-photo-4488667.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Réparation moteur' },
  { url: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Diagnostic auto' },
  { url: 'https://images.pexels.com/photos/4488667/pexels-photo-4488667.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Garage moderne' },
  { url: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Changement pneus' },
  { url: 'https://images.pexels.com/photos/4488667/pexels-photo-4488667.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Entretien véhicule' },
  { url: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Carrosserie' }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-100 rounded-full">
            <span className="text-red-600 font-semibold">Galerie</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre travail et nos installations
          </p>
        </div>

        {/* Carrousel principal */}
        <div className="mb-10 relative rounded-2xl overflow-hidden shadow-lg bg-gray-900">
          <img
            src={galleryImages[currentIndex].url}
            alt={galleryImages[currentIndex].alt}
            className="w-full h-[260px] md:h-[420px] object-cover"
          />

          {/* Dégradé + texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-200 mb-1">Nos réalisations</p>
              <p className="text-lg md:text-xl font-semibold text-white">
                {galleryImages[currentIndex].alt}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Puces */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-red-500 w-8' : 'bg-white/60 w-2.5'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Miniatures cliquables */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`relative rounded-xl overflow-hidden border transition-all ${
                index === currentIndex ? 'border-red-500 ring-2 ring-red-400' : 'border-transparent'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-20 md:h-24 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
