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
      <meta name="description" content="Redirecting to Telegram bot ${bot}" />
      <meta name="author" content="Nx-Leech" />
      <title>Redirecting to ${bot}</title>
      <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" type="image/svg+xml" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          color: #fff;
          position: relative;
        }

        /* Background Particles */
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* Glassmorphism Container */
        .container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          max-width: 500px;
          width: 90%;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: fadeIn 0.8s ease-out;
          position: relative;
          z-index: 2;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Logo Animation */
        .logo {
          width: 100px;
          margin-bottom: 20px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        h1 {
          font-size: 2.2em;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .countdown {
          font-size: 1.2em;
          margin: 20px 0;
          color: #e0e0e0;
        }

        /* Progress Bar */
        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          overflow: hidden;
          margin: 15px 0;
        }

        .progress {
          width: 100%;
          height: 100%;
          background: #00c4ff;
          animation: progress 3s linear forwards;
        }

        @keyframes progress {
          from { width: 100%; }
          to { width: 0; }
        }

        /* Gradient Button */
        .button {
          display: inline-block;
          padding: 12px 30px;
          font-size: 1em;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(45deg, #00c4ff, #0078ff);
          border-radius: 10px;
          text-decoration: none;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 4px 15px rgba(0, 180, 255, 0.4);
        }

        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 180, 255, 0.6);
        }

        /* Loading Spinner */
        .spinner {
          display: none;
          width: 24px;
          height: 24px;
          border: 3px solid #fff;
          border-top: 3px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 10px auto;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 600px) {
          .container {
            padding: 20px;
          }
          h1 {
            font-size: 1.8em;
          }
          .logo {
            width: 80px;
          }
        }
      </style>
      <script>
        // Particle Animation
        function createParticles() {
          const particlesContainer = document.querySelector('.particles');
          for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = \`
              position: absolute;
              width: \${Math.random() * 4 + 2}px;
              height: \${Math.random() * 4 + 2}px;
              background: rgba(255, 255, 255, \${Math.random() * 0.3 + 0.1});
              border-radius: 50%;
              left: \${Math.random() * 100}%;
              top: \${Math.random() * 100}%;
              animation: move \${Math.random() * 10 + 5}s linear infinite;
            \`;
            particlesContainer.appendChild(particle);
          }
        }

        // Particle Movement Animation
        const style = document.createElement('style');
        style.textContent = \`
          @keyframes move {
            0% { transform: translateY(0) translateX(0); opacity: 1; }
            100% { transform: translateY(\${Math.random() * 200 - 100}px) translateX(\${Math.random() * 200 - 100}px); opacity: 0; }
          }
        \`;
        document.head.appendChild(style);

        // Countdown Logic
        let time = 3;
        function countdown() {
          const countEl = document.getElementById('count');
          const spinner = document.querySelector('.spinner');
          const interval = setInterval(() => {
            time--;
            if (countEl) countEl.textContent = time;
            if (time === 0) {
              clearInterval(interval);
              spinner.style.display = 'block';
              setTimeout(() => {
                window.location.href = '${tgURL}';
              }, 500);
            }
          }, 1000);
        }

        // Initialize
        window.onload = () => {
          createParticles();
          countdown();
        };
      </script>
    </head>
    <body>
      <div class="particles"></div>
      <div class="container">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram Logo" />
        <h1>Redirecting to <strong>${bot}</strong></h1>
        <div class="countdown">Please wait <span id="count">3</span> seconds...</div>
        <div class="progress-bar">
          <div class="progress"></div>
        </div>
        <a class="button" href="${tgURL}">Open in Telegram Now</a>
        <div class="spinner"></div>
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
