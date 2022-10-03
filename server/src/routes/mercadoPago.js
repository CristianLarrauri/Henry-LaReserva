const mercadopago = require("mercadopago");
require("dotenv").config();
const { Router } = require("express");
const { Buys, PaymentDetails } = require("../db.js");
const { find_by_email } = require("../utils/users.js");
const router = Router();
const ruta_deploy = "https://lareserva-frontend.herokuapp.com/mercadopago/pagos";
const ruta_local = "http://localhost:3000/home";
const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

// "/mercadopago"
router.get("/", (req, res) => {

  let preference = {
    items: [
      {
        title: "Inscripcion Torneo",
        unit_price: 1,
        quantity: 1,
      },
    ],
    // payer: {
    //   first_name: "Test",
    //   last_name: "Test",
    //   phone: {
    //     area_code: "11",
    //     number: 987654321
    //   },
    // },
    external_reference: `1`,
    payment_methods: {
      excluded_payment_types: [
        {
          id: "atm",
        },
        {
          id: "ticket",
        },
      ],
      installments: 3, //Cantidad máximo de cuotas
    },
    back_urls: {
      success: ruta_local,
      failure: ruta_local,
      pending: ruta_local,
    },
  };

  mercadopago.preferences
    .create(preference)

    .then(function (response) {
      global.id = response.body.id;
      // email = response.body.payer.email;
      res.json({ id: global.id });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/pagos", async (req, res) => {
  const payment_id = req.query.payment_id;
  const payment_status = req.query.status;
  const external_reference = req.query.external_reference;
  const merchant_order_id = req.query.merchant_order_id;

  //Aquí edito el status de mi orden
  Buys.findByPk(external_reference)
    .then((order) => {
      order.payment_id = payment_id;
      order.payment_status = payment_status;
      order.merchant_order_id = merchant_order_id;
      order.status = "completed";
      console.info("Salvando order");
      order
        .save()
        .then((_) => {
          console.info("redirect success");
          // mensuAbonada.update({ abonado: true });
          // mensuAbonada.save();
          return res.redirect(ruta_local);
        })
        .catch((err) => {
          console.error("error al salvar", err);
          return res.redirect(ruta_local);
        });
    })
    .catch((err) => {
      console.error("error al buscar", err);
      return res.redirect(ruta_local);
    });
});

// //Busco información de una orden de pago
router.get("/pagos/:id", (req, res) => {
  const mp = new mercadopago(ACCESS_TOKEN);
  const id = req.params.id;
  console.info("Buscando el id", id);
  mp.get(`/v1/payments/search`, { status: "pending" }) //{"external_reference":id})
    .then((resultado) => {
      console.info("resultado", resultado);
      res.json({ resultado: resultado });
    })
    .catch((err) => {
      console.error("No se consulto:", err);
      res.json({
        error: err,
      });
    });
});

module.exports = router;