import Link from 'next/link';
import { motion } from 'framer-motion';

import { Gamepad2, Trophy, Zap, ArrowLeft } from 'lucide-react';

export default function GamePage() {
  const achievements = [
    {
      title: 'Speedrun Records',
      desc: 'Top 50 global in Hollow Knight Any% category',
      icon: '🏆',
    },
    {
      title: 'Game Development',
      desc: 'Published indie roguelike with 10K+ downloads',
      icon: '🎮',
    },
    {
      title: 'Competitive Gaming',
      desc: 'Regional champion in fighting game tournaments',
      icon: '⚔️',
    },
  ];

  return (
    <div className="bg-[#0d0015] text-[#c794ff] min-h-screen font-square relative overflow-hidden">
      {/* Glow effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6200EE] rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c794ff] rounded-full blur-[120px] opacity-20 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-[#6200EE]/20 z-50">
        <motion.div
          className="h-full bg-[#6200EE] shadow-[0_0_10px_#6200EE]"
          initial={{ width: '0%' }}
          animate={{ width: '75%' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

      <div className="relative z-10 px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-16 px-6 py-3 rounded-full bg-current/10 border border-current/30 hover:bg-current/20 transition-all"
        >
          <ArrowLeft size={20} />
          <span>Exit to Main Menu</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <Gamepad2 size={56} />
            <h1 className="text-7xl tracking-wide">RYOMIFY</h1>
          </div>
          <p className="text-3xl px-6 py-3 rounded-full bg-current/10 inline-block">
            LEVEL 99 • SYNTHETIC PLAYGROUND
          </p>
        </motion.div>

        {/* About */}
        <section className="mb-24 max-w-4xl">
          <div className="rounded-3xl border border-current/30 bg-current/5 p-10 shadow-lg shadow-current/10">
            <h2 className="text-4xl mb-6 flex items-center gap-3">
              <Zap size={32} />
              PLAYER PROFILE
            </h2>
            <div className="space-y-6 text-xl leading-relaxed">
              <p>
                Gaming isn't just entertainment—it's a medium for storytelling, problem-solving, and
                community building. From retro classics to modern masterpieces, from speedruns to
                casual plays.
              </p>
              <p>
                Beyond playing, I'm fascinated by game design, modding communities, and the cultural
                impact of gaming. Currently building indie games and contributing to open-source game
                engines.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-24">
          <h2 className="text-4xl mb-10 flex items-center gap-3">
            <Trophy size={36} />
            ACHIEVEMENTS UNLOCKED
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl border border-current/30 bg-current/5 p-8 shadow-lg shadow-current/10"
              >
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-2xl mb-3">{achievement.title}</h3>
                <p className="opacity-80 leading-relaxed">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Favorite Games */}
        <section className="mb-24">
          <h2 className="text-4xl mb-10">FAVORITE GAMES</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {[
              { name: 'Hollow Knight', genre: 'Metroidvania' },
              { name: 'Celeste', genre: 'Platformer' },
              { name: 'Hades', genre: 'Roguelike' },
              { name: 'Elden Ring', genre: 'Action RPG' },
              { name: 'Persona 5', genre: 'JRPG' },
              { name: 'Sekiro', genre: 'Action-Adventure' },
            ].map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-current/30 bg-current/5 p-6 hover:shadow-lg hover:shadow-current/10 transition-all"
              >
                <h3 className="text-2xl mb-2">{game.name}</h3>
                <p className="opacity-70">{game.genre}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section>
          <h2 className="text-4xl mb-10">STATS</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-current/30 bg-current/5 p-6">
              <div className="text-5xl mb-2">500+</div>
              <div className="opacity-70">Games Completed</div>
            </div>
            <div className="rounded-2xl border border-current/30 bg-current/5 p-6">
              <div className="text-5xl mb-2">50+</div>
              <div className="opacity-70">Platinum Trophies</div>
            </div>
            <div className="rounded-2xl border border-current/30 bg-current/5 p-6">
              <div className="text-5xl mb-2">1000+</div>
              <div className="opacity-70">Hours Streamed</div>
            </div>
            <div className="rounded-2xl border border-current/30 bg-current/5 p-6">
              <div className="text-5xl mb-2">10+</div>
              <div className="opacity-70">Games Modded</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
