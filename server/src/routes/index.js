const { Router } = require('express');

const home = require("./home");
const positions = require("./positions");
const tournaments = require("./tournaments");
const teams = require("./teams");
const players = require("./players");
const MercadoPago = require('./mercadoPago');

const router = Router();

router.use("/home", home);
router.use("/positions", positions);
router.use("/tournaments", tournaments);
router.use("/teams", teams);
router.use("/players", players);
router.use("/checkout", MercadoPago);

module.exports = router;