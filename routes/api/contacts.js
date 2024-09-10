import express from "express";
import validateBody from "../../middlewares/validateBody.js";
import schemas from "../../schemas/index.js";
import contactsController from "../../controllers/contacts.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAllContacts);
contactsRouter.post(
  "/",
  validateBody(schemas.addContactSchema),
  contactsController.addContact
);

export default contactsRouter;
