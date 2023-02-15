const express = require('express');
const { UserModel } = require('../model/User.Model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRouter=express.Router()

userRouter.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const userCheck = await UserModel.find({ email });
    if (userCheck.length > 0) {
      res.send(
        "email already in use, please login or register with new e-mail"
      );
    } else {
      bcrypt.hash(password, 8, async (err, hash) => {
        const user = new UserModel({
          first_name,
          last_name,
          email,
          password: hash,
        });
        await user.save();
        res.send("Registered");
      });
    }
  } catch (err) {
    res.send("Error in registering the user");
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, function (err, result) {
        if (result) {
          const token = jwt.sign({ course: "backend" }, "masai");
          res.send({ msg: "Login Successfull", token: token,first_name: user[0].first_name,last_name: user[0].last_name});
        } else {
          res.send("Wrong Credntials");
        }
      });
    } else {
      res.send("Wrong Credntials");
    }
  } catch (err) {
    res.send("Something went wrong");
    console.log(err);
  }
});

module.exports ={userRouter}