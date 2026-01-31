import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-xl text-cyan font-medium">{t('about.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-card"
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {t('about.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Période recherchée</h4>
                  <p className="text-sm text-muted-foreground">{t('about.looking')}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50"
              >
                <div className="p-3 rounded-lg bg-cyan/10">
                  <MapPin className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Localisation</h4>
                  <p className="text-sm text-muted-foreground">{t('about.availability')}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-6 flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-cyan/5 border border-primary/10"
            >
              <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-cyan">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-gradient">Objectif professionnel</h4>
                <p className="text-sm text-muted-foreground">
                  Intégrer une équipe dynamique pour développer mes compétences en réseaux et IoT tout en contribuant à des projets concrets et innovants.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
