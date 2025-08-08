import express, { Request, Response }  from "express";
import { ApplyJob } from "../../models/career/applyInput.models";

export const applyJobRouters = express.Router();

applyJobRouters.post("/job_apply/create_job_apply", async (req: Request, res: Response) => {
  const body = req.body;
  const jobApply = await ApplyJob.create(body);

  res.status(201).json({
    success: true,
    message: "Job Apply Created Successfully.",
    jobApply: jobApply,
  });
});

applyJobRouters.get("/job_apply", async (req: Request, res: Response) => {
  const jobApply = await ApplyJob.find();

  res.status(201).json({
    success: true,
    message: "See Job Apply All manpower.",
    jobApply: jobApply,
  });
});

applyJobRouters.get("/job_apply/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const jobApply = await ApplyJob.findById(manpowerId);

  res.status(201).json({
    success: true,
    message: "See Job Apply Single manpowerId",
    jobApply: jobApply,
  });
});

applyJobRouters.patch("/job_apply/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const updatedBody = req.body;
  const jobApply = await ApplyJob.findByIdAndUpdate(
    { _id: manpowerId },
    updatedBody,
    {
      new: true,
    }
  );

  res.status(201).json({
    success: true,
    message: "Updated Job Apply Successfully.",
    jobApply: jobApply,
  });
});

applyJobRouters.delete("/job_apply/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const jobApply = await ApplyJob.findByIdAndDelete(manpowerId);

  res.status(201).json({
    success: true,
    message: "Delete Job Apply Successfully.",
    jobApply: jobApply,
  });
});
