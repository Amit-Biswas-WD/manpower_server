import { Banner } from "../../models/home/banner.models";
import express, { Request, Response }  from "express";

export const bannerRouters = express.Router();

bannerRouters.post("/banner/create_banner", async (req: Request, res: Response) => {
  const body = req.body;
  const banner = await Banner.create(body);

  res.status(201).json({
    success: true,
    message: "Banner Created Successfully.",
    banner: banner,
  });
});

bannerRouters.get("/banner", async (req: Request, res: Response) => {
  const banners = await Banner.find();

  res.status(201).json({
    success: true,
    message: "See Banner All manpower.",
    banners,
  });
});

bannerRouters.get("/banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const banners = await Banner.findById(manpowerId);

  res.status(201).json({
    success: true,
    message: "See Banner Single manpowerId",
    banners,
  });
});

bannerRouters.patch("/banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const updatedBody = req.body;
  const banners = await Banner.findByIdAndUpdate(
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

bannerRouters.delete("/banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const banners = await Banner.findByIdAndDelete(manpowerId);

  res.status(201).json({
    success: true,
    message: "Delete Successfully.",
    banners,
  });
});
