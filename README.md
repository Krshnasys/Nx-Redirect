# Nx-Leech Redirect

![Nx-Leech Logo](https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg)
[![Heroku Deploy](https://img.shields.io/badge/Heroku-Deployed-430098?style=flat-square&logo=heroku)](https://nxredirect-428abc69e62a.herokuapp.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v18.20.8-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18.2-blue?style=flat-square&logo=express)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

**Nx-Leech Redirect** is a modern, open-source web application designed to provide a seamless entry point for the Nx-Leech ecosystem, offering 24/7 free mirror and leech services. Built with Node.js, Express, and deployed on Heroku, this project serves a visually stunning homepage with a particle background, a floating GitHub icon, and an animated tagline powered by Typed.js. The application is optimized for performance, accessibility, and responsiveness, making it ideal for users accessing it via Telegram’s in-app browser or standard web browsers.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Directory Structure](#directory-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Project Overview

Nx-Leech Redirect serves as the primary web interface for the Nx-Leech community, a platform dedicated to providing free mirror and leech services. The project’s core objective is to deliver a premium user experience through a visually engaging homepage that highlights the Nx-Leech brand and directs users to its Telegram community. The application is deployed on Heroku (`https://nxredirect-428abc69e62a.herokuapp.com/`) and is designed to be lightweight, scalable, and accessible across devices.

Key goals:
- **User Engagement**: Provide an interactive and visually appealing homepage to attract users.
- **Accessibility**: Ensure the application is navigable via keyboard and screen readers.
- **Performance**: Optimize for fast loading, even on slow networks (e.g., Telegram’s in-app browser).
- **Scalability**: Leverage Heroku’s infrastructure for reliable deployment and scaling.

The project was initiated on March 29, 2025, and has been actively developed to address deployment challenges (e.g., Heroku H10 errors) and enhance user experience.

## Features

The Nx-Leech Redirect application offers a rich set of features to enhance user interaction and showcase the Nx-Leech brand:

- **Dynamic Homepage**:
  - **Particle Background**: 30 animated cyan particles with random movement and fading opacity, creating a futuristic visual effect.
  - **Floating GitHub Icon**: A bobbing GitHub logo with a cyan hover effect, linking to the project’s repository (`https://github.com/pompomxyz/Nx-Leech-Redirect-`).
  - **Animated Tagline**: Powered by Typed.js, cycles through “24/7 Free Mirror and Leech Services” and “Built with Nx Leech 🔧♨️” with smooth transitions.
  - **SVG Logo**: A custom star-shaped logo with a glowing animation and hover scaling effect.
  - **Glassmorphism Card**: A translucent container with a blur effect, housing the logo, tagline, and call-to-action button.
  - **Join Nx-Leech Button**: A gradient button with a ripple effect, linking to the Nx-Leech Telegram channel (`https://t.me/NxLeech`).
  - **Theme Toggle**: A moon/sun icon to switch between dark and light themes, enhancing user customization.

- **Performance Optimizations**:
  - Asynchronous loading of external scripts (Typed.js, VanillaTilt) to reduce initial load time.
  - Lightweight canvas-based particle animation optimized for low CPU usage.
  - Responsive design for mobile and desktop, tested in Telegram’s in-app browser.

- **Accessibility**:
  - ARIA labels for interactive elements (e.g., GitHub button, Join Nx-Leech button).
  - Keyboard navigation support (Tab, Enter, Space) for all interactive components.
  - High-contrast text and focus indicators for better visibility.

- **Social Sharing**:
  - Open Graph meta tags for rich previews when shared on Telegram or other platforms.
  - Telegram logo as the favicon and OG image for brand consistency.

- **Health Check Endpoint**:
  - `/health` route returns “Health check: OK” for monitoring server status.

## Tech Stack

The Nx-Leech Redirect project is built with a modern, lightweight tech stack:

- **Backend**:
  - **Node.js** (v18.20.8): JavaScript runtime for server-side logic.
  - **Express** (v4.18.2): Minimal web framework for routing and serving the homepage.
  - **Heroku**: Cloud platform for deployment and scaling.

- **Frontend**:
  - **HTML5/CSS3**: Structured content and styling for the homepage.
  - **JavaScript**: Client-side interactivity (particles, theme toggle, ripple effect).
  - **Typed.js** (v2.0.12): Animated typing effect for the tagline.
  - **VanillaTilt** (v1.7.2): 3D tilt effect for the glassmorphism card.
  - **Canvas API**: Particle animation for the background.
  - **Google Fonts**: Inter font for a clean, modern typography.

- **DevOps**:
  - **Git**: Version control for collaborative development.
  - **Heroku CLI**: Deployment and management of the application.
  - **npm**: Package manager for dependencies.

## Prerequisites

To set up and run the Nx-Leech Redirect project locally or deploy it to Heroku, ensure you have the following:

- **Node.js** (v18.x recommended, v18.20.8 tested): [Download](https://nodejs.org/en/download/)
- **npm** (v8.x or higher): Included with Node.js
- **Git**: For version control and deployment ([Install Git](https://git-scm.com/downloads))
- **Heroku CLI**: For deploying to Heroku ([Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli))
- **Heroku Account**: Sign up at [Heroku](https://www.heroku.com/)
- **Text Editor**: VS Code, Sublime Text, or any editor of choice

Optional:
- **Telegram Account**: To test the app in Telegram’s in-app browser.
- **Browser Developer Tools**: For debugging and performance testing.

## Installation

Follow these steps to set up the Nx-Leech Redirect project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/pompomxyz/Nx-Leech-Redirect-.git
   cd Nx-Leech-Redirect-
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This installs `express@4.18.2` as specified in `package.json`.

3. **Verify Project Structure**:
   Ensure the following files exist:
   - `index.js`: Main Express application.
   - `Procfile`: Heroku process configuration.
   - `package.json`: Project metadata and dependencies.
   - `package-lock.json`: Dependency lock file.

4. **Run Locally**:
   ```bash
   node index.js
   ```
   The server will start on `http://localhost:3000`.

5. **Test the Application**:
   - Open `http://localhost:3000/` in a browser.
   - Verify:
     - Particle background (30 cyan dots).
     - Floating GitHub icon (bobs up/down, cyan hover effect).
     - Animated tagline cycling through messages.
     - SVG logo, “Join Nx-Leech” button, and theme toggle.
     - No console errors (F12 → Console).
   - Visit `http://localhost:3000/health` to confirm “Health check: OK”.
   - Test responsiveness using browser DevTools (mobile view).
   - Test in Telegram’s in-app browser if applicable.

## Configuration

The Nx-Leech Redirect project requires minimal configuration but includes the following key settings:

- **`package.json`**:
  ```json
  {
    "name": "nx-leech-redirect",
    "version": "1.0.0",
    "scripts": {
      "start": "node index.js"
    },
    "dependencies": {
      "express": "^4.18.2"
    },
    "engines": {
      "node": "18.x"
    }
  }
  ```
  - Specifies Node.js v18.x for compatibility with Heroku.
  - Defines `start` script for running the app.

- **`Procfile`**:
  ```
  web: node index.js
  ```
  - Instructs Heroku to run `node index.js` as the web process.

- **Environment Variables**:
  - `PORT`: Automatically set by Heroku. Locally, defaults to `3000`.
  - Optional: Set `NODE_ENV=production` for production optimizations:
    ```bash
    heroku config:set NODE_ENV=production
    ```

## Deployment

To deploy Nx-Leech Redirect to Heroku, follow these steps:

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   echo "node_modules/" > .gitignore
   git add index.js Procfile package.json package-lock.json .gitignore
   git commit -m "Initial commit for Nx-Leech Redirect"
   ```

2. **Log in to Heroku**:
   ```bash
   heroku login
   ```

3. **Link to Existing Heroku App**:
   ```bash
   heroku git:remote -a nxredirect-428abc69e62a
   ```

4. **Set Buildpack**:
   ```bash
   heroku buildpacks:set heroku/nodejs
   ```

5. **Deploy to Heroku**:
   ```bash
   git push heroku main
   ```

6. **Monitor Logs**:
   ```bash
   heroku logs --tail
   ```
   Look for:
   ```
   Starting index.js
   Express loaded successfully
   Server running on port ...
   ```

7. **Test Deployment**:
   - Visit `https://nxredirect-428abc69e62a.herokuapp.com/`.
   - Verify all features (particle background, GitHub icon, tagline, etc.).
   - Check `https://nxredirect-428abc69e62a.herokuapp.com/health` for “Health check: OK”.
   - Test in Telegram’s in-app browser.

8. **Restart Dynos (if needed)**:
   ```bash
   heroku restart
   ```

## Directory Structure

The project follows a simple, organized structure:

```
Nx-Leech-Redirect-/
├── index.js              # Main Express application
├── Procfile              # Heroku process configuration
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
├── .gitignore            # Git ignore file (excludes node_modules)
└── README.md             # Project documentation
```

## Usage

Once deployed, users can access the Nx-Leech Redirect application at `https://nxredirect-428abc69e62a.herokuapp.com/`. The homepage serves as the primary entry point, guiding users to:

- **Join the Nx-Leech Telegram Community**: Click the “Join Nx-Leech” button to visit `https://t.me/NxLeech`.
- **View Source Code**: Click the floating GitHub icon to visit `https://github.com/pompomxyz/Nx-Leech-Redirect-`.
- **Toggle Themes**: Use the theme toggle (moon/sun icon) to switch between dark and light modes.
- **Explore Services**: Read the animated tagline to learn about Nx-Leech’s free mirror and leech services.

Developers can extend the application by:
- Adding new routes (e.g., `/bots` for showcasing Nx-Leech bots).
- Enhancing the frontend with additional animations or features.
- Implementing backend logic for redirect routes (e.g., `/:bot/:token`).

## Contributing

We welcome contributions to the Nx-Leech Redirect project! To contribute, follow these steps:

1. **Fork the Repository**:
   ```bash
   git clone https://github.com/pompomxyz/Nx-Leech-Redirect-.git
   cd Nx-Leech-Redirect-
   git remote add upstream https://github.com/pompomxyz/Nx-Leech-Redirect-.git
   ```

2. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**:
   - Follow coding standards (e.g., no inline comments, consistent formatting).
   - Test changes locally:
     ```bash
     node index.js
     ```

4. **Commit Changes**:
   ```bash
   git add .
   git commit -m "Add your feature or fix description"
   ```

5. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**:
   - Go to the [repository](https://github.com/pompomxyz/Nx-Leech-Redirect-).
   - Create a pull request with a clear description of your changes.
   - Link to any related issues.

7. **Code Review**:
   - Respond to feedback from maintainers.
   - Ensure tests (if added) pass.

**Contribution Guidelines**:
- Focus on performance, accessibility, and user experience.
- Avoid inline comments (`//`) in JavaScript code.
- Test changes in Telegram’s in-app browser.
- Document new features in the `README.md`.

## Troubleshooting

Common issues and solutions for the Nx-Leech Redirect project:

- **H10 App Crashed Error**:
  - **Symptoms**: Logs show `code=H10 desc="App crashed"` and `Process exited with status 1`.
  - **Solutions**:
    - Check logs: `heroku logs --tail`.
    - Verify `Procfile` exists and contains `web: node index.js`:
      ```bash
      heroku run cat Procfile
      ```
    - Ensure `express` is installed:
      ```bash
      heroku run npm list
      ```
    - Reinstall dependencies:
      ```bash
      rm -rf node_modules package-lock.json
      npm install
      git add package.json package-lock.json
      git commit -m "Reinstall dependencies"
      git push heroku main
      ```
    - Check Node version:
      ```bash
      heroku run "node --version"
      ```
      Should be ~v18.20.8.
    - Restart dynos: `heroku restart`.

- **Module Not Found Error**:
  - **Symptoms**: Logs show `Cannot find module 'express'`.
  - **Solutions**:
    - Ensure `package.json` includes `"express": "^4.18.2"`.
    - Run `npm install express@4.18.2`.
    - Commit `package-lock.json`.

- **Homepage Features Not Loading**:
  - **Symptoms**: Particle background, GitHub icon, or tagline missing.
  - **Solutions**:
    - Check console for errors (F12 → Console).
    - Verify CDN URLs for Typed.js and VanillaTilt:
      - `https://cdn.jsdelivr.net/npm/typed.js@2.0.12`
      - `https://cdn.jsdelivr.net/npm/vanilla-tilt@1.7.2/dist/vanilla-tilt.min.js`
    - Test locally: `node index.js`.

- **Git Deployment Issues**:
  - **Symptoms**: Changes not reflected on Heroku.
  - **Solutions**:
    - Verify deployed commit: `heroku releases`.
    - Ensure correct branch: `git push heroku main`.

- **Performance Issues**:
  - **Symptoms**: Slow loading or laggy animations.
  - **Solutions**:
    - Reduce `particleCount` in `index.js` (e.g., from 30 to 20).
    - Test on slow networks using browser DevTools (Network → Slow 3G).

For additional help, open an issue on the [GitHub repository](https://github.com/pompomxyz/Nx-Leech-Redirect-) or contact the maintainers via Telegram (`https://t.me/NxLeech`).

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code, provided you include the license and copyright notice.

## Contact

For questions, feedback, or support, reach out to the Nx-Leech team:

- **Telegram**: [Join Nx-Leech](https://t.me/NxLeech)
- **GitHub**: [pompomxyz](https://github.com/pompomxyz)
- **Issues**: [GitHub Issues](https://github.com/pompomxyz/Nx-Leech-Redirect-/issues)

## Acknowledgements

The Nx-Leech Redirect project is made possible by the following:

- **xAI**: For providing Grok, the AI assistant that aided in development and debugging.
- **Heroku**: For reliable cloud hosting.
- **Express**: For a robust backend framework.
- **Typed.js and VanillaTilt**: For enhancing the frontend experience.
- **Nx-Leech Community**: For inspiring this project with their dedication to free mirror and leech services.

Thank you to all contributors and users who help make Nx-Leech Redirect a success! ❤️🚀
