import { model, Schema } from "mongoose";
import { IService } from "../../interfaces/home/service.interface";

const serviceSchema = new Schema<IService>(
  {
    image: { type: String, require: true },
    title: { type: String, require: true },
    link: { type: String, require: true },
  },
  { versionKey: false, timestamps: true }
);

export const Service = model("Service", serviceSchema);
