const { Router } = require("express");
const { Teams, Players } = require('../db');
const { create_teams, get_db_info } = require('../utils/utilsTeams');

const router = Router();

//ruta post para --> /teams
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


// Ruta get para --> /teams y /teams?name=...
router.get('/', async (req, res) => {
    try {
        const { name } = req.query;

        const info = await get_db_info();

        if (!name) {
            res.status(200).send(info);
        }
        else {
            const filtrado = info.filter(ele => ele.name.toLowerCase().includes(name.toLowerCase()));

            filtrado.length ? res.status(200).send(filtrado) : res.status(400).send('Team not found');
        }
    } catch (error) {
        console.log('Error en ruta get de teams', error);
    }
});

//ruta delete para --> teams/:id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        let team = await Teams.destroy({
            where: {
                id: id
            }
        });

        return res.status(200).send('Team deleted successfully');
    } catch (error) {
        console.log('Error at router.delete teams', error);
    }
});

module.exports = router;