const { Router } = require("express");

const tournaments = require("./tournaments");
const teams = require("./teams");
const players = require("./players");

const router = Router();

router.use("/tournaments", tournaments);
router.use("/teams", teams);
router.use("/players", players);

module.exports = router;
