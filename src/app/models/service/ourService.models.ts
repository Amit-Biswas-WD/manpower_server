import { model, Schema } from "mongoose";
import { IOurServices } from "../../interfaces/service/ourServices.interface";

const ourServiceSchema = new Schema<IOurServices>({
  image: { type: String, require: true },
  imageTitle: { type: String, require: true },
  paragraph1: { type: String, require: true },
  paragraph2: { type: String, require: true },
  link: { type: String, require: true },
  title: { type: String, require: true },
  features: { type: [String], require: true },
}, { versionKey: false, timestamps: true });

export const OurService = model("OurService", ourServiceSchema);
