import React from 'react';
import icon from '../images/tournamentIcon_1.png';
import { Link } from 'react-router-dom';
import {BsCalendarDate} from 'react-icons/bs';
import {BiCategory} from 'react-icons/bi';
import {BsFillPersonFill} from 'react-icons/bs';

export default function ({name, id, dateInit, category, genre}) {
	return (
		<Link to={`/details/${id}`} className='min-w-[300px] my-3 flex justify-between bg-gray-100 px-2 py-1 sm:w-[360px] hover:bg-gray-300'>
			<div className='w-[60px] h-[60px] rounded-full overflow-hidden mt-2'>
				<img src={icon} alt="icon" className="h-full w-full"/>
			</div>

			<div className='w-9/12'>
				<h2 className='text-gray-800 font-bold mb-2'>{name}</h2>

				<div className='flex justify-between font-medium text-gray-800'>
					<div className='flex flex-col items-center'>
						<BsCalendarDate/>
						<p>{dateInit}</p>
					</div>

					<div className='flex flex-col items-center'>
						<BiCategory/>
						<p>{category}</p>
					</div>

					<div className='flex flex-col items-center'>
						<BsFillPersonFill/>
						<p>{genre}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}


{/* <Link to="/inscription" className="bg-blue-300 ">
			<p>asd </p>
			<div className={styles.tournamentContainer}>
				<img src={icon} alt="icon" className={styles.icon} />
				<p>{name}</p>
			</div>

			<div className={styles.inscriptionWrapper}>
				Inscribite
				<AiOutlineArrowRight className={styles.icon} />
			</div>
		</Link> */}