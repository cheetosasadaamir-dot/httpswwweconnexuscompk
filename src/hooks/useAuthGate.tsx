import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import LoginModal from '@/components/LoginModal';

interface AuthGateContextType {
  requireAuth: (callback?: () => void) => boolean;
  isAuthenticated: boolean;
}

const AuthGateContext = createContext<AuthGateContextType>({
  requireAuth: () => false,
  isAuthenticated: false,
});

export const AuthGateProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const requireAuth = useCallback((callback?: () => void): boolean => {
    if (user) {
      callback?.();
      return true;
    }
    setPendingAction(() => callback ?? null);
    setShowModal(true);
    return false;
  }, [user]);

  const handleClose = () => {
    setShowModal(false);
    setPendingAction(null);
  };

  return (
    <AuthGateContext.Provider value={{ requireAuth, isAuthenticated: !!user }}>
      {children}
      <LoginModal
        open={showModal}
        onClose={handleClose}
        onSuccess={() => {
          handleClose();
          pendingAction?.();
        }}
      />
    </AuthGateContext.Provider>
  );
};

export const useAuthGate = () => useContext(AuthGateContext);
