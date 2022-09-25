const { Router } = require("express");
const { Tournaments, Teams } = require("../db");

const router = Router();

//.........................................................................................//
// GET /home
router.get("/", async (req, res) => {
  try {
    let data = await Tournaments.findAll({
      where: { state: "Finalizado" },
      offset: req.query.index,
      limit: req.query.limit,
      order: [["dateInit", "ASC"]],
      // include: {
      //   model: Teams,
      //   attributes: ["name"],
      //   through: {
      //     attributes: [],
      //   },
      // },
    });
    return res.status(200).send(data);
  } catch (error) {
    console.log("ERROR EN RUTA GET/next", error);
  }
});

module.exports = router;
