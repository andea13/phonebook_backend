import { Schema, model } from "mongoose";
import handleMongooseError from "../helpers/handleMongooseError.js";
import Joi from "joi";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", handleMongooseError);

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required(),
});

const updateContactSchema = Joi.object({
  name: Joi.string(),
  number: Joi.string(),
}).or("name", "number");

export const schemas = { addContactSchema, updateContactSchema };

export const Contact = model("contact", contactSchema);
