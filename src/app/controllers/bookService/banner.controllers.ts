import express, { Request, Response }  from "express";
import { BookServiceBanner } from "../../models/bookService/banner.models";

export const bookServicesRouters = express.Router();

bookServicesRouters.post("/book_service/create_banner", async (req: Request, res: Response) => {
  const body = req.body;
  const bookServices = await BookServiceBanner.create(body);

  res.status(201).json({
    success: true,
    message: "Book Service Created Successfully.",
    bookServices: bookServices,
  });
});

bookServicesRouters.get("/book_service", async (req: Request, res: Response) => {
  const bookServices = await BookServiceBanner.find();

  res.status(201).json({
    success: true,
    message: "See Book Service All manpower.",
    bookServices: bookServices,
  });
});

bookServicesRouters.get("/book_service/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const bookServices = await BookServiceBanner.findById(manpowerId);

  res.status(201).json({
    success: true,
    message: "See Book Service Single manpowerId",
    bookServices: bookServices,
  });
});

bookServicesRouters.patch("/book_service/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const updatedBody = req.body;
  const bookServices = await BookServiceBanner.findByIdAndUpdate(
    { _id: manpowerId },
    updatedBody,
    {
      new: true,
    }
  );

  res.status(201).json({
    success: true,
    message: "Updated Book Service Successfully.",
    bookServices: bookServices,
  });
});

bookServicesRouters.delete("/book_service/:manpowerId", async (req: Request, res: Response) => {
  const manpowerId = req.params.manpowerId;
  const bookServices = await BookServiceBanner.findByIdAndDelete(manpowerId);

  res.status(201).json({
    success: true,
    message: "Delete Book Service Successfully.",
    bookServices: bookServices,
  });
});
