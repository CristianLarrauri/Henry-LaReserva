const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("buys", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
    {
      timestamps: false
    });
};
