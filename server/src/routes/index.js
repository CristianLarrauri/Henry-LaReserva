const { Router } = require("express");

const home = require("./home");
const tournaments = require("./tournaments");
const teams = require("./teams");
const players = require("./players");

const router = Router();

router.use("/home", home);
router.use("/tournaments", tournaments);
router.use("/teams", teams);
router.use("/players", players);

module.exports = router;
