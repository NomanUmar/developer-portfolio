# Open Source Developer Portfolio 🚀

A premium, open-source, and customizable developer portfolio built with React.js, Vite, and vanilla CSS. Designed specifically for developers who want to showcase their work, skills, and open-source contributions. 

## Features
- **Modern Design:** Glassmorphism UI, smooth animations, and premium dark theme layout.
- **Fast Performance:** Built with Vite for incredibly fast startup and hot-module replacement.
- **Easy to Customize:** Everything is designed to be easily swappable (texts, links, icons, and colors).
- **Responsive:** Mobile-first approach ensuring it looks great on all devices.
- **SEO Optimized:** Semantic HTML and optimized structure for better search visibility.

## Setup Instructions

1. **Clone or Download the Repository:**
   If you have downloaded this project locally, simply navigate to the root directory.

2. **Install Dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to see the portfolio live.

## How to Customize

1. **Update Personal Information:**
   Open `src/App.jsx`. You can easily replace the dummy text (like your name, subtitle, and "Let's Connect" message) with your own info.

2. **Update Projects:**
   Scroll to the `Projects` section in `src/App.jsx`. Each project card is self-contained. Modify the title, description, technologies, and GitHub/Demo links.

3. **Update Skills:**
   In the `Skills` section, modify the tags inside the `<div className="skill-list">` elements to reflect your actual tech stack.

4. **Styling and Theme:**
   Open `src/index.css`. You will find CSS variables at the top (`:root`). Change these variables to quickly alter the entire color scheme.

## Publishing to GitHub Pages

Since you want to share this with the community on GitHub, GitHub Pages is the perfect place to host it for free.

1. **Update `vite.config.js`:**
   Add a `base` to your vite config if you are deploying to `https://<USERNAME>.github.io/<REPO>/`.
   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/<YOUR-REPOSITORY-NAME>/', // Replace with your repo name
   })
   ```
   *(Note: If you're deploying to a custom domain or a user site like `https://<USERNAME>.github.io`, you can skip this step).*

2. **Initialize Git and Push:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Open Source Developer Portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY-NAME>.git
   git push -u origin main
   ```

3. **Deploy using GitHub Actions (Recommended):**
   - In your GitHub repo, go to **Settings** > **Pages**.
   - Set the source to **GitHub Actions**.
   - Search for "Vite" in the workflow templates and use the official Vite template to automatically build and deploy your site whenever you push to `main`.

## License
MIT License - Free to use, modify, and distribute for the community!
