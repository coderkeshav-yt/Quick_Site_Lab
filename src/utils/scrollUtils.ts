export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollToPortfolio = () => {
  // Small delay to ensure the page has loaded
  setTimeout(() => {
    scrollToSection('portfolio');
  }, 100);
}; 