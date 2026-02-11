import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
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
      </div>
    </section>
  );
};

export default ProjectsSection;
