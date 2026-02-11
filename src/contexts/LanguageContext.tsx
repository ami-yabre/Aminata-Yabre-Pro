import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.portfolio': 'Portfolio',
    'nav.education': 'Formation',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.name': 'Aminata YABRE',
    'hero.title': 'Étudiante en deuxième année de BUT Réseaux & Télécommunications',
    'hero.subtitle': 'Option Internet des Objets',
    'hero.alternance': 'Je suis actuellement à la recherche d\'une alternance à partir de septembre 2026 dans le domaine des infrastructures réseaux, systèmes et télécommunications.',
    'hero.cta': 'Découvrir mon profil',
    'hero.cv': 'Télécharger CV',
    
    // About
    'about.title': 'Qui suis-je ?',
    'about.subtitle': '',
    'about.description': 'Étudiante en Réseaux et Télécommunications, passionnée par les systèmes informatiques et les réseaux. J\'ai acquis une première expérience en tant que technicienne réseaux lors d\'un stage en entreprise, où j\'ai travaillé sur le câblage, l\'installation et les tests de connectivité. Je recherche actuellement une alternance pour la rentrée de septembre 2026 afin de renforcer mes compétences techniques et professionnelles.',
    
    // Skills
    'skills.title': 'Compétences',
    'skills.subtitle': 'Mes domaines d\'expertise',
    'skills.networks': 'Réseaux',
    'skills.networks.desc': 'Topologies LAN, adressage IP, routage dynamique, segmentation VLAN et services réseau sécurisés pour les environnements d\'entreprise.',
    'skills.telecom': 'Télécommunications',
    'skills.telecom.desc': 'Transmission de données, fibre optique, technologies mobiles (4G/5G)',
    'skills.systems': 'Systèmes',
    'skills.systems.desc': 'Déploiement de services sur Windows / Linux, virtualisation et sécurisation du trafic avec supervision et firewalls.',
    'skills.iot': 'Internet des Objets',
    'skills.iot.desc': 'Chaînes IoT de bout en bout : capteurs, LoRaWAN privé, transport MQTT, stockage de séries temporelles et dashboards temps réel.',
    
    // Projects
    'projects.title': 'Projets',
    'projects.subtitle': 'Réalisations académiques et personnelles',
    'projects.view': 'Voir le projet',
    
    // Education
    'education.title': 'Formation',
    'education.subtitle': 'Mon parcours académique',
    
    // Gallery
    'gallery.title': 'Galerie',
    'gallery.subtitle': 'En action sur mes projets',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Travaillons ensemble',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.info': 'Informations de contact',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.portfolio': 'Portfolio',
    'nav.education': 'Education',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.name': 'Aminata YABRE',
    'hero.title': 'Second-year Networks & Telecommunications Student',
    'hero.subtitle': 'Internet of Things Specialization',
    'hero.alternance': 'I am currently looking for an apprenticeship starting September 2026 in the field of network infrastructure, systems and telecommunications.',
    'hero.cta': 'Discover my profile',
    'hero.cv': 'Download CV',
    
    // About
    'about.title': 'Who am I?',
    'about.subtitle': '',
    'about.description': 'Networks and Telecommunications student, passionate about IT systems and networks. I gained first-hand experience as a network technician during a company internship, where I worked on cabling, installation and connectivity testing. I am currently looking for an apprenticeship starting September 2026 to strengthen my technical and professional skills.',
    
    // Skills
    'skills.title': 'Skills',
    'skills.subtitle': 'My areas of expertise',
    'skills.networks': 'Networks',
    'skills.networks.desc': 'LAN topologies, IP addressing, dynamic routing, VLAN segmentation and secure network services for enterprise environments.',
    'skills.telecom': 'Telecommunications',
    'skills.telecom.desc': 'Data transmission, fiber optics, mobile technologies (4G/5G)',
    'skills.systems': 'Systems',
    'skills.systems.desc': 'Service deployment on Windows/Linux, virtualization and traffic security with monitoring and firewalls.',
    'skills.iot': 'Internet of Things',
    'skills.iot.desc': 'End-to-end IoT chains: sensors, private LoRaWAN, MQTT transport, time-series storage and real-time dashboards.',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Academic and personal achievements',
    'projects.view': 'View project',
    
    // Education
    'education.title': 'Education',
    'education.subtitle': 'My academic journey',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'In action on my projects',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s work together',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.info': 'Contact Information',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
