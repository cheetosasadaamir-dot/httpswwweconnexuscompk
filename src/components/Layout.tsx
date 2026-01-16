import { ReactNode } from 'react';
import FluidGraphiteBackground from './FluidGraphiteBackground';
import ScholarDustParticles from './ScholarDustParticles';
import FloatingDock from './FloatingDock';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Layout = ({ children, showSidebar = true }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <FluidGraphiteBackground />
      <ScholarDustParticles />
      <FloatingDock />
      <main className="relative z-20 pt-24 lg:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
