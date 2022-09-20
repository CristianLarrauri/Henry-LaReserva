const { Teams, Players } = require("../db");
const preTeams = require("../json/preTeams.json");

const preload_teams = async () => {
  try {
    let data = preTeams.map((teams) => {
      return {
        name: teams.name,
      };
    });

    await Teams.bulkCreate(data);

    return data;
  } catch (error) {
    console.log("ERROR EN preload_teams", error);
  }
};

const create_teams = async (data) => {
  try {
    const { name, players } = data;

    const new_teams = await Teams.create({
      name,
    });

    const players_relation = await Players.findAll({
      where: { name: players },
    });

    new_teams.addPlayers(players_relation);
    return new_teams;
  } catch (error) {
    console.log("error en create_teams function", error);
  }
};

const get_db_info = async () => {
  try {
    return await Teams.findAll({
      include: {
        model: Players,
        attributes: ["name", "surname", "dni"],
        through: {
          attributes: [],
        },
      },
    });
  } catch (error) {
    console.log("error en get_db_info", error);
  }
};

module.exports = { create_teams, get_db_info, preload_teams };
