import { model, Schema } from "mongoose";
import { IFaq } from "../../interfaces/home/faq.interfaces";

const faqSchema = new Schema<IFaq>(
  {
    question: { type: String, require: true },
    answer: { type: String, require: true },
  },
  { versionKey: false, timestamps: true }
);

export const Faq = model("Faq", faqSchema);
