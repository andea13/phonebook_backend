import Joi from "joi";

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
});

export default addContactSchema;
