const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");
const { EMAIL_RESERVA, CONTRA_RESERVA } = process.env;
const { preload_admin, create_admin } = require("../utils/users");

router.post("/", async (req, res) => {
  const data = req.body;

  let aux = await create_admin(data);

  return res.status(200).send(aux);
});

module.exports = router;
