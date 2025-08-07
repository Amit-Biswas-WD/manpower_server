import express, { Application, Request, Response } from "express";
import { serviceRouters } from "./app/controllers/home/service.controllers";
import { bannerRouters } from "./app/controllers/home/banner.controllers";
import { categoryRoutes } from "./app/controllers/home/category.controllers";
import { testimonialRoutes } from "./app/controllers/home/testimonial.controllers";
import { contactRoutes } from "./app/controllers/home/contact.controllers";
import { faqRoutes } from "./app/models/home/faq.models";
import { aboutBannerRouters } from "./app/controllers/about/banner.controllers";
import { brandRouters } from "./app/controllers/about/brand.controllers";
import { contactInputRouters } from "./app/controllers/about/contactinput.controllers";
import { vMissionRouters } from "./app/controllers/about/visionmission.controllers";
import { service2Routers } from "./app/controllers/service/serviceBanner.controllers";
const app: Application = express();
app.use(express.json());

app.use(
  "/manpower",
  bannerRouters,
  serviceRouters,
  categoryRoutes,
  testimonialRoutes,
  contactRoutes,
  faqRoutes,
  aboutBannerRouters,
  brandRouters,
  contactInputRouters,
  vMissionRouters,
  service2Routers
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Manpower to do App!!!");
});

export default app;
