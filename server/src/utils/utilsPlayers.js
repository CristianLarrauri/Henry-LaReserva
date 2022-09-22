const { Players, Teams } = require("../db");
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
  try {
    const { name, surname, dni, teams } = data;

    const new_players = await Players.create({
      name,
      surname,
      dni,
    });
    const players_teams = await Teams.findAll({
      where: { name: teams },
    });
    new_players.addTeams(players_teams);

    return new_players;
  } catch (error) {
    console.log("ROMPO EN UTILISPLAYERS", error);
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
    console.log("ERROR EN UTILSGET", error);
  }
};

module.exports = { create_players, players_db, preload_players };