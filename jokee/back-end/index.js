const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const jokeRouter = require("./routes/joke.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(jokeRouter);

app.listen(3000);
