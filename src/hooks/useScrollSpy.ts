import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};