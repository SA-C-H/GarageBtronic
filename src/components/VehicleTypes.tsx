const vehicleTypes = [
  {
    image: '/images/vehicles/voitures.jpg',
    title: 'Voitures',
    description: 'Réparation et entretien de tous types de voitures particulières, berlines, SUV et 4x4.'
  },
  {
    image: '/images/vehicles/camions.jpg',
    title: 'Camions',
    description: 'Maintenance et réparation de camions légers et lourds pour le transport de marchandises.'
  },
  {
    image: '/images/vehicles/utilitaires.jpg',
    title: 'Véhicules utilitaires',
    description: 'Service complet pour fourgons, camionnettes et autres véhicules professionnels.'
  }
];

export default function VehicleTypes() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-600/20 border border-red-600 rounded-full">
            <span className="text-red-600 font-semibold">Types de véhicules</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tous types de véhicules
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Nous intervenons sur une large gamme de véhicules
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicleTypes.map((vehicle, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6 rounded-lg overflow-hidden relative h-40">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">{vehicle.title}</h3>
              <p className="text-gray-400 text-center leading-relaxed">{vehicle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
