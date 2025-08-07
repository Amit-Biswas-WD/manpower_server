import express, { Request, Response }  from "express";
import { VisionMission } from "../../models/about/visionmission.models";

export const vMissionRouters = express.Router();

vMissionRouters.post("/about_vMission/create_vMission", async (req: Request, res: Response) => {
  const body = req.body;
  const vMission = await VisionMission.create(body);

  res.status(201).json({
    success: true,
    message: "Vision Mission Created Successfully.",
    vMission: vMission,
  });
});

vMissionRouters.get("/about_vMission", async (req: Request, res: Response) => {
  const vMission = await VisionMission.find();

  res.status(201).json({
    success: true,
    message: "See Vision Mission All manpower.",
    vMission,
  });
});

vMissionRouters.get("/about_vMission/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const vMission = await VisionMission.findById(manpowerId);

  res.status(201).json({
    success: true,
    message: "See Vision Mission Single manpowerId",
    vMission,
  });
});

vMissionRouters.patch("/about_vMission/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const updatedBody = req.body;
  const vMission = await VisionMission.findByIdAndUpdate(
    { _id: manpowerId },
    updatedBody,
    {
      new: true,
    }
  );

  res.status(201).json({
    success: true,
    message: "Updated Successfully.",
    vMission,
  });
});

vMissionRouters.delete("/about_vMission/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const vMission = await VisionMission.findByIdAndDelete(manpowerId);

  res.status(201).json({
    success: true,
    message: "Delete Successfully.",
    vMission,
  });
});
