import { ReactNode } from 'react';
import FloatingDock from './FloatingDock';
import Footer from './Footer';

interface LayoutProps {
 children: ReactNode;
 showSidebar?: boolean;
}

const Layout = ({ children, showSidebar = true }: LayoutProps) => {
 return (
 <div className="min-h-screen">
 <FloatingDock />
 <main className="relative z-20 safe-area-inset">
 {children}
 </main>
 <Footer />
 </div>
 );
};

export default Layout;
