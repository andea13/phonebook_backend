import Joi from "joi";

const addUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default addUserSchema;
