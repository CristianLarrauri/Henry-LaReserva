const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("teams", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
