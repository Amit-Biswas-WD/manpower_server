import express, { Request, Response }  from "express";
import { Job } from "../../models/career/job.models";

export const jobRouters = express.Router();

jobRouters.post("/career_job/create_job", async (req: Request, res: Response) => {
  const body = req.body;
  const job = await Job.create(body);

  res.status(201).json({
    success: true,
    message: "career job Created Successfully.",
    job: job,
  });
});

jobRouters.get("/career_job", async (req: Request, res: Response) => {
  const job = await Job.find();

  res.status(201).json({
    success: true,
    message: "See career job All manpower.",
    job: job,
  });
});

jobRouters.get("/career_job/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const job = await Job.findById(manpowerId);

  res.status(201).json({
    success: true,
    message: "See career job Single manpowerId",
    job: job,
  });
});

jobRouters.patch("/career_job/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const updatedBody = req.body;
  const job = await Job.findByIdAndUpdate(
    { _id: manpowerId },
    updatedBody,
    {
      new: true,
    }
  );

  res.status(201).json({
    success: true,
    message: "Updated Career Job Successfully.",
    job: job,
  });
});

jobRouters.delete("/career_job/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const job = await Job.findByIdAndDelete(manpowerId);

  res.status(201).json({
    success: true,
    message: "Delete Career Job Successfully.",
    job: job,
  });
});
