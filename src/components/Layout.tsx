import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import ParticleField from './ParticleField';
import MeshGradientBackground from './MeshGradientBackground';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Layout = ({ children, showSidebar = true }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <MeshGradientBackground />
      <ParticleField />
      {showSidebar ? (
        <>
          <Sidebar />
          <main className="ml-64 relative z-20">
            {children}
          </main>
        </>
      ) : (
        <>
          <Header />
          <main className="relative z-20 pt-20">
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
