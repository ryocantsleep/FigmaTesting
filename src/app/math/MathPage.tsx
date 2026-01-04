import Link from 'next/link';
import { motion } from 'framer-motion';

import { Binary, Database, Brain, ArrowLeft } from 'lucide-react';

export default function MathPage() {
  const projects = [
    {
      title: 'Predictive Analytics Engine',
      desc: 'ML model for sales forecasting with 94% accuracy',
      tech: ['Python', 'TensorFlow', 'Pandas'],
    },
    {
      title: 'NLP Classification System',
      desc: 'Multi-label text classification for customer feedback',
      tech: ['BERT', 'PyTorch', 'FastAPI'],
    },
    {
      title: 'Anomaly Detection Pipeline',
      desc: 'Real-time fraud detection using unsupervised learning',
      tech: ['Scikit-learn', 'Apache Spark', 'MLflow'],
    },
  ];

  return (
    <div className="bg-[#1a1100] text-[#E65100] min-h-screen font-sans relative">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(#E65100_1px,transparent_1px),linear-gradient(90deg,#E65100_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10 px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span>[ Back ]</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <Binary size={40} />
            <h1 className="text-5xl font-mono">ryohatesmath</h1>
          </div>
          <p className="text-xl opacity-70 font-mono">[DATA_SCIENTIST | ML_ENGINEER | ANALYST]</p>
        </motion.div>

        {/* About */}
        <section className="mb-20 max-w-5xl">
          <div className="border border-current/30 p-8">
            <h2 className="text-3xl mb-6 font-mono">$ cat about.txt</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Despite the name, I don't actually hate math—I respect its brutal honesty. Numbers
                don't lie, and data tells stories that qualitative analysis often misses.
              </p>
              <p>
                Specialized in machine learning, statistical modeling, and building production-ready
                AI systems. From data collection to model deployment, I handle the full ML lifecycle.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-3xl mb-8 flex items-center gap-3 font-mono">
            <Brain size={28} />
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-current/20 p-6 bg-[#E65100]/5"
              >
                <h3 className="text-xl mb-3 font-mono">{project.title}</h3>
                <p className="mb-4 opacity-80">{project.desc}</p>
                <div className="space-y-1 font-mono text-sm">
                  {project.tech.map((t, i) => (
                    <div key={i} className="opacity-70">
                      [{i + 1}] {t}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-20">
          <h2 className="text-3xl mb-8 flex items-center gap-3 font-mono">
            <Database size={28} />
            Technical Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
            {[
              'Python',
              'R',
              'SQL',
              'TensorFlow',
              'PyTorch',
              'Scikit-learn',
              'Pandas',
              'NumPy',
              'Jupyter',
              'Docker',
              'Git',
              'AWS',
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-current/20 p-4 text-center hover:bg-[#E65100]/10 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section>
          <h2 className="text-3xl mb-8 font-mono">[ Metrics ]</h2>
          <div className="grid md:grid-cols-3 gap-6 font-mono">
            <div className="border border-current/30 p-6">
              <div className="text-5xl mb-2">50+</div>
              <div className="opacity-70">Models Deployed</div>
            </div>
            <div className="border border-current/30 p-6">
              <div className="text-5xl mb-2">2M+</div>
              <div className="opacity-70">Data Points Analyzed</div>
            </div>
            <div className="border border-current/30 p-6">
              <div className="text-5xl mb-2">95%</div>
              <div className="opacity-70">Avg. Model Accuracy</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
