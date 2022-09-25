// const mercadopago = require("mercadopago");
// require("dotenv").config();
// const { Router } = require("express");
// const Buys = require("../models/Buys");
// const router = Router();
// const access_token = "APP_USR-943877230059034-092202-de89def63c7dbdb08fd4752f4e60622d-1202964227";

// mercadopago.configure({
//     access_token: access_token,
//   });

//   router.get("/", (req, res) => {

//     let preference = {
//       items: [
//         {
//           title: "Inscripcion Torneo",
//           unit_price: 1,
//           quantity: 1,
//         },
//       ],
//       external_reference: `1`,
//       payment_methods: {
//         excluded_payment_types: [
//           {
//             id: "atm",
//           },
//           {
//             id: "ticket",
//           },
//         ],
//         installments: 3, //Cantidad máximo de cuotas
//       },
//       back_urls: {
//         success: "http://localhost:3001/mercadopago/checkout",
//         failure: "http://localhost:3001/mercadopago/checkout",
//         pending: "http://localhost:3001/mercadopago/checkout",
//       },
//     };

//     mercadopago.preferences
//       .create(preference)

//       .then(function (response) {
//         global.id = response.body.id;
//         res.json({ id: global.id });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });

//   router.get("/pagos", async (req, res) => {
//     const payment_id = req.query.payment_id;
//     const payment_status = req.query.status;
//     const external_reference = req.query.external_reference;
//     const merchant_order_id = req.query.merchant_order_id;

//     // const mensuAbonada = await Mensualidad.findOne({
//     //   where: {
//     //     orderId: external_reference,
//     //   },
//     // });
//     //Aquí edito el status de mi orden
//     Buys.findByPk(external_reference)
//       .then((order) => {
//         order.payment_id = payment_id;
//         order.payment_status = payment_status;
//         // order.merchant_order_id = merchant_order_id;
//         order.status = "completed";
//         console.info("Salvando order");
//         order
//           .save()
//           .then((_) => {
//             console.info("redirect success");
//             // mensuAbonada.update({ abonado: true });
//             // mensuAbonada.save();
//             return res.redirect("http://localhost:3000/home");
//           })
//           .catch((err) => {
//             console.error("error al salvar", err);
//             return res.redirect("http://localhost:3000/home");
//           });
//       })
//       .catch((err) => {
//         console.error("error al buscar", err);
//         return res.redirect("http://localhost:3000");
//       });

//     //proceso los datos del pago
//     //redirijo de nuevo a react con mensaje de exito, falla o pendiente
//   });

//   // //Busco información de una orden de pago
//   router.get("/pagos/:id", (req, res) => {
//     const mp = new mercadopago(access_token);
//     const id = req.params.id;
//     console.info("Buscando el id", id);
//     mp.get(`/v1/payments/search`, { status: "pending" }) //{"external_reference":id})
//       .then((resultado) => {
//         console.info("resultado", resultado);
//         res.json({ resultado: resultado });
//       })
//       .catch((err) => {
//         console.error("No se consulto:", err);
//         res.json({
//           error: err,
//         });
//       });
//   });

// mercadopago.configure({
//   access_token: access_token
// });

// router.post('/', (req, res) => {
//   /* aquí crea tu orden en la DB para el usuario logeado */
//   const order = db.orders.create({ userId: req.userId, productId: req.body.productId }); // <--- pseudo-código

//   Ahora le decimos a MP que cree la "preferencia". Asume que "order" tiene datos del producto
//   mercadopago.preferences.create({
//     external_reference: '1',
//     notification_url: `http://localhost:3001/api/mercadopago/ipn`, // <-- apunta al endpoint definido en la línea 29
//     items: [
//       {
//         title: "Inscripcion Torneo",
//         unit_price: 1,
//         quantity: 1,
//       }
//     ]
//   }).then((preference) => {
//     res.json({ preferenceId: preference.id });
//   });
// });

// router.get('/api/mercadopago/ipn', (req, res) => {
//   if (req.params.type === 'payment') { // hay otros, nos importa solo payment
//     const paymentId = req.params.data.id; // ID de payment en MercadoPago

//     Documentación de pagos: https://www.mercadopago.cl/developers/es/reference/payments/_payments_search/get/
//     mercadopago.payment.get(paymentId).then((error, payment) => {
//       Obtenemos los datos del pago desde MP
//       const orderId = payment.external_reference; // esto es el ID de la orden que especificamos en la linea 15

//       buscamos en nuestra db la orden
//       db.orders.find(orderId).then((order) => {

//         if (order.totalPrice === payment.transaction_amount) { // para que no se nos hagan los vivos XD
//           order.status = payment.status; // hay muchos estados, revisa https://www.mercadopago.cl/developers/es/reference/payments/_payments_search/get/

//           comprobamos que sea "approved" y que no hayamos entregado ya el pedido... recuerda que "order" es algo que
//           debes implementar tu, que podría tener un cambpo "delivered" para saber si ya hiciste entrega o no del
//           pedido
//           if (order.status === 'approved' && !order.delivered) {
//             deliverOrder(order); // función ficticia que debes implementar... es básicamente "entregar" el producto
//           }
//         }

//       });
//     });
//   }
// });


const mercadopago = require("mercadopago");
const { Router } = require("express");
const router = Router();

mercadopago.configure({
  access_token:
    "APP_USR-943877230059034-092202-de89def63c7dbdb08fd4752f4e60622d-1202964227",
});

let preference = {
  items: [
    {
      title: "hola",
      unit_price: 100,
      quantity: 1,
    },
  ],

};

router.post("/", async (req, res) => {
  let error = false;


  if (error) {
    res.send("Sin stock").statusCode(400);
  } else {
    const response = await mercadopago.preferences.create(preference);
    const preferenceId = response.body.id;
    res.send({ preferenceId });
  }
});

module.exports = router;