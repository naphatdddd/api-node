const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors');
mongoose
  .connect(
    "mongodb+srv://naphata:naphat1@cluster0.p1gu8.azure.mongodb.net/reactjs?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connect DB");
  })
  .catch((err) => {
    console.log(err);
  });

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const shopRouter = require("./routes/shop");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/shop", shopRouter);

module.exports = app;
