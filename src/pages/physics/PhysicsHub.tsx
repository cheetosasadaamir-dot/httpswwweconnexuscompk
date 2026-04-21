import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Atom, Zap, Waves, Orbit } from 'lucide-react';
import PhysicsLayout from '@/components/physics/PhysicsLayout';
import { physicsTopics } from '@/data/physicsTopics';

const iconMap = { mechanics: Atom, electricity: Zap, waves: Waves, quantum: Orbit };

const PhysicsHub = () => (
  <PhysicsLayout
    title="Physics Hub"
    subtitle="Deep, syllabus-locked physics for A-Level (CIE / Edexcel / IB) and first-year university. Living notes with interactive derivations and examiner-trap warnings."
  >
    <div className="grid md:grid-cols-2 gap-5">
      {physicsTopics.map((topic, i) => {
        const Icon = iconMap[topic.id];
        return (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-2xl border border-primary/15 bg-card/60 backdrop-blur-md p-5 md:p-6 hover:border-primary/40 hover:shadow-[0_8px_40px_hsl(214_100%_61%/0.15)] transition"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-xl font-bold text-foreground leading-tight">
                  {topic.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{topic.description}</p>
              </div>
            </div>

            <ul className="space-y-1.5 mt-4">
              {topic.subtopics.map(s => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm text-foreground/85 hover:text-foreground hover:bg-primary/10 transition"
                  >
                    <span className="truncate">{s.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-80 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  </PhysicsLayout>
);

export default PhysicsHub;
