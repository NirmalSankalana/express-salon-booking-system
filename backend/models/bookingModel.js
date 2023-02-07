import mongoose from "mongoose";
import User from "./userModel";
import Service from "./serviceModel";
import Employee from "./employeeModel";

const bookingSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bookedServices: [
    {
      service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true,
      },
      employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    },
  ],
  price: { type: Number, required: true },
  startingTime: { type: Date, required: true },
  endingTime: { type: Date, required: true },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
