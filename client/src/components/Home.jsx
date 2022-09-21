import React from 'react';
import Footer from './Footer';
import NextTournaments from './NextTournaments';
import jugador from '../images/jugadorHome.png';
import { FaClock } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import TournamentCards from './TournamentCards';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTournaments } from '../redux/actions';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

export default function Home() {
	// const [page,setPage] = useState(0)

	// const dispatch = useDispatch()

	// const tournaments = useSelector((state)=> state.tournaments)

	// useEffect(()=>{
	// 	dispatch(getAllTournaments(page))
	// },[])

	return (
		<div className='w-full min-h-screen flex flex-col justify-between bg-gray-200'>
			<Nav/>
			<div className='flex justify-start flex-col'>{/*div principal*/}

				<div className='w-full flex flex-wrap justify-center md:flex-nowrap md:justify-start'>{/*div superior*/}
					<NextTournaments/>

					<div className='bg-green-700 w-4/6 min-w-[300px] m-6 rounded-lg flex justify-between items-center 
					flex-col lg:flex-row relative overflow-hidden'>{/*green card*/}
						

						<div className=' flex flex-col xl:flex-row z-10'>
							<img src={jugador} alt="jugandor.png" className='min-w-[262px] max-w-[262px] h-[390px] mx-3'/>

							<div className='w-6/6 flex flex-col justify-around mx-3'>{/*Title container*/}
								<h2 className='text-white text-4xl font-bold'>Torneo la reserva</h2>
								
								<div className='flex justify-around text-white flex-wrap'>
									<div className='flex items-center m-3'>
										<FaClock className='text-3xl'/>
										<p className='ml-2 text-xl'>00:00:00 AM</p>
									</div>

									<div className='flex items-center m-3 text-xl'>
										<MdLocationOn className='text-3xl'/>
										<p>Calle falsa 123</p>
									</div>
								</div>
				
							</div>
						</div>
					

						<div className='flex flex-col-reverse items-end mx-3 h-full'>
							<button className='bg-white min-w-[180px] h-[80px] rounded-full m-8 z-50'>
								<Link to='/inscription' className='text-xl font-bold text-green-700'>Inscribite</Link>
							</button>
						</div>

						<div className='bg-green-600 absolute right-0 bottom-0 w-[300px] h-[300px] rounded-tl-full z-0'/>
					</div>
				</div>

				<div>
					<TournamentCards />
				</div>


			</div>
			<Footer/>
		</div>
	);
}
