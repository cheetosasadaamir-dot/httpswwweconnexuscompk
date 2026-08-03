import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import WorldEconomicsSection from '@/components/WorldEconomicsSection';

const WorldEconomics = () => (
  <div className="min-h-screen relative flex flex-col">
    <Helmet>
      <title>World Economics — Econ Nexus</title>
      <meta
        name="description"
        content="A searchable encyclopedia of global economics concepts — definitions, models, real-world context and exam-ready analysis."
      />
    </Helmet>

    <Header />
    <FloatingDock />

    <main className="relative z-10 pt-24 md:pt-28 pb-12 flex-1">
      <WorldEconomicsSection />
    </main>

    <Footer />
  </div>
);

export default WorldEconomics;
