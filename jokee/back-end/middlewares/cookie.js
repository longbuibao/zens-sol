const checkCookie = async (req, res, next) => {
  try {
    const jokeIdsFromCookie = req.cookies.jokeIds || "[]";
    req.jokeIds = JSON.parse(jokeIdsFromCookie);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkCookie;
