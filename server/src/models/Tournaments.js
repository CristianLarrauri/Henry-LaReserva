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
      type: DataTypes.ENUM("Sub20", "Free", "Senior"),
    },
    genre: {
      type: DataTypes.ENUM("Male", "Female", "Mixed"),
    },
    state: {
      type: DataTypes.ENUM("Completed", "In Progress", "Comming Soon"),
    },
    description: {
      type: DataTypes.TEXT,
    },
  });
};
