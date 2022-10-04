const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {

    sequelize.define('payment_details', {
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },
        { timestamps: false }
    );
};