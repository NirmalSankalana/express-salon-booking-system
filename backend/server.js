import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import serviceRouter from "./routes/serviceRoutes.js";
import userRouter from "./routes/userRoutes.js";
import employeeRouter from "./routes/employeeRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// fetch env from the envfile
dotenv.config();

// Connect Mongodb Database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

// formdata in the request body converted in to the json object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/seed", seedRouter);
// app.get("/api/services", (req, res) => {
//   res.send(data.services);
// });
app.use("/api/services", serviceRouter);
app.use("/api/users", userRouter);
app.use("/api/employees", employeeRouter);
app.use("/api/booking", bookingRouter);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`server listn to port http://localhost:${port}`);
});
