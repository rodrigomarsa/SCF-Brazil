const generateToken = require('../utils/generateToken');

module.exports = (_req, res) => {
  const token = generateToken();

  return res.status(200).json({ token });
};
