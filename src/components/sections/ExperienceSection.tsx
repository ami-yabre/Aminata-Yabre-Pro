import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import experienceBaie1 from '@/assets/experience-baie-1.jpg';
import experienceBaie2 from '@/assets/experience-baie-2.jpg';
import experienceCablage1 from '@/assets/experience-cablage-1.jpg';
import experienceCablage2 from '@/assets/experience-cablage-2.jpg';
import experienceCablage3 from '@/assets/experience-cablage-3.jpg';
import experienceCablage4 from '@/assets/experience-cablage-4.jpg';
import experienceSecurite1 from '@/assets/experience-securite-1.jpg';
import experienceChantier1 from '@/assets/experience-chantier-1.jpg';

const ExperienceSection = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tasks = language === 'fr' ? [
    'Tirage et organisation de câbles informatiques et électriques',
    'Câblage de prises électriques et RJ45',
    'Réalisation de tests de connectivité',
    'Installation et configuration de caméras IP',
    'Installation et mise en service d\'équipements informatiques',
    'Pose de goulottes pour une installation propre et sécurisée',
    'Brassage et organisation d\'armoires informatiques',
    'Dépannage réseaux niveau 1 et 2',
  ] : [
    'Pulling and organizing IT and electrical cables',
    'Wiring of electrical outlets and RJ45',
    'Performing connectivity tests',
    'Installation and configuration of IP cameras',
    'Installation and commissioning of IT equipment',
    'Installation of cable trays for clean and secure setup',
    'Patching and organizing IT cabinets',
    'Network troubleshooting level 1 and 2',
  ];

  return (
    <section id="experience" className="py-24 bg-secondary overflow-hidden">
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
            {/* Header */}
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

            {/* Description */}
            <div className="mb-8">
              <p className="text-foreground/80 leading-relaxed">
                {language === 'fr' 
                  ? "J'ai débuté mon parcours chez Gel Technology And Energy SARL par un stage, à l'issue duquel j'ai été retenue par l'entreprise grâce à mon sérieux, mon implication et ma capacité à m'adapter rapidement au terrain."
                  : "I started my journey at Gel Technology And Energy SARL with an internship, after which I was retained by the company thanks to my dedication, involvement and ability to quickly adapt to the field."}
              </p>
            </div>

            {/* Tasks */}
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

            {/* Chantier - image LEFT, text RIGHT */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-lg">
                {language === 'fr' ? 'Chantier d\'infrastructure' : 'Infrastructure construction site'}
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(experienceChantier1)}
                  >
                    <img src={experienceChantier1} alt="Chantier infrastructure" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <p className="text-foreground/80 leading-relaxed">
                    {language === 'fr'
                      ? "Cette expérience de stage sur un chantier de grande envergure m'a permis de comprendre, pour mener à bien un projet d'infrastructure, tout commence par une mise en place rigoureuse de la « tuyauterie ». C'est l'étape primordiale pour garantir un résultat final propre. Anticiper le passage des gaines permet d'impressionner le client avec une installation invisible, où aucun câble ne traîne, alliant ainsi performance technique et esthétique parfaite."
                      : "This internship experience on a large-scale construction site taught me that to successfully complete an infrastructure project, everything starts with a rigorous setup of the 'piping'. This is the essential step to guarantee a clean final result. Anticipating conduit routing impresses the client with an invisible installation where no cable is left exposed, combining technical performance with perfect aesthetics."}
                  </p>
                </div>
              </div>
            </div>

            {/* Montage de baie - images LEFT, text RIGHT */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-lg">
                {language === 'fr' ? 'Montage de baie informatique' : 'IT rack assembly'}
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1 grid grid-cols-2 gap-3">
                  {[experienceBaie1, experienceBaie2].map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt={`Montage baie ${i + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                    </motion.div>
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-foreground/80 leading-relaxed">
                    {language === 'fr' 
                      ? "Montage de baie informatique et préparation pour l'installation des équipements réseau"
                      : "IT rack assembly and preparation for network equipment installation"}
                  </p>
                </div>
              </div>
            </div>

            {/* Câblage et brassage - images LEFT, text RIGHT */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-lg">
                {language === 'fr' ? 'Câblage et brassage' : 'Cabling and patching'}
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1 grid grid-cols-2 gap-3">
                  {[experienceCablage1, experienceCablage2, experienceCablage3, experienceCablage4].map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt={`Câblage ${i + 1}`} className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300" />
                    </motion.div>
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-foreground/80 leading-relaxed">
                    {language === 'fr'
                      ? "Durant mon stage, j'ai été amenée à réaliser plusieurs tâches techniques, notamment le tirage de câbles, puis le câblage et le brassage des panneaux de brassage. Ces opérations nécessitent la maîtrise des codes couleurs afin d'assurer une installation réseau conforme et fonctionnelle."
                      : "During my internship, I carried out several technical tasks, including cable pulling, then cabling and patching of patch panels. These operations require mastery of color codes to ensure a compliant and functional network installation."}
                  </p>
                </div>
              </div>
            </div>

            {/* Sécurité informatique - image LEFT, text RIGHT */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-lg">
                {language === 'fr' ? 'Sécurité informatique' : 'IT Security'}
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(experienceSecurite1)}
                  >
                    <img src={experienceSecurite1} alt="Dépannage caméra IP" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <p className="text-foreground/80 leading-relaxed">
                    {language === 'fr'
                      ? "Dans mon stage je ne faisais pas que du câblage réseau mais un peu de sécurité informatique. Ici, je procédais au dépannage et à la configuration de caméras IP afin de rétablir leur fonctionnement et la connexion au réseau."
                      : "During my internship, I didn't only do network cabling but also some IT security work. Here, I was troubleshooting and configuring IP cameras to restore their operation and network connection."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Vue agrandie"
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
