const mercadopago = require("mercadopago");
require("dotenv").config();
const { Router } = require("express");
const router = Router();
const access_token = "APP_USR-943877230059034-092202-de89def63c7dbdb08fd4752f4e60622d-1202964227";

mercadopago.configure({
    access_token: access_token,
  });
  
  router.get("/", (req, res) => {
  
    let preference = {
      items: [
        {
          title: "Inscripcion Torneo",
          unit_price: 1200,
          quantity: 1,
        },
      ],
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
        success: "http://localhost:3001/mercadopago/pagos",
        failure: "http://localhost:3001/mercadopago/pagos",
        pending: "http://localhost:3001/mercadopago/pagos",
      },
    };
  
    mercadopago.preferences
      .create(preference)
  
      .then(function (response) {
        global.id = response.body.id;
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
  
    const mensuAbonada = await Mensualidad.findOne({
      where: {
        orderId: external_reference,
      },
    });
    //Aquí edito el status de mi orden
    Order.findByPk(external_reference)
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
            mensuAbonada.update({ abonado: true });
            mensuAbonada.save();
            return res.redirect("http://localhost:3000/adminClinica");
          })
          .catch((err) => {
            console.error("error al salvar", err);
            return res.redirect("http://localhost:3000/adminClinica");
          });
      })
      .catch((err) => {
        console.error("error al buscar", err);
        return res.redirect("http://localhost:3000/adminClinica");
      });
  
    //proceso los datos del pago
    //redirijo de nuevo a react con mensaje de exito, falla o pendiente
  });
  
  // //Busco información de una orden de pago
  router.get("/pagos/:id", (req, res) => {
    const mp = new mercadopago(access_token);
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