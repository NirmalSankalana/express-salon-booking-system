import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../middleware/auth.js";
import expressAsyncHandler from "express-async-handler";
const salt = bcrypt.genSaltSync(10);

const userRouter = express.Router();
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        // token is send along with this data
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      } else {
        res.status(401).send({ message: "Your password is incorrect" });
      }
    } else {
      res.status(401).send({ message: "User Not found... Check Your email" });
    }
  })
);

userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
    });
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(401).send({ message: "This email in already registered" });
    } else {
      const user = await newUser.save();
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
    }
  })
);

export default userRouter;
