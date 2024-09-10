import { get } from "mongoose";

const getContacts = async (req, res) => {
  res.json({ message: "Get contacts" });
};

const contactsController = {
  getContacts,
};

export default contactsController;
