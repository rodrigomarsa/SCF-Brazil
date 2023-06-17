const { addUser } = require('../utils/fsUtils');

module.exports = async (req, res) => {
  try {
    const newUser = req.body;
    const newUserWithId = await addUser(newUser);
    return res.status(201).json(newUserWithId);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
