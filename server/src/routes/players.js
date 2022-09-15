const { Router } = require("express");
const { create_players } = require("../utils/utilsPlayers");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    let data_player = await Players.findAll();
    if (!data.name || !data.surname || !data.dni) {
      res.status(400).send("Faltan campos obligatorios");
    }
    if (data.name && data.surname && data.dni) {
      let players = data_player.find((e) => e.dni === e.dni);

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

module.exports = router;
