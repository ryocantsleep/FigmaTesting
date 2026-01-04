import Link from 'next/link';
import { motion } from 'framer-motion';

import { Music, Radio, Disc, ArrowLeft } from 'lucide-react';

export default function MusicPage() {
  const works = [
    {
      title: 'Concrete Dreams',
      type: 'EP',
      year: '2024',
      desc: 'Ambient electronic exploring industrial soundscapes',
    },
    {
      title: 'Silent Frequency',
      type: 'Album',
      year: '2023',
      desc: 'Minimalist compositions for film and meditation',
    },
    {
      title: 'Urban Echoes',
      type: 'Sound Design',
      year: '2024',
      desc: 'Field recordings transformed into sonic textures',
    },
  ];

  return (
    <div className="bg-[#2a2a2a] text-[#f2f2f2] min-h-screen font-helvetica relative">
      {/* Waveform */}
      <div className="fixed bottom-0 left-0 right-0 h-24 pointer-events-none z-0 opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 100">
          <path
            d="M0,50 L30,30 L60,60 L90,20 L120,70 L150,40 L180,55 L210,35 L240,65 L270,45 L300,50 L330,30 L360,60 L390,25 L420,70 L450,40 L480,55 L510,35 L540,65 L570,45 L600,50 L630,30 L660,60 L690,25 L720,70 L750,40 L780,55 L810,35 L840,65 L870,45 L900,50 L930,30 L960,60 L990,25 L1020,70 L1050,40 L1080,55 L1110,35 L1140,65 L1170,45 L1200,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative z-10 px-8 py-12 max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-16 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <Music size={48} />
            <h1 className="text-6xl">ryodoesmusic</h1>
          </div>
          <p className="text-2xl opacity-70">The Brutalist Studio</p>
        </motion.div>

        {/* Philosophy */}
        <section className="mb-24 max-w-4xl">
          <div className="border-b border-current/20 pb-12">
            <h2 className="text-4xl mb-8">Sound Philosophy</h2>
            <div className="space-y-6 text-xl leading-relaxed opacity-90">
              <p>
                Music is architecture for the ears. I approach composition with the same principles as
                brutalist design—honesty of materials, clarity of structure, and emotional rawness.
              </p>
              <p>
                My work spans ambient electronica, field recordings, and sound design for visual media.
                I'm fascinated by the space between sound and silence, noise and melody.
              </p>
            </div>
          </div>
        </section>

        {/* Works */}
        <section className="mb-24">
          <h2 className="text-4xl mb-12 flex items-center gap-3">
            <Disc size={36} />
            Discography
          </h2>
          <div className="space-y-8">
            {works.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="border-b border-current/20 pb-8"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-3xl">{work.title}</h3>
                  <span className="text-sm opacity-60">{work.year}</span>
                </div>
                <p className="text-lg mb-2 opacity-70">{work.type}</p>
                <p className="text-lg leading-relaxed opacity-80">{work.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Equipment */}
        <section className="mb-24">
          <h2 className="text-4xl mb-12 flex items-center gap-3">
            <Radio size={36} />
            Studio Setup
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6 opacity-70">Hardware</h3>
              <ul className="space-y-3 text-lg">
                <li className="border-l-2 border-current/30 pl-4">Modular Synthesizers</li>
                <li className="border-l-2 border-current/30 pl-4">Field Recorders</li>
                <li className="border-l-2 border-current/30 pl-4">MIDI Controllers</li>
                <li className="border-l-2 border-current/30 pl-4">Studio Monitors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl mb-6 opacity-70">Software</h3>
              <ul className="space-y-3 text-lg">
                <li className="border-l-2 border-current/30 pl-4">Ableton Live</li>
                <li className="border-l-2 border-current/30 pl-4">Max/MSP</li>
                <li className="border-l-2 border-current/30 pl-4">VCV Rack</li>
                <li className="border-l-2 border-current/30 pl-4">iZotope Suite</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Collaborations */}
        <section>
          <h2 className="text-4xl mb-12">Collaborations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Film Scores',
              'Podcast Intros',
              'Installation Art',
              'Theater Productions',
              'Meditation Apps',
              'Video Game OST',
            ].map((collab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-[#1a1a1a] p-6 text-center text-xl border-b-4 border-current/30"
              >
                {collab}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
