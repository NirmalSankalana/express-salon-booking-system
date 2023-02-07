import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  time: { type: Number, required: true },
});

const Service = mongoose.model("Service", servicesSchema);
export default Service;
