const router = require("express").Router();
const { Buys, PaymentDetails } = require("../db");

router.post("/", async (req, res) => {
  try {
    const { tournamentId } = req.body;
    const newOrder = await Buys.create({
      tournamentId: tournamentId,
    });

    res.send(newOrder);
  } catch (e) {
    console.log(e);
  }
});

router.get("/detalle/:id", (req, res, next) => {
  const id = req.params.id;

  Buys.findOne({
    where: {
      id: id,
    },
    include: {
      model: PaymentDetails,
      where: { orderId: id },
    },
  })
    .then((obj) => {
      res.send(obj);
    })
    .catch(next);
});

module.exports = router;
