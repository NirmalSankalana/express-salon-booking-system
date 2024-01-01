import express from "express";
import Booking from "../models/bookingModel.js";

const bookingRouter = express.Router();

bookingRouter.post("/", async (req, res) => {
  try {
    const bookingData = {
      client: "6592cc665e54392a7bfbf4db", // Replace with an actual client ID
      bookedServices: [
        {
          service: "6592cc665e54392a7bfbf4dd", // Replace with an actual service ID
        },
        // Add more services and employees as needed
      ],
      employee: "6592cc665e54392a7bfbf4ea", // Replace with an actual employee ID
      price: 45.0, // Replace with the actual price
      startingTime: new Date("2024-01-01T09:00:00"), // Replace with the actual start time
      endingTime: new Date("2024-01-01T09:20:00"), // Replace with the actual end time
      isPaid: true, // Replace with true or false based on payment status
      paidAt: new Date("2024-01-01T10:00:00"), // Replace with the actual payment date
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
