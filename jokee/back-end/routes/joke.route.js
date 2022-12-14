const express = require("express");
const router = express.Router();
const checkCookie = require("../middlewares/cookie");

const jokeController = require("../controllers/joke.controller");

router.get("/joke", checkCookie, jokeController.getJokeNotInIds);

module.exports = router;
