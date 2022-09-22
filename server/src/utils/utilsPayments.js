var mercadopago = require("mercadopago");

const crear_orden = async (req, res) => {

    mercadopago.configure({
        access_token: 'TEST-943877230059034-092202-722e4927cf6c85fa0d18af03dd92fc63-1202964227'
    });

    var preference = {
        items: [
            {
                title: 'Torneo W-40',
                quantity: 1,
                currency_id: 'ARS',
                unit_price: 1.5
            }
        ],
        notification_url: "https://8c7f-181-228-63-196.sa.ngrok.io" // cambiar esto despues del deploy
    };

    mercadopago.preferences.create(preference)
        .then((respuesta) => {
            res.json(respuesta);
        })
        .catch((e) => {
            console.log(e)
        })
}

const notification_orden = async (req, res) => {
    const data = req.query;

    console.log(data);

    res.status(200);
}

module.exports = { crear_orden, notification_orden };
