import express, { Request, Response } from "express";
import { Project } from "../../models/project/project.models";

export const projectRouters = express.Router();

projectRouters.post("/project/create_project", async (req: Request, res: Response) => {
    const body = req.body;
    const project = await Project.create(body);

    res.status(201).json({
      success: true,
      message: "our service Created Successfully.",
      project: project,
    });
  }
);

projectRouters.get("/project", async (req: Request, res: Response) => {
  const project = await Project.find();

  res.status(201).json({
    success: true,
    message: "See our service All manpower.",
    project: project,
  });
});

projectRouters.get(
  "/project/:manpowerId",
  async (req: Request, res: Response) => {
    const manpowerId = req.params.manpowerId;
    const project = await Project.findById(manpowerId);

    res.status(201).json({
      success: true,
      message: "See our service Single manpowerId",
      project: project,
    });
  }
);

projectRouters.patch(
  "/project/:manpowerId",
  async (req: Request, res: Response) => {
    const manpowerId = req.params.manpowerId;
    const updatedBody = req.body;
    const project = await Project.findByIdAndUpdate(
      { _id: manpowerId },
      updatedBody,
      {
        new: true,
      }
    );

    res.status(201).json({
      success: true,
      message: "Updated Successfully.",
      project: project,
    });
  }
);

projectRouters.delete(
  "/project/:manpowerId",
  async (req: Request, res: Response) => {
    const manpowerId = req.params.manpowerId;
    const project = await Project.findByIdAndDelete(manpowerId);

    res.status(201).json({
      success: true,
      message: "Delete Successfully.",
      project: project,
    });
  }
);
