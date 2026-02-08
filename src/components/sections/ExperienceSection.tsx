import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import experienceBaie1 from '@/assets/experience-baie-1.jpg';
import experienceBaie2 from '@/assets/experience-baie-2.jpg';

const ExperienceSection = () => {
  const { language } = useLanguage();

  const tasks = language === 'fr' ? [
    'Tirage et organisation de câbles informatiques et électriques',
    'Câblage de prises électriques et RJ45',
    'Réalisation de tests de connectivité',
    'Installation et configuration de caméras IP',
    'Installation et mise en service d\'équipements informatiques',
    'Pose de goulottes pour une installation propre et sécurisée',
    'Brassage et organisation d\'armoires informatiques',
  ] : [
    'Pulling and organizing IT and electrical cables',
    'Wiring of electrical outlets and RJ45',
    'Performing connectivity tests',
    'Installation and configuration of IP cameras',
    'Installation and commissioning of IT equipment',
    'Installation of cable trays for clean and secure setup',
    'Patching and organizing IT cabinets',
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'fr' ? 'Expérience' : 'Experience'}
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'fr' ? 'Mon parcours professionnel' : 'My professional journey'}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-card"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-cyan flex-shrink-0">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  {language === 'fr' ? 'Technicienne Réseaux' : 'Network Technician'}
                </h3>
                <p className="text-lg text-primary font-medium mb-3">
                  Gel Technology And Energy Sarl
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    10/2023 - 08/2025
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Abidjan, Côte D'Ivoire
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-foreground/80 leading-relaxed">
                {language === 'fr' 
                  ? "J'ai débuté mon parcours chez Gel Technology And Energy SARL par un stage, à l'issue duquel j'ai été retenue par l'entreprise grâce à mon sérieux, mon implication et ma capacité à m'adapter rapidement au terrain."
                  : "I started my journey at Gel Technology And Energy SARL with an internship, after which I was retained by the company thanks to my dedication, involvement and ability to quickly adapt to the field."}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">
                {language === 'fr' ? 'Missions réalisées' : 'Tasks performed'}
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {tasks.map((task, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{task}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-lg">
                {language === 'fr' ? 'Montage de baie informatique' : 'IT rack assembly'}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {language === 'fr' 
                  ? 'Montage de baie informatique et préparation pour l\'installation des équipements réseau'
                  : 'IT rack assembly and preparation for network equipment installation'}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl overflow-hidden"
                >
                  <img src={experienceBaie1} alt="Montage de baie informatique" className="w-full h-64 object-cover" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="rounded-xl overflow-hidden"
                >
                  <img src={experienceBaie2} alt="Préparation installation réseau" className="w-full h-64 object-cover" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
