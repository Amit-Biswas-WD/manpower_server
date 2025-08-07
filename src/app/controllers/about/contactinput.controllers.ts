import express, { Request, Response }  from "express";
import { ContactInput } from "../../models/about/contactinput.models";

export const contactInputRouters = express.Router();

contactInputRouters.post("/about_contactI/create_contactI", async (req: Request, res: Response) => {
  const body = req.body;
  const contactI = await ContactInput.create(body);

  res.status(201).json({
    success: true,
    message: "contact Input Created Successfully.",
    contactI: contactI,
  });
});

contactInputRouters.get("/about_contactI", async (req: Request, res: Response) => {
  const contactI = await ContactInput.find();

  res.status(201).json({
    success: true,
    message: "See contact Input All manpower.",
    contactI,
  });
});

contactInputRouters.get("/about_contactI/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const contactI = await ContactInput.findById(manpowerId);

  res.status(201).json({
    success: true,
    message: "See contact Input Single manpowerId",
    contactI,
  });
});

contactInputRouters.patch("/about_contactI/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const updatedBody = req.body;
  const contactI = await ContactInput.findByIdAndUpdate(
    { _id: manpowerId },
    updatedBody,
    {
      new: true,
    }
  );

  res.status(201).json({
    success: true,
    message: "Updated Successfully.",
    contactI,
  });
});

contactInputRouters.delete("/about_contactI/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const contactI = await ContactInput.findByIdAndDelete(manpowerId);

  res.status(201).json({
    success: true,
    message: "Delete Successfully.",
    contactI,
  });
});
