import express, { Request, Response }  from "express";
import { Service } from "../../models/home/service.models";

export const service2Routers = express.Router();

service2Routers.post("/service_banner/create_banner", async (req: Request, res: Response) => {
  const body = req.body;
  const service = await Service.create(body);

  res.status(201).json({
    success: true,
    message: "Banner Created Successfully.",
    service: service,
  });
});

service2Routers.get("/service_banner", async (req: Request, res: Response) => {
  const service = await Service.find();

  res.status(201).json({
    success: true,
    message: "See service All manpower.",
    service,
  });
});

service2Routers.get("/service_banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const service = await Service.findById(manpowerId);

  res.status(201).json({
    success: true,
    message: "See service Single manpowerId",
    service,
  });
});

service2Routers.patch("/service_banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const updatedBody = req.body;
  const service = await Service.findByIdAndUpdate(
    { _id: manpowerId },
    updatedBody,
    {
      new: true,
    }
  );

  res.status(201).json({
    success: true,
    message: "Updated Successfully.",
    service,
  });
});

service2Routers.delete("/service_banner/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const service = await Service.findByIdAndDelete(manpowerId);

  res.status(201).json({
    success: true,
    message: "Delete Successfully.",
    service,
  });
});
