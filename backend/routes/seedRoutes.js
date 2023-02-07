import express from "express";
import Service from "../models/serviceModel.js";
import data from "../data.js";
import User from "../models/userModel.js";
import Employee from "../models/employeeModel.js";
const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Service.remove({});
  const createdServices = await Service.insertMany(data.services);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  await Employee.remove({});
  const createdEmployees = await Employee.insertMany(data.employees);
  console.log(createdEmployees);
  res.send({ createdEmployees, createdServices, createdUsers });
});

export default seedRouter;
