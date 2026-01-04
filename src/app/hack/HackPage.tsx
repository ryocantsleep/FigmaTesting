import Link from 'next/link';
import { motion } from 'framer-motion';

import { Shield, Network, Lock, Terminal, ArrowLeft } from 'lucide-react';

export default function HackPage() {
  const projects = [
    {
      title: 'Pentesting Framework',
      description: 'Custom vulnerability assessment tool for network security auditing',
      tech: ['Python', 'Nmap', 'Metasploit'],
    },
    {
      title: 'Zero-Day Research',
      description: 'Discovered and reported critical vulnerabilities in enterprise software',
      tech: ['C', 'Assembly', 'Reverse Engineering'],
    },
    {
      title: 'Network Monitoring System',
      description: 'Real-time threat detection and anomaly analysis platform',
      tech: ['Go', 'Docker', 'Elasticsearch'],
    },
  ];

  const skills = ['Network Security', 'Penetration Testing', 'OSINT', 'Cryptography', 'CTF Competitions', 'Red Team Operations'];

  return (
    <div className="bg-[#0a0000] text-[#D00000] min-h-screen font-mono relative">
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,#D00000_50%)] bg-[length:100%_4px] animate-[scan_8s_linear_infinite]" />
      </div>

      <div className="relative z-20 px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 mb-12 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span>Back to Origin</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <Shield size={40} />
            <h1 className="text-5xl">ryocanthack</h1>
          </div>
          <p className="text-xl opacity-70 border-l-2 border-dashed border-current pl-4">
            Subterranean Security Specialist
          </p>
        </motion.div>

        {/* About */}
        <section className="mb-20 max-w-5xl">
          <div className="border border-dashed border-current p-8 mb-8">
            <h2 className="text-3xl mb-6 flex items-center gap-3">
              <Terminal size={28} />
              $ whoami
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                Specializing in offensive security, network penetration, and vulnerability research.
                My work focuses on finding weaknesses before malicious actors do.
              </p>
              <p>
                Years of experience in red team operations, CTF competitions, and security auditing
                for enterprise systems. Believer in responsible disclosure and ethical hacking.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-3xl mb-8 flex items-center gap-3">
            <Network size={28} />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-dashed border-current p-6"
              >
                <h3 className="text-xl mb-3">&gt; {project.title}</h3>
                <p className="mb-4 opacity-80 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-sm bg-[#D00000]/10 px-3 py-1 border border-current/30">
                      [{t}]
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl mb-8 flex items-center gap-3">
            <Lock size={28} />
            Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-current/50 p-4 text-center hover:bg-[#D00000]/10 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer Terminal */}
        <footer className="border-t border-dashed border-current pt-8 mt-20">
          <div className="font-mono text-sm">
            <span className="opacity-50">$ </span>
            <span>cat /var/log/security.log | tail -n 1</span>
            <div className="mt-2 opacity-70">[{new Date().toISOString()}] System secure. No threats detected.</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

