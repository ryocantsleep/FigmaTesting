import { motion } from 'framer-motion';

export type ThemeType = 
  | 'ryocantsleep'
  | 'ryocanthack'
  | 'ryocantspeak'
  | 'ryohatesmath'
  | 'ryodoesmusic'
  | 'ryocantfilm'
  | 'ryolovesbook'
  | 'ryomify';

interface ThemeSwitcherProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

const themes: { id: ThemeType; label: string; color: string }[] = [
  { id: 'ryocantsleep', label: 'The Neutral Origin', color: '#FFFFFF' },
  { id: 'ryocanthack', label: 'Crimson Red', color: '#D00000' },
  { id: 'ryocantspeak', label: 'Vibrant Yellow', color: '#FFD700' },
  { id: 'ryohatesmath', label: 'Burned Orange', color: '#E65100' },
  { id: 'ryodoesmusic', label: 'Concrete Gray', color: '#808080' },
  { id: 'ryocantfilm', label: 'Deep Blue', color: '#003366' },
  { id: 'ryolovesbook', label: 'Forest Green', color: '#1B4332' },
  { id: 'ryomify', label: 'Electric Purple', color: '#6200EE' },
];

export function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-8 right-8 z-50 flex flex-col gap-2"
    >
      {themes.map((theme) => (
        <motion.button
          key={theme.id}
          onClick={() => onThemeChange(theme.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-12 h-12 rounded-full border-2 transition-all ${
            currentTheme === theme.id ? 'border-current scale-110' : 'border-transparent opacity-60'
          }`}
          style={{ backgroundColor: theme.color }}
          title={theme.label}
        />
      ))}
    </motion.div>
  );
}
