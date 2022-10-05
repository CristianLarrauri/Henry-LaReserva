const { Router } = require("express");
const { Tournaments, Teams } = require("../db");
const {
  create_tournament,
  get_tournaments_db,
  get_tournaments_panel,
  get_tournaments_disabled,
} = require("../utils/utilsTournaments");
const { Op } = require("sequelize");

const router = Router();

// ------------------------------------------------------------
// Mercado pago
const mercadopago = require("mercadopago");
require("dotenv").config();

mercadopago.configure({
  access_token:
    "APP_USR-943877230059034-092202-de89def63c7dbdb08fd4752f4e60622d-1202964227",
});

module.exports = {
  mercadopago,
};

// ----------------------------------------------------------------
// Get /tournaments/admin

router.get("/panel", async (req, res) => {
  try {
    let data = await get_tournaments_panel();

    res.status(200).send(data);
  } catch (error) {
    console.log("No hay torneos");
  }
});

//.........................................................................................//
// POST /tournaments
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
    console.log("ERROR EN RUTA POST/tournaments");
  }
});

//.........................................................................................//
// GET /tournaments && GET /tournaments?name="..."

router.get("/", async (req, res) => {
  try {
    let { name } = req.query;
    let data = await get_tournaments_db();

    // filtros combinados (genre, category, state)
    if (req.query.genre && req.query.category && req.query.state) {
      let dataFilter = await Tournaments.findAll({
        where: {
          enabled: true,
          category: req.query.category,
          genre: req.query.genre,
          state: req.query.state,
        },
        Offset: req.query.page,
        limit: 6,
        order: [[req.query.property, req.query.order]],
      });
      return res.status(200).send(dataFilter);
    }

    // filtros combinados (genre, category)
    if (req.query.genre && req.query.category) {
      let dataFilter = await Tournaments.findAll({
        where: {
          enabled: true,
          category: req.query.category,
          genre: req.query.genre,
        },
        Offset: req.query.page,
        limit: 6,
        order: [[req.query.property, req.query.order]],
      });
      return res.status(200).send(dataFilter);
    }

    // filtros combinados (genre, state)
    if (req.query.genre && req.query.state) {
      let dataFilter = await Tournaments.findAll({
        where: {
          enabled: true,
          genre: req.query.genre,
          state: req.query.state,
        },
        Offset: req.query.page,
        limit: 6,
        order: [[req.query.property, req.query.order]],
      });
      return res.status(200).send(dataFilter);
    }

    // filtros combinados (category, state)
    if (req.query.category && req.query.state) {
      let dataFilter = await Tournaments.findAll({
        where: {
          enabled: true,
          category: req.query.category,
          state: req.query.state,
        },
        Offset: req.query.page,
        limit: 6,
        order: [[req.query.property, req.query.order]],
      });
      return res.status(200).send(dataFilter);
    }

    // filtro genre
    if (req.query.genre) {
      let dataFilter = await Tournaments.findAll({
        Offset: req.query.page,
        limit: 6,
        order: [[req.query.property, req.query.order]],
        where: {
          enabled: true,
          genre: req.query.genre,
        },
      });
      return res.status(200).send(dataFilter);
    }

    // filtro category
    if (req.query.category) {
      let dataFilter = await Tournaments.findAll({
        where: {
          enabled: true,
          category: req.query.category,
        },
        Offset: req.query.page,
        limit: 6,
        order: [[req.query.property, req.query.order]],
      });
      return res.status(200).send(dataFilter);
    }

    // filtro state
    if (req.query.state) {
      let dataFilter = await Tournaments.findAll({
        where: {
          enabled: true,
          state: req.query.state,
        },
        Offset: req.query.page,
        limit: 6,
        order: [[req.query.property, req.query.order]],
      });
      return res.status(200).send(dataFilter);
    }

    // busqueda name o total
    if (name) {
      let data_tournament = data.filter((ele) =>
        ele.name.toLowerCase().includes(name.toLowerCase())
      );

      data_tournament.length > 0
        ? res.status(200).send(data_tournament)
        : res.status(404).send("No se encontro el torneo");
    } else {
      let data_total = await Tournaments.findAll({
        where: {
          enabled: true,
        },
        offset: req.query.page,
        limit: 6,
        order: [[req.query.property, req.query.order]],
        include: {
          model: Teams,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      return res.status(200).send(data_total);
    }
  } catch (error) {
    console.log("ERROR EN RUTA GET/tournaments", error);
  }
});

//.........................................................................................//
// GET /tournaments/:id
router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data = await get_tournaments_db();

    if (id) {
      let data_tournament = data.find((tournament) => tournament.id == id);

      data_tournament
        ? res.status(200).send(data_tournament)
        : res.status(404).send("No esta el detalle del torneo");
    }
  } catch (error) {
    console.log("No esta el detalle del torneo");
  }
});

//.........................................................................................//
// DELETE /tournaments
router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;

    if (id) {
      let data = await Tournaments.destroy({
        where: {
          id,
        },
      });
    }
    return res.status(200).send("Tournament successfully deleted");
  } catch (error) {
    return res.status(400).send("ERROR EN DELETE/TOURNAMENTS", error);
  }
});

//.........................................................................................//
// PUT /tournaments
router.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let editTournament = req.body;

    let data = await Tournaments.update(editTournament, {
      where: { id },
    });
    return res.status(200).send("Tournament successfully edited");
  } catch (error) {
    return res.status(400).send("ERROR EN PUT/TOURNAMENTS", error);
  }
});

//.........................................................................................//
// PUT /tournaments/cupos
router.put("/quitcupos/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let tournament = await Tournaments.findByPk(id);

    if (tournament.amountOfTeams <= 0) {
      return res.status(400).send("No hay mas cupos");
    }

    await tournament.update({
      ...tournament,
      amountOfTeams: tournament.amountOfTeams - 1,
    });

    return res.status(200).send("Inscripto");
  } catch (error) {
    console.log("ERROR EN RUTA POST/tournaments/cupos", error);
  }
});

router.put("/addcupos/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let tournament = await Tournaments.findByPk(id);

    await tournament.update({
      ...tournament,
      amountOfTeams: tournament.amountOfTeams + 1,
    });

    return res.status(200).send("Inscripto");
  } catch (error) {
    console.log("ERROR EN RUTA POST/tournaments/addcupos", error);
  }
});
// modificar enabled

router.put("/enabled/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let tournament = await Tournaments.findByPk(id);
    await tournament.update({
      ...tournament,
      enabled: tournament.enabled === false ? true : false,
    });
    res.send(tournament);
  } catch (error) {
    console.log("Rompo en ruta put/enabled", error);
  }
});

module.exports = router;
