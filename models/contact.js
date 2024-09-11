import { Schema, model } from "mongoose";
import handleMongooseError from "../helpers/handleMongooseError.js";
import Joi from "joi";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", handleMongooseError);

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
});

const updateContactSchema = Joi.object({
  name: Joi.string(),
  phone: Joi.string(),
}).or("name", "phone");

export const schemas = { addContactSchema, updateContactSchema };

export const Contact = model("contact", contactSchema);
