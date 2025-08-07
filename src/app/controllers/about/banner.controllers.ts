import { AboutBanner } from "../../models/about/banner.models";
import express, { Request, Response }  from "express";

export const aboutBannerRouters = express.Router();

aboutBannerRouters.post("/about_banner/create_banner", async (req: Request, res: Response) => {
  const body = req.body;
  const banner = await AboutBanner.create(body);

  res.status(201).json({
    success: true,
    message: "Banner Created Successfully.",
    banner: banner,
  });
});

aboutBannerRouters.get("/about_banner", async (req: Request, res: Response) => {
  const banners = await AboutBanner.find();

  res.status(201).json({
    success: true,
    message: "See Banner All manpower.",
    banners,
  });
});

aboutBannerRouters.get("/about_banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const banners = await AboutBanner.findById(manpowerId);

  res.status(201).json({
    success: true,
    message: "See Banner Single manpowerId",
    banners,
  });
});

aboutBannerRouters.patch("/about_banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const updatedBody = req.body;
  const banners = await AboutBanner.findByIdAndUpdate(
    { _id: manpowerId },
    updatedBody,
    {
      new: true,
    }
  );

  res.status(201).json({
    success: true,
    message: "Updated Successfully.",
    banners,
  });
});

aboutBannerRouters.delete("/about_banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const banners = await AboutBanner.findByIdAndDelete(manpowerId);

  res.status(201).json({
    success: true,
    message: "Delete Successfully.",
    banners,
  });
});
