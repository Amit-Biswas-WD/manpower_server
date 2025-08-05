import mongoose, { model, Schema } from "mongoose";
import { IContact } from "../../interfaces/home/contact.interfaces";

const contactSchema = new Schema<IContact>(
  {
    phone: { type: Number, require: true },
    email: { type: mongoose.Schema.Types.Mixed, require: true },
    location: { type: String, require: true },
    workingHours: { type: mongoose.Schema.Types.Mixed, require: true },
  },
  { versionKey: false, timestamps: true }
);

export const Contact = model("Contact", contactSchema);
