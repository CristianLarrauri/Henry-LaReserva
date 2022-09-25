const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("buys", {
    payment_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    payment_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
    {
      timestamps: false
    });
};
