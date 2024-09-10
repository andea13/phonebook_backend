import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Contact = model("contact", contactSchema);

export default Contact;
