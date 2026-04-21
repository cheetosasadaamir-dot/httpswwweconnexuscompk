import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';

export type SubjectMode = 'econ' | 'science';

interface SubjectModeContextValue {
  mode: SubjectMode;
  setMode: (mode: SubjectMode) => void;
  toggleMode: () => void;
}

const SubjectModeContext = createContext<SubjectModeContextValue | undefined>(undefined);

const STORAGE_KEY = 'econnexus_subject_mode';

export const SubjectModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<SubjectMode>(() => {
    if (typeof window === 'undefined') return 'econ';
    return (localStorage.getItem(STORAGE_KEY) as SubjectMode) || 'econ';
  });

  // Apply class on <html> so CSS can theme globally (e.g. accent shifts)
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('mode-science', mode === 'science');
    root.classList.toggle('mode-econ', mode === 'econ');
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const setMode = useCallback((next: SubjectMode) => setModeState(next), []);
  const toggleMode = useCallback(() => setModeState(p => (p === 'econ' ? 'science' : 'econ')), []);

  return (
    <SubjectModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </SubjectModeContext.Provider>
  );
};

export const useSubjectMode = () => {
  const ctx = useContext(SubjectModeContext);
  if (!ctx) throw new Error('useSubjectMode must be used within SubjectModeProvider');
  return ctx;
};
