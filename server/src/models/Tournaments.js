const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('tournaments', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		amountOfTeams: {
			type: DataTypes.INTEGER
		},
		dateInit: {
			type: DataTypes.STRING
		},
		dateFinish: {
			type: DataTypes.STRING
		},
		category: {
			type: DataTypes.ENUM('Sub20', 'Libre', 'Senior')
		},
		genre: {
			type: DataTypes.ENUM('Masculino', 'Femenino', 'Mixto')
		},
		state: {
			type: DataTypes.ENUM('Finalizado', 'En curso', 'Proximo'),
			defaultValue: 'Proximo'
		},
		description: {
			type: DataTypes.TEXT
		}
	});
};
