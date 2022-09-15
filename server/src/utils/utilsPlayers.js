const { Players, Teams, Tournaments } = require("../db");

const create_players = async (data) => {
  try {
    const { name, surname, dni } = data;

    const new_players = await Players.create({
      name,
      surname,
      dni,
    });
    return new_players;
  } catch (error) {
    console.log("ROMPO EN UTILISPLAYERS", error);
  }
};

module.exports = { create_players };
