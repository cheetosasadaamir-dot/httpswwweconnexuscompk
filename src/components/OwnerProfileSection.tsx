import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram } from 'lucide-react';


const OwnerProfileSection = () => {
  return (
    <section 
      id="owner-profile" 
      className="py-24 lg:py-32 relative scroll-mt-20"
      style={{ backgroundColor: '#121212' }}
    >
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
      <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-sm text-neon-cyan mb-6">
            🎓 Meet the Founder
          </span>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The Academic Mind Behind Pakistan's First AI-Integrated Ecosystem
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/20 via-neon-cyan/10 to-neon-cyan/20 rounded-3xl blur-xl opacity-50" />
          
          {/* Glassmorphic Card */}
           <div className="relative bg-space-void/75 backdrop-blur-[20px] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,242,255,0.1)]">
            <div className="p-8 lg:p-10 flex flex-col">
              {/* Name & Title */}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-white tracking-wide mb-1">
                  Muhammad Asad Aamir
                </h3>
                <p className="text-sm text-neon-cyan/80 tracking-wider uppercase">
                  Founder & Lead Curator
                </p>
              </div>


              {/* Instagram */}
              <div className="mt-6 flex justify-center">
                <a
                  href="https://www.instagram.com/asaddd__2?igsh=em1haGRiaGx6bGk1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-space-void/60 border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all duration-300 group min-h-[44px]"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-neon-cyan transition-colors" />
                  <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white/80 group-hover:text-neon-cyan transition-colors">
                    Connect on Instagram
                  </span>
                </a>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <p className="font-script text-2xl lg:text-3xl text-white/80 italic tracking-wide">
                      Muhammad Asad Aamir
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">
                      Portal Founder
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-space-elevated/50 border border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all group" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5 text-white/70 group-hover:text-neon-cyan transition-colors" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-space-elevated/50 border border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all group" aria-label="Twitter/X">
                      <Twitter className="w-5 h-5 text-white/70 group-hover:text-neon-cyan transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OwnerProfileSection;
