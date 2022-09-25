import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from './Footer';
import ScorersTable from '../components/ScorersTable';
import TeamsTable from '../components/TeamsTable';
import {BsCalendarDate, BsGenderFemale, BsGenderMale, BsGenderAmbiguous, BsFillPersonFill} from 'react-icons/bs';

import {BiCategoryAlt, BiArrowBack} from 'react-icons/bi'


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
			<div className='w-full min-h-screen flex flex-col items-center relative animate-appear'>

				<div className='bg-gray-100 w-5/6 p-5 mt-10 flex flex-col items-center'>{/*info container*/}

					<div className='w-3/6 text-gray-800 text-center'>
						<h1 className='font-bold text-2xl'>TORNEO</h1>
						<h2 className='font-bold text-xl'>{`"${tournament.name}"`}</h2>

						<div className='w-full flex justify-between my-3 flex-wrap'>
							<div className='flex items-center my-1'>
								<BsCalendarDate className='text-2xl'/>
								<p className='font-medium text-xl ml-3'>{`Desde: ${tournament.dateInit}`}</p>
							</div>

							<div className='flex items-center my-1'>
								<BsCalendarDate className='text-2xl'/>
								<p className='font-medium text-xl ml-3'>{`Hasta: ${tournament.dateFinish}`}</p>
							</div>
						</div>

						<div className='flex justify-between mt-6 flex-wrap'>
							<div className='flex my-1'>
								<BiCategoryAlt  className='text-2xl'/>
								<p className='font-medium text-xl ml-3'>{`Categoria: ${tournament.category==='Free'?
								'Libre':tournament.category==='Sub20'?'Sub20':'Senior'}`}</p>
							</div>
							
							<div className='flex my-1'>
								{tournament.genre==="Male"?
								<BsGenderMale className='text-2xl'/>:tournament.genre==='Female'?
								<BsGenderFemale className='text-2xl'/>:<BsGenderAmbiguous className='text-2xl'/>}
								<p className='font-medium text-xl ml-3'>{`Genero: ${tournament.genre==="Male"?'Masculino':
								tournament.genre==='Female'?'Femenino':'Mixto'}`}</p>
							</div>
							
							<div className='flex my-1'>
								<BsFillPersonFill className='text-2xl'/>
								<p className='font-medium text-xl ml-3'>{`Cantidad: ${tournament.amountOfTeams}`}</p>
							</div>
						</div>
						
						<div className='text-left mt-10'>
							<h3 className='font-medium text-xl ml-3'>Descripcion: {tournament.description}</h3>
						</div>

						<div className='w-full flex justify-center items-center'>
							<Link to={`/inscription?id=${id}`} className='bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
								hover:bg-white hover:text-green-700 hover:scale-110 duration-300 text-white
								flex justify-center items-center'>
									<p className='text-xl font-bold'>Inscribite</p>
							</Link>
						</div>
					</div>

				</div>

				<div className='w-5/6 mt-10 flex items-center flex-col 
					lg:flex-row lg:justify-between lg:items-start'>

					<div className='bg-gray-100 w-7/12 h-full min-h-[150px] p-5 m-3 min-w-[340px]'>
						<TeamsTable id = {id}/>
					</div>

					<div className='w-2/6 h-full min-h-[220px] min-w-[340px] m-3 bg-gray-100 p-5'>
						<ScorersTable id = {id}/>
					</div>

				</div>


				<Link to='/home' className='bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
								hover:scale-110 duration-300 text-white
								flex justify-center items-center animate-appear'>
									<p className='text-xl font-bold flex items-center justify-center'>
                    <BiArrowBack className="mr-3"/>
                    Volver
                  </p>
				</Link>

			</div>

			<Footer/>
		</div>
	);
};

export default TournamentDetail;
