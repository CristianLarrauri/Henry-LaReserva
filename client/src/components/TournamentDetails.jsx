import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from './Footer';
import ScorersTable from '../components/ScorersTable';
import TeamsTable from '../components/TeamsTable';

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

					<div className='mt-10 w-3/6 text-center'>
					<h2 className='text-4xl font-medium bg-gray-300 p-3 m-3'>{`Torneo "${tournament.name}"`}</h2>

						<div className='bg-gray-300 p-3 m-3'>
							<h2 className='font-medium text-xl'>Desde: {tournament.dateInit}</h2>
							<h2 className='font-medium text-xl'>Hasta: {tournament.dateFinish}</h2>
							<h2 className='font-medium text-xl'>Categoria: {tournament.category}</h2>
							<h2 className='font-medium text-xl'>Género: {tournament.genre}</h2>
						</div>
						
						<div className='bg-gray-300 p-3 m-3'>
							<h2 className='font-medium text-xl mt-5'>Descripcion</h2>
							<h2 className='font-medium text-xl text-left mt-3'>{tournament.description}</h2>
						</div>

						<div className='w-full flex justify-center'>
							<Link to={`/inscription?id=${id}`}
								className='bg-green-500 w-[200px] h-[80px] rounded-full m-8 z-50
								hover:bg-white hover:text-green-700 hover:scale-110 duration-300 text-white
								flex justify-center items-center'>
									<p className='text-xl font-bold'>Inscribirse</p>
							</Link>
						</div>
					</div>
				</div>

				<div className='w-5/6 mt-10 flex items-center flex-col 
					lg:flex-row lg:justify-between lg:items-start bg-gray-200'>

					<div className='bg-gray-300 w-7/12 h-full min-h-[150px] p-5 m-3 min-w-[340px]'>
						<TeamsTable id = {id}/>
					</div>

					<div className='bg-gray-300 w-2/6 h-full min-h-[150px] p-5 min-w-[340px] m-3'>
						<ScorersTable id = {id}/>
					</div>

				</div>

			</div>

			<Footer/>
		</div>
	);
};

export default TournamentDetail;
