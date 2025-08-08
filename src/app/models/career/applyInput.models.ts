import mongoose, { model, Schema } from "mongoose";
import { IApplyInput } from "../../interfaces/career/applyInput.interfaces";

const applyJobSchema = new Schema<IApplyInput>(
  {
    fullName: { type: String, require: true },
    email: { type: mongoose.Schema.Types.Mixed, require: true },
    phoneNumber: { type: Number, require: true },
    resumeFile: { type: String, require: true },
  },
  { versionKey: false, timestamps: true }
);

export const ApplyJob = model("ApplyJob", applyJobSchema);
