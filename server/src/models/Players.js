const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("players", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },
  });
};
