import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

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
		<div className='min-h-screen flex flex-col justify-between items-center'>
			<Nav/>

			<div className='bg-gray-100 flex flex-col items-center p-10 shadow shadow-black'>
			<h1 className='text-2xl font-bold'>Panel de administrador</h1>

			<div className='p-3 flex flex-col items-center'>
				<h2 className='text-xl font-medium'>Administracion de usuarios: </h2>
				<div>
					<h3 className='text-lg font-medium'>Banear Usuario:</h3>
					<select 
					onChange={(e) => handleSelectUser(e)}
					className='bg-green-300 p-2 rounded font-medium 
					cursor-pointer hover:scale-110 duration-300 hover:text-white'
					>
						<option>Ver usuarios</option>
						{allUsers?.map((e) => (
							<option key={e.id} value={e.id}>
								{e.name}, {e.email}
							</option>
						))}
					</select>
					{idUser === '' ? (
						<p className='text-red-700'>Seleccione un usuario</p>
					) : (
						<button onClick={(e) => handleBan(e)}>Banear user</button>
					)}
				</div>
			</div>
			<div className='flex flex-col items-center'>
				<h2 className='text-xl font-medium'>Administracion de torneos:</h2>
				<select onChange={(e) => 
					handleSelectTournament(e)}
					className='bg-green-300 p-2 rounded font-medium cursor-pointer
					hover:scale-110 duration-300 hover:text-white'
					>
					<option>Ver torneos</option>
					{allTournaments?.map((e) => (
						<option key={e.id} value={e.id} name={e.name}>
							{e.name}
						</option>
					))}
				</select>
				{idTournament === '' ? (
					<p className='text-red-700'>Seleccione un torneo</p>
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
					<button
					className='bg-green-300 font-medium p-3 rounded-full
					hover:scale-110 hover:text-white duration-300'
					>Crear nuevo torneo</button>
				</Link>
			</div>
			<div>
				<h2 className='text-medium'>Administacion de reseñas</h2>
			</div>
		</div>

		<Footer/>
		</div>
	);
}
