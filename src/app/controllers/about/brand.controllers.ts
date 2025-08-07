import express, { Request, Response }  from "express";
import { Brand } from "../../models/about/brand.models";

export const brandRouters = express.Router();

brandRouters.post("/about_brand/create_brand", async (req: Request, res: Response) => {
  const body = req.body;
  const brand = await Brand.create(body);

  res.status(201).json({
    success: true,
    message: "brand Created Successfully.",
    banner: brand,
  });
});

brandRouters.get("/about_brand", async (req: Request, res: Response) => {
  const brand = await Brand.find();

  res.status(201).json({
    success: true,
    message: "See brand All manpower.",
    brand,
  });
});

brandRouters.get("/about_brand/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const brand = await Brand.findById(manpowerId);

  res.status(201).json({
    success: true,
    message: "See brand Single manpowerId",
    brand,
  });
});

brandRouters.patch("/about_brand/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const updatedBody = req.body;
  const brand = await Brand.findByIdAndUpdate(
    { _id: manpowerId },
    updatedBody,
    {
      new: true,
    }
  );

  res.status(201).json({
    success: true,
    message: "Updated Successfully.",
    brand,
  });
});

brandRouters.delete("/about_brand/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const brand = await Brand.findByIdAndDelete(manpowerId);

  res.status(201).json({
    success: true,
    message: "Delete Successfully.",
    brand,
  });
});
