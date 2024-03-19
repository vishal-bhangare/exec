import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import createError from "http-errors";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import todoRoute from "./Routes/todos.route.js";
configDotenv();

const DB_URI = process.env.DB_URI;

// db connection
async function dbConnection(uri) {
  try {
    const conn = await mongoose.connect(uri);
    console.log(conn.connections[0].name);
  } catch (err) {
    console.log(err);
  }
}
dbConnection(DB_URI);

const app = express();

// handling cors
const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE,PATCH`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};
app.use(allowCrossDomain);

// adding json bodyparser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/api/todos", todoRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// handling 404 error
app.use((req, res, next) => {
  next(createError(404));
});

// handling 505 server error
app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;

  res.status(err.statusCode).send(err.message);
});
