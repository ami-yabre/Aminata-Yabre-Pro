import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EducationSection = () => {
  const { t, language } = useLanguage();

  const education = [
    {
      degree: 'BUT Réseaux et Télécommunications',
      specialization: language === 'fr' ? 'Option Internet des Objets' : 'Internet of Things Specialization',
      school: 'IUT de Paris - Rives de Seine',
      period: '2024 - 2027',
      description: language === 'fr'
        ? 'Formation technique approfondie en réseaux, télécommunications et systèmes embarqués avec spécialisation IoT.'
        : 'In-depth technical training in networks, telecommunications and embedded systems with IoT specialization.',
      current: true,
    },
    {
      degree: 'Baccalauréat STI2D',
      specialization: language === 'fr' ? 'Spécialité SIN (Systèmes d\'Information et Numérique)' : 'Digital Information Systems Specialty',
      school: 'Lycée Technique XYZ',
      period: '2021 - 2024',
      description: language === 'fr'
        ? 'Formation scientifique et technologique avec option numérique et programmation.'
        : 'Scientific and technological training with digital and programming option.',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('education.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('education.subtitle')}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan to-primary/30" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-5 w-6 h-6 rounded-full border-4 ${
                  edu.current 
                    ? 'bg-cyan border-cyan animate-pulse-glow' 
                    : 'bg-card border-primary'
                }`} />

                <div className={`bg-card rounded-2xl p-6 shadow-card ${
                  edu.current ? 'border-2 border-cyan/30' : ''
                }`}>
                  {edu.current && (
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-cyan/10 text-cyan mb-3">
                      {language === 'fr' ? 'En cours' : 'Current'}
                    </span>
                  )}
                  
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-cyan font-medium mb-2">{edu.specialization}</p>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        {edu.school}
                      </p>
                    </div>
                    <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="mt-4 text-muted-foreground">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
