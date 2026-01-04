import { motion } from 'framer-motion';
import { ThemeType } from '../ThemeSwitcher';

interface CVProps {
  theme: ThemeType;
}

const experiences = [
  {
    year: '2024 - Present',
    title: 'Senior Creative Developer',
    company: 'Digital Innovation Lab',
    description: 'Leading development of interactive web experiences',
  },
  {
    year: '2022 - 2024',
    title: 'Full Stack Developer',
    company: 'Tech Solutions Inc',
    description: 'Built scalable web applications with modern tech stack',
  },
  {
    year: '2020 - 2022',
    title: 'Frontend Developer',
    company: 'Creative Agency',
    description: 'Developed responsive and animated websites',
  },
];

const skills = [
  'React / Next.js',
  'TypeScript',
  'Node.js',
  'UI/UX Design',
  'Motion Design',
  'Web Security',
  'Audio/Video Processing',
  'Data Visualization',
];

export function CV({ theme }: CVProps) {
  const isMath = theme === 'ryohatesmath';
  const isMusic = theme === 'ryodoesmusic';

  return (
    <section id="cv" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          Curriculum Vitae
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="mb-6">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${isMusic ? 'pb-8 border-b border-current/20' : ''}`}
                >
                  <div className={`${isMath ? 'font-mono text-sm' : 'text-sm'} opacity-60 mb-2`}>
                    {exp.year}
                  </div>
                  <h4 className="mb-1">{exp.title}</h4>
                  <div className="mb-2 opacity-80">{exp.company}</div>
                  <p className="opacity-70">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-6">Skills</h3>
            <div className={`${isMath ? 'grid grid-cols-2 gap-4' : 'space-y-4'}`}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`${
                    isMath 
                      ? 'p-3 border border-current/20 text-center' 
                      : 'p-4 bg-current/5'
                  }`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
