import express from "express";
import isValidId from "../../middlewares/isValidId.js";
import validateBody from "../../middlewares/validateBody.js";
import { schemas } from "../../models/contact.js";
import contactsController from "../../controllers/contacts.js";
import authenticate from "../../middlewares/autenticate.js";

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, contactsController.getAllContacts);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(schemas.addContactSchema),
  contactsController.addContact
);

contactsRouter.patch(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.updateContactSchema),
  contactsController.updateContactById
);

contactsRouter.delete(
  "/:id",
  authenticate,
  isValidId,
  contactsController.deleteContactById
);

export default contactsRouter;
