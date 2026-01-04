'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CustomCursor } from '../components/CustomCursor';

const personas = [
  { name: 'ryocanthack', path: '/hack', color: '#D00000', desc: 'Security & Networking' },
  { name: 'ryocantspeak', path: '/speak', color: '#FFD700', desc: 'Language & Communication' },
  { name: 'ryohatesmath', path: '/math', color: '#E65100', desc: 'Data & AI/ML' },
  { name: 'ryodoesmusic', path: '/music', color: '#808080', desc: 'Music & Sound' },
  { name: 'ryocantfilm', path: '/film', color: '#003366', desc: 'Film & Photography' },
  { name: 'ryolovesbook', path: '/book', color: '#1B4332', desc: 'Books & Literature' },
  { name: 'ryomify', path: '/game', color: '#6200EE', desc: 'Gaming & Geek Culture' },
];

export default function HomePage() {
  const [showEye, setShowEye] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowEye(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-grotesk relative overflow-x-hidden">
      <CustomCursor />

      {/* Eye animation */}
      {showEye && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{ duration: 2, times: [0, 0.3, 0.7, 1] }}
            className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [0.5, 1, 1, 0.5] }}
              transition={{ duration: 2, times: [0, 0.3, 0.7, 1] }}
              className="w-12 h-12 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-7xl w-full"
        >
          <h1 className="text-9xl mb-8 tracking-tight">ryocantsleep</h1>
          <p className="text-2xl mb-16 max-w-3xl opacity-70">
            The Neutral Origin — A polyglot creator navigating through multiple domains of expertise
          </p>

          {/* Persona Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {personas.map((persona, index) => (
              <Link key={persona.name} href={persona.path}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="border border-white/10 p-8 hover:border-white/30 transition-all aspect-square flex flex-col justify-between"
                  style={{ backgroundColor: `${persona.color}15` }}
                >
                  <div>
                    <div
                      className="w-4 h-4 rounded-full mb-4"
                      style={{ backgroundColor: persona.color }}
                    />
                    <h3 className="text-xl mb-2">{persona.name}</h3>
                  </div>
                  <p className="text-sm opacity-60">{persona.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <h2 className="text-6xl mb-12">About</h2>
          <div className="space-y-8 text-xl opacity-80 leading-relaxed">
            <p>
              I exist in multiple dimensions of creativity and technical expertise. Each persona
              represents a different facet of my capabilities—from security research to cinematic
              storytelling, from data science to musical composition.
            </p>
            <p>
              This portfolio is not just a collection of work—it's a manifestation of how I
              approach problems from different angles, each with its own methodology, aesthetic, and
              philosophy.
            </p>
            <p>
              Explore each persona to discover specific projects, methodologies, and achievements in
              their respective domains.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-6xl mb-12">Connect</h2>
          <div className="space-y-6 text-xl opacity-80">
            <p>hello@ryocantsleep.com</p>
            <p>github.com/ryocantsleep</p>
            <p>@ryocantsleep</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
