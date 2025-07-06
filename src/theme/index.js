import tokens from './tokens.json';

// Theme utility functions and CSS class generators
export const theme = tokens;

// Color utilities
export const colors = {
  primary: (shade = 600) => tokens.colors.primary[shade],
  secondary: (shade = 600) => tokens.colors.secondary[shade],
  success: (shade = 600) => tokens.colors.success[shade],
  gray: (shade = 600) => tokens.colors.gray[shade],
  white: tokens.colors.white,
  black: tokens.colors.black,
};

// Typography utilities
export const typography = {
  fontFamily: {
    primary: tokens.typography.fontFamily.primary.join(', '),
    heading: tokens.typography.fontFamily.heading.join(', '),
    serif: tokens.typography.fontFamily.serif.join(', '),
  },
  fontSize: tokens.typography.fontSize,
  fontWeight: tokens.typography.fontWeight,
  lineHeight: tokens.typography.lineHeight,
};

// Component style generators
export const componentStyles = {
  // Headings
  heading: {
    h1: `text-4xl md:text-5xl font-bold text-gray-900 leading-tight`,
    h2: `text-3xl md:text-4xl font-bold text-gray-800 leading-tight`,
    h3: `text-2xl md:text-3xl font-semibold text-gray-800 leading-snug`,
    h4: `text-xl md:text-2xl font-semibold text-gray-800 leading-snug`,
    h5: `text-lg md:text-xl font-medium text-gray-800 leading-normal`,
    h6: `text-base md:text-lg font-medium text-gray-800 leading-normal`,
  },

  // Text elements
  text: {
    body: `text-base text-gray-700 leading-relaxed`,
    bodyLarge: `text-lg text-gray-700 leading-relaxed`,
    bodySmall: `text-sm text-gray-600 leading-normal`,
    caption: `text-xs text-gray-500 leading-normal`,
    muted: `text-gray-600`,
    subtle: `text-gray-500`,
  },

  // Buttons
  button: {
    primary: `
      bg-blue-600 hover:bg-blue-700 text-white font-medium
      px-6 py-3 rounded-md transition-all duration-200
      hover:shadow-lg hover:-translate-y-0.5
      active:translate-y-0 active:shadow-md
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none
    `,
    secondary: `
      text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700
      font-medium px-6 py-3 rounded-md transition-all duration-200
      hover:bg-blue-50 hover:-translate-y-0.5
      active:translate-y-0 active:bg-blue-100
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    `,
    ghost: `
      text-gray-700 hover:text-gray-900 hover:bg-gray-50
      font-medium px-6 py-3 rounded-md transition-all duration-200
      hover:-translate-y-0.5 active:translate-y-0
      focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
    `,
    link: `
      text-blue-600 hover:text-blue-700 font-medium
      transition-colors duration-200 underline-offset-4 hover:underline
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    `,
  },

  // Cards
  card: {
    base: `
      bg-white rounded-xl shadow-md border border-gray-100
      transition-all duration-300 hover:shadow-xl hover:-translate-y-1
    `,
    interactive: `
      bg-white rounded-xl shadow-md border border-gray-100
      transition-all duration-300 hover:shadow-xl hover:-translate-y-1
      cursor-pointer group
    `,
    flat: `
      bg-white rounded-lg border border-gray-200
      transition-all duration-300 hover:shadow-md
    `,
  },

  // Layout
  layout: {
    section: `py-8 md:py-10 px-4`,
    sectionBg: `bg-gray-50`,
    container: `max-w-6xl mx-auto`,
    containerSmall: `max-w-4xl mx-auto`,
    grid: `grid gap-6 md:gap-8`,
  },

  // Form elements
  form: {
    input: `
      w-full px-4 py-3 border border-gray-300 rounded-md
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
      transition-colors duration-200 bg-white
    `,
    textarea: `
      w-full px-4 py-3 border border-gray-300 rounded-md resize-vertical
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
      transition-colors duration-200 bg-white
    `,
    label: `block font-medium text-gray-700 mb-2`,
    error: `text-red-600 text-sm mt-1`,
    success: `text-green-600 text-sm mt-1`,
  },

  // Navigation
  nav: {
    link: `
      text-gray-700 hover:text-blue-600 font-medium
      transition-colors duration-200 relative
      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
      after:bg-blue-600 after:transition-all after:duration-200
      hover:after:w-full
    `,
    linkActive: `
      text-blue-600 font-medium relative
      after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full
      after:bg-blue-600
    `,
  },

  // Icons and decorative elements
  icon: {
    primary: `text-blue-500`,
    secondary: `text-purple-500`,
    success: `text-green-500`,
    muted: `text-gray-500`,
    accent: `text-blue-600`,
  },

  // Animations
  animation: {
    fadeIn: `animate-fade-in`,
    slideUp: `animate-slide-up`,
    scaleIn: `animate-scale-in`,
  },

  // Responsive utilities
  responsive: {
    show: {
      mobile: `block md:hidden`,
      desktop: `hidden md:block`,
    },
    hide: {
      mobile: `hidden md:block`,
      desktop: `block md:hidden`,
    },
  },
};

// Helper function to combine classes
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
};

// Theme-aware component factory
export const createStyledComponent = (baseClasses, variants = {}) => {
  return (variant = 'default', additionalClasses = '') => {
    const variantClasses = variants[variant] || variants.default || '';
    return cn(baseClasses, variantClasses, additionalClasses);
  };
};

// Pre-configured style utilities
export const styles = {
  // Quick access to common combinations
  heroTitle: componentStyles.heading.h1,
  sectionTitle: componentStyles.heading.h2,
  cardTitle: componentStyles.heading.h4,
  bodyText: componentStyles.text.body,
  mutedText: componentStyles.text.muted,
  
  // Button variants
  primaryButton: componentStyles.button.primary,
  secondaryButton: componentStyles.button.secondary,
  ghostButton: componentStyles.button.ghost,
  linkButton: componentStyles.button.link,
  
  // Common layouts
  section: cn(componentStyles.layout.section, componentStyles.layout.sectionBg),
  container: componentStyles.layout.container,
  card: componentStyles.card.base,
  
  // Form styles
  input: componentStyles.form.input,
  label: componentStyles.form.label,
};

export default theme;
