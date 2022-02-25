require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { Job } = require("./services/index");

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Start Job
Job.start();

// PORT Definition
const port = process.env.PORT || 8000;

// Start Server
app.listen(port, () => {
  console.log(`app is running at ${port}`)
});
