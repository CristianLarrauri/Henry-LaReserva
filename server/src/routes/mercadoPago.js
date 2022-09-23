const mercadopago = require("mercadopago");
require("dotenv").config();
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
            unit_price: 1,
            quantity: 1,
        },
    ],
};

router.post("/", async (req, res) => {
    let error = false;

    if (error) {
        res.status(400).send("No hay más lugar perri");
    }
    if (!error) {
        const response = await mercadopago.preferences.create(preference);
        const preferenceId = response.body.id;
        res.send({ preferenceId });
    }
});

module.exports = router;