import { useAuthGate } from '@/hooks/useAuthGate';
import { Lock } from 'lucide-react';

interface AuthOverlayProps {
 children: React.ReactNode;
 label?: string;
}

/**
 * Wraps a section with a glass overlay + "Login to Unlock" badge
 * when user is not authenticated. Clicks trigger the login modal.
 */
const AuthOverlay = ({ children, label = 'Login to Unlock Expert AI' }: AuthOverlayProps) => {
 const { isAuthenticated, requireAuth } = useAuthGate;

 if (isAuthenticated) return <>{children}</>;

 return (
 <div className="relative">
 {children}
 {/* Glass overlay */}
 <div
 className="absolute inset-0 z-30 bg-background/30 backdrop-blur-[2px] cursor-pointer flex items-center justify-center rounded-2xl"
 onClick={ => requireAuth}
 >
 <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-border/50 shadow-lg">
 <Lock className="w-3.5 h-3.5 text-primary" />
 <span className="text-xs font-medium text-foreground">{label}</span>
 </div>
 </div>
 </div>
 );
};

export default AuthOverlay;
