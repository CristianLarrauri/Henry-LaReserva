const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("jugadores", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DNI: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
