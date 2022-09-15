const { Teams, Players } = require('../db');

const create_teams = async (data) => {
    try {
        const { name, players } = data;

        const new_teams = await Teams.create({
            name
        });

        const players_relation = await Players.findAll({
            where: { name: players }
        })

        new_teams.addPlayers(players_relation);
        return new_teams;
    } catch (error) {
        console.log('error en create_teams function', error);
    }
}

module.exports = { create_teams };