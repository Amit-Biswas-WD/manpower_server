

import { AboutBanner } from "../../models/about/banner.models";
import express, { Request, Response }  from "express";

export const cBannerRouters = express.Router();

cBannerRouters.post("/career_banner/create_banner", async (req: Request, res: Response) => {
  const body = req.body;
  const career = await AboutBanner.create(body);

  res.status(201).json({
    success: true,
    message: "career Created Successfully.",
    career: career,
  });
});

cBannerRouters.get("/career_banner", async (req: Request, res: Response) => {
  const career = await AboutBanner.find();

  res.status(201).json({
    success: true,
    message: "See career All manpower.",
    career: career,
  });
});

cBannerRouters.get("/career_banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const career = await AboutBanner.findById(manpowerId);

  res.status(201).json({
    success: true,
    message: "See career Single manpowerId",
    career: career,
  });
});

cBannerRouters.patch("/career_banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const updatedBody = req.body;
  const career = await AboutBanner.findByIdAndUpdate(
    { _id: manpowerId },
    updatedBody,
    {
      new: true,
    }
  );

  res.status(201).json({
    success: true,
    message: "Updated Successfully.",
    career: career,
  });
});

cBannerRouters.delete("/career_banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const career = await AboutBanner.findByIdAndDelete(manpowerId);

  res.status(201).json({
    success: true,
    message: "Delete Successfully.",
    career: career,
  });
});
