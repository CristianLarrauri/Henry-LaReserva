const { Players, Teams, Tournaments } = require("../db");

// CREATE TOURNAMENTS ______________________________
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
    console.log("ERROR EN create_tournament", error);
  }
};

// GET TOURNAMENTS DB ______________________________
const get_tournaments_db = async () => {
  try {
    return await Tournaments.findAll({
      include: {
        model: Teams,
        attributes: ["name"],
        throught: {
          attributes: [],
        },
      },
    });
  } catch (error) {
    console.log("ERROR EN get_tournaments_db", error);
  }
};

module.exports = { create_tournament, get_tournaments_db };
