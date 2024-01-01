import mongoose from "mongoose";
import User from "./userModel.js";
import Service from "./serviceModel.js";
import Employee from "./employeeModel.js";

const bookingSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bookedServices: [
    {
      service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true,
      },
    },
  ],
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
    unique: true,
  },
  price: { type: Number, required: true },
  startingTime: { type: Date, required: true },
  endingTime: { type: Date, required: true },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
});

// Check and reserve a time slot
bookingSchema.statics.reserveTimeSlot = async function (bookingData) {
  const { employee, startingTime, endingTime } = bookingData;

  // Check if the employee is available during the specified time
  const existingBooking = await this.findOne({
    employee: employee,
    $or: [
      {
        $and: [
          { startingTime: { $lt: endingTime } },
          { endingTime: { $gt: startingTime } },
        ],
      },
      {
        $and: [
          { startingTime: { $gte: startingTime } },
          { startingTime: { $lt: endingTime } },
        ],
      },
    ],
  });

  if (existingBooking) {
    throw new Error("Employee is not available during the specified time");
  }

  const booking = new this(bookingData);
  await booking.save();

  return booking;
};

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
