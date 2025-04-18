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
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Redirecting...</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', sans-serif;
          background: radial-gradient(circle at top left, #0088cc, #005f8d);
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
          text-align: center;
        }

        .blob {
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: blobMove 10s infinite ease-in-out;
        }

        .blob:nth-child(1) { top: 10%; left: 20%; }
        .blob:nth-child(2) { bottom: 10%; right: 15%; }

        @keyframes blobMove {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }

        .container {
          position: relative;
          z-index: 2;
          background: rgba(0,0,0,0.3);
          padding: 40px;
          border-radius: 15px;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 30px rgba(0,0,0,0.4);
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        img.logo {
          width: 80px;
          margin-bottom: 20px;
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        h1 {
          font-size: 2em;
          margin: 0;
        }

        .countdown {
          font-size: 1.5em;
          margin: 20px 0;
        }

        .button {
          padding: 12px 25px;
          font-size: 1em;
          color: #fff;
          background-color: #0088cc;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .button:hover {
          background-color: #0070b8;
        }
      </style>
      <script>
        let time = 3;
        function countdown() {
          const el = document.getElementById('count');
          const interval = setInterval(() => {
            time--;
            if (el) el.textContent = time;
            if (time === 0) {
              clearInterval(interval);
              window.location.href = '${tgURL}';
            }
          }, 1000);
        }
        window.onload = countdown;
      </script>
    </head>
    <body>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="container">
        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" />
        <h1>Redirecting to <strong>${bot}</strong></h1>
        <div class="countdown">In <span id="count">3</span> seconds...</div>
        <a class="button" href="${tgURL}">Open in Telegram</a>
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
