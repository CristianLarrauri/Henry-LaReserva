const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("tournaments", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amountOfTeams: {
      type: DataTypes.INTEGER,
    },
    dateInit: {
      type: DataTypes.STRING,
    },
    dateFinish: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  });
};
