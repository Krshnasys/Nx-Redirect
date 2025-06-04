# Nx-Leech Redirect
[![Heroku Deploy](https://img.shields.io/badge/Heroku-Deployed-430098?style=flat-square&logo=heroku)](https://heroku.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v18.20.8-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18.2-blue?style=flat-square&logo=express)](https://expressjs.com/)
[![Telegram](https://img.shields.io/badge/Telegram-Join%20Now-0088CC?style=flat-square&logo=telegram)](https://t.me/NxMirror)

**Nx-Leech Redirect is a customizable and Heroku-deployable Redirect Web Page project designed for seamless redirection across various platforms including Telegram bots, URL shorteners, or any service where redirection is required. It includes a stylish homepage and a dedicated redirect page, giving users full control over their redirection flow.
Every part of this projectcan be customized.**

[![Chrome](https://img.shields.io/badge/Live%20Demo-Open%20in%20Chrome-4285F4?style=flat-square&logo=google-chrome&logoColor=white)](https://nxredirectt-bb44c6aacac0.herokuapp.com/)

## Screenshots 
![Homepage Logo](assets/screenshot.jpg)

## Heroku Deployment (Easy Way)
1. Fork this repository
2. Create new Heroku app
3. Connect GitHub Repository 
4. Select Branch & Deploy
5. scale up dynos 
6. Optionally add your custom domain from Heroku dashboard

## Deploy with CLI

Install CLI using official docs: https://devcenter.heroku.com/articles/heroku-cli
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
   Replace `your-app-name` with your app name .

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

## Deploy Locally 

## Prerequisites

- **Node.js** (v18.x, tested with v18.20.8): [Download](https://nodejs.org/)
- **npm**: Included with Node.js
- **Git**: [Install](https://git-scm.com/downloads)
- **Heroku CLI**: [Install](https://devcenter.heroku.com/articles/heroku-cli)
- **Heroku Account**: Sign up at [Heroku](https://www.heroku.com/)

# Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Krshnasys/Nx-Redirect.git
   cd Nx-Redirect
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

## License

This project is licensed under the MIT License — 
see [![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square&logo=open-source-initiative&logoColor=black)](LICENSE) for details.

## Regards♥️

- **GitHub**: [Krshnasys](https://github.com/Krshnasys)
- **Issues**: [Report Bugs](https://github.com/Krshnasys/Nx-Redirect/issues)

---
Built with love by [NxMirror💖](https://t.me/NxMirror)
