const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('tournaments', {
		name: {
			//Name equipos.
			type: DataTypes.STRING,
			allowNull: false
		},
		amountOfTeams: {
			//cantidad de equipos
			type: DataTypes.INTEGER
		},
		dateInit: {
			//fecha de inicio, y de finalizacion.
			type: DataTypes.STRING
		},
		dateFinish: {
			type: DataTypes.STRING
		},
		category: {
			// descripcion del torneo.
			type: DataTypes.STRING
		},
		genre: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.TEXT
		}
	});
};
