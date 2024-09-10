import User from "../models/user.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

const usersController = {
  getAllUsers: ctrlWrapper(getAllUsers),
};

export default usersController;
