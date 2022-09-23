const { Router } = require("express");
const { Op } = require("sequelize");
const { Teams, Tournaments, Players } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let data = await Players.findAll({
      order: [["goals", "DESC"]],
      include: {
        model: Tournaments,
        where: { id: req.query.tournament },
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send("Error en ruta get de goals", error);
  }
});

module.exports = router;
