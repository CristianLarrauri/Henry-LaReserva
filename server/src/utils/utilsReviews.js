const { Reviews } = require('../db');

const create_review = async (data) => {
	try {
		const { nombreUsuario, comentario, calificacionComplejo, date } = data;

		const new_reviews = await Reviews.create({
			nombreUsuario,
			comentario,
			calificacionComplejo,
			date
		});

		return new_reviews;
	} catch (error) {
		console.log('Error en create_reviews', error);
	}
};

// hacer variable contador para ir sumando la cantidad de estrellas y que se pueda hacer un promedio de las reviews

module.exports = { create_review };
