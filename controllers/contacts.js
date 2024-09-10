import Contact from "../models/contact.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find({});
  res.json(contacts);
};

const contactsController = {
  getAllContacts: ctrlWrapper(getAllContacts),
};

export default contactsController;
