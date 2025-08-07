import { model, Schema } from "mongoose";
import { IAboutBanner } from "../../interfaces/about/banner.interfaces";

const serviceBannerSchema = new Schema<IAboutBanner>({
  image: { type: String },
  title: { type: String },
  paragraph: { type: String },
});

export const Service = model("Service", serviceBannerSchema);
