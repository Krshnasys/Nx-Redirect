const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Nx-Leech</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #1b1f23;
          color: white;
          text-align: center;
        }
        h1 {
          font-size: 3em;
        }
        p {
          font-size: 1.2em;
          margin-top: 10px;
        }
        a {
          color: #42a5f5;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div>
        <h1>Welcome to Nx-Leech ❤️🚀</h1>
        <p>Made with ❤️ by <a href="https://t.me/NxLeech">Nx-Leech</a></p>
      </div>
    </body>
    </html>
  `);
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
      <!-- Fallback redirect for environments blocking JavaScript -->
      <meta http-equiv="refresh" content="5;url=${tgURL}" />
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
          animation: ringProgress 3s linear forwards;
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
          transition: opacity 0.2s ease;
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
          animation: spin 1s linear infinite;
          opacity: 0;
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

        /* Debug Message */
        .debug {
          display: none;
          color: #ffd700;
          font-size: 0.9em;
          margin: 10px 0;
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
        }

        .theme-toggle:hover {
          transform: rotate(180deg);
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
        }

        /* Accessibility */
        .container:focus {
          outline: 2px solid #00ddeb;
          outline-offset: 4px;
        }
      </style>
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      <script src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.7.2/dist/vanilla-tilt.min.js"></script>
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
        window.onload = () => {
          console.log('Page loaded, initializing...'); // Debug: Confirm script start

          // Typed.js for Typing Effect
          try {
            new Typed('.typed-text', {
              strings: ['Redirecting to <strong>${bot}</strong>...'],
              typeSpeed: 50,
              showCursor: false,
            });
            console.log('Typed.js initialized');
          } catch (err) {
            console.error('Typed.js error:', err);
            document.querySelector('.typed-text').textContent = 'Redirecting to ${bot}...';
          }

          // VanillaTilt for 3D Card Effect
          try {
            VanillaTilt.init(document.querySelector('.container'), {
              max: 15,
              speed: 400,
              glare: true,
              'max-glare': 0.3,
            });
            console.log('VanillaTilt initialized');
          } catch (err) {
            console.error('VanillaTilt error:', err);
          }

          // Countdown and Redirect Logic
          const countEl = document.querySelector('.progress-ring span');
          const loadingEl = document.querySelector('.loading');
          const buttonEl = document.querySelector('.button');
          const errorEl = document.querySelector('.error');
          const debugEl = document.querySelector('.debug');
          let time = 3;

          if (!countEl) {
            console.error('Countdown element not found');
            document.querySelector('.typed-text').textContent = 'Error: Countdown failed';
            return;
          }

          console.log('Starting countdown:', time);
          countEl.textContent = time; // Initialize countdown display

          const interval = setInterval(() => {
            time--;
            console.log('Countdown tick:', time); // Debug: Log each tick
            
            if (countEl) {
              countEl.textContent = time; // Update countdown display
              countEl.style.opacity = '0.7'; // Subtle fade effect
              setTimeout(() => { countEl.style.opacity = '1'; }, 100);
            }

            if (time <= 0) {
              clearInterval(interval);
              console.log('Countdown finished, attempting redirect'); // Debug: Log redirect attempt
              
              if (loadingEl) loadingEl.style.display = 'block'; // Show loading spinner
              if (buttonEl) buttonEl.style.pointerEvents = 'none'; // Disable button
              
              try {
                console.log('Redirecting to:', '${tgURL}');
                window.location.assign('${tgURL}'); // Use assign for compatibility
              } catch (err) {
                console.error('Redirect failed:', err);
                if (errorEl) {
                  errorEl.textContent = 'Redirect failed. Please click Join Now.';
                  errorEl.style.display = 'block';
                }
                if (debugEl) {
                  debugEl.textContent = 'Debug: Redirect error - ' + err.message;
                  debugEl.style.display = 'block';
                }
                if (loadingEl) loadingEl.style.display = 'none';
                if (buttonEl) buttonEl.style.pointerEvents = 'auto';
              }
            }
          }, 1000);

          // Fallback Timeout for Redirect
          setTimeout(() => {
            if (document.querySelector('.loading').style.display !== 'block') {
              console.warn('Fallback redirect triggered');
              if (errorEl) {
                errorEl.textContent = 'Auto-redirect failed. Please click Join Now.';
                errorEl.style.display = 'block';
              }
              if (debugEl) {
                debugEl.textContent = 'Debug: Fallback redirect triggered';
                debugEl.style.display = 'block';
              }
              if (buttonEl) buttonEl.style.pointerEvents = 'auto';
            }
          }, 5000);

          // Error Handling for Invalid URL
          fetch('${tgURL}', { method: 'HEAD', mode: 'no-cors' })
            .catch((err) => {
              console.error('Invalid Telegram URL:', err);
              clearInterval(interval);
              if (errorEl) {
                errorEl.textContent = 'Invalid Telegram URL. Please check the link.';
                errorEl.style.display = 'block';
              }
              if (debugEl) {
                debugEl.textContent = 'Debug: Invalid URL - ' + err.message;
                debugEl.style.display = 'block';
              }
              document.querySelector('.progress-ring').style.display = 'none';
              document.querySelector('.button').style.display = 'none';
              document.querySelector('.loading').style.display = 'none';
            });

          // Ripple Effect for Button
          buttonEl.addEventListener('click', (e) => {
            console.log('Button clicked, manual redirect');
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
        };

        // Accessibility: Keyboard Navigation
        document.querySelector('.button').addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            console.log('Keyboard redirect triggered');
            window.location.assign('${tgURL}');
          }
        });
      </script>
    </head>
    <body>
      <div class="parallax-bg">
        <div></div>
        <div></div>
      </div>
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
          <span>3</span>
        </div>
        <a class="button" href="${tgURL}" role="button" aria-label="Join Telegram bot now">Join Now</a>
        <div class="error"></div>
        <div class="debug"></div>
        <div class="loading"></div>
        <div class="footer">
          Powered by <a href="https://t.me/NxLeech" aria-label="Visit Nx-Leech Telegram">Nx-Leech</a> ❤️
        </div>
      </div>
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
