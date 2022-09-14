const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("equipos", {
    name: {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  });
};
