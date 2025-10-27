# Digital Sovereignty - React Application

A beautiful, minimalist landing page for self-hosted services, built with React, Vite, and designed for Cloudflare Pages deployment.

## Features

- 🎨 **Elegant Design**: Minimalist aesthetic with geometric line art and smooth animations
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and production builds
- 🔄 **Reusable Components**: Easy-to-use ServiceCard component for adding new services
- 🎯 **Accessibility**: WCAG compliant with reduced motion support
- 🚀 **Cloudflare Pages Ready**: Optimized for deployment on Cloudflare Pages

## Project Structure

```
oblivian-react/
├── public/
│   ├── assets/
│   │   └── animation art GIF by sahlooter.gif
│   ├── favicon.ico
│   ├── favicon.svg
│   └── _redirects              # Cloudflare Pages routing config
├── src/
│   ├── components/
│   │   ├── ServiceCard.jsx     # Reusable service card component
│   │   └── ServiceCard.css
│   ├── data/
│   │   └── services.js         # Service data configuration
│   ├── pages/
│   │   ├── Home.jsx            # Home page component
│   │   ├── Home.css
│   │   ├── Services.jsx        # Services page component
│   │   └── Services.css
│   ├── styles/
│   │   └── global.css          # Global styles and design system
│   ├── App.jsx                 # Main app with routing
│   └── main.jsx                # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd oblivian-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Adding New Services

Adding a new service is incredibly easy! Just edit the `src/data/services.js` file:

```javascript
// src/data/services.js

export const servicesData = [
  // ... existing services ...

  // Add your new service here:
  {
    id: 'my-new-service',              // Unique identifier
    title: 'My New Service',            // Service name
    description: 'Description of what this service does and why it\'s awesome.',
    technologies: 'Software • Stack',   // Technologies used (separated by •)
    link: '#my-new-service'             // Link to service details
  }
];
```

That's it! The service card will automatically appear on the Services page with all the proper styling and animations.

### Service Card Props

The `ServiceCard` component accepts the following props:

- `title` (string, required): Service title
- `description` (string, required): Service description
- `technologies` (string, required): Technologies used
- `link` (string, optional): Link to service details (default: "#")
- `onClick` (function, optional): Custom click handler
- `className` (string, optional): Additional CSS classes

### Example: Using ServiceCard Directly

```jsx
import ServiceCard from './components/ServiceCard';

<ServiceCard
  title="Custom Service"
  description="This is a custom service card"
  technologies="React • Vite"
  link="/custom-service"
  onClick={(e) => console.log('Clicked!')}
/>
```

## Building for Production

Build the production-ready application:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## Deploying to Cloudflare Pages

### Method 1: Via Cloudflare Dashboard (Recommended)

1. **Push your code to GitHub/GitLab**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Select **Connect to Git**
   - Choose your repository

3. **Configure build settings**:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or leave empty)

4. **Deploy**:
   - Click **Save and Deploy**
   - Your site will be live at `https://your-project.pages.dev`

### Method 2: Via Wrangler CLI

1. **Install Wrangler**:
```bash
npm install -g wrangler
```

2. **Login to Cloudflare**:
```bash
wrangler login
```

3. **Build your project**:
```bash
npm run build
```

4. **Deploy**:
```bash
wrangler pages deploy dist
```

### Environment Variables (Optional)

If you need environment variables:

1. Create a `.env` file (don't commit this):
```env
VITE_API_URL=https://api.example.com
```

2. Use in your code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Add to Cloudflare Pages:
   - Dashboard → Your Project → Settings → Environment variables

## Customization

### Design System

All design tokens are defined in `src/styles/global.css`:

```css
:root {
  /* Colors */
  --color-black: #000000;
  --color-white: #FFFFFF;

  /* Typography */
  --text-hero: 6rem;
  --text-body: 1.125rem;

  /* Spacing */
  --spacing-md: 48px;
  --spacing-lg: 80px;

  /* ... and more */
}
```

Edit these variables to customize the entire design system.

### Fonts

The project uses **Cormorant Garamond** from Google Fonts. To change:

1. Update the Google Fonts link in `index.html`
2. Update `--font-primary` in `src/styles/global.css`

## Performance Optimization

- ✅ Lazy loading images
- ✅ CSS animations with reduced motion support
- ✅ Optimized SVG line art
- ✅ Intersection Observer for scroll animations
- ✅ Tree-shaking with Vite
- ✅ Minified production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this project for your own purposes.

## Credits

- Design inspired by minimalist aesthetics and digital sovereignty principles
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## Support

For issues and questions:
- Open an issue on GitHub
- Email: hello@digitalfreedom.io

---

**Built with ❤️ for digital freedom and sovereignty**
