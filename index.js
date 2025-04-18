const express = require("express");
const app = express();

const commonStyle = `
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
            font-family: sans-serif;
        }
        h1 { 
            font-size: 6em; 
            margin: 0; 
        }
        p { 
            font-size: 2em; 
            margin-top: 20px;
        }
        a {
            text-decoration: none;
            color: #007bff;
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
`;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Nx-Leech</title>
            ${commonStyle}
        </head>
        <body>
            <h1>Welcome to Nx-Leech 🔧♨️</h1>
            <p>Made with ❤️ by <a href='https://telegram.me/NxLeech'>@NxLeech</a></p>
        </body>
        </html>
    `);
});

app.get("/:bot/:token", (req, res) => {
    const { bot, token } = req.params;
    const tgURL = `https://t.me/${bot}?start=${token}`;
    res.send(`
        <html>
        <head>
            <title>Nx-Leech Redirecting</title>
            ${commonStyle}
            <script>
                setTimeout(function() {
                    window.location.href = '${tgURL}';
                }, 4000);
            </script>
        </head>
        <body>
            <h1>Welcome to Nx-Leech 🔧♨️</h1>
            <p>Redirecting to <b>${bot}</b>...</p>
        </body>
        </html>
    `);
});

app.get("*", (req, res) => {
    res.status(400).send("Invalid URL format");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
