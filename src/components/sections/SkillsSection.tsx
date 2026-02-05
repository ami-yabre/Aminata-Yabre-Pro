import { motion } from 'framer-motion';
import { Network, Radio, Server, Cpu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Network,
      title: t('skills.networks'),
      description: t('skills.networks.desc'),
      technologies: ['Cisco', 'VLAN', 'OSPF', 'BGP', 'TCP/IP'],
      color: 'from-primary to-primary/60',
    },
    {
      icon: Radio,
      title: t('skills.telecom'),
      description: t('skills.telecom.desc'),
      technologies: ['Fibre optique', 'WiFi'],
      color: 'from-cyan to-cyan/60',
    },
    {
      icon: Server,
      title: t('skills.systems'),
      description: t('skills.systems.desc'),
      technologies: ['Linux'],
      color: 'from-primary to-cyan',
    },
    {
      icon: Cpu,
      title: t('skills.iot'),
      description: t('skills.iot.desc'),
      technologies: ['Arduino', 'Raspberry Pi', 'MQTT'],
      color: 'from-cyan to-primary',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('skills.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5`}>
                <skill.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{skill.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
