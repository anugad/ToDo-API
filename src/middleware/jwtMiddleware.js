const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Authentication failed' });

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) return res.status(401).json({ error: 'Authentication failed' });
    req.user = user;
    next();
  });
}

module.exports = authenticateJWT;
