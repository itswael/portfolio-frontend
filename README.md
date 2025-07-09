# 🚀 Portfolio Frontend

A modern, responsive portfolio website built with React and designed with a comprehensive theme system. This project showcases a clean, professional design with seamless navigation, interactive components, and a fully customizable design system.

![Auto Deploy](https://github.com/itswael/portfolio-frontend/actions/workflows/deploy.yml/badge.svg)

## ✨ Features

### 🎨 **Design System**
- **Centralized Theming**: JSON-based design tokens for colors, typography, and spacing
- **4 Professional Color Palettes**: Modern Professional, Warm Professional, Dark Modern, and Minimal Elegant
- **Responsive Typography**: Fluid font scaling across all screen sizes
- **WCAG AA Compliant**: Accessible color contrasts and keyboard navigation

### 📱 **User Experience**
- **Smooth Scrolling Navigation**: Internal navigation between sections
- **Interactive Hover Effects**: Colored shadows and lift animations
- **Responsive Design**: Optimized for all devices and screen sizes
- **Loading Animations**: Smooth transitions and micro-interactions

### 🛠 **Technical Features**
- **EmailJS Integration**: Serverless contact form with validation
- **Project Showcase**: Dynamic screenshot carousels with video demos
- **Skills Visualization**: Interactive skill categories and progress bars
- **Timeline Components**: Professional work experience display
- **Performance Optimized**: Vite build system for fast loading

## 🚀 Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: Material-UI for icons and enhanced components
- **Contact Form**: EmailJS (no backend required)
- **Deployment**: GitHub Actions CI/CD
- **Build Tool**: Vite for lightning-fast development

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About_new.jsx   # About section
│   ├── Contact.jsx     # Contact form with EmailJS
│   ├── Footer.jsx      # Footer component
│   ├── HeroPage.jsx    # Landing/hero section
│   ├── Navbar.jsx      # Navigation bar
│   ├── project1.jsx    # Project showcase
│   ├── Skills_new.jsx  # Skills visualization
│   ├── WorkEx.jsx      # Work experience timeline
│   └── TimelineItem.jsx # Reusable timeline component
├── data/               # Configuration files
│   ├── contactConfig.json
│   ├── projectsData.json
│   ├── resumeConfig.json
│   ├── skillsData.json
│   └── timelineData.json
├── theme/              # Design system
│   ├── tokens.json     # Design tokens
│   ├── index.js        # Theme utilities
│   └── variables.css   # CSS custom properties
├── utils/              # Utility functions
│   ├── navigation.js   # Smooth scrolling
│   └── videoUtils.js   # Video embed utilities
└── services/           # External services
    └── emailService.js # EmailJS integration
```

## 🛠 Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- EmailJS account (for contact form)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-frontend.git
   cd portfolio-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## ⚙️ Configuration

### 🎨 **Customizing the Theme**

Change color palette by updating `src/theme/tokens.json`:

```json
{
  "colors": {
    "primary": {
      "500": "#your-primary-color",
      "600": "#your-primary-hover"
    }
  }
}
```

### 📝 **Content Configuration**

Update your personal information in the data files:

- **Contact Info**: `src/data/contactConfig.json`
- **Projects**: `src/data/projectsData.json`
- **Skills**: `src/data/skillsData.json`
- **Work Experience**: `src/data/timelineData.json`
- **Resume Link**: `src/data/resumeConfig.json`

### 📧 **EmailJS Setup**

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your credentials to `.env` file
4. Update email template to match form fields

## 🚀 Deployment

### GitHub Actions (Recommended)

The repository includes automated deployment with GitHub Actions:

1. Fork the repository
2. Add your EmailJS environment variables to GitHub Secrets
3. Update the deployment target in `.github/workflows/deploy.yml`
4. Push to main branch to trigger deployment

### Manual Deployment

```bash
npm run build
# Deploy the `dist` folder to your hosting provider
```

## 🎨 Design System

### Color Palettes

The theme system includes 4 professional color palettes:

1. **Modern Professional** (Current): Sky Blue + Purple
2. **Warm Professional**: Orange + Emerald
3. **Dark Modern**: Electric Blue + Cyan
4. **Minimal Elegant**: Slate + Rose

### Typography Scale

- Responsive font sizes from `xs` (12px) to `9xl` (128px)
- Inter font family for modern, readable text
- Consistent line heights and letter spacing

### Component Styles

- Buttons: Primary, Secondary, Outline, Ghost, Link variants
- Cards: Base, Interactive, Elevated, Feature variants
- Forms: Input, Label, Error states with validation
- Navigation: Smooth hover effects and active states

## 📱 Responsive Breakpoints

- **sm**: 640px (Mobile)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large Desktop)
- **2xl**: 1536px (Extra Large)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **Wael Non-Commercial Attribution License (WNCA)**.

You're free to use, modify, and share this project **for non-commercial purposes**, as long as:
- **Credit is given** to the original author, *Mohammad Wael*.
- A copy of the license is included with any substantial portion of this work.
- You do **not** use it for monetary gain without written permission.

See the [LICENSE](./LICENSE) file for full terms.

[![License: WNCA](https://img.shields.io/badge/license-WNCA-blue.svg)](./LICENSE)

## 🙋‍♂️ Contact

**Mohammad Wael**
- LinkedIn: [linkedin.com/in/itswael](https://linkedin.com/in/itswael)
- GitHub: [github.com/itswael](https://github.com/itswael)
- Email: [Contact through the portfolio](https://yourportfolio.com)

## 🚀 What's Next?

- [ ] Dark mode toggle
- [ ] Blog integration
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] PWA capabilities

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies.**
