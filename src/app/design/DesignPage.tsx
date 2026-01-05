import Link from 'next/link';
import { motion } from 'framer-motion';
import { Pen, Layers, Grid3x3, ArrowLeft } from 'lucide-react';

export function DesignPage() {
  const projects = [
    {
      title: 'Kinetic Typography',
      type: 'Motion Graphics',
      desc: 'Experimental animations exploring type as movement and form',
    },
    {
      title: 'Brand Identity System',
      type: 'Visual Identity',
      desc: 'Complete design system for sustainable fashion startup',
    },
    {
      title: 'Editorial Design',
      type: 'Print & Digital',
      desc: 'Layout design for contemporary art magazine',
    },
  ];

  return (
    <div className="bg-[#F5F0E8] text-[#4A3F35] min-h-screen font-sans relative overflow-hidden">
      {/* Grid overlay - always visible */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(#8B6F47_1px,transparent_1px),linear-gradient(90deg,#8B6F47_1px,transparent_1px)] bg-[length:40px_40px]" />
        {/* Crop marks in corners */}
        <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-[#8B6F47]" />
        <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-[#8B6F47]" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-[#8B6F47]" />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-[#8B6F47]" />
      </div>

      {/* Rulers */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-[#8B6F47]/10 border-b-2 border-[#8B6F47]/30 z-10 flex items-center justify-center">
        <div className="flex gap-4 text-xs opacity-60">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((num) => (
            <span key={num}>{num}</span>
          ))}
        </div>
      </div>
      <div className="fixed top-0 left-0 bottom-0 w-8 bg-[#8B6F47]/10 border-r-2 border-[#8B6F47]/30 z-10 flex flex-col items-center justify-center gap-4">
        <div className="text-xs opacity-60 [writing-mode:vertical-lr] rotate-180">
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].join(' ')}
        </div>
      </div>

      <div className="relative z-20 px-16 py-16 ml-8 mt-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span>[BACK]</span>
        </Link>

        {/* Header with Vector Anchor */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 relative"
        >
          <div className="flex items-center gap-6 mb-8 relative">
            {/* Vector Anchor Symbol */}
            <div className="relative w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Central anchor point */}
                <circle cx="50" cy="50" r="4" fill="#8B6F47" />
                {/* Bézier handles */}
                <line x1="50" y1="50" x2="20" y2="20" stroke="#8B6F47" strokeWidth="2" />
                <line x1="50" y1="50" x2="80" y2="80" stroke="#8B6F47" strokeWidth="2" />
                {/* Handle control points */}
                <circle cx="20" cy="20" r="3" fill="#8B6F47" />
                <circle cx="80" cy="80" r="3" fill="#8B6F47" />
                {/* Curve path */}
                <path
                  d="M 20 20 Q 50 50 80 80"
                  fill="none"
                  stroke="#8B6F47"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-7xl tracking-tight">ryocantdesign</h1>
              <div className="flex items-center gap-3 mt-2 text-sm opacity-60">
                <span>[X: 0, Y: 0]</span>
                <span>•</span>
                <span>CMYK: 0/22/49/45</span>
              </div>
            </div>
          </div>
          <p className="text-2xl leading-relaxed max-w-3xl border-l-4 border-[#8B6F47] pl-6">
            The Vector Anchor — Where structure meets aesthetics. Every pixel placed with intention,
            every curve calculated with precision. Design is not decoration—it's visual problem solving.
          </p>
        </motion.div>

        {/* Philosophy */}
        <section className="mb-24 max-w-5xl">
          <div className="border-2 border-[#8B6F47]/30 p-10 relative">
            {/* Corner guides */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-[#8B6F47]" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-[#8B6F47]" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-[#8B6F47]" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-[#8B6F47]" />
            
            <h2 className="text-4xl mb-8 flex items-center gap-3">
              <Pen size={32} />
              Design Philosophy
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <span className="font-bold">Show the grid.</span> Design is about revealing the
                underlying structure, not hiding it. The guides, the construction lines, the anchor
                points—these are the bones of visual communication.
              </p>
              <p>
                From rough sketches to polished vectors, I believe in transparency of process. Motion
                design, illustration, brand identity—all rooted in timeless principles of composition,
                balance, and hierarchy.
              </p>
            </div>
          </div>
        </section>

        {/* Projects with sketch overlay */}
        <section className="mb-24">
          <h2 className="text-4xl mb-12 flex items-center gap-3">
            <Layers size={36} />
            Selected Work
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative border-2 border-[#8B6F47]/20 p-8 hover:border-[#8B6F47]/50 transition-all"
              >
                {/* Grid reference lines */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
                  <div className="absolute inset-0 bg-[linear-gradient(#8B6F47_1px,transparent_1px),linear-gradient(90deg,#8B6F47_1px,transparent_1px)] bg-[length:20px_20px]" />
                </div>
                
                <div className="relative">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-3xl">{project.title}</h3>
                    <span className="text-sm opacity-60 font-mono">[{String(index + 1).padStart(2, '0')}]</span>
                  </div>
                  <p className="text-lg mb-3 opacity-70">{project.type}</p>
                  <p className="leading-relaxed opacity-80">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tools & Skills */}
        <section className="mb-24">
          <h2 className="text-4xl mb-12 flex items-center gap-3">
            <Grid3x3 size={36} />
            Technical Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-[#8B6F47]/30 p-8">
              <h3 className="text-2xl mb-6 opacity-70">Vector & Motion</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  Adobe Illustrator
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  After Effects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  Cinema 4D
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  Figma
                </li>
              </ul>
            </div>
            <div className="border-2 border-[#8B6F47]/30 p-8">
              <h3 className="text-2xl mb-6 opacity-70">Principles</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  Grid Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  Typography
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  Color Theory
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  Composition
                </li>
              </ul>
            </div>
            <div className="border-2 border-[#8B6F47]/30 p-8">
              <h3 className="text-2xl mb-6 opacity-70">Specialties</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  Brand Identity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  Motion Graphics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  Illustration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B6F47]" />
                  Editorial Design
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Quote */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-l-8 border-[#8B6F47] pl-12 py-8 max-w-4xl"
        >
          <p className="text-3xl leading-relaxed mb-6 italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
          <p className="text-xl opacity-70">— Steve Jobs</p>
          <div className="mt-8 text-sm opacity-40 font-mono">
            [DIMENSIONS: 1920x1080 • DPI: 300 • COLOR MODE: CMYK]
          </div>
        </motion.section>
      </div>
    </div>
  );
}
