const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes
const userRoutes = require("./routes/user");

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWD}@cluster0.drr5v.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("connected to mongodb Database");
  });

app.use(bodyParser());
app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running in a port: " + process.env.PORT);
});
