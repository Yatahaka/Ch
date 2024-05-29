const fs = require("fs").promises;
const { config } = require("../appModules/rating");
const { getRandomGame } = require("../appModules/api");

const gameRouteController = async (res) => {
  const ratingFile = await fs.readFile(config.PATH_TO_RATING_FILE);
  const data = JSON.parse(ratingFile);
  const game = getRandomGame(data);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(game));
};

module.exports = gameRouteController;
