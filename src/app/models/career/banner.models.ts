import { model, Schema } from "mongoose";
import { IAboutBanner } from "../../interfaces/about/banner.interfaces";

const careerBannerSchema = new Schema<IAboutBanner>(
  {
    image: { type: String },
    title: { type: String },
    paragraph: { type: String },
  },
  { versionKey: false, timestamps: true }
);

export const CBanner = model("CBanner", careerBannerSchema);
