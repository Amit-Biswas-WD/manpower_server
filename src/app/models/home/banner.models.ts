import { model, Schema } from "mongoose";
import { IBanner } from "../../interfaces/home/banner.interfaces";

const bannerSchema = new Schema<IBanner>(
  {
    image: { type: String, require: true },
    title: { type: String, require: true },
    paragraph: { type: String, require: true },
    btnText: { type: String, require: true},
  },
  { versionKey: false, timestamps: true }
);

export const Banner = model("Banner", bannerSchema);
