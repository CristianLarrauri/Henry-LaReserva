const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const { preload_teams } = require("./src/utils/utilsTeams.js");
const { preload_tournaments } = require("./src/utils/utilsTournaments.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    preload_teams();
    preload_tournaments();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
