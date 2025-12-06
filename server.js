const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const TELEGRAM_TOKEN = '8556980478:AAHadxPNtr0xh6Lt7phWLtxJuPi57kA6E4k';
const CHAT_ID = '7782836076';

app.post('/send-data', async (req, res) => {
  const userText = req.body.text;

  await axios.post(`https://api.telegram.org/bot${8556980478:AAHadxPNtr0xh6Lt7phWLtxJuPi57kA6E4k}/sendMessage`, {
    chat_id: CHAT_ID,
    text: `User typed: ${userText}`
  });

  res.send({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));