const { Router } = require("express");
const { create_players, players_db } = require("../utils/utilsPlayers");
const { Players, Teams, Tournaments } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    let data_player = await Players.findAll();
    if (!data.name || !data.surname || !data.dni) {
      res.status(400).send("Faltan campos obligatorios");
    }
    if (data.name && data.surname && data.dni) {
      let players = data_player.find((e) => e.dni == data.dni);

      if (!players) {
        create_players(data);
        return res.status(200).send("Jugador creado con exito.");
      } else if (players) {
        res.status(400).send("El jugador ya existe");
      }
    }
  } catch (error) {
    console.log("ROMPO EN RUTA POST DE PLAYERS", error);
  }
});

router.get("/", async (req, res) => {
  const { name, surname, dni } = req.query;
  let the_players = await players_db();

  if (!name || !surname || !dni) {
    res.status(200).send(the_players);
  } else {
    let name_surname_players = the_players.filter(
      (p) =>
        p.name.toLowerCase() === name.toLowerCase &&
        p.surname.toLowerCase() === surname.toLowerCase
    );
    name_surname_players.length
      ? res.status(200).send(name_surname_players)
      : res
          .status(404)
          .send("No se encontro Jugador con ese nombre y apellido.");
  }
});

module.exports = router;
