import { Contact } from "../models/contact.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find({});
  res.json(contacts);
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  if (!result) {
    throw HttpError(400, "Error creating contact");
  }
  res
    .status(201)
    .json({ message: "The contact was successfully created.", result });
};

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw HttpError(400, "Contact update failed.");
  }
  res.json({
    message: "The contact was successfully updated.",
    updatedContact,
  });
};

const deleteContactById = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) {
    throw HttpError(404, "There is no such user collection.");
  }
  res.json({
    message: "The contact was successfully deleted.",
  });
};

const contactsController = {
  getAllContacts: ctrlWrapper(getAllContacts),
  addContact: ctrlWrapper(addContact),
  updateContactById: ctrlWrapper(updateContactById),
  deleteContactById: ctrlWrapper(deleteContactById),
};

export default contactsController;
