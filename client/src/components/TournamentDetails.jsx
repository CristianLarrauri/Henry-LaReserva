import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { NavLink } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from './Footer';
import ScorersTable from '../components/ScorersTable';

const TournamentDetail = (props) => {
	let { id } = props.match.params;
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(actions.tournamentDetails(id));
	}, [dispatch]);

	let tournament = useSelector((state) => state.tournamentDetail);

	return (
		<div className='bg-white w-full min-h-screen flex flex-col justify-between items-center'>
			<Nav/>
			<div className='w-full min-h-screen flex flex-col items-center relative'>

				<div className='bg-gray-200 w-5/6 p-5 mt-10 flex flex-col items-center'>{/*info container*/}
					<h2 className='text-4xl font-medium'>{`Torneo "${tournament.name}"`}</h2>

					<div className='mt-10 w-3/6 text-center'>
						<h2 className='font-medium text-xl'>Desde: {tournament.dateInit}</h2>
						<h2 className='font-medium text-xl'>Hasta: {tournament.dateFinish}</h2>
						<h2 className='font-medium text-xl'>Categoria: {tournament.category}</h2>
						<h2 className='font-medium text-xl'>Género: {tournament.genre}</h2>
						<h2 className='font-medium text-xl mt-5'>Descripcion</h2>

						<h2 className='font-medium text-xl text-left mt-3'>{tournament.description}</h2>
					</div>
				</div>

				<div className='bg-green-300 w-5/6 mt-10 flex justify-between'>
					<div className='bg-gray-200 w-7/12'>
						PONER LOS EQUIPOS DEL TORNEO ACA
					</div>

					<div className='bg-gray-200 w-4/12'>
						<ScorersTable id = {id}/>
					</div>

				</div>

			</div>

			<Footer/>
		</div>
	);
};

export default TournamentDetail;
