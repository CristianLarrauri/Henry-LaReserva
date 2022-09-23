const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("players", {
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goals: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  });
};
