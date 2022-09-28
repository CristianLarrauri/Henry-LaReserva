const { Router } = require("express");
const { Reviews } = require("../db");
const { create_review } = require("../utils/utilsReviews");

const router = Router();


// Ruta GET que trae todas las reseñas que estén en base de datos
router.get("/", async (req, res) => {
    try {
        const resenias = await Reviews.findAll({
            order: [["date", "DESC"]],
            Offset: req.query.page,
            limit: 5
        });

        res.status(200).send(resenias);

    } catch (error) {
        console.log("Error en ruta get de Reviews", error);
    }
});


// Ruta GET que te trae una reseña específica mediante el id.
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const resenia = await Reviews.findByPk(id);

        res.status(200).send(resenia);

    } catch (error) {
        console.log("Error en get por id, Reviews", error);
    }
});


// ------------------------------------------------------------------------------


router.put('/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let editReview = req.body;

        let data = await Reviews.update(editReview, {
            where: { id },
        });
        return res.status(200).send("Review successfully updated");

    } catch (error) {

        return res.status(400).send("ERROR EN PUT/REVIEWS", error);
    }
});


// Ruta POST para crear reviews.
router.post("/", async (req, res) => {
    try {
        let data = req.body;
        let data_reviews = await Reviews.findAll();

        if (!data.nombreUsuario || !data.comentario || !data.calificacionComplejo) res.status(400).send("Faltan campos requeridos");

        else {
            create_review(data);
            res.status(200).send('Review enviada correctamente');
        }

    } catch (error) {
        console.log('Error en POST/REVIEWS', error);
    }
});


// Ruta DELETE para borrar una reseña específica
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        let review = await Reviews.destroy({
            where: {
                id: id
            }
        });

        return res.status(200).send('Team deleted successfully');
    } catch (error) {
        console.log('Error at DELETE/REVIEWS teams', error);
    }
});

module.exports = router;