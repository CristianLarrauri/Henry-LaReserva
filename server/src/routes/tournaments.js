const { Router } = require("express");
const { Tournaments } = require("../db");
const {
  create_tournament,
  get_tournaments_db,
} = require("../utils/utilsTournaments");

const router = Router();

// POST TOURNAMENTS _________________________________________
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
        return res.status(404).send("El torneo ya existe");
      } else {
        create_tournament(data);
        return res.status(200).send("Torneo creado con exito");
      }
    }
  } catch (error) {
    return res.status(404).send("ERROR EN RUTA POST/tournaments", error);
  }
});

// GET TOURNAMENTS _________________________________________
router.get("/", async (req, res) => {
  try {
    let { name } = req.query;
    let data = await get_tournaments_db();

    if (name) {
      let data_tournament = data.find(
        (tournament) =>
          tournament.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );

      data_tournament
        ? res.status(200).send(data_tournament)
        : res.status(404).send("No se encontro el torneo");
    } else {
      return res.status(200).send(data);
    }
  } catch (error) {
    return res.status(404).send("ERROR EN RUTA GET/tournaments");
  }
});

module.exports = router;
