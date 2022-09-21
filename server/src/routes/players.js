const { Router } = require("express");
const { create_players, players_db } = require("../utils/utilsPlayers");
const { Players, Teams, Tournaments } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const data_player = await Players.findAll();

    if (!data) {
      res.status(400).send("Faltan campos");
    }
    if (data) {
      let player = data_player.filter((p) => p.dni === data.dni);

      if (player.length) {
        return res.status(400).send("Ya existe el jugador");
      } else {
        create_players(data);
        return res.status(200).send(data);
      }
    }

    // for (const e of data) {
    //   let comparation = e.dni === data_player.dni;

    //   if (comparation) {
    //     res.status(400).send("Jugador existente");
    //   } else {
    //     create_players(data);
    //     data_player.filter((e) => e.dni === data_player.dni);

    // comparation.length
    // ? res.status(200).send(comparation)
    // : res.status(400).send("Ya existe este jugador");
    //     res.status(200).send("Jugador creado con exito");
    //   }
    // }
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
