const { readFile, writeFile, getUserById } = require('../utils/fsUtils');

module.exports = async (req, res) => {
  try {
    const { id } = req.query;
    const users = await readFile();
    const user = await getUserById(Number(id));
    const index = users.indexOf(user);
    const updated = { id: Number(id), ...req.body };
    users.splice(index, 1, updated);
    await writeFile(users);
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
