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

module.exports = {
  getJokeNotInIds,
};
