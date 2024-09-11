import express from "express";
import isValidId from "../../middlewares/isValidId.js";
import validateBody from "../../middlewares/validateBody.js";
import { schemas } from "../../models/contact.js";
import contactsController from "../../controllers/contacts.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAllContacts);

contactsRouter.post(
  "/",
  validateBody(schemas.addContactSchema),
  contactsController.addContact
);

contactsRouter.patch(
  "/:id",
  isValidId,
  validateBody(schemas.updateContactSchema),
  contactsController.updateContactById
);

contactsRouter.delete("/:id", isValidId, contactsController.deleteContactById);

export default contactsRouter;
