const { Router } = require("express");
const { Teams, Players } = require("../db");
const { create_teams, get_db_info } = require("../utils/utilsTeams");

const router = Router();

//ruta post para --> /teams
router.post("/", async (req, res) => {
  let data = req.body;
  let data_teams = await Teams.findAll();

  if (!data.name) res.status(400).send("Name es requerido");

  if (data.name) {
    let team = data_teams.find((el) => el.name === data.name);

    if (!team) {
      let newTeam = await create_teams(data);
      return res.status(200).send(newTeam);
    }

    if (team) res.status(400).send("This team already exist!");
  }
});

// Ruta get para --> /teams y /teams?name=...
router.get("/", async (req, res) => {
  try {
    const { name } = req.query;

    const info = await get_db_info();

    if (!name) {
      res.status(200).send(info);
    } else {
      const filtrado = info.filter((ele) =>
        ele.name.toLowerCase().includes(name.toLowerCase())
      );

      filtrado.length
        ? res.status(200).send(filtrado)
        : res.status(400).send("Team not found");
    }
  } catch (error) {
    console.log("Error en ruta get de teams", error);
  }
});

//ruta delete para --> teams/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let team = await Teams.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).send("Team deleted successfully");
  } catch (error) {
    console.log("Error at router.delete teams", error);
  }
});

// Ruta PUT para que el admin pueda actualizar info de teams (tabla de posiciones)
// router.put('/:id', async (req, res) => {
//     try {
//         let { id } = req.params;
//         let editTeam = req.body;

//         let data = await Teams.update(editTeam, {
//           where: { id },
//         });
//         return res.status(200).send("Team successfully updated");
//       } catch (error) {
//         return res.status(400).send("ERROR EN PUT/TEAMS", error);
//       }
// });

router.put("/add/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let teams = await Teams.findByPk(id); // findByPk ??????!!!

    // if (players.amountOfTeams <= 0) {
    //   return res.status(400).send("No hay mas cupos");
    // }

    await teams.update({
      ...teams,
      points: teams.points + 1,
    });

    return res.status(200).send("Punto agregado");
  } catch (error) {
    console.log("ERROR EN RUTA PUT/add/teams/points", error);
  }
});

router.put("/quit/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let teams = await Teams.findByPk(id); // findByPk ??????!!!

    // if (players.amountOfTeams <= 0) {
    //   return res.status(400).send("No hay mas cupos");
    // }

    await teams.update({
      ...teams,
      points: teams.points - 1,
    });

    return res.status(200).send("Punto quitado");
  } catch (error) {
    console.log("ERROR EN RUTA PUT/quit/teams/points", error);
  }
});

module.exports = router;
