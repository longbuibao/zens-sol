const jokeService = require("../services/joke.service");

const getJokeNotInIds = async (req, res) => {
  const jokeIds = req.jokeIds;
  const joke = await jokeService.getJokesNotInIds(jokeIds);

  if (!joke) return res.send({});

  const idsToBeSetCookie = req.jokeIds.concat(joke.id);
  res.cookie("jokeIds", JSON.stringify(idsToBeSetCookie));
  res.cookie("userId", req.userId);

  return res.send(joke);
};

const voteJoke = async (req, res) => {
  const userId = req.body.userId;
  const jokeId = req.body.joke.id;
  const isLike = req.body.isLike;

  const voted = await jokeService.vote(userId, jokeId, isLike);
  if (!voted) {
    return res.status(400).send();
  }
  res.send(voted);
};

module.exports = {
  getJokeNotInIds,
  voteJoke,
};
