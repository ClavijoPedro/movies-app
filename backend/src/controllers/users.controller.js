import UserServices from "../services/user.services.js";

const users = new UserServices();

export const getUsers = async (req, res) => {
  try {
    const allUsers = await users.getUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.messaje });
  }
};

export const postUsers = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await users.createUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.messaje });
  }
};
