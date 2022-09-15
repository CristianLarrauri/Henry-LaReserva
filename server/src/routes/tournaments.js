const { Router } = require("express");
const { create_tournament } = require("../utils/utilsTournaments");
const { Tournaments } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  try {
    let data = req.body;
    let data_db = await Tournaments.findAll();

    if (!data.name) {
      return res.status(404).send("Faltan datos requeridos");
    }
    if (data.name) {
      let tournament = data_db.find(
        (tournament) => tournament.name === data.name
      );
      if (tournament) {
        create_tournament(data);
        return res.status(200).send("Torneo creado con exito");
      } else {
        return res.status(404).send("El torneo ya existe");
      }
    }
  } catch (error) {
    return res.status(404).send("ERROR en ruta POST/tournaments", error);
  }
});

module.exports = router;
