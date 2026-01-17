import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SmoothScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
  onScrollComplete?: () => void;
}

export const useSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((
    sectionId: string,
    options: SmoothScrollOptions = {}
  ) => {
    const { offset = 80, behavior = 'smooth', onScrollComplete } = options;

    const executeScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior,
        });

        // Trigger highlight animation after scroll
        setTimeout(() => {
          element.classList.add('section-highlight');
          onScrollComplete?.();
          
          // Remove highlight after animation
          setTimeout(() => {
            element.classList.remove('section-highlight');
          }, 2000);
        }, 500);
      }
    };

    // If we're on the same page, just scroll
    if (location.pathname === '/') {
      executeScroll();
    } else {
      // Navigate to home first, then scroll
      navigate('/');
      // Wait for navigation and DOM to settle
      setTimeout(executeScroll, 100);
    }
  }, [navigate, location.pathname]);

  const scrollToNotesRepository = useCallback((closeSidebar?: () => void) => {
    closeSidebar?.();
    scrollToSection('notes-repository', {
      onScrollComplete: () => {
        // Add highlight to first chapter card
        const firstCard = document.querySelector('[data-first-chapter="true"]');
        if (firstCard) {
          firstCard.classList.add('glassmorphism-highlight');
          setTimeout(() => {
            firstCard.classList.remove('glassmorphism-highlight');
          }, 2000);
        }
      }
    });
  }, [scrollToSection]);

  return {
    scrollToSection,
    scrollToNotesRepository,
  };
};

export default useSmoothScroll;
