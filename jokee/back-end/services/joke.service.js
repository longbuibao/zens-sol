const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const crypto = require("crypto");

const getJokesNotInIds = async (ids) => {
  const joke = await prisma.joke.findFirst({
    where: {
      id: {
        notIn: ids,
      },
    },
  });
  return joke;
};

const vote = async (userId, jokeId, isLike) => {
  const likedId = crypto.randomBytes(16).toString("hex");

  if (!userId || !jokeId) return null;
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  if (!user) return null;

  const voted = await prisma.likes.create({
    data: {
      id: likedId,
      isLike,
      jokeId,
      userId,
    },
  });
  return voted;
};

module.exports = {
  getJokesNotInIds,
  vote,
};
