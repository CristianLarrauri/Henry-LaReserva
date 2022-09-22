// const { Router } = require("express");
// const { Tournaments, Teams } = require("../db");

// const router = Router();

// //.........................................................................................//
// // GET /home
// router.get("/", async (req, res) => {
//   try {
//     let data = await Tournaments.findAll({
//       where: { state: "Comming Soon" },
//       offset: 1,
//       limit: 5,
//       order: [["dateInit", "ASC"]],
//     });
//     return res.status(200).send(data);
//   } catch (error) {
//     console.log("ERROR EN RUTA GET/next", error);
//   }
// });

// module.exports = router;
