// Navigation configuration and utilities
import resumeConfig from '../data/resumeConfig.json';

// Navigation items configuration
export const navigationItems = [
  { name: 'Home', href: '#hero', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Work Experience', href: '#work-experience', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Contact', href: '#contact', current: false },
];

// Smooth scroll utility function
export const smoothScrollTo = (elementId, offset = 100) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Navigation handler utility
export const handleNavigation = (href, setCurrentNav = null) => {
  if (href.startsWith('#')) {
    const sectionId = href.substring(1);
    smoothScrollTo(sectionId);
    
    // Update current navigation state if provided
    if (setCurrentNav) {
      setCurrentNav(href);
    }
  }
};

// Resume handler utility
export const handleResumeView = () => {
  const resumeUrl = resumeConfig.resume.url;
  if (resumeUrl && resumeUrl !== "https://drive.google.com/file/d/your-resume-file-id/view") {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  } else {
    // Fallback alert if resume URL is not configured
    alert('Resume link not configured yet. Please update src/data/resumeConfig.json with your resume URL.');
    console.warn('Resume URL not configured. Please update resumeConfig.json');
  }
};

// Contact navigation utility
export const goToContact = () => {
  smoothScrollTo('contact');
};

// About navigation utility
export const goToAbout = () => {
  smoothScrollTo('about');
};
