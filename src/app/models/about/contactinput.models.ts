import mongoose, { model, Schema } from "mongoose";
import { IContactInput } from "../../interfaces/about/contactinput.interfaces";

const contactInputSchema = new Schema<IContactInput>(
  {
    fullName: { type: String, require: true },
    email: { type: mongoose.Schema.Types.Mixed, require: true },
    phoneNumber: { type: Number, require: true },
    address: { type: mongoose.Schema.Types.Mixed, require: true },
    messageDetails: { type: String, require: true },
  },
  { versionKey: false, timestamps: true }
);

export const ContactInput = model("ContactInput", contactInputSchema);
