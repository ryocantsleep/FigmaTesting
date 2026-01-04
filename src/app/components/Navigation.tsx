import { motion } from 'framer-motion';
import { ThemeType } from './ThemeSwitcher';

interface NavigationProps {
  theme: ThemeType;
}

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation({ theme }: NavigationProps) {
  const isBook = theme === 'ryolovesbook';
  const isGame = theme === 'ryomify';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-8 left-8 z-40 flex gap-6"
    >
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${
            isGame ? 'px-4 py-2 rounded-full bg-current/10 border border-current/30' : ''
          } ${
            isBook ? 'opacity-70 hover:opacity-100' : ''
          } transition-opacity`}
        >
          {section.label}
        </motion.button>
      ))}
    </motion.nav>
  );
}
