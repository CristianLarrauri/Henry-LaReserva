const { Router } = require("express");

// const comming = require("./comming"); Ruta tal vez innecesaria, en caso de no usarse la borro. Pinu.
const home = require("./home");
const next = require("./next");
const positions = require("./positions");
const tournaments = require("./tournaments");
const teams = require("./teams");
const players = require("./players");
const users = require("./users");

const router = Router();

// router.use("/comming", comming); Ruta tal vez innecesaria, en caso de no usarse la borro. Pinu.
router.use("/home", home);
router.use("/next", next);
router.use("/positions", positions);
router.use("/tournaments", tournaments);
router.use("/teams", teams);
router.use("/players", players);
router.use("/users", users);

module.exports = router;
