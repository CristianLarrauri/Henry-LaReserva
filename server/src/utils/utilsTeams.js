const { Teams, Players, Tournaments } = require("../db");
const preTeams = require("../json/preTeams.json");

const preload_teams = async () => {
  try {
    let data = preTeams.map((teams) => {
      return {
        name: teams.name,
        players: teams.players,
        tournaments: teams.tournaments,
      };
    });

    for (const team of data) {
      create_teams(team);
    }

    return data;
  } catch (error) {
    console.log("ERROR EN preload_teams", error);
  }
};

const create_teams = async (data) => {
  try {
    const { name, players, tournaments } = data;

    const new_teams = await Teams.create({
      name,
    });

    const players_relation = await Players.findAll({
      where: { dni: players },
    });

    const tournaments_relation = await Tournaments.findAll({
      where: { name: tournaments },
    });

    new_teams.addPlayers(players_relation);
    new_teams.addTournaments(tournaments_relation);
    return new_teams;
  } catch (error) {
    console.log("error en create_teams function", error);
  }
};

const get_db_info = async () => {
  try {
    return await Teams.findAll({
      include: [{ model: Players }, { model: Tournaments }],
    });
  } catch (error) {
    console.log("error en get_db_info", error);
  }
};

module.exports = { create_teams, get_db_info, preload_teams };
