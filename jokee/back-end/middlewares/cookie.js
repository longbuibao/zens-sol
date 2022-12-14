const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const crypto = require("crypto");

const checkCookie = async (req, res, next) => {
  try {
    const userIdFromCookie = req.cookies.userId || "";
    const jokeIdsFromCookie = req.cookies.jokeIds || [];

    if (!userIdFromCookie) {
      const userId = crypto.randomBytes(16).toString("hex");
      await prisma.user.create({
        data: {
          id: userId,
        },
      });
      req.userId = userId;
      req.jokeIds = [];
      return next();
    }

    req.userId = userIdFromCookie;
    req.jokeIds = JSON.parse(jokeIdsFromCookie);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkCookie;
