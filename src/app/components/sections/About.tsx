import { motion } from 'framer-motion';
import { ThemeType } from '../ThemeSwitcher';

interface AboutProps {
  theme: ThemeType;
}

export function About({ theme }: AboutProps) {
  const isYellow = theme === 'ryocantspeak';
  const isBook = theme === 'ryolovesbook';

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`max-w-4xl ${isBook ? 'text-justify' : ''}`}
      >
        {isBook && (
          <span className="float-left text-9xl leading-none mr-4 mt-2">A</span>
        )}
        <h2 className={`mb-8 ${isYellow ? 'italic' : ''}`}>
          {isYellow && <span className="text-6xl">"</span>}
          About Me
          {isYellow && <span className="text-6xl">"</span>}
        </h2>
        <div className="space-y-6">
          <p>
            {isYellow && <mark className="bg-current/20 px-2">Halo!</mark>} Saya seorang creative
            developer yang berfokus pada pengembangan web modern dan desain interaktif. Dengan
            pengalaman di berbagai bidang seperti security, communication, engineering, music,
            film, literature, dan gaming.
          </p>
          <p>
            Setiap persona yang saya miliki merepresentasikan aspek berbeda dari skill dan minat
            saya. Dari analisis mendalam hingga ekspresi kreatif, saya percaya bahwa keberagaman
            perspektif menghasilkan solusi yang lebih baik.
          </p>
          <p>
            Portfolio ini dirancang untuk menunjukkan bagaimana saya dapat beradaptasi dengan
            berbagai style dan requirement, sambil tetap mempertahankan kualitas dan attention to
            detail yang tinggi.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
