import { motion } from 'motion/react';
import { ThemeType } from '../ThemeSwitcher';

interface ProjectsProps {
  theme: ThemeType;
}

const projects = [
  {
    title: 'Secure Dashboard',
    description: 'Platform monitoring keamanan dengan real-time threat detection',
    tags: ['Security', 'React', 'Node.js'],
  },
  {
    title: 'Interactive Stories',
    description: 'Platform storytelling dengan animasi sinematik dan narasi yang kaya',
    tags: ['Film', 'Animation', 'WebGL'],
  },
  {
    title: 'Sound Visualizer',
    description: 'Aplikasi visualisasi audio dengan waveform analysis real-time',
    tags: ['Music', 'Web Audio API', 'Canvas'],
  },
  {
    title: 'Math Engine',
    description: 'Library komputasi matematika untuk scientific computing',
    tags: ['Math', 'TypeScript', 'Algorithm'],
  },
  {
    title: 'Digital Library',
    description: 'Platform membaca digital dengan reading analytics dan annotation',
    tags: ['Books', 'UI/UX', 'Database'],
  },
  {
    title: 'Game Portal',
    description: 'Portal gaming dengan leaderboard dan achievement system',
    tags: ['Gaming', 'WebSocket', 'Real-time'],
  },
];

export function Projects({ theme }: ProjectsProps) {
  const isHack = theme === 'ryocanthack';
  const isMath = theme === 'ryohatesmath';
  const isGame = theme === 'ryomify';

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          Projects
        </motion.h2>
        
        <div className={`grid gap-6 ${isMath ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={isGame ? { scale: 1.05, y: -5 } : { scale: 1.02 }}
              className={`p-6 border ${
                isHack 
                  ? 'border-dashed border-current' 
                  : isMath 
                  ? 'border-current/20' 
                  : isGame 
                  ? 'rounded-3xl border-current/30 shadow-lg shadow-current/10'
                  : 'border-current/10'
              }`}
            >
              <h3 className="mb-3">{project.title}</h3>
              <p className="mb-4 opacity-80">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-sm px-3 py-1 ${
                      isGame 
                        ? 'rounded-full bg-current/10' 
                        : 'bg-current/5'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
