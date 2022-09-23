const { Router } = require("express");
const { Tournaments } = require("../db");

const router = Router();

//.........................................................................................//
// GET /home
router.get("/", async (req, res) => {
  try {
    let data = await Tournaments.findAll({
      where: { state: "In Progress" },
      offset: req.query.page,
      limit: 4,
      order: [[req.query.property, req.query.order]],
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
    console.log("ERROR EN RUTA GET/home", error);
  }
});

module.exports = router;
