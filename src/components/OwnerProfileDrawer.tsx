import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Twitter, Mail, Phone, GraduationCap, Award, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ownerPortrait from '@/assets/owner-portrait.jpeg';

interface OwnerProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const OwnerProfileDrawer = ({ isOpen, onClose }: OwnerProfileDrawerProps) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-space-void/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
            className={cn(
              "fixed right-0 top-0 z-50 h-full overflow-y-auto",
              "w-full md:w-[480px] lg:w-[520px]",
              "bg-space-void/75 backdrop-blur-[15px]",
              "border-l border-neon-cyan/30",
              "shadow-[0_0_40px_rgba(0,242,255,0.1)]"
            )}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-space-elevated/50 hover:bg-neon-cyan/20 transition-colors group z-10"
            >
              <X className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-10">
              {/* Header */}
              <header className="mb-10">
                <h2 className="text-xs font-semibold tracking-[0.3em] text-neon-cyan uppercase mb-8">
                  Owner Profile
                </h2>

                {/* Avatar Section */}
                <div className="flex flex-col items-center text-center mb-8">
                  {/* Portrait Image */}
                  <motion.div 
                    className="relative mb-6 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {/* Outer Glow */}
                    <div className="absolute -inset-1 rounded-xl bg-neon-cyan/20 blur-md group-hover:bg-neon-cyan/40 transition-all duration-300" />
                    
                    {/* Image Container */}
                    <div className="relative w-32 h-40 rounded-xl overflow-hidden border-2 border-neon-cyan shadow-[0_0_20px_rgba(0,242,255,0.4)] group-hover:shadow-[0_0_35px_rgba(0,242,255,0.6)] transition-shadow duration-300">
                      <img 
                        src={ownerPortrait} 
                        alt="Muhammad Asad Aamir"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Admin Panel link - beneath portrait */}
                  <Link
                    to="/owner-dashboard"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-4 py-2 mt-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-semibold tracking-wider uppercase hover:bg-neon-cyan/20 hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    Admin Panel
                  </Link>

                  <h1 className="font-display text-2xl md:text-3xl font-bold text-white tracking-wide mb-2">
                    Muhammad Asad Aamir
                  </h1>
                  <p className="text-muted-foreground text-sm tracking-wide">
                    Business & Economics Scholar
                  </p>
                </div>

                {/* Contact Row */}
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <a 
                    href="mailto:unifom7@gmail.com" 
                    className="flex items-center gap-1.5 hover:text-neon-cyan transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">unifom7@gmail.com</span>
                  </a>
                  <span className="text-white/20">|</span>
                  <a 
                    href="tel:+923118932062" 
                    className="flex items-center gap-1.5 hover:text-neon-cyan transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+92-311-893-2062</span>
                  </a>
                </div>
              </header>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent mb-8" />

              {/* Profile Bio */}
              <section className="mb-10">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-neon-gold uppercase mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Profile
                </h3>
                <p className="text-muted-foreground text-sm leading-[1.8] text-justify">
                  A highly motivated and disciplined individual with an academic foundation in Business and Economics, complemented by leadership experience as the former Director General of the Entrepreneurship Society. Passionate about continuous learning, personal growth, and effective communication, with a proven ability to manage responsibilities, collaborate in teams, and perform under pressure. Possesses a deep interest in problem-solving and innovative thinking, aiming to apply these skills toward academic excellence and future professional success.
                </p>
              </section>


              {/* Education */}
              <section className="mb-10">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-neon-gold uppercase mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 shrink-0" />
                    <div>
                      <p className="text-sm text-white font-medium">A Levels</p>
                      <p className="text-xs text-muted-foreground">Highbrow College</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 shrink-0" />
                    <div>
                      <p className="text-sm text-white font-medium">O Levels</p>
                      <p className="text-xs text-muted-foreground">Falcon House Grammar School</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section className="mb-10">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-neon-gold uppercase mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Certifications
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="leading-[1.7]">
                    Sales Executive certification from Nagoya Car Trading, contributing to sales and client management of imported Japanese vehicles.
                  </p>
                  <p className="leading-[1.7]">
                    Appreciation Letter & Certificate as Director General, Entrepreneurship Society for organizing Cynosure 2024 – the first-ever Business Event at College.
                  </p>
                </div>
              </section>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent mb-8" />

              {/* Connect Section */}
              <section>
                <h3 className="text-xs font-semibold tracking-[0.2em] text-neon-gold uppercase mb-5 text-center">
                  Connect
                </h3>
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-space-elevated/50 border border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-space-elevated/50 border border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all group"
                  >
                    <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
                  </a>
                  <a
                    href="mailto:unifom7@gmail.com"
                    className="p-3 rounded-full bg-space-elevated/50 border border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all group"
                  >
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
                  </a>
                </div>
              </section>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default OwnerProfileDrawer;
