import express from "express";
import HttpError from "../../helpers";
import ctrl from "../../controllers/contacts";
import validateBody from "../../middlewares";
import schemas from "../../schemas";

const contactsRouter = express.Router();

router.get("/", validateBody(schemas.addContactSchema), ctrl.getContacts);

export default contactsRouter;
