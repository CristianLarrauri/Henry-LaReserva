import React, { useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { useAuth0 } from '@auth0/auth0-react';
import TournamentListView from './TournamentListView';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/actions/index';
import axios from 'axios';
import { useState } from 'react';

export default function PanelUser() {
	const dispatch = useDispatch();
	const { user, logout } = useAuth0();
	const [tournaments, setTournaments] = useState([]);

	const handleDeleteUser = () => {
		dispatch(deleteUser(user.email));
		logout({ returnTo: 'http://localhost:3000/home' });
	};

	useEffect(() => {
		if(user.email){
			axios.get(`http://localhost:3001/users/historial`)
			.then(res => {
				let filteredRes = res.data.filter(t => t.email===user.email);
				
				let promisifiedArray = [];

				filteredRes[0].teams.map(teams => {
					promisifiedArray.push(
						axios.get(`http://localhost:3001/teams?name=${teams.name}`)
					)
				})

				Promise.all(promisifiedArray)
				.then(res => {
					let tournaments = res.map(res => {
						return res.data[0].tournaments[0];
					})

					setTournaments(tournaments);
				})
			});
		}
	},[user.email])

	return (
		<div className="min-h-screen flex flex-col justify-between">
			<Nav />
			{console.log(tournaments)}
			<div className="flex justify-center text-gray-700 flex-wrap">
				<div
					className="bg-gray-100 p-6 flex flex-col items-center
                 m-10 shadow shadow-gray-700 h-full w-1/6 min-w-fit"
				>
					<div className="bg-green-700 w-[200px] h-[200px] rounded-full overflow-hidden">
						<img
							src={user.picture}
							className="w-full h-full"
							alt="imgProfile.png"
						/>
					</div>

					<h2 className="text-xl mt-2">{user.nickname}</h2>

					<button
						className="bg-green-500 w-[180px] h-[60px] rounded-full my-3 z-50
                        hover:scale-110 duration-300 text-white
                        flex justify-center items-center animate-appear"
						onClick={() => logout({ returnTo: 'http://localhost:3000/home' })}
					>
						<p className="text-xl font-bold flex items-center justify-center">
							Desconectarse
						</p>
					</button>

					<button
						className="bg-green-500 w-[180px] h-[60px] rounded-full my-3 z-50
                        hover:scale-110 duration-300 text-white
                        flex justify-center items-center animate-appear"
						onClick={(e) => handleDeleteUser(e)}
					>
						<p className="text-xl font-bold flex items-center justify-center">
							Eliminar perfil
						</p>
					</button>
				</div>

				<div
					className="bg-gray-100 p-6 m-10 shadow shadow-gray-700 
                w-4/6 flex flex-col items-center min-w-[320px]"
				>
					<h2 className="text-3xl font-bold border-b-2 border-gray-700">
						Tus torneos
					</h2>

					<div className="w-full flex flex-col items-center justify-start mt-6 mb-3 h-full">
						{
							tournaments.length!==0?
								tournaments.map(tournament => (
								<TournamentListView
								name={tournament.name}
								id={tournament.id}
								dateInit={tournament.dateInit}
								dateFinish={tournament.dateFinish}
								category={tournament.category}
								genre={tournament.genre}/>
							)):<p className='text-xl font-medium'>{'Todavia no te has unido a ningun torneo :('}</p>
						}
					</div>

					
				</div>
			</div>

			<Footer />
		</div>
	);
}
