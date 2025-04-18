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
            }
            h1 { 
                font-size: 6em; 
                margin: 0; 
            }
            p { 
                font-size: 2em; 
                margin-top: 20px;
            }
            @media (max-width: 600px) {
                h1 {
                    font-size: 3em;
                }
                p {
                    font-size: 1em;
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
  const tgURL = `https://t.me/${bot}?start=${token}`; // Use template literals and correct variable

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
            }
            h1 { 
                font-size: 6em; 
                margin: 0; 
            }
            p { 
                font-size: 2em; 
                margin-top: 20px;
            }
            @media (max-width: 600px) {
                h1 {
                    font-size: 3em;
                }
                p {
                    font-size: 1em;
                }
            }
        </style>
        <script>
            setTimeout(function() {
                window.location.href = '${tgURL}'; // Use template literals here too
            }, 4000);
        </script>
    </head>
    <body>
        <h1>Welcome to Nx-Leech ❤️🚀</h1>
        <p>Opening ${bot}...</p>
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
  console.log(`Server running on port ${PORT}`); // Use template literals
});
