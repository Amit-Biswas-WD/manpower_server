import express, { Request, Response } from "express";
import { Testimonials } from "../../models/home/testimonials.model";

export const testimonialRoutes = express.Router();

testimonialRoutes.post("/testimonial/create_testimonial", async (req: Request, res: Response) => {
  const body = req.body;
  const testimonial = await Testimonials.create(body);

  res.status(201).json({
    success: true,
    message: "testimonial Created Successfully.",
    testimonial: testimonial,
  });
});

testimonialRoutes.get("/testimonial", async (req: Request, res: Response) => {
  const testimonial = await Testimonials.find();

  res.status(201).json({
    success: true,
    message: "See Testimonials All data.",
    testimonial: testimonial,
  });
});

testimonialRoutes.get("/testimonial/:testimonialId", async (req: Request, res: Response) => {
  const testimonialId = req.params.testimonialId;
  const testimonial = await Testimonials.findById(testimonialId);

  res.status(201).json({
    success: true,
    message: "See testimonial Single data",
    testimonial: testimonial,
  });
});

testimonialRoutes.patch("/testimonial/:testimonialId", async (req: Request, res: Response) => {
  const testimonialId = req.params.testimonialId;
  const updatedBody = req.body;
  const testimonial = await Testimonials.findByIdAndUpdate({ _id: testimonialId }, updatedBody, {
    new: true,
  });

  res.status(201).json({
    success: true,
    message: "testimonial Updated Successfully.",
    testimonial: testimonial,
  });
});

testimonialRoutes.delete("/testimonial/:testimonialId", async (req: Request, res: Response) => {
  const testimonialId = req.params.testimonialId;
  const testimonial = await Testimonials.findByIdAndDelete(testimonialId);

  res.status(201).json({
    success: true,
    message: "testimonial Delete Successfully.",
    testimonial: testimonial,
  });
});