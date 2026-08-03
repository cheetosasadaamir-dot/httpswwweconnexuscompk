import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import AssignmentArchitect from '@/components/AssignmentArchitect';

const AssignmentArchitectPage = () => (
  <div className="min-h-screen relative flex flex-col">
    <Helmet>
      <title>AI Assignment Architect — Econ Nexus</title>
      <meta
        name="description"
        content="Generate university-grade assignments, essays, reports and research papers with proper academic structure, headings and referencing."
      />
    </Helmet>

    <Header />
    <FloatingDock />

    <main className="relative z-10 pt-24 md:pt-28 pb-12 flex-1">
      <AssignmentArchitect />
    </main>

    <Footer />
  </div>
);

export default AssignmentArchitectPage;
