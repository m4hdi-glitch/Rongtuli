export default async function handler(req, res) {
  const allowedOrigin = 'https://rongtuli.site'; // only allow your domain

  const origin = req.headers.origin || req.headers.referer || '';
  if (!origin.startsWith(allowedOrigin)) {
    return res.status(403).json({ error: 'Forbidden: domain not allowed' });
  }

  // Your existing AI/chat logic
  const { message } = req.body;

  // Example response
  res.status(200).json({ reply: 'Hello from AI!' });
}
