import { motion } from 'framer-motion';
import { MessageSquare, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';
import EconomicsChatbot from '@/components/EconomicsChatbot';
import { useEffect } from 'react';

const Chat = () => {
  return (
    <Layout>
      <Helmet>
        <title>AI Tutor Chat — EconNexus</title>
        <meta name="description" content="Chat with EconNexus AI Tutors. 11 specialist personas across Economics, Business, Sciences, Law and more — board-aware, syllabus-aligned answers." />
        <link rel="canonical" href="/chat" />
      </Helmet>

      <div className="mobile-container responsive-container mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-[11px] md:text-xs uppercase tracking-[0.25em] text-secondary mb-5"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Sparkles className="w-3.5 h-3.5" /> AI Tutor Workspace
          </span>
          <h1
            className="text-fluid-4xl lg:text-fluid-5xl mb-3 md:mb-4 text-secondary"
            style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase' }}
          >
            EconNexus AI Tutors
          </h1>
          <p className="text-fluid-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4 text-secondary/70" />
            Specialist personas, board-aware reasoning, syllabus-locked answers.
          </p>
        </motion.div>

        <EconomicsChatbot />
      </div>
    </Layout>
  );
};

export default Chat;
