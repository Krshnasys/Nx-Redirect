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

// Dynamic page with bot and token
app.get("/:bot/:token", (req, res) => {
  const { bot, token } = req.params;
  const tgURL = `https://t.me/${bot}?start=${token}`;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirecting to Telegram...</title>
        <style>
            body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                background: linear-gradient(to right, #4a148c, #004d40);
                font-family: 'Arial', sans-serif;
                color: white;
                margin: 0;
                padding: 0;
            }

            .container {
                text-align: center;
            }

            h1 {
                font-size: 2.5em;
                margin-bottom: 20px;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }

            p {
                font-size: 1.5em;
                margin-top: 20px;
                font-style: italic;
            }

            .emoji {
                font-size: 1.5em;
            }

            .loader {
                border: 8px solid #f3f3f3;
                border-top: 8px solid #3498db;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: spin 2s linear infinite;
                margin-bottom: 20px;
            }

            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

            @media (max-width: 600px) {
                h1 {
                    font-size: 2em;
                }

                p {
                    font-size: 1.2em;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="loader"></div>
            <h1>Redirecting you to <span class="emoji">➡️</span> ${bot} <span class="emoji">🚀</span></h1>
            <p>You will be redirected automatically in 3 seconds...</p>
        </div>
        <script>
            setTimeout(function() {
                window.location.href = '${tgURL}';
            }, 3000);
        </script>
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
