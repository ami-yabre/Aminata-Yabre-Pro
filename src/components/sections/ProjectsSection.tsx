import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === 'fr' ? 'Réseau d\'entreprise simulé' : 'Simulated Enterprise Network',
      description: language === 'fr' 
        ? 'Configuration complète d\'un réseau d\'entreprise avec VLANs, routage inter-VLAN, et sécurité périmétrique.'
        : 'Complete enterprise network configuration with VLANs, inter-VLAN routing, and perimeter security.',
      technologies: ['Cisco', 'VLAN', 'OSPF', 'ACL'],
      type: language === 'fr' ? 'Projet scolaire' : 'Academic Project',
      image: '/placeholder.svg',
    },
    {
      title: language === 'fr' ? 'Station météo IoT' : 'IoT Weather Station',
      description: language === 'fr'
        ? 'Station météo connectée avec capteurs, transmission LoRaWAN et dashboard web temps réel.'
        : 'Connected weather station with sensors, LoRaWAN transmission and real-time web dashboard.',
      technologies: ['Arduino', 'LoRaWAN', 'MQTT', 'Node.js'],
      type: language === 'fr' ? 'Projet personnel' : 'Personal Project',
      image: '/placeholder.svg',
    },
    {
      title: language === 'fr' ? 'Serveur de supervision' : 'Monitoring Server',
      description: language === 'fr'
        ? 'Déploiement d\'une infrastructure de monitoring réseau avec Zabbix et Grafana sur Docker.'
        : 'Deployment of a network monitoring infrastructure with Zabbix and Grafana on Docker.',
      technologies: ['Docker', 'Zabbix', 'Grafana', 'Linux'],
      type: language === 'fr' ? 'Projet scolaire' : 'Academic Project',
      image: '/placeholder.svg',
    },
    {
      title: language === 'fr' ? 'Système domotique' : 'Home Automation System',
      description: language === 'fr'
        ? 'Système domotique complet avec Raspberry Pi, contrôle vocal et application mobile.'
        : 'Complete home automation system with Raspberry Pi, voice control and mobile app.',
      technologies: ['Raspberry Pi', 'Python', 'MQTT', 'React Native'],
      type: language === 'fr' ? 'Projet personnel' : 'Personal Project',
      image: '/placeholder.svg',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-cyan opacity-50 blur-xl group-hover:scale-150 transition-transform duration-500" />
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-foreground">
                  {project.type}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('projects.view')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
