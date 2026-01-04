import Link from 'next/link';
import { motion } from 'framer-motion';

import { MessageSquare, Languages, Mic, ArrowLeft } from 'lucide-react';

export default function SpeakPage() {
  const languages = [
    { name: 'English', level: 'Native', flag: '🇬🇧' },
    { name: 'Indonesian', level: 'Native', flag: '🇮🇩' },
    { name: 'Japanese', level: 'Fluent', flag: '🇯🇵' },
    { name: 'Spanish', level: 'Intermediate', flag: '🇪🇸' },
    { name: 'French', level: 'Learning', flag: '🇫🇷' },
  ];

  const talks = [
    {
      title: 'The Power of Polyglot Thinking',
      event: 'TEDx Jakarta',
      year: '2024',
    },
    {
      title: 'Language Learning in the Digital Age',
      event: 'Global Education Summit',
      year: '2023',
    },
  ];

  return (
    <div className="bg-[#FFD700] text-black min-h-screen font-sans italic relative">
      <div className="px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 mb-12 hover:opacity-70 transition-opacity not-italic">
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>

        {/* Header with giant quotes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-20 relative"
        >
          <span className="text-[200px] leading-none absolute -top-12 -left-4 opacity-20">"</span>
          <div className="relative z-10 pl-16">
            <div className="flex items-center gap-4 mb-4">
              <MessageSquare size={40} />
              <h1 className="text-6xl">ryocantspeak</h1>
            </div>
            <p className="text-2xl">
              <mark className="bg-black/20 px-2">High-Contrast Communication</mark>
            </p>
          </div>
        </motion.div>

        {/* About */}
        <section className="mb-20 max-w-5xl">
          <h2 className="text-4xl mb-8">About</h2>
          <div className="space-y-6 text-xl leading-relaxed not-italic">
            <p>
              <mark className="bg-black/10 px-2">Language</mark> is more than communication—it's a
              lens through which we perceive and construct reality. Each language I learn opens up
              new ways of thinking and expressing ideas.
            </p>
            <p>
              Public speaking and language learning share a common thread: the courage to be
              vulnerable, to make mistakes, and to connect authentically with others.
            </p>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-20">
          <h2 className="text-4xl mb-8 flex items-center gap-3">
            <Languages size={32} />
            Languages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/5 p-6 border-4 border-black not-italic"
              >
                <div className="text-4xl mb-3">{lang.flag}</div>
                <h3 className="text-2xl mb-2">{lang.name}</h3>
                <p className="text-lg opacity-70">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Speaking */}
        <section className="mb-20">
          <h2 className="text-4xl mb-8 flex items-center gap-3">
            <Mic size={32} />
            Speaking Engagements
          </h2>
          <div className="space-y-6 max-w-4xl">
            {talks.map((talk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-black/5 p-8 border-l-8 border-black not-italic"
              >
                <h3 className="text-3xl mb-3">"{talk.title}"</h3>
                <div className="flex items-center justify-between">
                  <p className="text-xl opacity-70">{talk.event}</p>
                  <span className="text-lg opacity-60">{talk.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-black/5 p-12 border-8 border-black"
          >
            <p className="text-2xl leading-relaxed not-italic">
              <mark className="bg-black/20 px-2">"Every language is a different vision of life."</mark>
            </p>
            <p className="text-xl mt-4 opacity-70">— Federico Fellini</p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
