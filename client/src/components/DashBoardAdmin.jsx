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
	deleteTournament,
	getDisabledReviews,
	deleteReviews,
	reportAllowReview
} from '../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export default function DashBoardAdmin() {
	const history = useHistory();
	const dispatch = useDispatch();
	const allUsers = useSelector((state) => state.users);
	console.log('allUsers', allUsers);
	const allTournaments = useSelector((state) => state.tournamentsAdmin);
	const {user} = useAuth0()


	const adminReviews = useSelector((state) => state.disabledReviews);
	const [idUser, setIdUser] = useState('');
	const [idTournament, setIdTournament] = useState('');
	const [nameTournament, setNameTournament] = useState('');
	const [tournamentValue, setTournamentValue] = useState('');

	useEffect(() => {
		dispatch(getAllUsers());
		dispatch(getTournamentsAdmin());
		dispatch(getDisabledReviews());
	}, [dispatch]);

	const handleBan = (e) => {
		const payload ={
			email: `${user.email}`,
			option:"Ban"
		}
		dispatch(banUser(e.target.value));
		alert('Se ha baneado el usuario');
		axios.post("http://localhost:3001/email",payload)
			.then((data)=>{
				return data
			})
			.catch((err)=> console.log(err))
	};

	const handleUnban = (e) => {
		const payload ={
			email: `${user.email}`,
			option:"Unban"
		}
		dispatch(banUser(e.target.value));
		alert('Se ha quitado el baneo al usuario');
		axios.post("http://localhost:3001/email",payload)
			.then((data)=>{
				return data
			})
			.catch((err)=> console.log(err))
	};

	const handleEnableTournament = (e) => {
		dispatch(deleteTournament(e.target.value));
		alert('Se ha habilitado el torneo');
		setNameTournament('');
		setIdTournament('');
		setTournamentValue('');
	};

	const handleDisableTournament = (e) => {
		dispatch(deleteTournament(e.target.value));
		alert('Se ha deshabilitado el torneo');
		setNameTournament('');
		setIdTournament('');
		setTournamentValue('');
	};

	const handleDeleteReview = (e) => {
		dispatch(deleteReviews(e.target.value));
		alert('el comentario ha sido definitivamente eliminado');
	};

	const handleAllowReview = (e) => {
		dispatch(reportAllowReview(e.target.value));
		alert('el comentario fue permitido');
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
                                        {e.ban === false ? (
                                            <button value={e.id} onClick={(e) => handleBan(e)}>
                                                Banear user
                                            </button>
                                        ) : (
                                            <button value={e.id} onClick={(e) => handleUnban(e)}>
                                                Desbanear user
                                            </button>
                                        )}
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
										{e.enabled ? (
											<button
												value={e.id}
												onClick={(e) => handleDisableTournament(e)}
											>
												Deshabilitar torneo
											</button>
										) : (
											<button
												value={e.id}
												onClick={(e) => handleEnableTournament(e)}
											>
												Habilitar torneo
											</button>
										)}
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
					<div>
						{adminReviews?.map((e) => (
							<tr key={e.id} value={e.id}>
								<td>
									{e.nombreUsuario} {e.comentario}
									<button value={e.id} onClick={(e) => handleAllowReview(e)}>
										Permitir comentario
									</button>
									<button value={e.id} onClick={(e) => handleDeleteReview(e)}>
										Eliminar comentario
									</button>
								</td>
							</tr>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
