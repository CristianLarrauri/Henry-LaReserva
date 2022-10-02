import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';

import {
	getAllUsers,
	banUser,
	getTournamentsAdmin,
	deleteTournament
} from '../redux/actions';

export default function DashBoardAdmin() {
	const history = useHistory();
	const dispatch = useDispatch();
	const allUsers = useSelector((state) => state.users);
	console.log('allUsers', allUsers);
	const allTournaments = useSelector((state) => state.tournamentsAdmin);

	const [idUser, setIdUser] = useState('');
	const [idTournament, setIdTournament] = useState('');
	const [nameTournament, setNameTournament] = useState('');
	const [tournamentValue, setTournamentValue] = useState('');

	useEffect(() => {
		dispatch(getAllUsers());
		dispatch(getTournamentsAdmin());
	}, [dispatch]);

	const handleBan = (e) => {
		dispatch(banUser(e.target.value));
		alert('Se ha baneado el usuario');
	};

	const handleDeleteTournament = (e) => {
		dispatch(deleteTournament(e.target.value));
		alert('Se ha borrado el torneo');
		setNameTournament('');
		setIdTournament('');
		setTournamentValue('');
	};

	return (
		<div className="min-h-screen flex flex-col justify-between items-center">
			<Nav />

			<div className="bg-gray-100 flex flex-col items-center p-10 shadow shadow-black">
				<h1 className="text-2xl font-bold">Panel de administrador</h1>

				<div className="p-3 flex flex-col items-center">
					<div>
						<h2 className="text-xl font-medium">
							Administracion de usuarios:{' '}
						</h2>
						<div>
							{allUsers?.map((e) => (
								<tr key={e.id} value={e.id}>
									<td>
										{e.name}{' '}
										<button value={e.id} onClick={(e) => handleBan(e)}>
											Banear user
										</button>
									</td>
								</tr>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div>
						<h2 className="text-xl font-medium">Administracion de torneos:</h2>
						<div>
							{allTournaments?.map((e) => (
								<tr key={e.name} value={e.id}>
									<td>
										{e.name}{' '}
										<button
											value={e.id}
											onClick={(e) => handleDeleteTournament(e)}
										>
											Eliminar torneo
										</button>{' '}
										<Link to={`/admin/modify/${e.id}`}>
											<button>Modifica el torneo</button>
										</Link>
									</td>
								</tr>
							))}
							<Link to="/create">
								<button
									className="bg-green-300 font-medium p-3 rounded-full
								hover:scale-110 hover:text-white duration-300"
								>
									Crear nuevo torneo
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<h2 className="text-xl font-medium">Administacion de reseñas: </h2>
					<Link to="/reviews">
						<button
							className="bg-green-300 font-medium p-3 rounded-full
					hover:scale-110 hover:text-white duration-300"
						>
							Ver reseñas
						</button>
					</Link>
				</div>
			</div>

			<Footer />
		</div>
	);
}

//---------VIEJO PANEL DE ADM CON LOS SELECT--------------------------------------------------

// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';
// import Nav from './Nav';
// import Footer from './Footer';
// import { useHistory } from 'react-router-dom';

// import {
// 	getAllUsers,
// 	banUser,
// 	toAdmin,
// 	getUserDetails,
// 	getTournamentsAdmin,
// 	deleteTournament
// } from '../redux/actions';

// export default function DashBoardAdmin() {
// 	const history = useHistory();
// 	const dispatch = useDispatch();
// 	const allUsers = useSelector((state) => state.users);
// 	const allTournaments = useSelector((state) => state.tournamentsAdmin);

// 	const [idUser, setIdUser] = useState('');
// 	const [idTournament, setIdTournament] = useState('');
// 	const [nameTournament, setNameTournament] = useState('');
// 	const [tournamentValue, setTournamentValue] = useState('');

// 	useEffect(() => {
// 		dispatch(getAllUsers());
// 		dispatch(getTournamentsAdmin());
// 	}, [dispatch]);

// 	const handleSelectUser = (e) => {
// 		let target = e.target.value;
// 		let targetName = e.target.name;
// 		setIdUser(target);
// 		setNameTournament(targetName);
// 	};

// 	const handleSelectTournament = (e) => {
// 		let target = e.target.value;
// 		setIdTournament(target);
// 		setTournamentValue(target);
// 	};

// 	const handleBan = () => {
// 		dispatch(banUser(idUser));
// 	};

// 	const handleDeleteTournament = () => {
// 		dispatch(deleteTournament(idTournament));
// 		alert('Se ha borrado el torneo');
// 		setNameTournament('');
// 		setIdTournament('');
// 		setTournamentValue('');
// 	};

// 	return (
// 		<div className="min-h-screen flex flex-col justify-between items-center">
// 			<Nav />

// 			<div className="bg-gray-100 flex flex-col items-center p-10 shadow shadow-black">
// 				<h1 className="text-2xl font-bold">Panel de administrador</h1>

// 				<div className="p-3 flex flex-col items-center">
// 					<h2 className="text-xl font-medium">Administracion de usuarios: </h2>
// 					<div>
// 						<h3 className="text-lg font-medium">Banear Usuario:</h3>
// 						<select
// 							onChange={(e) => handleSelectUser(e)}
// 							className="bg-green-300 p-2 rounded font-medium
// 					cursor-pointer hover:scale-110 duration-300 hover:text-white"
// 						>
// 							<option>Ver usuarios</option>
// 							{allUsers?.map((e) => (
// 								<option key={e.id} value={e.id}>
// 									{e.name}, {e.email}, {e.id}
// 								</option>
// 							))}
// 						</select>
// 						{idUser === '' ? (
// 							<p className="text-red-700">Seleccione un usuario</p>
// 						) : (
// 							<button onClick={(e) => handleBan(e)}>Banear user</button>
// 						)}
// 					</div>
// 				</div>
// 				<div className="flex flex-col items-center">
// 					<h2 className="text-xl font-medium">Administracion de torneos:</h2>
// 					<select
// 						onChange={(e) => handleSelectTournament(e)}
// 						className="bg-green-300 p-2 rounded font-medium cursor-pointer
// 					hover:scale-110 duration-300 hover:text-white"
// 						value={tournamentValue}
// 					>
// 						<option>Ver torneos</option>
// 						{allTournaments?.map((e) => (
// 							<option key={e.id} value={e.id} name={e.name}>
// 								{e.name}
// 							</option>
// 						))}
// 					</select>
// 					{idTournament === '' ? (
// 						<p className="text-red-700">Seleccione un torneo</p>
// 					) : (
// 						<Link to={`/admin/modify/${idTournament}`}>
// 							<button>Modifica el torneo</button>
// 						</Link>
// 					)}
// 					{idTournament === '' ? (
// 						<></>
// 					) : (
// 						<button onClick={(e) => handleDeleteTournament(e)}>
// 							Elimina el torneo
// 						</button>
// 					)}

// 					<Link to="/create">
// 						<button
// 							className="bg-green-300 font-medium p-3 rounded-full
// 					hover:scale-110 hover:text-white duration-300"
// 						>
// 							Crear nuevo torneo
// 						</button>
// 					</Link>
// 				</div>
// 				<div className="flex flex-col items-center">
// 					<h2 className="text-xl font-medium">Administacion de reseñas: </h2>
// 					<Link to="/reviews">
// 						<button
// 							className="bg-green-300 font-medium p-3 rounded-full
// 					hover:scale-110 hover:text-white duration-300"
// 						>
// 							Ver reseñas
// 						</button>
// 					</Link>
// 				</div>
// 			</div>

// 			<Footer />
// 		</div>
// 	);
// }
