import cors from 'cors';

export default function handler(req, res) {
  // Allow only your domain
  const allowedOrigins = ['https://rongtuli.site'];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Your normal API logic here
  res.json({ success: true });
}
