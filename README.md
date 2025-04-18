# Nx-Leech Redirect
[![Heroku Deploy](https://img.shields.io/badge/Heroku-Deployed-430098?style=flat-square&logo=heroku)](https://heroku.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v18.20.8-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18.2-blue?style=flat-square&logo=express)](https://expressjs.com/)
[![Telegram](https://img.shields.io/badge/Telegram-Join%20Now-0088CC?style=flat-square&logo=telegram)](https://t.me/NxLeech)

**Nx-Leech Redirect** is a customizable and Heroku-deployable Redirect Web Page project designed for seamless redirection across various platforms including Telegram bots, URL shorteners, or any service where redirection is required. It includes a stylish homepage and a dedicated redirect page, giving users full control over their redirection flow.

Whether you're managing a TG bot, creating short links redirection, or integrating redirection into any other service, this project allows you to deploy your own branded redirect page with ease. You can also connect a custom domain for a more professional and personalized experience.

Every part of this project—from the design to the redirect logic—can be customized to fit your specific needs, allowing complete control over how your redirection looks and functions.

[![Chrome](https://img.shields.io/badge/Live%20Demo-Open%20in%20Chrome-4285F4?style=flat-square&logo=google-chrome&logoColor=white)](https://nxredirect-428abc69e62a.herokuapp.com/)

## Screenshots 
![Homepage Logo](assets/homepage.png)
![Redirect Logo](assets/Redirect.png)

## Prerequisites

- **Node.js** (v18.x, tested with v18.20.8): [Download](https://nodejs.org/)
- **npm**: Included with Node.js
- **Git**: [Install](https://git-scm.com/downloads)
- **Heroku CLI**: [Install](https://devcenter.heroku.com/articles/heroku-cli)
- **Heroku Account**: Sign up at [Heroku](https://www.heroku.com/)

## Deployment (Easy Way)
1. Fork this repository
2. Click the Heroku button above
3. Set app name, and deploy
4. scale up dynos 
5. Optionally add your custom domain from Heroku dashboard
   
## Deployment (The Hard way)
# Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Krshnasys/Nx-Redirect.git
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
    <a class="github-button" href="https://github.com/Krshnasys/Nx-Redirect" ...>
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

This project is licensed under the MIT License — see the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square&logo=open-source-initiative&logoColor=black)](LICENSE)file for details.

## Regards♥️

- **GitHub**: [Krshnasys](https://github.com/Krshnasys)
- **Issues**: [Report Bugs](https://github.com/Krshnasys/Nx-Redirect/issues)

---
Built with love by [NxLeech💖](https://t.me/NxLeech)
