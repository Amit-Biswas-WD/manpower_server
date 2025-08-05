import { model, Schema } from "mongoose";
import { ICategory } from "../../interfaces/home/category.interface";

const categorySchema = new Schema<ICategory>({
  title: { type: String, require: true },
  subTitle: { type: String, require: true },
  paragraph: { type: String, require: true },
  btnText: { type: String, require: true },
},{ versionKey: false, timestamps: true });

export const Category = model("Category", categorySchema);
