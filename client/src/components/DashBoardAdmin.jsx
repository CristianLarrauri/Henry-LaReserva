import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
import popUpStyles from '../styles/PopUpStyles.module.css';

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
	console.log('allus', allUsers);

	const allTournaments = useSelector((state) => state.tournamentsAdmin);
	const { user } = useAuth0();
	const [popUpError, setPopUpError] = useState({});

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
		const payload = {
			email: `${user.email}`,
			option: 'Ban'
		};

		dispatch(banUser(e.target.value));
		setPopUpError({ title: 'Exito', msg: 'Se ha baneado al usuario.' });
		axios
			.post('http://localhost:3001/email', payload)
			.then((data) => {
				return data;
			})
			.catch((err) => console.log(err));
	};

	const handleUnban = (e) => {
		const payload = {
			email: `${user.email}`,
			option: 'Unban'
		};
		dispatch(banUser(e.target.value));
		setPopUpError({
			title: 'Exito',
			msg: 'Se ha quitado el baneo al usuario.'
		});
		axios
			.post('http://localhost:3001/email', payload)
			.then((data) => {
				return data;
			})
			.catch((err) => console.log(err));
	};

	const handleEnableTournament = (e) => {
		dispatch(deleteTournament(e.target.value));
		setPopUpError({ title: 'Exito', msg: 'Se ha habilitado el torneo.' });
		setNameTournament('');
		setIdTournament('');
		setTournamentValue('');
	};

	const handleDisableTournament = (e) => {
		dispatch(deleteTournament(e.target.value));
		setPopUpError({ title: 'Exito', msg: 'Se ha deshabilitado el torneo.' });
		setNameTournament('');
		setIdTournament('');
		setTournamentValue('');
	};

	const handleDeleteReview = (e) => {
		dispatch(deleteReviews(e.target.value));
		setPopUpError({
			title: 'Exito',
			msg: 'El comentario ha sido definitivamente eliminado.'
		});
	};

	const handleAllowReview = (e) => {
		dispatch(reportAllowReview(e.target.value));
		setPopUpError({ title: 'Exito', msg: 'El comentario fue permitido.' });
	};

	return (
		<div className="min-h-screen flex flex-col justify-between items-center bg-gray-100">
			<div
				className={
					popUpError.title
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}
			>
				<div
					className={
						popUpError.title ? popUpStyles.popUp : popUpStyles.popUp_hidden
					}
				>
					<h2>{popUpError.title}</h2>
					<p>{popUpError.msg}</p>
					<button
						onClick={() => {
							setPopUpError({});
							window.location.reload(false);
						}}
						className={popUpStyles.okBtn}
					>
						Ok
					</button>
				</div>
			</div>

			<Nav />
			<h1 className="text-4xl font-bold pt-6 text-gray-700">
				Panel de administrador
			</h1>

			{/*Main section*/}
			<div className="w-full text-gray-700 flex flex-col items-center pt-6 flex-wrap animate-appear">
				<div className="w-3/6 flex justify-center flex-wrap">
					<Link
						to="/create"
						className="bg-green-500 min-w-[180px] w-[180px] h-[80px] rounded-full m-8 z-50
					hover:scale-110 duration-300 text-white
					flex justify-center items-center animate-appear"
					>
						<p className="text-xl font-bold flex items-center justify-center">
							Crear torneo
						</p>
					</Link>

					<Link
						to="/reviews"
						className="bg-green-500 min-w-[180px] w-[180px] h-[80px] rounded-full m-8 z-50
					hover:scale-110 duration-300 text-white
					flex justify-center items-center animate-appear"
					>
						<p className="text-xl font-bold flex items-center justify-center">
							Ver reseñas
						</p>
					</Link>
				</div>

				<div className="bg-white w-6/12 text-center p-3 min-w-fit h-full shadow shadow-gray-700 m-3">
					<h2 className="text-xl font-medium mb-3">
						Administracion de usuarios
					</h2>

					<table className="border border-black w-full ">
						{allUsers?.map((e) => (
							<tr key={e.id} value={e.id} className="border-y border-black">
								<td className="mx-3 text-lg font-medium break-words max-w-[300px]">
									{e.email}
								</td>

								{e.ban === false ? (
									<td>
										<button
											value={e.id}
											onClick={(e) => handleBan(e)}
											className="text-red-700 mx-3 cursor-pointer hover:text-gray-700 duration-300 font-medium text-lg"
										>
											Banear usuario
										</button>
									</td>
								) : (
									<td>
										<button
											value={e.id}
											onClick={(e) => handleUnban(e)}
											className="text-green-700 mx-3 cursor-pointer hover:text-gray-700 duration-300 font-medium text-lg"
										>
											Desbanear usuario
										</button>
									</td>
								)}
							</tr>
						))}
					</table>
				</div>

				<div className="bg-white w-6/12 text-center p-3 min-w-fit h-full shadow shadow-gray-700 m-3">
					<h2 className="text-xl font-medium mb-3">
						Administracion de torneos
					</h2>

					<table className="border border-black w-full">
						{allTournaments?.map((e) => (
							<tr key={e.name} value={e.id} className="border-y border-black">
								<td
									className={`mx-3 text-lg ${
										e.enabled ? 'text-green-700' : 'text-red-700'
									} font-medium break-words max-w-[300px]`}
								>
									{e.name}
								</td>

								{e.enabled ? (
									<td>
										<button
											value={e.id}
											onClick={(e) => handleDisableTournament(e)}
											className="mx-3 text-red-700 cursor-pointer hover:text-gray-700 duration-300 font-medium text-lg"
										>
											Deshabilitar torneo
										</button>
									</td>
								) : (
									<td>
										<button
											value={e.id}
											onClick={(e) => handleEnableTournament(e)}
											className="text-green-700 mx-3 cursor-pointer hover:text-gray-700 duration-300 font-medium text-lg"
										>
											Habilitar torneo
										</button>
									</td>
								)}
								<td>
									<Link to={`/admin/modify/${e.id}`}>
										<button className="mx-3 cursor-pointer hover:text-green-700 duration-300 font-medium text-lg">
											Modifica el torneo
										</button>
									</Link>
								</td>
							</tr>
						))}
					</table>
				</div>

				<div className="bg-white w-6/12 text-center p-3 h-full shadow shadow-gray-700 m-3 min-w-fit">
					<h2 className="text-xl font-medium mb-3">
						Administrar reseñas reportadas
					</h2>

					<table className="border border-black w-full">
						{adminReviews.length ? (
							adminReviews.map((e) => (
								<tr
									key={e.id}
									value={e.id}
									className="border-y border-black flex flex-wrap items-center justify-around"
								>
									<td className="text-lg px-3 font-medium break-words max-w-[300px]">
										{e.nombreUsuario}
									</td>
									<td className="text-lg px-3 text-left w-[300px] break-words">
										{e.comentario}
									</td>

									<td>
										<button
											value={e.id}
											onClick={(e) => handleAllowReview(e)}
											className="text-green-700 px-3 cursor-pointer hover:text-gray-700 duration-300 font-medium text-lg"
										>
											Permitir comentario
										</button>
									</td>

									<td>
										<button
											value={e.id}
											onClick={(e) => handleDeleteReview(e)}
											className="text-red-700 px-3 cursor-pointer hover:text-gray-700 duration-300 font-medium text-lg"
										>
											Eliminar comentario
										</button>
									</td>
								</tr>
							))
						) : (
							<h2 className="text-xl font-medium text-gray-700 p-2">
								No hay ninguna reseña que requiera atencion por ahora.
							</h2>
						)}
					</table>
				</div>
			</div>

			<Footer />
		</div>
	);
}
