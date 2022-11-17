const { Router } = require('express');

const { find_by_email } = require('../utils/users');

const router = Router();
const { Users, Teams } = require('../db');

// Usuarios

router.get('/historial', async (req, res) => {
	try {
		let data = await Users.findAll({
			include: {
				model: Teams,
				attributes: ['name'],
				through: {
					attributes: []
				}
			}
		});

		return res.status(200).send(data);
	} catch (error) {
		res.status(404).send(error);
		console.log('Rompo ruta Get de User/historial');
	}
});

router.get('/', async (req, res) => {
	try {
		const { email } = req.query;
		let allUsers = await Users.findAll();
		if (email) {
			let filterEmail = allUsers.filter((u) =>
				u.email.toLowerCase().include(email.toString().toLowerCase())
			);
			return res.send(filterEmail);
		} else {
			return res.send(allUsers);
		}
	} catch (error) {
		console.log('Rompo ruta Get de User');
	}
});

router.get('/:email', async (req, res) => {
	try {
		const { email } = req.params;
		const user = await Users.findOne({
			where: { email: email }
		});
		if (user) {
			return res.status(200).json(user);
		} else {
			return res.status(400).json({ message: 'Email noy found' });
		}
	} catch (error) {
		console.log('Rompo en Get/:email', error);
	}
});

router.post('/post', async (req, res) => {
	let { name, email, img } = req.body;
	try {
		const user = await Users.findOrCreate({
			where: { email: email }
		}); //busca usuario que tenga el email que le pasamos,
		//  si el usuario no esta, lo crea, si o encuentra lo devuelve.

		return res.send(user);
	} catch (error) {
		console.log('Rompo en ruta get/post', error);
	}
});

// router.put("/update/:id", async (req, res) => {
//   try {
//     const { admin, ban } = req.body;

//     const { id } = req.params;
//     let users = await User.findByPk(id);
//     await users.update({
//       ...users,
//       admin: admin,
//       ban: ban,
//     });
//     res.send(users);
//   } catch (error) {
//     console.log("Rompo en ruta puut", error);
//   }
// });

router.put('/ban/:id', async (req, res) => {
	try {
		const { id } = req.params;
		let user = await Users.findByPk(id);
		user.admin === false
			? await user.update({
					...user,
					ban: user.ban === false ? true : false
			  })
			: console.log('este usuario es administrador');

		res.send(user);
	} catch (error) {
		console.log('Rompo en put/ban');
	}
});

//Admin

router.put('/admin/:id', async (req, res) => {
	try {
		const { id } = req.params;
		let user = await Users.findByPk(id);
		await user.update({
			...user,
			admin: user.admin === false ? true : false
		});
		res.send(user);
	} catch (error) {
		console.log('Rompo en ruta put/admin', error);
	}
});
//Ruta delete
router.delete('/:email', async (req, res) => {
	const { email } = req.params;
	try {
		await Users.destroy({
			where: { email }
		});
		res.send('El usuario a sido borrado');
	} catch (error) {
		console.log('ROMPO EN ROUTER DELETE USER', error);
	}
});

module.exports = router;
