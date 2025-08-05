import express, { Request, Response } from "express";
import { Contact } from "../../models/home/contact.models";

export const contactRoutes = express.Router();

contactRoutes.post("/contact/create_contact", async (req: Request, res: Response) => {
  const body = req.body;
  const contact = await Contact.create(body);

  res.status(201).json({
    success: true,
    message: "contact Created Successfully.",
    contact: contact,
  });
});

contactRoutes.get("/contact", async (req: Request, res: Response) => {
  const contact = await Contact.find();

  res.status(201).json({
    success: true,
    message: "See Contact All data.",
    contact: contact,
  });
});

contactRoutes.get("/contact/:contactId", async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  const contact = await Contact.findById(contactId);

  res.status(201).json({
    success: true,
    message: "See contact Single data",
    contact: contact,
  });
});

contactRoutes.patch("/contact/:contactId", async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  const updatedBody = req.body;
  const contact = await Contact.findByIdAndUpdate({ _id: contactId }, updatedBody, {
    new: true,
  });

  res.status(201).json({
    success: true,
    message: "contact Updated Successfully.",
    contact: contact,
  });
});

contactRoutes.delete("/contact/:contactId", async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  const contact = await Contact.findByIdAndDelete(contactId);

  res.status(201).json({
    success: true,
    message: "contact Delete Successfully.",
    contact: contact,
  });
});