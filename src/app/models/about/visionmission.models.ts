import { model, Schema } from "mongoose";
import { IVisionMission } from "../../interfaces/about/visionmission.interfaces";

const visionMissionSchema = new Schema<IVisionMission>(
  {
    title: { type: String, require: true },
    shortTitle: { type: String, require: true },
    paragraph: { type: String, require: true },
  },
  { versionKey: false, timestamps: true }
);

export const VisionMission = model("VisionMission", visionMissionSchema);
