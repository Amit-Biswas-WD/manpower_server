import express, { Request, Response } from "express";
import { Category } from "../../models/home/category.models";

export const categoryRoutes = express.Router();

categoryRoutes.post("/category/create_category", async (req: Request, res: Response) => {
  const body = req.body;
  const category = await Category.create(body);

  res.status(201).json({
    success: true,
    message: "Category Created Successfully.",
    category: category,
  });
});

categoryRoutes.get("/category", async (req: Request, res: Response) => {
  const category = await Category.find();

  res.status(201).json({
    success: true,
    message: "See service All data.",
    category: category,
  });
});

categoryRoutes.get("/category/:categoryId", async (req: Request, res: Response) => {
  const categoryId = req.params.categoryId;
  const category = await Category.findById(categoryId);

  res.status(201).json({
    success: true,
    message: "See category Single data",
    category: category,
  });
});

categoryRoutes.patch("/category/:categoryId", async (req: Request, res: Response) => {
  const categoryId = req.params.categoryId;
  const updatedBody = req.body;
  const category = await Category.findByIdAndUpdate({ _id: categoryId }, updatedBody, {
    new: true,
  });

  res.status(201).json({
    success: true,
    message: "Category Updated Successfully.",
    category: category,
  });
});

categoryRoutes.delete("/category/:categoryId", async (req: Request, res: Response) => {
  const categoryId = req.params.categoryId;
  const category = await Category.findByIdAndDelete(categoryId);

  res.status(201).json({
    success: true,
    message: "Category Delete Successfully.",
    category: category,
  });
});