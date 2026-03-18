import type { ComponentType } from 'react';
import {
  Car,
  Disc,
  Droplet,
  Phone,
  Search,
  Settings,
  ShoppingBag,
  Wrench
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: ComponentType<LucideProps>;
  heroTagline: string;
  longDescription: string;
  images: string[];
  included: string[];
  idealFor: string[];
  process: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: 'diagnostic-automobile',
    icon: Search,
    title: 'Diagnostic automobile',
    shortDescription:
      'Analyse complète de votre véhicule avec équipements modernes pour identifier rapidement les problèmes.',
    heroTagline: 'Trouver la cause, vite et bien',
    longDescription:
      "Nous effectuons un diagnostic précis (électronique et mécanique) pour détecter l'origine d'une panne, réduire les essais inutiles et vous proposer une solution claire avec un devis transparent.",
    images: [
      '/images/services/diagnostic-automobile/1.png',
      '/images/services/diagnostic-automobile/2.png',
      '/images/services/diagnostic-automobile/3.webp'
    ],
    included: [
      'Lecture et interprétation des défauts (OBD)',
      'Contrôle visuel et tests ciblés',
      'Rapport simple et recommandations',
      'Devis avant intervention'
    ],
    idealFor: [
      'Voyants allumés au tableau de bord',
      'Perte de puissance, à-coups, calage',
      'Surconsommation de carburant',
      'Bruits anormaux ou fumées'
    ],
    process: [
      { title: 'Accueil & écoute', description: 'Nous notons vos symptômes et l’historique du véhicule.' },
      { title: 'Diagnostic', description: 'Tests électroniques et mécaniques selon le cas.' },
      { title: 'Explication', description: 'Nous vous présentons les causes probables et les options.' },
      { title: 'Intervention', description: 'Réparation après validation, puis contrôle final.' }
    ]
  },
  {
    slug: 'reparation-moteur',
    icon: Settings,
    title: 'Réparation moteur',
    shortDescription:
      'Réparation et révision complète de tous types de moteurs par nos mécaniciens experts.',
    heroTagline: 'Performance, fiabilité, tranquillité',
    longDescription:
      "Du simple remplacement de pièces à la révision, nous intervenons avec méthode pour restaurer les performances et la fiabilité de votre moteur, en privilégiant des pièces adaptées et des réglages soignés.",
    images: [
      '/images/services/reparation-moteur/1.webp',
      '/images/services/reparation-moteur/2.webp',
      '/images/services/reparation-moteur/3.webp'
    ],
    included: [
      'Contrôle compression / fuites (selon besoin)',
      'Remplacement pièces d’usure (courroies, joints, etc.)',
      'Réglages et essais routiers',
      'Conseils d’entretien pour éviter la récidive'
    ],
    idealFor: [
      'Bruit moteur, cliquetis, vibrations',
      'Manque de puissance / fumée excessive',
      'Surchauffe ou consommation d’huile',
      'Difficultés au démarrage'
    ],
    process: [
      { title: 'Diagnostic', description: 'Identification de la cause (mécanique / électronique).' },
      { title: 'Devis', description: 'Proposition de réparation et planning.' },
      { title: 'Réparation', description: 'Intervention contrôlée, pièces et réglages.' },
      { title: 'Contrôle', description: 'Vérifications et essai final avant restitution.' }
    ]
  },
  {
    slug: 'vidange',
    icon: Droplet,
    title: 'Vidange',
    shortDescription:
      'Vidange professionnelle avec huiles de qualité pour prolonger la vie de votre moteur.',
    heroTagline: 'Un moteur bien lubrifié dure plus longtemps',
    longDescription:
      "La vidange régulière protège le moteur contre l'usure prématurée. Nous utilisons des huiles adaptées et respectons les recommandations constructeur pour garantir une lubrification optimale.",
    images: ['/images/services/vidange/2.jpg', '/images/services/vidange/3.webp'],
    included: [
      'Vidange huile moteur',
      'Remplacement filtre à huile',
      'Contrôle niveaux (liquide de refroidissement, frein, etc.)',
      'Rappel intervalle d’entretien'
    ],
    idealFor: [
      'Entretien périodique',
      'Trajets urbains fréquents',
      'Après long voyage',
      'Avant saison chaude'
    ],
    process: [
      { title: 'Vérification', description: 'Contrôle du kilométrage, huile et fuites éventuelles.' },
      { title: 'Remplacement', description: 'Huile + filtre, selon spécifications.' },
      { title: 'Contrôle', description: 'Niveaux, étanchéité, témoin/maintenance.' }
    ]
  },
  {
    slug: 'changement-de-pneus',
    icon: Disc,
    title: 'Changement de pneus',
    shortDescription: 'Vente et installation de pneus neufs avec équilibrage et parallélisme.',
    heroTagline: 'Adhérence et sécurité au quotidien',
    longDescription:
      "Des pneus en bon état réduisent la distance de freinage et améliorent la tenue de route. Nous vous aidons à choisir la bonne dimension et le bon type selon votre usage.",
    images: [
      '/images/services/changement-de-pneus/1.png',
      '/images/services/changement-de-pneus/2.jpg'
    ],
    included: [
      'Montage / démontage',
      'Équilibrage des roues',
      'Contrôle pression & usure',
      'Conseils sur la rotation et l’entretien'
    ],
    idealFor: [
      'Pneus usés ou craquelés',
      'Vibrations au volant',
      'Freinage moins efficace',
      'Préparation long trajet'
    ],
    process: [
      { title: 'Contrôle', description: 'Usure, dimension, pression et état général.' },
      { title: 'Montage', description: 'Installation et équilibrage.' },
      { title: 'Validation', description: 'Test et recommandations d’utilisation.' }
    ]
  },
  {
    slug: 'carrosserie',
    icon: Car,
    title: 'Carrosserie',
    shortDescription:
      'Réparation et peinture de carrosserie pour redonner à votre véhicule son aspect neuf.',
    heroTagline: 'Un résultat propre, une finition soignée',
    longDescription:
      "Chocs, rayures, bosses ou peinture ternie : nous remettons en état votre carrosserie avec des étapes de préparation rigoureuses pour un rendu durable et harmonieux.",
    images: ['/images/services/carrosserie/1.webp', '/images/services/carrosserie/2.jpg', '/images/services/carrosserie/3.webp'],
    included: [
      'Débosselage et redressage (selon cas)',
      'Préparation (ponçage, mastic, apprêt)',
      'Peinture et vernis',
      'Polissage / finition'
    ],
    idealFor: [
      'Rayures et impacts',
      'Peinture écaillée / ternie',
      'Bosses légères à moyennes',
      'Rénovation avant revente'
    ],
    process: [
      { title: 'Évaluation', description: 'Contrôle des dégâts et estimation.' },
      { title: 'Préparation', description: 'Redressage, mastic, apprêt.' },
      { title: 'Peinture', description: 'Application et finition.' },
      { title: 'Contrôle', description: 'Vérification du rendu et nettoyage.' }
    ]
  },
  {
    slug: 'depannage',
    icon: Phone,
    title: 'Dépannage',
    shortDescription:
      'Service de dépannage rapide disponible pour vous assister en cas de panne.',
    heroTagline: 'On vous aide, rapidement',
    longDescription:
      "En cas de panne, nous vous guidons et intervenons selon la situation. Notre objectif : vous remettre en route en sécurité ou organiser la solution la plus adaptée.",
    images: [],
    included: [
      'Assistance téléphonique',
      'Évaluation rapide de la panne',
      'Solutions de remise en route (selon cas)',
      'Orientation vers réparation au garage'
    ],
    idealFor: [
      'Véhicule qui ne démarre pas',
      'Panne électrique',
      'Problème d’alimentation / surchauffe',
      'Voyant critique'
    ],
    process: [
      { title: 'Contact', description: 'Vous nous appelez, nous posons les bonnes questions.' },
      { title: 'Sécurisation', description: 'Conseils immédiats pour éviter d’aggraver la panne.' },
      { title: 'Solution', description: 'Assistance / intervention et suite à donner.' }
    ]
  },
  {
    slug: 'vente-de-pieces',
    icon: ShoppingBag,
    title: 'Vente de pièces',
    shortDescription:
      'Large gamme de pièces automobiles neuves et garanties pour tous types de véhicules.',
    heroTagline: 'Les bonnes pièces, au bon prix',
    longDescription:
      "Nous proposons des pièces adaptées à votre véhicule et à votre budget, avec des conseils pour éviter les incompatibilités et préserver la fiabilité.",
    images: [],
    included: [
      'Conseil et compatibilité',
      'Pièces neuves selon disponibilité',
      'Montage possible au garage',
      'Garantie selon la pièce'
    ],
    idealFor: [
      'Remplacement d’une pièce d’usure',
      'Préparation entretien',
      'Pièce introuvable ailleurs',
      'Besoin de montage professionnel'
    ],
    process: [
      { title: 'Identification', description: 'Modèle, année, référence si disponible.' },
      { title: 'Proposition', description: 'Options de pièces et délais.' },
      { title: 'Validation', description: 'Achat + montage si souhaité.' }
    ]
  },
  {
    slug: 'entretien-automobile',
    icon: Wrench,
    title: 'Entretien automobile',
    shortDescription:
      'Entretien régulier et préventif pour maintenir votre véhicule en parfait état.',
    heroTagline: 'Prévenir coûte moins cher que réparer',
    longDescription:
      "Un entretien planifié augmente la durée de vie du véhicule et réduit les pannes. Nous vous aidons à suivre les échéances (huile, filtres, freins, refroidissement, etc.).",
    images: [
      '/images/services/entretien-automobile/1.jpeg',
      '/images/services/entretien-automobile/2.webp',
      '/images/services/entretien-automobile/3.jpg'
    ],
    included: [
      'Contrôle général de sécurité',
      'Contrôle freins / suspension (selon besoin)',
      'Contrôle batterie et charge',
      'Plan d’entretien personnalisé'
    ],
    idealFor: [
      'Entretien périodique',
      'Préparation avant long trajet',
      'Véhicule d’occasion nouvellement acheté',
      'Usage intensif / professionnel'
    ],
    process: [
      { title: 'Bilan', description: 'Contrôle des points clés et usures.' },
      { title: 'Plan', description: 'Priorisation des interventions selon urgence et budget.' },
      { title: 'Réalisation', description: 'Entretien et vérifications finales.' }
    ]
  }
];

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug);
}

