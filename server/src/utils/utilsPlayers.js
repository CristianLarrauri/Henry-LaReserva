const { Players, Teams, Tournaments } = require("../db");

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

module.exports = { create_players, players_db };
