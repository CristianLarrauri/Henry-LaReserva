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

// router.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const data = req.body;

//   try {
//     let change_player = await Players.update(data, { where: { id } });
//     return res.send(change_player);
//   } catch (error) {
//     console.log("Rompo en route/put", error);
//   }
// });

router.put("/add/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let players = await Players.findByPk(id); // findByPk ??????!!!

    await players.update({
      ...players,
      goals: players.goals + 1,
    });

    return res.status(200).send("Gol agregado");
  } catch (error) {
    console.log("ERROR EN RUTA PUT/add/players/goals", error);
  }
});

router.put("/quit/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let players = await Players.findByPk(id); // findByPk ??????!!!

    if (players.goals === 0) return res.status(404).send("El jugador ya no tiene goles que le puedas quitar!");
    
    await players.update({
      ...players,
      goals: players.goals - 1,
    });

    return res.status(200).send("Gol quitado");
  } catch (error) {
    console.log("ERROR EN RUTA PUT/quit/players/goals", error);
  }
});

module.exports = router;