const { Players, Teams, Tournaments } = require("../db");
const preTournaments = require("../json/preTournaments.json");

//.........................................................................................//
// PRELOAD TOURNAMENTS
const preload_tournaments = async () => {
  try {
    let data = preTournaments.map((tournament) => {
      return {
        name: tournament.name,
        amountOfTeams: tournament.amountOfTeams,
        dateInit: tournament.dateInit,
        dateFinish: tournament.dateFinish,
        category: tournament.category,
        genre: tournament.genre,
        state: tournament.state,
        description: tournament.description,
      };
    });

    await Tournaments.bulkCreate(data);

    return data;
  } catch (error) {
    console.log("ERROR EN preload_tournaments", error);
  }
};

//.........................................................................................//
// CREATE TOURNAMENTS
const create_tournament = async (data) => {
  try {
    const {
      name,
      amountOfTeams,
      dateInit,
      dateFinish,
      category,
      genre,
      state,
      description,
      teams,
    } = data;

    const new_tournament = await Tournaments.create({
      name,
      amountOfTeams,
      dateInit,
      dateFinish,
      category,
      genre,
      state,
      description,
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

//.........................................................................................//
// GET TOURNAMENTS DB
const get_tournaments_db = async () => {
  try {
    return await Tournaments.findAll({
      where: { enabled: true },
      include: [{ model: Teams }, { model: Players }],
    });
  } catch (error) {
    console.log("ERROR EN get_tournaments_db", error);
  }
};

const get_tournaments_disabled = async () => {
  try {
    return await Tournaments.findAll({
      where: { enabled: true },
      include: [{ model: Teams }, { model: Players }],
    });
  } catch (error) {
    console.log("ERROR EN get_tournaments_db", error);
  }
};

const get_tournaments_panel = async () => {
  try {
    return await Tournaments.findAll({
      include: [{ model: Teams }, { model: Players }],
    });
  } catch (error) {
    console.log("ERROR EN get_tournaments_panel", error);
  }
};

module.exports = {
  create_tournament,
  get_tournaments_db,
  preload_tournaments,
  get_tournaments_panel,
  get_tournaments_disabled,
};
