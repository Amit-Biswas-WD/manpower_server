import express, { Request, Response } from "express";
import { Service } from "../../models/home/service.models";

export const serviceRouters = express.Router();

serviceRouters.post("/service/create_service", async (req: Request, res: Response) => {
  const body = req.body;
  const weDo = await Service.create(body);

  res.status(201).json({
    success: true,
    message: "WeDo Created Successfully.",
    weDo: weDo,
  });
});

serviceRouters.get("/service", async (req: Request, res: Response) => {
  const service = await Service.find();

  res.status(201).json({
    success: true,
    message: "See service All data.",
    service: service,
  });
});

serviceRouters.get("/service/:serviceId", async (req: Request, res: Response) => {
  const serviceId = req.params.serviceId;
  const service = await Service.findById(serviceId);

  res.status(201).json({
    success: true,
    message: "See weDo Single data",
    service: service,
  });
});

serviceRouters.patch("/service/:serviceId", async (req: Request, res: Response) => {
  const serviceId = req.params.serviceId;
  const updatedBody = req.body;
  const service = await Service.findByIdAndUpdate({ _id: serviceId }, updatedBody, {
    new: true,
  });

  res.status(201).json({
    success: true,
    message: "Updated Successfully.",
    service: service,
  });
});

serviceRouters.delete("/service/:serviceId", async (req: Request, res: Response) => {
  const serviceId = req.params.serviceId;
  const service = await Service.findByIdAndDelete(serviceId);

  res.status(201).json({
    success: true,
    message: "Delete Successfully.",
    service: service,
  });
});
