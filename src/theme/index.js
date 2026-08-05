import tokens from './tokens.json';

// Theme utility functions and CSS class generators
export const theme = tokens;

// Color utilities
export const colors = {
  primary: (shade = 400) => tokens.colors.primary[shade],
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
    mono: tokens.typography.fontFamily.mono.join(', '),
  },
  fontSize: tokens.typography.fontSize,
  fontWeight: tokens.typography.fontWeight,
  lineHeight: tokens.typography.lineHeight,
};

// Component style generators — "Signal + Stack" dark system
export const componentStyles = {
  // Headings
  heading: {
    h1: `text-4xl md:text-5xl font-extrabold text-slate-100 leading-tight tracking-tight`,
    h2: `text-3xl md:text-4xl font-bold text-slate-100 leading-tight tracking-tight`,
    h3: `text-2xl md:text-3xl font-bold text-slate-100 leading-snug`,
    h4: `text-xl md:text-2xl font-bold text-slate-100 leading-snug`,
    h5: `text-lg md:text-xl font-semibold text-slate-100 leading-normal`,
    h6: `text-base md:text-lg font-semibold text-slate-100 leading-normal`,
    // Hero-only gradient-clipped headline
    gradient: `bg-gradient-to-r from-white via-cyan-400 to-emerald-400 bg-clip-text text-transparent`,
  },

  // Text elements
  text: {
    body: `text-base text-slate-300 leading-relaxed`,
    bodyLarge: `text-lg text-slate-300 leading-relaxed`,
    bodySmall: `text-sm text-slate-400 leading-normal`,
    caption: `text-xs text-slate-500 leading-normal`,
    muted: `text-slate-400`,
    subtle: `text-slate-500`,
    mono: `font-mono text-slate-300`,
  },

  // Buttons
  button: {
    primary: `
      bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-semibold
      px-6 py-3 rounded-full transition-all duration-200
      shadow-[0_10px_26px_-10px_rgba(34,211,238,0.5)]
      hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(34,211,238,0.6)]
      active:translate-y-0
      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950
      disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none
    `,
    secondary: `
      text-slate-100 border border-white/15 bg-white/5 backdrop-blur-sm
      font-semibold px-6 py-3 rounded-full transition-all duration-200
      hover:border-white/25 hover:-translate-y-0.5
      active:translate-y-0
      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950
    `,
    ghost: `
      text-slate-300 hover:text-slate-100 hover:bg-white/5
      font-medium px-6 py-3 rounded-full transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950
    `,
    link: `
      text-cyan-400 hover:text-emerald-400 font-medium
      transition-colors duration-200 underline-offset-4 hover:underline
      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950
    `,
  },

  // Cards / tiles
  card: {
    base: `
      bg-slate-900 rounded-xl border border-white/[0.08]
      transition-all duration-300 hover:border-white/[0.16]
    `,
    interactive: `
      bg-slate-900 rounded-xl border border-white/[0.08]
      transition-all duration-300 hover:border-white/[0.16] hover:-translate-y-1
      cursor-pointer group
    `,
    flat: `
      bg-slate-900/60 rounded-xl border border-white/[0.08]
      transition-all duration-300
    `,
  },

  // Bento-grid tile system
  tile: `bg-slate-900 border border-white/[0.08] rounded-xl p-5 md:p-6 transition-colors duration-200 hover:border-white/[0.16]`,
  kicker: `font-mono text-[0.7rem] tracking-wider uppercase text-cyan-400`,
  chip: `font-mono text-xs border border-white/[0.08] rounded-md px-2 py-1 text-slate-300 inline-block`,
  eyebrowIndex: `font-mono text-sm text-slate-600`,

  // Layout
  layout: {
    section: `py-16 md:py-20 px-4 border-t border-white/[0.06]`,
    sectionBg: `bg-transparent`,
    container: `max-w-6xl mx-auto`,
    containerSmall: `max-w-4xl mx-auto`,
    grid: `grid gap-6 md:gap-8`,
  },

  // Form elements
  form: {
    input: `
      w-full px-4 py-3 border border-white/[0.1] rounded-md bg-slate-900
      text-slate-100 placeholder-slate-500
      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
      transition-colors duration-200
    `,
    textarea: `
      w-full px-4 py-3 border border-white/[0.1] rounded-md resize-vertical bg-slate-900
      text-slate-100 placeholder-slate-500
      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
      transition-colors duration-200
    `,
    label: `block font-medium text-slate-300 mb-2`,
    error: `text-red-400 text-sm mt-1`,
    success: `text-emerald-400 text-sm mt-1`,
  },

  // Navigation
  nav: {
    link: `
      font-mono text-xs tracking-wide uppercase text-slate-400 hover:text-slate-100
      transition-colors duration-200 relative pb-1
    `,
    linkActive: `
      font-mono text-xs tracking-wide uppercase text-slate-100 relative pb-1
      after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5
      after:bg-gradient-to-r after:from-cyan-400 after:to-emerald-400 after:rounded-full
    `,
  },

  // Icons and decorative elements
  icon: {
    primary: `text-cyan-400`,
    secondary: `text-emerald-400`,
    success: `text-emerald-400`,
    muted: `text-slate-500`,
    accent: `text-amber-400`,
  },

  // Animations
  animation: {
    fadeIn: `animate-fade-in`,
    slideUp: `animate-slide-up`,
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
  heroTitle: componentStyles.heading.h1,
  sectionTitle: componentStyles.heading.h2,
  cardTitle: componentStyles.heading.h4,
  bodyText: componentStyles.text.body,
  mutedText: componentStyles.text.muted,

  primaryButton: componentStyles.button.primary,
  secondaryButton: componentStyles.button.secondary,
  ghostButton: componentStyles.button.ghost,
  linkButton: componentStyles.button.link,

  section: componentStyles.layout.section,
  container: componentStyles.layout.container,
  card: componentStyles.card.base,

  input: componentStyles.form.input,
  label: componentStyles.form.label,
};

export default theme;
