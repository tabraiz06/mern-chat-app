const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("../middleware/createToken");

const signUp = async (req, res) => {
  const { name, email, phone, password } = req.body;
  const imagePath = req.file.filename;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "email is already in use" });
    }

    const securePassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      phone,

      password: securePassword,
      pic: imagePath,
    });

    if (newUser) {
      const Token = jwt(newUser._id);
      res
        .status(201)
        .json({ message: "registered successfully ", newUser, Token });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const verifyPassword = await bcrypt.compare(password, user.password);
    
    if (!user && !verifyPassword) {
      return res.status(400).json({ message: "error in credentials" });
    }

    if (user) {
      const Token = jwt(user._id);
      res.status(200).json({ message: "login success full ", user, Token });
    }
  } catch (error) {
    res.status(400).json({ message: "error from login" });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json("user logout successfully");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// /api/users?search=tabraiz
const Users = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({ _id: { $ne: req.user } });
  res.status(200).json(users)
  try {
  } catch (error) {}
};

module.exports = { signUp, Login, logout, Users };
