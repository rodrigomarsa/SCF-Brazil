const { readFile, getUserByName } = require('../utils/fsUtils');

module.exports = async (req, res) => {
  try {
    const { name } = req.query;
    const users = await readFile();
    if (name) {
      const filteredUser = await getUserByName(name);
      return res.status(200)
      .send(`Usuário ${filteredUser.name} foi lido ${filteredUser.counter} vezes.`);
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
