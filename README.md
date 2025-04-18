---

# Nx-Leech Redirect

![Nx-Leech Logo](https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg)
[![Heroku Deploy](https://img.shields.io/badge/Heroku-Deployed-430098?style=flat-square&logo=heroku)](https://nxredirect-428abc69e62a.herokuapp.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v18.20.8-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18.2-blue?style=flat-square&logo=express)](https://expressjs.com/)

**Nx-Leech Redirect** is a simple web app built with Node.js and Express, featuring a modern homepage with a particle background, a floating GitHub icon, and an animated tagline. Deployed on Heroku, it’s perfect for creating a landing page for Telegram-based services. You can easily customize it with your own text, links, and branding.

## Features

- **Dynamic Homepage**:
  - Particle background with 30 animated cyan dots.
  - Floating GitHub icon with hover effects, linking to the project repo.
  - Animated tagline (via Typed.js) cycling through messages.
  - Star-shaped SVG logo with glowing animation.
  - “Join” button with a ripple effect, linking to a Telegram channel.
  - Dark/light theme toggle.
- **Responsive**: Works on mobile, desktop, and Telegram’s in-app browser.
- **Health Check**: `/health` endpoint returns “Health check: OK”.
- **Customizable**: Update text, links, and logos for your project.

## Current Structure

```
Nx-Leech-Redirect-/
├── index.js        # Main Express application
├── Procfile        # Heroku process configuration
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

## Prerequisites

- **Node.js** (v18.x, tested with v18.20.8): [Download](https://nodejs.org/)
- **npm**: Included with Node.js
- **Git**: [Install](https://git-scm.com/downloads)
- **Heroku CLI**: [Install](https://devcenter.heroku.com/articles/heroku-cli)
- **Heroku Account**: Sign up at [Heroku](https://www.heroku.com/)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/pompomxyz/Nx-Leech-Redirect-.git
   cd Nx-Leech-Redirect-
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Locally**:
   ```bash
   npm start
   ```
   Open `http://localhost:3000/` to view the homepage or `http://localhost:3000/health` for the health check.

## Customization

To add your own branding, update the following in `index.js`:

- **Tagline Text**:
  - Find:
    ```javascript
    strings: ['24/7 Free Mirror and Leech Services', 'Built with Nx Leech 🔧♨️']
    ```
  - Replace with your messages (e.g., `['Your Service Name', 'Your Tagline']`).

- **Links**:
  - **GitHub Icon**:
    ```html
    <a class="github-button" href="https://github.com/pompomxyz/Nx-Leech-Redirect-" ...>
    ```
    Update to your repo (e.g., `https://github.com/your-username/your-repo`).
  - **Join Button**:
    ```html
    <a class="button" href="https://t.me/NxLeech" ...>
    ```
    Change to your Telegram channel (e.g., `https://t.me/YourChannel`).
  - **Footer Link**:
    ```html
    <a href="https://t.me/NxLeech">Nx-Leech</a>
    ```
    Use your link and name.

- **Logo and Favicon**:
  - Update the favicon in `index.js`:
    ```html
    <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" ...>
    ```
    Replace with your favicon URL or local file (e.g., `/favicon.ico`).
  - Update the logo:
    ```html
    <svg class="logo" ...>
    ```
    Replace with your SVG or image.

- **Meta Tags**:
  - Update Open Graph tags:
    ```html
    <meta property="og:title" content="Nx-Leech | Home">
    <meta property="og:description" content="Join Nx-Leech for 24/7 free mirror and leech services, built with ❤️🚀">
    <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg">
    <meta property="og:url" content="https://nxredirect-428abc69e62a.herokuapp.com/">
    ```
    Use your project’s title, description, image, and URL.

- **Credits**:
  - Update the footer:
    ```html
    Made with ❤️ by <a href="https://t.me/NxLeech">Nx-Leech</a>
    ```
    Change to your name and link (e.g., `Made with ❤️ by <a href="https://your-site.com">Your Name</a>`).

## Deployment to Heroku

1. **Initialize Git**:
   ```bash
   git init
   echo "node_modules/" >> .gitignore
   git add .
   git commit -m "Initial commit"
   ```

2. **Log in to Heroku**:
   ```bash
   heroku login
   ```

3. **Link to Heroku App**:
   ```bash
   heroku git:remote -a your-app-name
   ```
   Replace `your-app-name` with your app (e.g., `nxredirect-428abc69e62a`).

4. **Set Buildpack**:
   ```bash
   heroku buildpacks:set heroku/nodejs
   ```

5. **Deploy**:
   ```bash
   git push heroku main
   ```

6. **Check Logs**:
   ```bash
   heroku logs --tail
   ```

7. **Test**:
   - Visit `https://your-app-name.herokuapp.com/`.
   - Check `https://your-app-name.herokuapp.com/health`.

## License

[MIT License](LICENSE) – Free to use and modify.

## Contact

- **GitHub**: [pompomxyz](https://github.com/pompomxyz)
- **Issues**: [Report Bugs](https://github.com/pompomxyz/Nx-Leech-Redirect-/issues)

---
