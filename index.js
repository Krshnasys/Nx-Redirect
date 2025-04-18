const express = require("express");
const app = express();

// Home page
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
          background: linear-gradient(to right, #4a148c, #004d40);
          color: white;
          text-align: center;
        }
        h1 {
          font-size: 3em;
          margin: 0;
        }
        p {
          font-size: 1.2em;
          margin-top: 15px;
        }
        a {
          color: #bbdefb;
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

// Redirect page
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
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #1d2b64, #f8cdda);
          background-size: 400% 400%;
          animation: gradientBG 10s ease infinite;
          overflow: hidden;
        }

        @keyframes gradientBG {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }

        .glass-box {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 40px;
          text-align: center;
          color: #fff;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          animation: fadeIn 1s ease;
        }

        @keyframes fadeIn {
          from {opacity: 0; transform: scale(0.95);}
          to {opacity: 1; transform: scale(1);}
        }

        .loader {
          border: 5px solid rgba(255,255,255,0.3);
          border-top: 5px solid white;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin: 0 auto 20px;
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        h1 {
          font-size: 2em;
          margin-bottom: 10px;
        }

        .emoji {
          font-size: 1.3em;
        }

        .countdown {
          font-size: 1.5em;
          margin: 15px 0;
        }

        .btn {
          margin-top: 10px;
          display: inline-block;
          padding: 10px 20px;
          font-size: 1em;
          background-color: rgba(255,255,255,0.2);
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .btn:hover {
          background-color: rgba(255,255,255,0.4);
        }
      </style>
      <script>
        let timeLeft = 3;
        const countdownEl = () => document.getElementById('countdown');

        function startCountdown() {
          const interval = setInterval(() => {
            timeLeft--;
            if (countdownEl()) countdownEl().textContent = timeLeft;
            if (timeLeft <= 0) {
              clearInterval(interval);
              window.location.href = '${tgURL}';
            }
          }, 1000);
        }

        window.onload = startCountdown;
      </script>
    </head>
    <body>
      <div class="glass-box">
        <div class="loader"></div>
        <h1>Redirecting you to <span class="emoji">➡️</span> ${bot} <span class="emoji">🚀</span></h1>
        <p class="countdown">Redirecting in <span id="countdown">3</span> seconds...</p>
        <button class="btn" onclick="window.location.href='${tgURL}'">Click here if not redirected</button>
      </div>
    </body>
    </html>
  `);
});

// Invalid URL
app.get("*", (req, res) => {
  res.status(400).send("Invalid URL format");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
