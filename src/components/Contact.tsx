import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bonjour, je suis ${formData.name}.\nTéléphone: ${formData.phone}\nType de véhicule: ${formData.vehicleType}\nService demandé: ${formData.service}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/22670003438?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-red-100 rounded-full">
            <span className="text-red-600 font-semibold">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prendre rendez-vous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit ou pour prendre rendez-vous
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Nom complet</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Votre nom"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Votre numéro"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Type de véhicule</label>
                <select
                  required
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Voiture">Voiture</option>
                  <option value="Camion">Camion</option>
                  <option value="Véhicule utilitaire">Véhicule utilitaire</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Service demandé</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Diagnostic">Diagnostic</option>
                  <option value="Réparation moteur">Réparation moteur</option>
                  <option value="Vidange">Vidange</option>
                  <option value="Changement de pneus">Changement de pneus</option>
                  <option value="Carrosserie">Carrosserie</option>
                  <option value="Dépannage">Dépannage</option>
                  <option value="Vente de pièces">Vente de pièces</option>
                  <option value="Entretien">Entretien</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Décrivez votre besoin"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg"
              >
                Envoyer la demande
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                <p className="text-gray-600">Ouagadougou - Zone 1</p>
                <p className="text-gray-600">Burkina Faso</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Téléphones</h3>
                <p className="text-gray-600">70 00 34 38</p>
                <p className="text-gray-600">78 26 76 36</p>
                <p className="text-gray-600">76 68 54 56</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">sawodona4@gmail.com</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Horaires</h3>
                <p className="text-gray-600">Lundi au Samedi</p>
                <p className="text-gray-600 font-semibold">7h30 - 17h30</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.825479775436!2d-1.5357453!3d12.3714277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2ebe658ecdabcd%3A0x98e6b83035c19469!2sOuagadougou%2C%20Burkina%20Faso!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
