const { Router } = require("express");
const { Teams, Players } = require('../db');
const { create_teams } = require('../utils/utilsTeams');

const router = Router();


router.post('/', async (req, res) => {
    let data = req.body;
    let data_teams = await Teams.findAll();

    if (!data.name) res.status(400).send('Name es requerido');

    if (data.name) {
        let team = data_teams.find(el => el.name === data.name);

        if (!team) {
            create_teams(data)
            res.status(200).send('Team created succesfully');
        }

        if (team) res.status(400).send('This team already exist!');
    }
});

module.exports = router;