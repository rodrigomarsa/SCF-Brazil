const { readFile, writeFile } = require('../utils/fsUtils');

const getUser = async (req, res) => {
  try {
    const { name } = req.query;
    const users = await readFile();
    if (name) {
      const filteredUser = users.find((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()));
      const index = users.indexOf(filteredUser);
      filteredUser.counter += 1;
      users.splice(index, 1, filteredUser);
      await writeFile(users);
      return res.status(200).json(filteredUser);
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getUsers = async (_req, res) => {
  try {
    const users = await readFile();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getUser,
  getUsers,
};
