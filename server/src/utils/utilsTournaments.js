const { Players, Teams, Tournaments } = require("../db");

const create_tournament = async (data) => {
  try {
    const {
      name,
      amountOfTeams,
      dateInit,
      dateFinish,
      category,
      genre,
      teams,
    } = data;

    const new_tournament = await Tournaments.create({
      name,
      amountOfTeams,
      dateInit,
      dateFinish,
      category,
      genre,
    });

    const teams_tournaments = await Teams.findAll({
      where: { name: teams },
    });

    await new_tournament.addTeams(teams_tournaments);

    return new_tournament;
  } catch (error) {
    return res.status(404).send("ERROR en create_tournament", error);
  }
};

module.exports = { create_tournament };
