import { model, Schema } from "mongoose";
import { IBrand } from "../../interfaces/about/brand.interfaces";

const brandSchema = new Schema<IBrand>(
  {
    brandImage: { type: String, require: true },
    link: { type: String, require: true },
  },
  { versionKey: false, timestamps: true }
);

export const Brand = model("Brand", brandSchema);
