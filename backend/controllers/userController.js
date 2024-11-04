const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("../middleware/createToken");

const signUp = async (req, res) => {
  const { name, email, phone, image, password } = req.body;
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
      image,
      password: securePassword,
    });

    if (newUser) {
      jwt(newUser._id, res);
      res.status(201).json({ message: "registered successfully ",newUser });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  try {
    const user = await User.findOne({ email });
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!user || !verifyPassword) {
      return res.status(400).json({ message: "error in credentials" });
    }

    if (user) {
      jwt(user._id, res);
      res.status(200).json({ message: "login success full ", user });
    }
  } catch (error) {
    res.status(400).json({message:"error from login"});
  }
};

const logout=async (req,res)=>{
    try {
        res.clearCookie('token')
        res.status(200).json('user logout successfully')
    } catch (error) {
        
    }
}

module.exports = { signUp, Login , logout};
