import express from "express";
import Booking from "../models/bookingModel.js";

const bookingRouter = express.Router();

bookingRouter.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const bookingData = {
      client: req.body.client,
      bookedServices: req.body.bookedServices,
      employee: req.body.employee,
      price: 45.0,
      startingTime: new Date(req.body.startingTime),
      endingTime: new Date(req.body.endingTime),
      isPaid: req.body.isPaid,
    };

    await Booking.reserveTimeSlot(bookingData);
    console.log("Time slot reserved successfully");
    res.status(201).json({ message: "Time slot reserved successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default bookingRouter;
