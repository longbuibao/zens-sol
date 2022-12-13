const jokeService = require("../services/joke.service");

const getAllJokes = async (req, res) => {
  const jokes = await jokeService.getAllJokes();
  res.send(jokes);
};

module.exports = {
  getAllJokes,
};
