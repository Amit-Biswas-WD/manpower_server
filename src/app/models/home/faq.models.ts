import express, { Request, Response } from "express";
import { Faq } from "../../controllers/home/faq.controllers";

export const faqRoutes = express.Router();

faqRoutes.post("/faq/create_faq", async (req: Request, res: Response) => {
  const body = req.body;
  const faq = await Faq.create(body);

  res.status(201).json({
    success: true,
    message: "faq Created Successfully.",
    faq: faq,
  });
});

faqRoutes.get("/faq", async (req: Request, res: Response) => {
  const faq = await Faq.find();

  res.status(201).json({
    success: true,
    message: "See faq All data.",
    faq: faq,
  });
});

faqRoutes.get("/faq/:faqId", async (req: Request, res: Response) => {
  const faqId = req.params.faqId;
  const faq = await Faq.findById(faqId);

  res.status(201).json({
    success: true,
    message: "See faq Single data",
    faq: faq,
  });
});

faqRoutes.patch("/faq/:faqId", async (req: Request, res: Response) => {
  const faqId = req.params.faqId;
  const updatedBody = req.body;
  const faq = await Faq.findByIdAndUpdate({ _id: faqId }, updatedBody, {
    new: true,
  });

  res.status(201).json({
    success: true,
    message: "faq Updated Successfully.",
    faq: faq,
  });
});

faqRoutes.delete("/faq/:faqId", async (req: Request, res: Response) => {
  const faqId = req.params.faqId;
  const faq = await Faq.findByIdAndDelete(faqId);

  res.status(201).json({
    success: true,
    message: "faq Delete Successfully.",
    faq: faq,
  });
});
