const express = require("express");
const app = express();

app.get('/health', (req, res) => {
  res.status(200).send('Server is running');
});

app.get('/', (req, res) => {
  try {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Nx-Leech: Free mirror and leech services">
        <meta property="og:title" content="Nx-Leech | Home">
        <meta property="og:description" content="Join Nx-Leech for 24/7 free mirror and leech services, built with ❤️🚀">
        <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg">
        <meta property="og:url" content="https://nxredirect-428abc69e62a.herokuapp.com/">
        <title>Nx-Leech | Home</title>
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" type="image/svg+xml">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(45deg, #1e1b4b, #3b2f7a);
            background-size: 200% 200%;
            animation: gradientShift 15s ease infinite;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            color: #fff;
            position: relative;
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
          }
          .container {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(12px);
            border-radius: 16px;
            padding: 40px;
            max-width: 600px;
            width: 90%;
            text-align: center;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            z-index: 2;
            animation: slideIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(50px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .logo {
            width: 120px;
            height: auto;
            margin-bottom: 20px;
            filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
            animation: pulseGlow 2s ease-in-out infinite;
            transition: transform 0.3s ease;
          }
          .logo:hover {
            transform: scale(1.1);
          }
          @keyframes pulseGlow {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.9; }
          }
          h1 {
            font-size: 2.5em;
            font-weight: 700;
            margin-bottom: 15px;
            animation: fadeInText 1s ease-out 0.3s forwards;
            opacity: 0;
          }
          .typed-text {
            font-size: 1.3em;
            color: #b0b8ff;
            margin: 20px 0;
            min-height: 24px;
          }
          .button {
            position: relative;
            display: inline-block;
            padding: 14px 35px;
            font-size: 1.1em;
            font-weight: 600;
            color: #fff;
            background: linear-gradient(90deg, #00ddeb, #7b3cff);
            border-radius: 12px;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 5px 20px rgba(0, 221, 235, 0.4);
            animation: fadeInText 1s ease-out 0.6s forwards;
            opacity: 0;
            cursor: pointer;
            overflow: hidden;
          }
          .button:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 8px 25px rgba(0, 221, 235, 0.6);
            background: linear-gradient(90deg, #7b3cff, #00ddeb);
          }
          .button:active {
            transform: translateY(0);
            box-shadow: 0 3px 15px rgba(0, 221, 235, 0.3);
          }
          .button .ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleEffect 0.6s linear;
            pointer-events: none;
          }
          @keyframes rippleEffect {
            to { transform: scale(4); opacity: 0; }
          }
          .footer {
            margin-top: 20px;
            font-size: 0.9em;
            opacity: 0.7;
            animation: fadeInText 1s ease-out 0.9s forwards;
            opacity: 0;
          }
          .footer a {
            color: #00ddeb;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
          @keyframes fadeInText {
            to { opacity: 1; }
          }
          .theme-toggle {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            font-size: 1.2em;
            transition: transform 0.3s ease;
            z-index: 3;
          }
          .theme-toggle:hover {
            transform: rotate(180deg);
          }
          .github-button {
            position: fixed;
            top: 20px;
            left: 20px;
            width: 40px;
            height: 40px;
            background: linear-gradient(45deg, #24292e, #444d56);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            animation: float 3s ease-in-out infinite;
            z-index: 3;
            text-decoration: none;
          }
          .github-button:hover {
            transform: scale(1.1);
            background: linear-gradient(45deg, #444d56, #00ddeb);
            box-shadow: 0 6px 16px rgba(0, 221, 235, 0.6);
          }
          .github-button:focus {
            outline: 2px solid #00ddeb;
            outline-offset: 2px;
          }
          .github-button svg {
            width: 24px;
            height: 24px;
            fill: #fff;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          body.light {
            background: linear-gradient(45deg, #e0e7ff, #f3e8ff);
          }
          body.light .container {
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(0, 0, 0, 0.1);
          }
          body.light .typed-text,
          body.light h1,
          body.light .footer {
            color: #1e1b4b;
          }
          @media (max-width: 600px) {
            .container {
              padding: 30px;
            }
            h1 {
              font-size: 2em;
            }
            .logo {
              width: 100px;
            }
            .button {
              padding: 12px 30px;
            }
            .github-button,
            .theme-toggle {
              top: 15px;
            }
          }
          .container:focus {
            outline: 2px solid #00ddeb;
            outline-offset: 4px;
          }
        </style>
      </head>
      <body>
        <canvas id="particle-canvas"></canvas>
        <a class="github-button" href="https://github.com/pompomxyz/Nx-Leech-Redirect-" target="_blank" aria-label="View source code on GitHub">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
          </svg>
        </a>
        <div class="container" tabindex="0">
          <svg class="logo" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L30 18H44L34 28L38 44L24 36L10 44L14 28L4 18H18L24 4Z" fill="#00ddeb"/>
            <path d="M24 12L28 20H36L30 26L32 34L24 30L16 34L18 26L12 20H20L24 12Z" fill="#fff"/>
          </svg>
          <h1>Welcome to Nx-Leech ❤️🚀</h1>
          <div class="typed-text"></div>
          <a class="button" href="https://t.me/NxLeech" role="button" aria-label="Join Nx-Leech on Telegram">Join Nx-Leech</a>
          <div class="footer">
            Made with ❤️ by <a href="https://t.me/NxLeech" aria-label="Visit Nx-Leech Telegram">Nx-Leech</a>
          </div>
        </div>
        <script>
          try {
            console.log('Starting script execution');
            const themeToggle = document.createElement('div');
            themeToggle.className = 'theme-toggle';
            themeToggle.innerHTML = '🌙';
            themeToggle.setAttribute('aria-label', 'Toggle theme');
            document.body.appendChild(themeToggle);

            themeToggle.addEventListener('click', () => {
              document.body.classList.toggle('light');
              themeToggle.innerHTML = document.body.classList.contains('light') ? '🌞' : '🌙';
            });

            const loadScripts = () => {
              const typedScript = document.createElement('script');
              typedScript.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
              typedScript.async = true;
              typedScript.onload = () => {
                try {
                  console.log('Typed.js loaded');
                  new Typed('.typed-text', {
                    strings: ['24/7 Free Mirror and Leech Services', 'Built with Nx Leech 🔧♨️'],
                    typeSpeed: 50,
                    backSpeed: 30,
                    backDelay: 2000,
                    loop: true,
                    showCursor: false
                  });
                } catch (err) {
                  console.error('Typed.js error:', err.message);
                  document.querySelector('.typed-text').textContent = '24/7 Free Mirror and Leech Services';
                }
              };
              typedScript.onerror = () => {
                console.error('Failed to load Typed.js');
                document.querySelector('.typed-text').textContent = '24/7 Free Mirror and Leech Services';
              };
              document.head.appendChild(typedScript);

              const tiltScript = document.createElement('script');
              tiltScript.src = 'https://cdn.jsdelivr.net/npm/vanilla-tilt@1.7.2/dist/vanilla-tilt.min.js';
              tiltScript.async = true;
              tiltScript.onload = () => {
                try {
                  console.log('VanillaTilt loaded');
                  VanillaTilt.init(document.querySelector('.container'), {
                    max: 15,
                    speed: 400,
                    glare: true,
                    'max-glare': 0.3
                  });
                } catch (err) {
                  console.error('VanillaTilt error:', err.message);
                }
              };
              tiltScript.onerror = () => {
                console.error('Failed to load VanillaTilt');
              };
              document.head.appendChild(tiltScript);
            };

            const buttonEl = document.querySelector('.button');
            buttonEl.addEventListener('click', (e) => {
              const ripple = document.createElement('span');
              ripple.className = 'ripple';
              const rect = buttonEl.getBoundingClientRect();
              const size = Math.max(rect.width, rect.height);
              ripple.style.width = ripple.style.height = size + 'px';
              ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
              ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
              buttonEl.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
            });

            buttonEl.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.assign('https://t.me/NxLeech');
              }
            });

            const githubButton = document.querySelector('.github-button');
            githubButton.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open('https://github.com/pompomxyz/Nx-Leech-Redirect-', '_blank');
              }
            });

            function initParticles() {
              try {
                console.log('Initializing particles');
                const canvas = document.getElementById('particle-canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                const particles = [];
                const particleCount = 30;

                for (let i = 0; i < particleCount; i++) {
                  particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.3
                  });
                }

                function animate() {
                  ctx.clearRect(0, 0, canvas.width, canvas.height);
                  particles.forEach(particle => {
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;
                    particle.opacity = Math.sin(Date.now() * 0.002 + particle.x) * 0.3 + 0.5;

                    if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                    if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 221, 235, ${particle.opacity})`;
                    ctx.fill();
                  });
                  requestAnimationFrame(animate);
                }

                window.addEventListener('resize', () => {
                  canvas.width = window.innerWidth;
                  canvas.height = window.innerHeight;
                });

                animate();
              } catch (err) {
                console.error('Particle init error:', err.message);
              }
            }

            loadScripts();
            initParticles();
            console.log('Script execution complete');
          } catch (err) {
            console.error('Script error:', err.message);
          }
        </script>
      </body>
      </html>
    `);
  } catch (err) {
    console.error('Route error:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err.message);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});

app.get("/:bot/:token", (req, res) => {
  const { bot, token } = req.params;
  const tgURL = `https://t.me/${bot}?start=${token}`;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Redirecting to Telegram bot ${bot} with Nx-Leech" />
      <meta name="author" content="Nx-Leech" />
      <meta property="og:title" content="Nx-Leech Redirect" />
      <meta property="og:description" content="Join ${bot} on Telegram via Nx-Leech" />
      <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" />
      <meta property="og:url" content="${tgURL}" />
      <!-- Fallback redirect for Telegram's in-app browser -->
      <meta http-equiv="refresh" content="7;url=${tgURL}" />
      <title>Nx-Leech | Redirecting to ${bot}</title>
      <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" type="image/svg+xml" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(45deg, #1e1b4b, #3b2f7a);
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          color: #fff;
          position: relative;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Parallax Background Layers */
        .parallax-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .parallax-bg div {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          opacity: 0.3;
          animation: floatLayer 20s linear infinite;
        }

        .parallax-bg div:nth-child(2) {
          animation-duration: 30s;
          opacity: 0.2;
          transform: scale(1.2);
        }

        @keyframes floatLayer {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100px); }
        }

        /* 3D Card Container */
        .container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 40px;
          max-width: 600px;
          width: 90%;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 2;
          animation: slideIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Nx-Leech Logo (Placeholder SVG) */
        .logo {
          width: 120px;
          margin-bottom: 20px;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
          animation: pulseGlow 2s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.1);
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }

        h1 {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 15px;
          animation: fadeInText 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .typed-text {
          font-size: 1.3em;
          color: #b0b8ff;
          margin: 10px 0;
          min-height: 24px;
        }

        /* Circular Progress Ring */
        .progress-ring {
          width: 80px;
          height: 80px;
          margin: 20px auto;
          position: relative;
        }

        .progress-ring svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .progress-ring circle {
          fill: none;
          stroke: #00ddeb;
          stroke-width: 6;
          stroke-linecap: round;
          cx: 40;
          cy: 40;
          r: 37;
          stroke-dasharray: 232.477;
          stroke-dashoffset: 232.477;
          animation: ringProgress 5s linear forwards;
        }

        @keyframes ringProgress {
          to { stroke-dashoffset: 0; }
        }

        .progress-ring span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.2em;
          font-weight: 600;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .progress-ring span.tick {
          animation: tick 0.2s ease;
        }

        @keyframes tick {
          0% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }

        /* Gradient Button with Ripple Effect */
        .button {
          position: relative;
          display: inline-block;
          padding: 14px 35px;
          font-size: 1.1em;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(90deg, #00ddeb, #7b3cff);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0, 221, 235, 0.4);
          animation: fadeInText 1s ease-out 0.6s forwards;
          opacity: 0;
          cursor: pointer;
          overflow: hidden;
        }

        .button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 221, 235, 0.6);
          background: linear-gradient(90deg, #7b3cff, #00ddeb);
        }

        .button:active {
          transform: translateY(0);
          box-shadow: 0 3px 15px rgba(0, 221, 235, 0.3);
        }

        .button .ripple {
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: rippleEffect 0.6s linear;
          pointer-events: none;
        }

        @keyframes rippleEffect {
          to { transform: scale(4); opacity: 0; }
        }

        /* Loading Animation */
        .loading {
          display: none;
          width: 40px;
          height: 40px;
          margin: 20px auto;
          border: 4px solid #00ddeb;
          border-top: 4px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite, fadeIn 0.3s ease forwards;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* Error Message */
        .error {
          display: none;
          color: #ff6b6b;
          font-size: 1.1em;
          margin: 10px 0;
          animation: fadeIn 0.3s ease;
        }

        /* Footer */
        .footer {
          margin-top: 20px;
          font-size: 0.9em;
          opacity: 0.7;
          animation: fadeInText 1s ease-out 0.9s forwards;
          opacity: 0;
        }

        .footer a {
          color: #00ddeb;
          text-decoration: none;
        }

        .footer a:hover {
          text-decoration: underline;
        }

        @keyframes fadeInText {
          to { opacity: 1; }
        }

        /* Theme Toggle */
        .theme-toggle {
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
          font-size: 1.2em;
          transition: transform 0.3s ease;
          z-index: 3;
        }

        .theme-toggle:hover {
          transform: rotate(180deg);
        }

        /* GitHub Button */
        .github-button {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 40px;
          height: 40px;
          background: linear-gradient(45deg, #24292e, #444d56);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          z-index: 3;
          text-decoration: none;
        }

        .github-button:hover {
          transform: scale(1.1);
          background: linear-gradient(45deg, #444d56, #24292e);
          box-shadow: 0 6px 16px rgba(0, 221, 235, 0.4);
        }

        .github-button:focus {
          outline: 2px solid #00ddeb;
          outline-offset: 2px;
        }

        .github-button svg {
          width: 24px;
          height: 24px;
          fill: #fff;
        }

        /* Dark Mode Adjustments */
        body.light {
          background: linear-gradient(45deg, #e0e7ff, #f3e8ff);
        }

        body.light .container {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        body.light .typed-text,
        body.light h1,
        body.light .footer {
          color: #1e1b4b;
        }

        body.light .progress-ring span {
          color: #1e1b4b;
        }

        /* Responsive Design */
        @media (max-width: 600px) {
          .container {
            padding: 30px;
          }
          h1 {
            font-size: 2em;
          }
          .logo {
            width: 100px;
          }
          .button {
            padding: 12px 30px;
          }
          .github-button,
          .theme-toggle {
            top: 15px;
          }
        }

        /* Accessibility */
        .container:focus {
          outline: 2px solid #00ddeb;
          outline-offset: 4px;
        }
      </style>
    </head>
    <body>
      <div class="parallax-bg">
        <div></div>
        <div></div>
      </div>
      <a class="github-button" href="https://github.com/pompomxyz/Nx-Leech-Redirect-" target="_blank" aria-label="View source code on GitHub">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      </a>
      <div class="container" tabindex="0">
        <svg class="logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93V15.5H9.5v2.43c-1.67-.36-3-1.76-3-3.43 0-1.93 1.57-3.5 3.5-3.5h1v-2.43c1.67.36 3 1.76 3 3.43 0 1.93-1.57 3.5-3.5 3.5h-1v2.43zM12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#00ddeb"/>
        </svg>
        <h1>Welcome to Nx-Leech</h1>
        <div class="typed-text"></div>
        <div class="progress-ring">
          <svg>
            <circle cx="40" cy="40" r="37"></circle>
          </svg>
          <span>5</span>
        </div>
        <a class="button" href="${tgURL}" role="button" aria-label="Click to verify and join Telegram bot">Click to Verify</a>
        <div class="error"></div>
        <div class="loading"></div>
        <div class="footer">
          Powered by <a href="https://t.me/NxLeech" aria-label="Visit Nx-Leech Telegram">Nx-Leech</a> ❤️
        </div>
      </div>
      <script>
        // Theme Toggle
        const themeToggle = document.createElement('div');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '🌙';
        themeToggle.setAttribute('aria-label', 'Toggle theme');
        document.body.appendChild(themeToggle);

        themeToggle.addEventListener('click', () => {
          document.body.classList.toggle('light');
          themeToggle.innerHTML = document.body.classList.contains('light') ? '🌞' : '🌙';
        });

        // Main Logic
        // Load Typed.js and VanillaTilt asynchronously
        const loadScripts = () => {
          const typedScript = document.createElement('script');
          typedScript.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
          typedScript.async = true;
          typedScript.onload = () => {
            try {
              new Typed('.typed-text', {
                strings: ['Redirecting to <strong>${bot}</strong>...'],
                typeSpeed: 50,
                showCursor: false,
              });
            } catch (err) {
              document.querySelector('.typed-text').textContent = 'Redirecting to ${bot}...';
            }
          };
          typedScript.onerror = () => {
            document.querySelector('.typed-text').textContent = 'Redirecting to ${bot}...';
          };
          document.head.appendChild(typedScript);

          const tiltScript = document.createElement('script');
          tiltScript.src = 'https://cdn.jsdelivr.net/npm/vanilla-tilt@1.7.2/dist/vanilla-tilt.min.js';
          tiltScript.async = true;
          tiltScript.onload = () => {
            try {
              VanillaTilt.init(document.querySelector('.container'), {
                max: 15,
                speed: 400,
                glare: true,
                'max-glare': 0.3,
              });
            } catch (err) {}
          };
          document.head.appendChild(tiltScript);
        };

        // Countdown and Redirect Logic
        const startCountdown = () => {
          const countEl = document.querySelector('.progress-ring span');
          const loadingEl = document.querySelector('.loading');
          const buttonEl = document.querySelector('.button');
          const errorEl = document.querySelector('.error');
          let time = 5;

          if (!countEl) {
            errorEl.textContent = 'Error: Countdown failed. Please click to verify.';
            errorEl.style.display = 'block';
            return;
          }

          countEl.textContent = time;

          const interval = setInterval(() => {
            time--;
            
            if (countEl) {
              countEl.textContent = time;
              countEl.classList.remove('tick');
              void countEl.offsetWidth; // Force reflow for animation
              countEl.classList.add('tick');
            }

            if (time <= 0) {
              clearInterval(interval);
              
              if (loadingEl) loadingEl.style.display = 'block';
              if (buttonEl) buttonEl.style.pointerEvents = 'none';
              
              try {
                window.location.assign('${tgURL}');
                window.location.href = '${tgURL}';
                window.open('${tgURL}', '_blank');
              } catch (err) {
                errorEl.textContent = 'Redirect failed. Please click to verify.';
                errorEl.style.display = 'block';
                loadingEl.style.display = 'none';
                buttonEl.style.pointerEvents = 'auto';
              }
            }
          }, 1000);

          // Fallback Timeout
          setTimeout(() => {
            if (document.querySelector('.loading').style.display !== 'block') {
              errorEl.textContent = 'Auto-redirect failed. Please click to verify.';
              errorEl.style.display = 'block';
              buttonEl.style.pointerEvents = 'auto';
            }
          }, 7000);
        };

        // Initialize
        loadScripts();
        startCountdown();

        // Validate Telegram URL
        fetch('${tgURL}', { method: 'HEAD', mode: 'no-cors' })
          .catch((err) => {
            document.querySelector('.error').textContent = 'Invalid Telegram URL. Please check the link.';
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.progress-ring').style.display = 'none';
            document.querySelector('.button').style.display = 'none';
            document.querySelector('.loading').style.display = 'none';
          });

        // Ripple Effect and Keyboard Navigation
        const buttonEl = document.querySelector('.button');
        buttonEl.addEventListener('click', (e) => {
          const ripple = document.createElement('span');
          ripple.className = 'ripple';
          const rect = buttonEl.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          ripple.style.width = ripple.style.height = size + 'px';
          ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
          ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
          buttonEl.appendChild(ripple);
          setTimeout(() => ripple.remove(), 600);
        });

        buttonEl.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.location.assign('${tgURL}');
          }
        });

        // GitHub Button Keyboard Navigation
        const githubButton = document.querySelector('.github-button');
        githubButton.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.open('https://github.com/pompomxyz/Nx-Leech-Redirect-', '_blank');
          }
        });
      </script>
    </body>
    </html>
  `);
});

app.get("*", (req, res) => {
  res.status(400).send("Invalid URL format");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
