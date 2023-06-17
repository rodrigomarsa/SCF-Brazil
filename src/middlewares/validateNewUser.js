const validateNewUser = (req, res, next) => {
  const { name, job } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (!job) {
    return res.status(400).json({ message: 'O campo "job" é obrigatório' });
  }
  next();
};

module.exports = validateNewUser;