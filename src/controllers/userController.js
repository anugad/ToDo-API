const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import JWT library

exports.registerUser = (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  const userData = { username, password: hashedPassword };

  userModel.createUser(userData, (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error during registration' });
    }

    res.status(200).json({ success: true, message: 'Registration successful' });
  });
};

exports.loginUser = (username, password, callback) => {
  userModel.getUserByUsername(username, (err, user) => {
    if (err) {
      return callback(err, null);
    }

    if (!user) {
      return callback(null, null);
    }

    // Compare the provided password with the stored hash
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return callback(err, null);
      }

      if (!isMatch) {
        return callback(null, null);
      }

      return callback(null, user);
    });
  });
};

exports.generateToken = (user) => {
  const payload = {
    userId: user.id,
    username: user.username,
  };

  // Create a JWT token with a secret key
  const token = jwt.sign(payload, 'your-secret-key-here', { expiresIn: '1h' }); // Adjust expiration as needed

  return token;
};
