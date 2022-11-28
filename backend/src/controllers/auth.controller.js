import { createToken } from "../utils/jwt.js";

export const getToken = async (req, res) => {
  try {
    const user = await req.user;
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
};

export const getLogOut = async (req, res, next) => {
  try {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
    });
    res.status(200).json({ user: null, logout: true });
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
};
