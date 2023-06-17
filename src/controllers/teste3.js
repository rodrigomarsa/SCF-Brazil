const { readFile, writeFile } = require('../utils/fsUtils');

module.exports = async (req, res) => {
  try {
    const { name } = req.query;
    const users = await readFile();
    const existsUser = users.find((user) => user.name.toLowerCase().includes(name.toLowerCase()));
    if (!existsUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    const filteredUsers = users.filter((user) => user.name !== name);
    await writeFile(filteredUsers);
    return res.status(200).json({ message: 'success' });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
