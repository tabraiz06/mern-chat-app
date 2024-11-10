const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const UserRoute = require("./routes/userRoute");
const chatRoute= require('./routes/chatRoute')
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
// Use bodyParser to parse urlencoded form data
app.use(bodyParser.urlencoded({ extended: true }));
// api
app.use("/api", UserRoute);
app.use('/api/chat', chatRoute)
app.use(notFound)
app.use(errorHandler)

const url = process.env.URL;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world");
});

mongoose
  .connect(url)
  .then(() => console.log("db connection successfull"))
  .catch(() => console.log("error in db connection"));
app.listen(port, () => console.log(`server is running at ${port}`));
