const { Players, Teams, Tournaments } = require("../db");
const prePlayers = require("../json/preplayers.json");

const preload_players = async () => {
  try {
    let data = prePlayers.map((players) => {
      return {
        name: players.name,
        surname: players.surname,
        dni: players.dni,
        tournaments: players.tournaments,
        goals: players.goals,
      };
    });

    for (const player of data) {
      create_players(player);
    }

    return data;
  } catch (error) {
    console.log("ERROR EN preload_players", error);
  }
};

const create_players = async (data) => {
  const { name, surname, dni, tournaments, goals } = data;
  try {
    let new_players = await Players.create({
      name,
      surname,
      dni,
      goals,
    });

    let tournaments_relation = await Tournaments.findAll({
      where: { name: tournaments },
    });

    await new_players.addTournaments(tournaments_relation);

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
