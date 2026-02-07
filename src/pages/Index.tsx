import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

export type SectionKey = 'hero' | 'about' | 'skills' | 'experience' | 'projects' | 'education' | 'gallery' | 'contact';

const sectionComponents: Record<SectionKey, React.FC> = {
  hero: HeroSection,
  about: AboutSection,
  skills: SkillsSection,
  experience: ExperienceSection,
  projects: ProjectsSection,
  education: EducationSection,
  gallery: GallerySection,
  contact: ContactSection,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('hero');

  const ActiveComponent = sectionComponents[activeSection];

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 pt-16">
          <ActiveComponent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
