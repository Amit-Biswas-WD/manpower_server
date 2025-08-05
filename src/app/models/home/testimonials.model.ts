import { model, Schema } from "mongoose";
import { ITestimonial } from "../../interfaces/home/testimonials.interface";

const testimonialSchema = new Schema<ITestimonial>({
  image: { type: String, require: true },
  title: { type: String, require: true },
  destination: { type: String, require: true },
  paragraph: { type: String, require: true },
},{ versionKey: false, timestamps: true });

export const Testimonials = model("Testimonials", testimonialSchema);
