import Link from 'next/link';
import { motion } from 'framer-motion';

import { BookOpen, Library, Bookmark, ArrowLeft } from 'lucide-react';

export default function BookPage() {
  const readings = [
    {
      title: 'The Daemon Trilogy',
      author: 'Daniel Suarez',
      notes: 'A prescient exploration of technological autonomy and distributed systems',
    },
    {
      title: 'Gödel, Escher, Bach',
      author: 'Douglas Hofstadter',
      notes: 'The intersection of mathematics, art, and consciousness',
    },
    {
      title: 'The Name of the Rose',
      author: 'Umberto Eco',
      notes: 'Historical mystery woven with semiotics and medieval philosophy',
    },
  ];

  return (
    <div className="bg-[#f5f1e8] text-[#1B4332] min-h-screen font-serif relative">
      {/* Paper texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      <div className="relative z-10 px-16 py-16 max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-16 hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span>Return to Origin</span>
        </Link>

        {/* Header with Drop Cap */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-6 mb-8">
            <BookOpen size={52} />
            <h1 className="text-7xl">ryolovesbook</h1>
          </div>
          <p className="text-2xl leading-relaxed text-justify">
            <span className="float-left text-8xl leading-none mr-4 mt-2">T</span>
            he Private Library — A curator of knowledge and collector of narratives. Books are not
            mere objects but portals to different minds, eras, and possibilities. Each volume in my
            collection represents a conversation across time and space.
          </p>
        </motion.div>

        {/* About Reading */}
        <section className="mb-20">
          <h2 className="text-5xl mb-8">On Reading</h2>
          <div className="text-justify text-lg leading-loose space-y-6">
            <p>
              <span className="float-left text-6xl leading-none mr-3 mt-1">R</span>
              eading is an act of intimacy. When we read, we invite another consciousness into our
              own, allowing their thoughts to intermingle with ours, creating something entirely new
              in the process. My library is eclectic—spanning fiction, philosophy, technology, and
              history.
            </p>
            <p>
              I believe in slow reading, in marginalia, in the physical act of turning pages. There's
              a tactile wisdom in books that digital screens cannot replicate.
            </p>
          </div>
        </section>

        {/* Current Readings */}
        <section className="mb-20">
          <h2 className="text-5xl mb-8 flex items-center gap-4">
            <Library size={40} />
            Recent Readings
          </h2>
          <div className="space-y-8">
            {readings.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="border-l-4 border-current/30 pl-8 pb-8 border-b border-current/10"
              >
                <h3 className="text-3xl mb-2 italic">{book.title}</h3>
                <p className="text-xl mb-4 opacity-70">by {book.author}</p>
                <p className="text-lg leading-relaxed opacity-80">{book.notes}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Collection */}
        <section className="mb-20">
          <h2 className="text-5xl mb-8 flex items-center gap-4">
            <Bookmark size={40} />
            Collection Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div>
              <h3 className="text-2xl mb-4">Fiction</h3>
              <ul className="space-y-2 opacity-80 leading-relaxed">
                <li>• Borges' Complete Works</li>
                <li>• Murakami Collection</li>
                <li>• Eco's Novels</li>
                <li>• García Márquez</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl mb-4">Non-Fiction</h3>
              <ul className="space-y-2 opacity-80 leading-relaxed">
                <li>• Philosophy & Semiotics</li>
                <li>• History of Science</li>
                <li>• Cybernetics</li>
                <li>• Literary Theory</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quote */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-l-8 border-current/30 pl-12 py-8"
        >
          <p className="text-3xl italic leading-relaxed mb-4">
            "A reader lives a thousand lives before he dies. The man who never reads lives only one."
          </p>
          <p className="text-xl opacity-70">— George R.R. Martin</p>
        </motion.section>
      </div>
    </div>
  );
}
