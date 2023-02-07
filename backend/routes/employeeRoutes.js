import express from "express";
import Employee from "../models/employeeModel.js";

const employeeRouter = express.Router();

employeeRouter.get("/", async (req, res) => {
  const allEmployees = await Employee.find();
  res.send(allEmployees);
});

// serviceRouter.get("/:id", async (req, res) => {
//   const service = await Service.findById(req.params.id);
//   if (service) {
//     res.send(service);
//   } else {
//     res.sendStatus(400).send({ message: "Service Not Found" });
//   }
// });

export default employeeRouter;
