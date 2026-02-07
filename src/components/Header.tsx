import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import type { SectionKey } from '@/pages/Index';

interface HeaderProps {
  activeSection: SectionKey;
  setActiveSection: (section: SectionKey) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { key: string; section: SectionKey }[] = [
    { key: 'nav.about', section: 'about' },
    { key: 'nav.skills', section: 'skills' },
    { key: 'nav.experience', section: 'experience' },
    { key: 'nav.projects', section: 'projects' },
    { key: 'nav.education', section: 'education' },
    { key: 'nav.gallery', section: 'gallery' },
    { key: 'nav.contact', section: 'contact' },
  ];

  const handleNavClick = (section: SectionKey) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-card py-3' : 'glass py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.button
          onClick={() => handleNavClick('hero')}
          className="text-xl font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          AY
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.section)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.section
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {t(item.key)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* CV Download Button */}
          <Button
            size="sm"
            className="bg-cyan hover:bg-cyan-light text-navy font-semibold"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{t('hero.cv')}</span>
          </Button>

          {/* Language Switcher */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase font-medium">{language}</span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass mt-2 mx-4 rounded-lg p-4"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.section)}
                className={`text-sm font-medium transition-colors text-left py-2 ${
                  activeSection === item.section
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
