import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

const founders = [
  {
    name: 'Muhammad Asad Aamir',
    title: 'Founder & Lead Curator',
    email: 'asadaamir496@gmail.com',
    instagram: 'https://www.instagram.com/econ.nexus.pk/',
  },
  {
    name: 'Zafeer Ahmed',
    title: 'Co-Founder',
    email: 'asadaamir496@gmail.com',
    instagram: 'https://www.instagram.com/econ.nexus.pk/',
  },
];

const OwnerProfileSection = () => {
  return (
    <section
      id="owner-profile"
      className="py-24 lg:py-32 relative scroll-mt-20"
      style={{ backgroundColor: '#121212' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
      <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-sm text-neon-cyan mb-6">
            🎓 Meet the Team
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            Founders
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The minds behind one of the best AI-integrated academic ecosystems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {founders.map((f, idx) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/20 via-neon-cyan/10 to-neon-cyan/20 rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-space-void/75 backdrop-blur-[20px] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,242,255,0.1)] h-full">
                <div className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="font-display text-2xl font-bold text-white tracking-wide mb-1">
                      {f.name}
                    </h3>
                    <p className="text-sm text-neon-cyan/80 tracking-wider uppercase">
                      {f.title}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                      href={`mailto:${f.email}`}
                      className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-space-void/60 border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all duration-300 group min-h-[44px]"
                    >
                      <Mail className="w-4 h-4 text-white group-hover:text-neon-cyan transition-colors" />
                      <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/80 group-hover:text-neon-cyan transition-colors truncate">
                        {f.email}
                      </span>
                    </a>
                    <a
                      href={f.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-space-void/60 border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all duration-300 group min-h-[44px]"
                    >
                      <Instagram className="w-4 h-4 text-white group-hover:text-neon-cyan transition-colors" />
                      <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/80 group-hover:text-neon-cyan transition-colors">
                        Instagram
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OwnerProfileSection;

