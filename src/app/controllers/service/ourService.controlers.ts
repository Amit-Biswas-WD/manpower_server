import express, { Request, Response } from "express";
import { OurService } from "../../models/service/ourService.models";

export const ourServiceRouters = express.Router();

ourServiceRouters.post(
  "/our_service/create_service",
  async (req: Request, res: Response) => {
    const body = req.body;
    const ourService = await OurService.create(body);

    res.status(201).json({
      success: true,
      message: "Banner Created Successfully.",
      ourService: ourService,
    });
  }
);

ourServiceRouters.get("/our_service", async (req: Request, res: Response) => {
  const ourService = await OurService.find();

  res.status(201).json({
    success: true,
    message: "See service All manpower.",
    ourService: ourService,
  });
});

ourServiceRouters.get(
  "/our_service/:manpowerId",
  async (req: Request, res: Response) => {
    const manpowerId = req.params.manpowerId;
    const ourService = await OurService.findById(manpowerId);

    res.status(201).json({
      success: true,
      message: "See service Single manpowerId",
      ourService: ourService,
    });
  }
);

ourServiceRouters.patch(
  "/our_service/:manpowerId",
  async (req: Request, res: Response) => {
    const manpowerId = req.params.manpowerId;
    const updatedBody = req.body;
    const ourService = await OurService.findByIdAndUpdate(
      { _id: manpowerId },
      updatedBody,
      {
        new: true,
      }
    );

    res.status(201).json({
      success: true,
      message: "Updated Successfully.",
      ourService: ourService,
    });
  }
);

ourServiceRouters.delete(
  "/our_service/:manpowerId",
  async (req: Request, res: Response) => {
    const manpowerId = req.params.manpowerId;
    const ourService = await OurService.findByIdAndDelete(manpowerId);

    res.status(201).json({
      success: true,
      message: "Delete Successfully.",
      ourService: ourService,
    });
  }
);
