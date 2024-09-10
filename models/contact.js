import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  name: String,
  phone: String,
});
