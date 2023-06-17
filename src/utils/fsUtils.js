const fs = require('fs').promises;
const path = require('path');

const fakeDataPath = path.resolve(__dirname, '..', 'data', 'fakeData.json');

async function readFile() {
  try {
    const data = await fs.readFile(fakeDataPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error.message);
  }
}

async function writeFile(user) {
  try {
    await fs.writeFile(fakeDataPath, JSON.stringify(user, null, 2));
  } catch (error) {
    console.error(error.message);
  }
}

async function addUser(newUser) {
  try {
    const users = await readFile();
    const newUserWithId = {
      id: users[users.length - 1].id + 1,
      counter: 0,
      ...newUser,
    };
    users.push(newUserWithId);
    await writeFile(users);
    return newUserWithId;
  } catch (error) {
    console.error(error.message);
  }
}

const getUserByName = async (name) => {
  const users = await readFile();
  return users.find((user) => user.name.toLowerCase().includes(name.toLowerCase()));
};

const getUserById = async (id) => {
  const users = await readFile();
  return users.find((user) => user.id === Number(id));
};

module.exports = {
  readFile,
  writeFile,
  addUser,
  getUserByName,
  getUserById,
};
