import express from "express";
import ctrlWrapper from "../../helpers/ctrlWrapper.js";
import validateBody from "../../middlewares/validateBody.js";
import schemas from "../../schemas/index.js";
import contactsController from "../../controllers/contacts.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAllContacts);

export default contactsRouter;
