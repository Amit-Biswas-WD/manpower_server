import { model, Schema } from "mongoose";
import { IJob } from "../../interfaces/career/jon.interfaces";

const jobSchema = new Schema<IJob>(
  {
    jobTitle: { type: String },
    department: { type: String },
    location: { type: String },
    type: { type: String },
    level: { type: String },
    experience: { type: String },
    salary: { type: Number },
    jobOverView: { type: String },
    responsibilities: { type: [String] },
    qualifications: { type: [String] },
    education: { type: [String] },
    benefits: { type: [String] },
    howToApply: { type: String },
  },
  { versionKey: false, timestamps: true }
);

export const Job = model("Job", jobSchema);
