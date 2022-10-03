const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");
const { EMAIL_RESERVA, CONTRA_RESERVA } = process.env;

router.post("/", async (req, res) => {
  const { email, option } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.email",
    port: 587,
    secure: true,
    auth: {
      user: `${EMAIL_RESERVA}`,
      pass: `${CONTRA_RESERVA}`,
    },
  });

  if (option === "Pago") {
    const mailOptions = {
      from: `${EMAIL_RESERVA}`,
      to: email,
      subject: "La Reserva Complejo",
      text: "Su inscripcion ha sido procesada con exito. Los esperamos para competir y buscar la victoria!!",
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        console.log("Email enviado", info.response);
        res.status(200).json(info);
      }
    });
  } else if (option === "Ban") {
    const mailOptions = {
      from: `${EMAIL_RESERVA}`,
      to: email,
      subject: "La Reserva Complejo",
      text: `Su usuario con el siguiente mail ${email} ha sido baneado.`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send(error.message);
      } else {
        console.log("Email enviado", info.response);
        res.status(200).json(info);
      }
    });
  }
  else if (option === "Unban") {
    const mailOptions = {
      from: `${EMAIL_RESERVA}`,
      to: email,
      subject: "La Reserva Complejo",
      text: `Su usuario con el siguiente mail ${email} ha sido desbaneado.`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send(error.message);
      } else {
        console.log("Email enviado", info.response);
        res.status(200).json(info);
      }
    });
  }
});

module.exports = router;
