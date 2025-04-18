const express = require("express");
const app = express();

// Home page (main landing page)
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nx-Leech</title>
        <style>
            body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
                text-align: center;
                padding: 20px;
                box-sizing: border-box;
                background: linear-gradient(to right, #4a148c, #004d40);
                font-family: 'Arial', sans-serif;
                color: white;
            }

            h1 {
                font-size: 4em;
                margin: 0;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }

            p {
                font-size: 1.5em;
                margin-top: 20px;
                font-style: italic;
            }

            a {
                color: #bbdefb;
                text-decoration: none;
                transition: color 0.3s ease;
            }

            a:hover {
                color: white;
                text-decoration: underline;
            }

            @media (max-width: 600px) {
                h1 {
                    font-size: 2.5em;
                }

                p {
                    font-size: 1.2em;
                }
            }
        </style>
    </head>
    <body>
        <h1>Welcome to Nx-Leech ❤️🚀</h1>
        <p>Made with ❤️ by <a href='https://telegram.me/NxLeech'>Nx-Leech</a></p>
    </body>
    </html>
  `);
});

// Dynamic page with bot and token (Redirect Page)
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
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(-45deg, #1d2b64, #f8cdda, #2c3e50, #4ca1af);
          background-size: 400% 400%;
          animation: gradientBG 10s ease infinite;
          color: #fff;
          text-align: center;
          overflow: hidden;
        }

        @keyframes gradientBG {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }

        .container {
          animation: fadeIn 1.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        h1 {
          font-size: 2.8em;
          margin-bottom: 10px;
          text-shadow: 0 0 10px rgba(255,255,255,0.7);
        }

        .emoji {
          font-size: 1.5em;
          margin: 0 0.3em;
        }

        p {
          font-size: 1.2em;
          font-weight: 300;
        }

        .loader {
          margin: 30px auto;
          border: 6px solid #ffffff40;
          border-top: 6px solid #fff;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
      <script>
        setTimeout(() => {
          window.location.href = '${tgURL}';
        }, 3000);
      </script>
    </head>
    <body>
      <div class="container">
        <div class="loader"></div>
        <h1>Redirecting to <span class="emoji">➡️</span> ${bot} <span class="emoji">🚀</span></h1>
        <p>Please wait, connecting you in 3 seconds...</p>
      </div>
    </body>
    </html>
  `);
});

// Invalid URL handler
app.get("*", (req, res) => {
  res.status(400).send("Invalid URL format");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
