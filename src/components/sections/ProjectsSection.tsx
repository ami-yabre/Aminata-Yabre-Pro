import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import minecraftIotImage from '@/assets/minecraft-iot.png';
import appCommunicanteImage from '@/assets/app-communicante.jpg';

const ProjectsSection = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === 'fr' ? 'Développer une application communicante' : 'Developing a Communicating Application',
      description: language === 'fr' 
        ? 'Conception d\'une application client-serveur permettant de créer un compte, se connecter, ajouter des amis, créer ou rejoindre des groupes et échanger des messages. Projet réalisé en équipe avec répartition des rôles entre front-end, back-end et conception du protocole applicatif.'
        : 'Design of a client-server application allowing users to create accounts, login, add friends, create or join groups and exchange messages. Team project with role distribution between front-end, back-end and application protocol design.',
      technologies: ['Client-Serveur', 'Protocole', 'Travail d\'équipe'],
      type: language === 'fr' ? 'Projet académique (SAE)' : 'Academic Project (SAE)',
      image: appCommunicanteImage,
    },
    {
      title: language === 'fr' ? 'Jeu Minecraft Multijoueur IoT avec ESP8266 et MQTT' : 'Multiplayer Minecraft IoT Game with ESP8266 and MQTT',
      description: language === 'fr'
        ? 'Projet reliant des dispositifs IoT à Minecraft via MQTT. Les joueurs portent des gants équipés de boutons-poussoirs connectés à un ESP8266 déclenchant des super-pouvoirs et des malus dans le jeu grâce à des scripts Python sur Raspberry Pi.'
        : 'Project connecting IoT devices to Minecraft via MQTT. Players wear gloves equipped with push buttons connected to an ESP8266, triggering superpowers and penalties in the game through Python scripts on Raspberry Pi.',
      technologies: ['ESP8266', 'MQTT', 'Raspberry Pi', 'Python'],
      type: language === 'fr' ? 'Projet académique' : 'Academic Project',
      image: minecraftIotImage,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background overflow-hidden">
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
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-cyan opacity-50 blur-xl group-hover:scale-150 transition-transform duration-500" />
                  </div>
                )}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-foreground">
                  {project.type}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Certifications
          </h3>

          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-10 shadow-card">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-primary to-cyan">
                  <Award className="w-16 h-16 text-white" />
                </div>
                <span className="text-sm font-semibold text-primary">Cisco</span>
              </div>

              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2">
                  CCNA : Enterprise Networking, Security & Automation
                </h4>
                <p className="text-primary font-medium mb-4">
                  {language === 'fr' ? 'Délivré par Cisco Networking Academy' : 'Issued by Cisco Networking Academy'}
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {language === 'fr'
                    ? "Certification axée sur l'architecture des réseaux d'entreprise, la sécurité et les premiers concepts d'automatisation. Réalisation de nombreux labs sur Cisco Packet Tracer pour concevoir, configurer et dépanner des réseaux multi-sites."
                    : "Certification focused on enterprise network architecture, security and early automation concepts. Completed numerous labs on Cisco Packet Tracer to design, configure and troubleshoot multi-site networks."}
                </p>
                <h5 className="font-semibold mb-3">
                  {language === 'fr' ? 'Compétences approfondies :' : 'In-depth skills:'}
                </h5>
                <ul className="space-y-2 text-sm text-foreground/80 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan mt-1">•</span>
                    {language === 'fr' ? 'Routage OSPF avancé et scénarios multi-zone' : 'Advanced OSPF routing and multi-area scenarios'}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan mt-1">•</span>
                    {language === 'fr' ? "NAT, QoS et connectivité WAN pour réseaux d'entreprise" : 'NAT, QoS and WAN connectivity for enterprise networks'}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan mt-1">•</span>
                    {language === 'fr' ? 'Principes de sécurité réseau et mitigation des menaces' : 'Network security principles and threat mitigation'}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan mt-1">•</span>
                    {language === 'fr' ? 'Architectures WAN et virtualisation des réseaux' : 'WAN architectures and network virtualization'}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan mt-1">•</span>
                    {language === 'fr' ? "Bases de l'automatisation et de la programmabilité réseau" : 'Network automation and programmability basics'}
                  </li>
                </ul>
                <Button
                  asChild
                  className="bg-cyan hover:bg-cyan-light text-navy font-semibold"
                >
                  <a href="/CCNA-certificate.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    {language === 'fr' ? 'Voir le certificat' : 'View certificate'}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
