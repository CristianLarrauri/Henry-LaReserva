const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("torneo", {
    nameTeam: {
      //Name equipos.
      type: DataTypes.STRING,
      allowNull: false,
    },
    amountOfTeams: {
      //cantidad de equipos
      type: DataTypes.INTEGER,
    },
    dateInit: {
      //fecha de inicio, y de finalizacion.
      type: DataTypes.DATE,
    },
    dateFinish: {
      type: DataTypes.DATE,
    },
    category: {
      // descripcion del torneo.
      type: DataTypes.ENUM("Sub - 20", "Libre", "Senior"),
    },
    genre: {
      type: DataTypes.ENUM("Masculino", "Femenino", "Mixto"),
    },
  });
};
