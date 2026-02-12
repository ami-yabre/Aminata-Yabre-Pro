import { motion } from 'framer-motion';
import { Network, Radio, Server, Cpu, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroPortrait from '@/assets/hero-portrait.png';

const AboutSection = () => {
  const { t } = useLanguage();

  const scrollToEducation = () => {
    const el = document.querySelector('#education');
    if (el) {
      const headerHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
    }
  };

  const skills = [
    {
      icon: Network,
      title: t('skills.networks'),
      description: t('skills.networks.desc'),
      technologies: ['Cisco', 'VLAN', 'OSPF', 'BGP', 'TCP/IP', 'IPV4/IPV6', 'DNS', 'GNS3'],
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
      technologies: ['Linux', 'Proxmox', 'Wireshark', 'Stormshield'],
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
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">{t('about.title')}</h2>
          <Button
            onClick={scrollToEducation}
            className="bg-cyan hover:bg-cyan-light text-navy font-semibold"
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            {t('education.title')}
          </Button>
        </motion.div>

        {/* Photo + Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-card"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Round photo left */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyan/40 shadow-glow">
                  <img
                    src={heroPortrait}
                    alt="Aminata YABRE"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Text right */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {t('about.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h3>
          <p className="text-lg text-muted-foreground">{t('skills.subtitle')}</p>
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

export default AboutSection;
