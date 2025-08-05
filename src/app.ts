import express, { Application, Request, Response } from "express";
import { serviceRouters } from "./app/controllers/home/service.controllers";
import { bannerRouters } from "./app/controllers/home/banner.controllers";
import { categoryRoutes } from "./app/controllers/home/category.controllers";
import { testimonialRoutes } from "./app/controllers/home/testimonial.controllers";
import { contactRoutes } from "./app/controllers/home/contact.controllers";
import { faqRoutes } from "./app/models/home/faq.models";
const app: Application = express();
app.use(express.json());

app.use("/manpower", bannerRouters, serviceRouters, categoryRoutes, testimonialRoutes, contactRoutes, faqRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Manpower to do App!!!");
});

export default app;
