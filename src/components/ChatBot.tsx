import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Bonjour ! Je suis l'assistant du garage B-TRONIC AUTO. Comment puis-je vous aider ?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('service') || lowerMessage.includes('prestation')) {
      return 'Nous proposons : Diagnostic automobile, Réparation moteur, Vidange, Changement de pneus, Carrosserie, Dépannage automobile, Vente de pièces et Entretien général. Quel service vous intéresse ?';
    }

    if (lowerMessage.includes('horaire') || lowerMessage.includes('ouvert') || lowerMessage.includes('heure')) {
      return 'Nous sommes ouverts du Lundi au Samedi de 7h30 à 17h30. Nous sommes fermés le dimanche.';
    }

    if (lowerMessage.includes('adresse') || lowerMessage.includes('localisation') || lowerMessage.includes('où') || lowerMessage.includes('situé')) {
      return 'Nous sommes situés à Ouagadougou, Zone 1, Burkina Faso. Vous pouvez nous trouver facilement sur Google Maps.';
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('téléphone') || lowerMessage.includes('appeler') || lowerMessage.includes('numéro')) {
      return 'Vous pouvez nous contacter au : 70 00 34 38 / 78 26 76 36 / 76 68 54 56. Ou par email : sawodona4@gmail.com';
    }

    if (lowerMessage.includes('véhicule') || lowerMessage.includes('voiture') || lowerMessage.includes('camion')) {
      return 'Nous travaillons sur tous types de véhicules : voitures particulières, camions et véhicules utilitaires. Quel est votre type de véhicule ?';
    }

    if (lowerMessage.includes('prix') || lowerMessage.includes('tarif') || lowerMessage.includes('coût') || lowerMessage.includes('devis')) {
      return 'Pour un devis personnalisé, je vous invite à nous contacter directement au 70 00 34 38 ou à remplir le formulaire de contact sur notre site. Nous vous répondrons rapidement !';
    }

    if (lowerMessage.includes('rendez-vous') || lowerMessage.includes('rdv') || lowerMessage.includes('rendez vous')) {
      return 'Pour prendre rendez-vous, vous pouvez nous appeler au 70 00 34 38, nous envoyer un WhatsApp ou remplir le formulaire de contact sur notre site. Notre équipe vous répondra dans les plus brefs délais.';
    }

    if (lowerMessage.includes('dépannage') || lowerMessage.includes('panne') || lowerMessage.includes('urgence')) {
      return 'Nous proposons un service de dépannage automobile. En cas d\'urgence, contactez-nous directement au 70 00 34 38. Nous interviendrons rapidement pour vous aider.';
    }

    if (lowerMessage.includes('expérience') || lowerMessage.includes('depuis')) {
      return 'Le garage B-TRONIC AUTO a plus de 5 ans d\'expérience dans la réparation et l\'entretien automobile. Notre équipe est qualifiée et passionnée par son métier.';
    }

    if (lowerMessage.includes('merci') || lowerMessage.includes('remercie')) {
      return 'Je vous en prie ! N\'hésitez pas si vous avez d\'autres questions. L\'équipe B-TRONIC AUTO est là pour vous servir.';
    }

    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('bonsoir')) {
      return 'Bonjour ! Comment puis-je vous aider aujourd\'hui ? Vous pouvez me poser des questions sur nos services, horaires, localisation ou prendre rendez-vous.';
    }

    return 'Je peux vous renseigner sur nos services, nos horaires, notre localisation, nos tarifs et vous aider à prendre rendez-vous. Que souhaitez-vous savoir ?';
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = { text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = { text: getResponse(inputValue), isBot: true };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-40 bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition-all duration-300"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-red-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-full">
                <MessageCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold">Assistant B-TRONIC</h3>
                <p className="text-xs text-red-100">En ligne</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-red-700 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 h-96 overflow-y-auto bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow'
                      : 'bg-red-600 text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                onClick={handleSend}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
