import Joi from "joi";
import HttpError from "../helpers/index";
import ctrlWrapper from "/helpers/index";

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const getContacts = async (req, res) => {
  res.json({ message: "Get contacts" });
};

export default { getContacts: ctrlWrapper(getContacts) };
