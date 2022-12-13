const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllJokes = async () => {
  const jokes = await prisma.joke.findMany({});
  return jokes;
};

module.exports = {
  getAllJokes,
};
