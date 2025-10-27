# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install & Run

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see your app!

### 2. Add a New Service

Edit `src/data/services.js`:

```javascript
{
  id: 'my-service',
  title: 'My Awesome Service',
  description: 'What this service does...',
  technologies: 'Docker • Node.js',
  link: '#my-service'
}
```

### 3. Deploy to Cloudflare Pages

```bash
npm run build
wrangler pages deploy dist
```

Or connect your GitHub repo at [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages

---

## 📝 Common Tasks

### Update Colors

Edit `src/styles/global.css`:

```css
:root {
  --color-black: #000000;  /* Change to your color */
  --color-white: #FFFFFF;
}
```

### Change Font

1. Update Google Fonts link in `index.html`
2. Update `--font-primary` in `src/styles/global.css`

### Build for Production

```bash
npm run build
```

Output → `dist/` folder

---

## 📚 Full Documentation

See [README.md](./README.md) for complete documentation.

## 🆘 Need Help?

- Check the [README.md](./README.md)
- Email: hello@digitalfreedom.io
