import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { ThemeType } from '../ThemeSwitcher';

interface ContactProps {
  theme: ThemeType;
}

export function Contact({ theme }: ContactProps) {
  const isHack = theme === 'ryocanthack';
  const isGame = theme === 'ryomify';

  const contacts = [
    { icon: Mail, label: 'Email', value: 'hello@ryoportfolio.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/ryocantsleep' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ryocantsleep' },
    { icon: Twitter, label: 'Twitter', value: '@ryocantsleep' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-4xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl mx-auto"
        >
          Tertarik untuk berkolaborasi atau punya project menarik? Jangan ragu untuk menghubungi
          saya melalui salah satu channel di bawah ini.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={isGame ? { scale: 1.05 } : { scale: 1.02 }}
                className={`p-6 border flex items-center gap-4 ${
                  isHack 
                    ? 'border-dashed border-current' 
                    : isGame 
                    ? 'rounded-2xl border-current/30 bg-current/5'
                    : 'border-current/10'
                }`}
              >
                <Icon className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm opacity-60 mb-1">{contact.label}</div>
                  <div className="opacity-90">{contact.value}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {isHack && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 font-mono text-sm border border-dashed border-current/30 p-4 inline-block"
          >
            <span className="opacity-50">$ </span>echo "Message sent successfully"
          </motion.div>
        )}
      </div>
    </section>
  );
}
