const { Players, Teams, Tournaments } = require("../db");
const prePlayers = require("../json/prePlayers.json");

const preload_players = async () => {
  try {
    let data = prePlayers.map((players) => {
      return {
        name: players.name,
        surname: players.surname,
        dni: players.dni,
      };
    });

    await Players.bulkCreate(data);

    return data;
  } catch (error) {
    console.log("ERROR EN preload_players", error);
  }
};

const create_players = async (data) => {
  const { name, surname, dni } = data;
  try {
    let new_players = await Players.create({
      name,
      surname,
      dni,
    });
    return new_players;
  } catch (error) {
    console.log("ERROR EN CREATE_PLAYER", error);
  }
};

const players_db = async () => {
  try {
    return await Players.findAll({
      include: {
        model: Teams,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
  } catch (error) {
    console.log("ERROR EN PLAYERS DB", error);
  }
};

module.exports = { create_players, players_db, preload_players };
