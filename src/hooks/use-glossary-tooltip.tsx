import { useMemo } from 'react';
import { glossaryTerms, GlossaryTerm } from '@/data/glossaryTerms';

/**
 * Hook to find glossary terms and their definitions
 * Used for integrating hover-over definitions across the site
 */
export const useGlossaryTooltip = () => {
  const termMap = useMemo(() => {
    const map = new Map<string, GlossaryTerm>();
    glossaryTerms.forEach(term => {
      // Map by lowercase term for case-insensitive lookup
      map.set(term.term.toLowerCase(), term);
      
      // Also add common abbreviations
      const abbrevMatch = term.term.match(/\(([^)]+)\)/);
      if (abbrevMatch) {
        map.set(abbrevMatch[1].toLowerCase(), term);
      }
    });
    return map;
  }, []);

  const findTerm = (searchTerm: string): GlossaryTerm | undefined => {
    return termMap.get(searchTerm.toLowerCase());
  };

  const findTermsByTopic = (topic: string): GlossaryTerm[] => {
    return glossaryTerms.filter(term => 
      term.topic.toLowerCase().includes(topic.toLowerCase())
    );
  };

  const findTermsByLevel = (level: 'AS' | 'A2' | 'Both'): GlossaryTerm[] => {
    return glossaryTerms.filter(term => term.level === level || term.level === 'Both');
  };

  return {
    findTerm,
    findTermsByTopic,
    findTermsByLevel,
    allTerms: glossaryTerms,
  };
};

export default useGlossaryTooltip;
