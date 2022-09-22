const server = require("./src/app.js");
const express = require('express');
const { conn } = require("./src/db.js");
const morgan = require('morgan');
const router = require('./src/routes/payments');

const { preload_players } = require("./src/utils/utilsPlayers.js");
const { preload_teams } = require("./src/utils/utilsTeams.js");
const { preload_tournaments } = require("./src/utils/utilsTournaments.js");

const app = express();

app.use(morgan('dev'));
app.use(router);

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    preload_players();
    preload_teams();
    preload_tournaments();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
