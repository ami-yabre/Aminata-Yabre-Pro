import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const GallerySection = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: gallery1,
      caption: language === 'fr' ? 'Câblage baie de brassage' : 'Patch Panel Cabling',
    },
    {
      id: 2,
      src: gallery2,
      caption: language === 'fr' ? 'Câblage de panneau' : 'Panel Cabling',
    },
    {
      id: 3,
      src: gallery3,
      caption: language === 'fr' ? 'Dépannage de caméra de surveillance' : 'Security Camera Troubleshooting',
    },
    {
      id: 4,
      src: gallery4,
      caption: language === 'fr' ? "Câblage d'armoire de contrôle d'accès" : 'Access Control Cabinet Cabling',
    },
    {
      id: 5,
      src: gallery5,
      caption: language === 'fr' ? 'Chantier câblage' : 'Cabling Site',
    },
    {
      id: 6,
      src: gallery6,
      caption: language === 'fr' ? 'Utilisation de perceuse' : 'Using a Drill',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('gallery.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-xl group"
            >
              <img 
                src={image.src} 
                alt={image.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
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
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full aspect-square md:aspect-video rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={images[selectedImage].src} 
                  alt={images[selectedImage].caption}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy to-transparent">
                  <p className="text-white text-xl font-medium">{images[selectedImage].caption}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
