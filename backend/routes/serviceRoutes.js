import express from "express";
import Service from "../models/serviceModel.js";

const serviceRouter = express.Router();

serviceRouter.get("/", async (req, res) => {
  const allServices = await Service.find();
  res.send(allServices);
});

serviceRouter.get("/:id", async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (service) {
    res.send(service);
  } else {
    res.sendStatus(400).send({ message: "Service Not Found" });
  }
});

export default serviceRouter;
