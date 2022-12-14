const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getJokesNotInIds = async (ids) => {
  try {
    const joke = await prisma.joke.findFirst({
      where: {
        id: {
          notIn: ids,
        },
      },
    });
    return joke;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getJokesNotInIds,
};
