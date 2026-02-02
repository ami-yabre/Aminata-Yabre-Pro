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
    'nav.projects': 'Projets',
    'nav.education': 'Formation',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Bonjour, je suis',
    'hero.name': 'Aminata YABRE',
    'hero.title': 'Étudiante en BUT Réseaux & Télécommunications',
    'hero.subtitle': 'Option Internet des Objets',
    'hero.cta': 'Découvrir mon profil',
    'hero.cv': 'Télécharger CV',
    
    // About
    'about.title': 'À propos',
    'about.subtitle': 'Recherche d\'alternance',
    'about.description': 'Passionnée par les réseaux et l\'IoT, je suis actuellement à la recherche d\'une alternance pour mettre en pratique mes compétences techniques. Mon objectif est de contribuer à des projets innovants dans le domaine des télécommunications et des objets connectés.',
    'about.looking': 'Je recherche une alternance à partir de septembre 2026 pour une durée de 12 mois.',
    'about.availability': 'Disponible à Montbéliard, France',
    
    // Skills
    'skills.title': 'Compétences',
    'skills.subtitle': 'Mes domaines d\'expertise',
    'skills.networks': 'Réseaux',
    'skills.networks.desc': 'Configuration de routeurs et switches, VLAN, protocoles de routage (OSPF, BGP)',
    'skills.telecom': 'Télécommunications',
    'skills.telecom.desc': 'Transmission de données, fibre optique, technologies mobiles (4G/5G)',
    'skills.systems': 'Systèmes',
    'skills.systems.desc': 'Administration Linux/Windows',
    'skills.iot': 'Internet des Objets',
    'skills.iot.desc': 'Arduino, Raspberry Pi, protocoles MQTT',
    
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
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Aminata YABRE',
    'hero.title': 'Networks & Telecommunications Student',
    'hero.subtitle': 'Internet of Things Specialization',
    'hero.cta': 'Discover my profile',
    'hero.cv': 'Download CV',
    
    // About
    'about.title': 'About',
    'about.subtitle': 'Looking for an Apprenticeship',
    'about.description': 'Passionate about networks and IoT, I am currently seeking an apprenticeship to put my technical skills into practice. My goal is to contribute to innovative projects in telecommunications and connected devices.',
    'about.looking': 'I am looking for an apprenticeship starting September 2026 for a duration of 12 months.',
    'about.availability': 'Available in Montbéliard, France',
    
    // Skills
    'skills.title': 'Skills',
    'skills.subtitle': 'My areas of expertise',
    'skills.networks': 'Networks',
    'skills.networks.desc': 'Router and switch configuration, VLAN, routing protocols (OSPF, BGP)',
    'skills.telecom': 'Telecommunications',
    'skills.telecom.desc': 'Data transmission, fiber optics, mobile technologies (4G/5G)',
    'skills.systems': 'Systems',
    'skills.systems.desc': 'Linux/Windows administration',
    'skills.iot': 'Internet of Things',
    'skills.iot.desc': 'Arduino, Raspberry Pi, MQTT protocols',
    
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
