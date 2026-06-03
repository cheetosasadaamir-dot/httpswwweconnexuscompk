import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import EconomicsChatbot from '@/components/EconomicsChatbot';
import { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    document.title = 'AI Tutor Chat — EconNexus';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Chat with EconNexus AI Tutors. 11 specialist personas across Economics, Business, Sciences, Law and more — board-aware, syllabus-aligned answers.');
  }, []);

  return (
    <Layout>
      <div className="w-full max-w-[1920px] mx-auto px-0 sm:px-3 md:px-4 pt-20 md:pt-24 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-3 md:mb-4 px-4"
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-[10px] md:text-xs uppercase tracking-[0.25em] text-secondary mb-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Sparkles className="w-3 h-3" /> AI Tutor Workspace
          </span>
          <h1
            className="text-fluid-2xl md:text-fluid-3xl text-secondary"
            style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase' }}
          >
            EconNexus AI Tutors
          </h1>
        </motion.div>

        <EconomicsChatbot />
      </div>
    </Layout>
  );
};

export default Chat;
