const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head><title>Jet-Mirror</title></head>
        <body style="text-align:center;padding-top:100px;">
            <h1>Welcome to Jet-Mirror ❤️🚀</h1>
            <p>Made with ❤️ by <a href='https://telegram.me/hrishikesh2861'>Lord Puneet 👑</a></p>
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
            <title>Redirecting...</title>
            <meta http-equiv="refresh" content="4;url=${tgURL}" />
        </head>
        <body style="text-align:center;padding-top:100px;">
            <h1>Redirecting to ${bot}...</h1>
            <p>You'll be redirected shortly.</p>
        </body>
        </html>
    `);
});

app.get("*", (req, res) => {
    res.status(400).send("Invalid URL format");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
