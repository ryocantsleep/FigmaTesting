import Link from 'next/link';
import { motion } from 'framer-motion';

import { Film, Camera, Aperture, ArrowLeft } from 'lucide-react';

export default function FilmPage() {
  const works = [
    {
      title: 'Nocturnal Narrative',
      type: 'Short Film',
      year: '2024',
      description: 'A cinematic exploration of isolation in urban spaces through moody cinematography',
    },
    {
      title: 'Silent Frames',
      type: 'Photography Series',
      year: '2023',
      description: 'Black and white documentary photography capturing forgotten industrial spaces',
    },
    {
      title: 'Color & Light',
      type: 'Cinematography',
      year: '2024',
      description: 'DOP work for independent feature film exploring themes of memory and time',
    },
  ];

  return (
    <div className="bg-[#001122] text-[#b8d4f1] min-h-screen font-serif relative">
      {/* Letterbox */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-black z-20 pointer-events-none" />
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-black z-20 pointer-events-none" />
      
      {/* Film grain effect */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      <div className="relative z-15 px-12 py-24">
        <Link href="/" className="inline-flex items-center gap-2 mb-16 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span>Return</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24 max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <Film size={48} />
            <h1 className="text-7xl">ryocantfilm</h1>
          </div>
          <p className="text-2xl opacity-80 italic leading-relaxed">
            Capturing stories through the lens—where cinematography meets narrative depth
          </p>
        </motion.div>

        {/* Philosophy */}
        <section className="mb-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="leading-loose text-lg space-y-6"
          >
            <p>
              Film is not just about what you see—it's about what you feel in the shadows, in the
              pauses between frames, in the subtle dance of light and darkness.
            </p>
            <p>
              My work explores the intersection of technical precision and emotional resonance,
              influenced by classic cinema while pushing towards contemporary visual language.
            </p>
          </motion.div>
        </section>

        {/* Works */}
        <section className="mb-24">
          <h2 className="text-5xl mb-12 flex items-center gap-4">
            <Camera size={36} />
            Selected Works
          </h2>
          <div className="space-y-8 max-w-5xl">
            {works.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="border-l-4 border-current/30 pl-8 py-6 hover:border-current/60 transition-all"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-3xl">{work.title}</h3>
                  <span className="text-sm opacity-60">{work.year}</span>
                </div>
                <p className="text-lg mb-2 opacity-70">{work.type}</p>
                <p className="leading-relaxed opacity-80">{work.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical */}
        <section className="mb-24 max-w-5xl">
          <h2 className="text-5xl mb-12 flex items-center gap-4">
            <Aperture size={36} />
            Technical Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl mb-4">Cinematography</h3>
              <ul className="space-y-2 opacity-80">
                <li>• Natural lighting techniques</li>
                <li>• Anamorphic compositions</li>
                <li>• Color grading workflows</li>
                <li>• RAW format workflows</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl mb-4">Equipment</h3>
              <ul className="space-y-2 opacity-80">
                <li>• RED & ARRI cameras</li>
                <li>• Zeiss & Cooke lenses</li>
                <li>• DaVinci Resolve</li>
                <li>• Adobe Creative Suite</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
