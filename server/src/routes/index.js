const { Router } = require("express");
const home = require("./home");
const next = require("./next");
const positions = require("./positions");
const scorers = require("./scorers");
const tournaments = require("./tournaments");
const teams = require("./teams");
const players = require("./players");
const users = require("./users");
const MercadoPago = require('./mercadoPago');
const orderRouter = require('./order.js')
const reviews = require("./reviews");
const email = require("./email")

const router = Router();

router.use("/home", home);
router.use("/next", next);
router.use("/positions", positions);
router.use("/scorers", scorers);
router.use("/tournaments", tournaments);
router.use("/teams", teams);
router.use("/players", players);
router.use("/users", users);
router.use("/mercadopago", MercadoPago);
router.use("/order", orderRouter);
router.use("/reviews", reviews);
router.use("/email", email)

module.exports = router;