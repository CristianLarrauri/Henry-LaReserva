const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {

    sequelize.define('reviews', {
        nombreUsuario: {
            type: DataTypes.STRING,
        },

        comentario: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        calificacionComplejo: {
            type: DataTypes.STRING, //( "0", "0.5", "1", "1.5" , "2", "2.5", "3", "3.5", "4", "4.5", "5"),
            allowNull: true,
        },

        date: {
            type: DataTypes.DATEONLY,
            defaultValue: Date.now()
        }

        // loged: {
        //     type:DataTypes.BOOLEAN,

        // },

    },
        { timestamps: false }
    );

};