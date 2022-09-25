import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import {
	getAllUsers,
	createUser,
	banUser,
	toAdmin,
	getUserDetails,
	getAllTournaments,
	getTournamentsAdmin,
	modifyTournaments,
	deleteTournament
} from '../redux/actions';

export default function DashBoardAdmin() {
	const dispatch = useDispatch();
	const allUsers = useSelector((state) => state.users);
	const allTournaments = useSelector((state) => state.tournamentsAdmin);

	const [idUser, setIdUser] = useState('');
	const [idTournament, setIdTournament] = useState('');
	const [nameTournament, setNameTournament] = useState('');

	useEffect(() => {
		dispatch(getAllUsers());
		dispatch(getTournamentsAdmin());
	}, [dispatch]);

	const handleSelectUser = (e) => {
		let target = e.target.value;
		let targetName = e.target.name;
		setIdUser(target);
		setNameTournament(targetName);
	};

	const handleSelectTournament = (e) => {
		let target = e.target.value;
		setIdTournament(target);
	};

	const handleBan = () => {
		dispatch(banUser(idUser));
	};

	const handleDeleteTournament = () => {
		dispatch(deleteTournament(idTournament));
	};

	//admin de usuarios: Listar usuarios, Banear usuarios,
	//admin de torneos: Eliminar, modificar, crear
	//admin de reseñas: eliminar
	return (
		<div>
			<h1>Panel de administrador</h1>
			<div>
				<h2>Administracion de usuarios: </h2>
				<div>
					<h3>Banear Usuario:</h3>
					<select onChange={(e) => handleSelectUser(e)}>
						<option>Ver usuarios</option>
						{allUsers?.map((e) => (
							<option key={e.id} value={e.id}>
								{e.name}, {e.email}
							</option>
						))}
					</select>
					{idUser === '' ? (
						<p>Seleccione un usuario</p>
					) : (
						<button onClick={(e) => handleBan(e)}>Banear user</button>
					)}
				</div>
			</div>
			<div>
				<h2>Administracion de torneos:</h2>
				<select onChange={(e) => handleSelectTournament(e)}>
					<option>Ver torneos</option>
					{allTournaments?.map((e) => (
						<option key={e.id} value={e.id} name={e.name}>
							{e.name}
						</option>
					))}
				</select>
				{idTournament === '' ? (
					<p>Seleccione un torneo</p>
				) : (
					<Link to={`/admin/modify/${idTournament}`}>
						<button>Modifica el torneo</button>
					</Link>
				)}
				{idTournament === '' ? (
					<></>
				) : (
					<button onClick={(e) => handleDeleteTournament(e)}>
						Elimina el torneo
					</button>
				)}

				<Link to="/create">
					<button>Crear nuevo torneo</button>
				</Link>
			</div>
			<div>
				<h2>Administacion de reseñas</h2>
			</div>
		</div>
	);
}
