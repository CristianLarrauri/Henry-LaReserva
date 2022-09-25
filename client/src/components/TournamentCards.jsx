import React from 'react';
import Card from './Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTournaments, getTournamentsHome } from '../redux/actions/index.js';
import { Link } from 'react-router-dom';
import {AiOutlineArrowDown} from 'react-icons/ai'
import {AiOutlineArrowUp} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'


export default function TournamentCards() {
	const dispatch = useDispatch();
	const tournaments = useSelector((state) => state.tournamentsHome);

	const [page, setPage] = useState(0);

	const handlePrev = (event) => {
		event.preventDefault();
		if (page <= 1) {
			setPage(0);
		} else {
			setPage(page - 4);
		}
	};

	const handleNext = (event) => {
		event.preventDefault();
		if (tournaments?.length < 4) {
			return;
		} else {
			setPage(page + 4);
		}
	};

	const [property, setProperty] = useState('name');
	const [order, setOrder] = useState('ASC');

	
	useEffect(() => {
		dispatch(getTournamentsHome(page, order, property));
	}, [dispatch, page, order, property]);

	return (
		<div className='w-full flex flex-col items-start mt-10'> {/*mainContainer*/}
				
			<div className='bg-white w-11/12 rounded flex justify-between sm:ml-6'>

				<button onClick={(event) => handlePrev(event)}
				className="bg-green-700 min-w-[30px] flex justify-center items-center rounded
				text-white shadow shadow-black active:bg-green-500">
					<AiOutlineArrowLeft className='text-2xl'/>
				</button>
				
				<div className='w-11/12 flex justify-center flex-wrap md:justify-between'>
					{tournaments
						? tournaments?.map((ele) => {
								return (
									<div>
										<Card
											key={ele.id}
											name={ele.name}
											dateInit={ele.dateInit}
											genre={ele.genre}
											category={ele.category}
											id={ele.id}
										/>
									</div>
								);
						})
						: 'No se Encontro nada'}
				</div>

				<button onClick={(event) => handleNext(event)}
				className="bg-green-700 min-w-[30px] flex justify-center items-center rounded
				text-white shadow shadow-black active:bg-green-500">
					<AiOutlineArrowRight/>
				</button>
			</div>
		</div>
	);
}


//**********-------------FUNCIONES DE FILTROS-------**********
// const handleSortName = (e) => {
// 	e.preventDefault();
// 	setProperty('name');
// 	setOrder(e.target.value);
// };
// const [valueCategory, setValueCategory] = useState('');
// const [valueGenre, setValueGenre] = useState('');
// const [category, setCategory] = useState('');
// const [genre, setGenre] = useState('');

// const handleFilterCategory = (e) => {
	// 	e.preventDefault();
// 	setCategory(e.target.value);
// 	setValueCategory(e.target.value);
// };

// const handleFilterGenre = (e) => {
// 	e.preventDefault();
// 	setGenre(e.target.value);
// 	setValueGenre(e.target.value);
// };

// const handleGetAllTournaments = (e) => {
// 	e.preventDefault();
// 	setCategory('');
// 	setGenre('');
// 	setValueCategory('');
// 	setValueGenre('');
// 	setOrder('ASC');
// };



//****************---CONTAINER DE FILTROS---************************
{/* <div className='m-6 bg-white rounded flex w-11/12 items-center flex-col 
xl:flex-row xl:justify-between px-3'> */}
	{/*Filtro container*/}

	{/* <div className='flex items-center w-2/6 justify-between m-3 max-w-[329px] min-w-[250px]'>
		<h2 className='font-medium text-xl'>Filtrar por categoria:</h2>
		<select
				className="bg-gray-300 w-[120px] h-[40px] text-center rounded font-bold
				hover:bg-green-700 hover:text-white duration-300 cursor-pointer"
				name="category"
				onChange={(e) => handleFilterCategory(e)}
				value={valueCategory}
			>
				<option className='font-medium' value="">Indistinto</option>
				<option className='font-medium' value="Sub20">Sub 20</option>
				<option className='font-medium' value="Libre">Libre</option>
				<option className='font-medium' value="Senior">Senior</option>
		</select>
	</div>

	<div className='flex items-center w-2/6 justify-between m-3 max-w-[329px] min-w-[250px]'>
		<h2 className='font-medium text-xl'>Filtrar por genero: </h2>
		<select
				className="bg-gray-300 w-[120px] h-[40px] text-center rounded font-bold
				hover:bg-green-700 hover:text-white duration-300 cursor-pointer"
				name="genre"
				onChange={(e) => handleFilterGenre(e)}
				value={valueGenre}
			>
				<option className='font-medium' value="">Indistinto</option>
				<option className='font-medium' value="Masculino">Masculinos</option>
				<option className='font-medium' value="Femenino">Femeninos</option>
				<option className='font-medium' value="Mixto">Mixtos</option>
		</select>
	</div>

	<div className='flex items-center w-2/6 justify-between m-3 max-w-[200px] min-w-[250px]'>
		<h2 className='font-medium text-xl'>Ordenar: </h2>
		<div className='flex'>
			<button
			name="ASC"
			value="ASC"
				onClick={(e) => handleSortName(e)}
				className="bg-gray-300 w-[40px] h-[40px] rounded mx-3 flex items-center 
				justify-center hover:bg-green-700 hover:text-white duration-300"
			>
			<AiOutlineArrowUp className='text-xl'/>
			</button>

			<button
				name="DESC"
				value="DESC"
				onClick={(e) => handleSortName(e)}
				className="bg-gray-300 w-[40px] h-[40px] rounded mx-3 flex items-center 
				justify-center hover:bg-green-700 hover:text-white duration-300"
			>
				<AiOutlineArrowDown className='text-xl'/>
			</button>
		</div>
	</div>
	

	<div className='m-3'>
		<button
			onClick={(e) => handleGetAllTournaments(e)}
			className="bg-gray-300 rounded h-[40px] font-bold px-3
			hover:bg-green-700 hover:text-white duration-300"
			>
			Quitar filtros
		</button>
	</div>

</div> */}