# Design System Documentation

## Overview
This portfolio uses a centralized design system that ensures consistent styling across all components. All design tokens (colors, typography, spacing, etc.) are managed from a single source of truth, making the theme easily customizable.

## File Structure
```
src/theme/
├── tokens.json          # Core design tokens (colors, typography, spacing)
├── index.js            # Theme utilities and component styles
└── variables.css       # CSS custom properties and global styles
```

## Core Design Tokens

### Colors
The color system uses a semantic approach with primary, secondary, success, and gray palettes. Each color has shades from 50 (lightest) to 900 (darkest).

```javascript
// Example usage in components
import { componentStyles } from '../theme';

// Using semantic colors
className={componentStyles.icon.primary}     // Blue
className={componentStyles.icon.secondary}   // Purple  
className={componentStyles.icon.success}     // Green
```

### Typography
All typography follows a consistent scale with proper font weights and line heights:

- **Font Family**: Inter (primary), Georgia (serif)
- **Font Sizes**: xs (0.75rem) to 8xl (6rem)
- **Font Weights**: normal (400) to extrabold (800)
- **Line Heights**: tight (1.25) to loose (2)

### Component Styles

#### Headings
```javascript
componentStyles.heading.h1    // Hero titles (4xl-5xl, bold)
componentStyles.heading.h2    // Section titles (3xl-4xl, bold)
componentStyles.heading.h3    // Subsection titles (2xl-3xl, semibold)
componentStyles.heading.h4    // Card titles (xl-2xl, semibold)
componentStyles.heading.h5    // Small headings (lg-xl, medium)
componentStyles.heading.h6    // Micro headings (base-lg, medium)
```

#### Text Elements
```javascript
componentStyles.text.body         // Standard body text
componentStyles.text.bodyLarge    // Larger body text
componentStyles.text.bodySmall    // Smaller body text
componentStyles.text.muted        // Subdued text
componentStyles.text.subtle       // Very subdued text
```

#### Buttons
```javascript
componentStyles.button.primary    // Main action buttons (blue)
componentStyles.button.secondary  // Secondary actions (outlined blue)
componentStyles.button.ghost      // Subtle buttons (gray)
componentStyles.button.link       // Link-style buttons
```

#### Cards
```javascript
componentStyles.card.base         // Standard cards with shadow
componentStyles.card.interactive  // Hoverable cards
componentStyles.card.flat         // Minimal cards with border
```

#### Form Elements
```javascript
componentStyles.form.input        // Input fields
componentStyles.form.textarea     // Textarea fields
componentStyles.form.label        // Form labels
componentStyles.form.error        // Error messages
```

## Customizing the Theme

### Method 1: Update Design Tokens
Edit `src/theme/tokens.json` to change core values:

```json
{
  "colors": {
    "primary": {
      "600": "#your-new-primary-color"
    }
  },
  "typography": {
    "fontFamily": {
      "primary": ["Your-Font", "fallback"]
    }
  }
}
```

### Method 2: Override CSS Variables
Edit `src/theme/variables.css` to override specific values:

```css
:root {
  --color-primary-600: #your-color;
  --font-family-primary: 'Your Font', sans-serif;
}
```

### Method 3: Component-Level Customization
Use the theme utilities in components:

```javascript
import { componentStyles, cn } from '../theme';

// Combine theme styles with custom classes
className={cn(componentStyles.button.primary, "your-custom-class")}

// Override with Tailwind utilities
className={cn(componentStyles.heading.h2, "text-purple-600")}
```

## Using the Theme System

### In New Components
```javascript
import { componentStyles, cn } from '../theme';

const MyComponent = () => {
  return (
    <div className={componentStyles.layout.section}>
      <h2 className={componentStyles.heading.h2}>My Title</h2>
      <p className={componentStyles.text.body}>My content</p>
      <button className={componentStyles.button.primary}>
        My Button
      </button>
    </div>
  );
};
```

### Common Patterns
```javascript
// Section with background
className={cn(componentStyles.layout.section, componentStyles.layout.sectionBg)}

// Container with max width
className={componentStyles.layout.container}

// Card with hover effects
className={componentStyles.card.interactive}

// Form with proper spacing
className="space-y-6"  // Use Tailwind for spacing
```

## Design Principles

### Consistency
- All components use the same color palette
- Typography follows the same scale
- Spacing is consistent across layouts
- Button styles are uniform

### Accessibility
- Color contrast meets WCAG guidelines
- Focus states are clearly defined
- Font sizes are readable
- Interactive elements have proper states

### Responsiveness
- All components adapt to different screen sizes
- Typography scales appropriately
- Layouts use responsive grids
- Buttons and touch targets are appropriately sized

## Animation Guidelines

### Hover Effects
- **Duration**: 200ms (normal), 300ms (slow)
- **Easing**: ease-out for natural feeling
- **Transform**: translateY(-2px) for lift effect
- **Scale**: 1.02 for subtle growth

### Focus States
- **Ring**: 2px blue outline with 2px offset
- **Transition**: All focus changes are animated
- **Visibility**: Clear visual indication of focus

### Loading States
- **Spinners**: Use consistent size and color
- **Skeleton**: Gray placeholders while loading
- **Transitions**: Smooth state changes

## Best Practices

### Do's
✅ Use semantic component styles instead of raw Tailwind classes
✅ Combine theme styles with the `cn()` utility
✅ Update design tokens for global changes
✅ Test changes across all components
✅ Maintain consistency in spacing and sizing

### Don'ts
❌ Don't hardcode colors or font sizes
❌ Don't mix different button styles arbitrarily
❌ Don't skip the theme system for one-off styling
❌ Don't forget to test responsive behavior
❌ Don't ignore accessibility considerations

## Troubleshooting

### Common Issues
1. **Styles not applying**: Check import paths and className syntax
2. **Inconsistent appearance**: Ensure using theme styles instead of custom CSS
3. **Performance issues**: Avoid creating new style objects on every render
4. **Responsive problems**: Test on multiple screen sizes

### Testing Changes
```bash
# Start development server
npm run dev

# Check for style consistency
# - Navigate through all pages
# - Test responsive breakpoints  
# - Verify hover/focus states
# - Confirm accessibility standards
```

This design system ensures your portfolio maintains a professional, consistent appearance while remaining easy to customize and maintain.
