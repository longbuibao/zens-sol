const express = require("express");
const cors = require("cors");

const jokeRouter = require("./routes/joke.route");

const app = express();

app.use(cors());
app.use(jokeRouter);

app.listen(3000);
