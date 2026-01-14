import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import ParticleField from './ParticleField';
import MeshGradientBackground from './MeshGradientBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <MeshGradientBackground />
      <ParticleField />
      <Sidebar />
      <main className="ml-64 relative z-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;
