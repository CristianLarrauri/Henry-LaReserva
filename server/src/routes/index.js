const { Router } = require("express");

const home = require("./home");
const next = require("./next");
const positions = require("./positions");
const scorers = require("./scorers");
const tournaments = require("./tournaments");
const teams = require("./teams");
const players = require("./players");

const router = Router();

router.use("/home", home);
router.use("/next", next);
router.use("/positions", positions);
router.use("/scorers", scorers);
router.use("/tournaments", tournaments);
router.use("/teams", teams);
router.use("/players", players);

module.exports = router;
