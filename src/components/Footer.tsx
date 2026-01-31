import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-navy border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/60"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Marie Dupont. Tous droits réservés.
          </p>
          <p className="text-sm flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-cyan fill-cyan" /> à Paris
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
