import { ReactNode } from 'react';
import FloatingDock from './FloatingDock';
import Footer from './Footer';
import BackToHome from './BackToHome';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
  showBackToHome?: boolean;
}

const Layout = ({ children, showSidebar = true, showBackToHome = true }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <FloatingDock />
      <main className="relative z-20 safe-area-inset">
        {showBackToHome && <BackToHome className="pt-20 md:pt-24" />}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
