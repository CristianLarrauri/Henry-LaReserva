import React from 'react';
import Card from './Card';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTournaments } from '../redux/actions/index.js';

export default function TournamentCards() {
	const dispatch = useDispatch();
	const tournaments = useSelector((state) => state.tournaments);
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
	const handleSortName = (e) => {
		e.preventDefault();
		setProperty('name');
		setOrder(e.target.value);
	};
	const [category, setCategory] = useState('');
	const [genre, setGenre] = useState('');

	const handleFilterCategory = (e) => {
		e.preventDefault();
		setCategory(e.target.value);
	};

	const handleFilterGenre = (e) => {
		e.preventDefault();
		setGenre(e.target.value);
	};

	const handleGetAllTournaments = (e) => {
		e.preventDefault();
		setCategory('');
		setGenre('');
		setOrder('ASC');
	};

	useEffect(() => {
		dispatch(getAllTournaments(page, order, property, category, genre));
	}, [dispatch, page, order, property, category, genre]);

	return (
		<div className='container-xl mt-5'>

			{/*  CONTAINER DE FILTROS  */}
			<div className='contianer-xl mb-[1%] mt[2%] border-2 border-black'>
				<div className="flex container-xl border-2 rounded-lg justify-between items-center">
					<div className="container ml-[10%] ">
						<h3 className="text-md font-mono items-center justify-between">
							Mostrar torneos:
						</h3>
						<select
							className=" text-md  bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-lg"
							name="genre"
							onChange={(e) => handleFilterGenre(e)}
						>
							<option value="">Indistinto</option>
							<option value="Masculino">Masculinos</option>
							<option value="Femenino">Femeninos</option>
							<option value="Mixto">Mixtos</option>
						</select>
						<select
							className="text-md mt-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-lg"
							name="category"
							onChange={(e) => handleFilterCategory(e)}
						>
							<option value="">Indistinto</option>
							<option value="Sub20">Sub 20</option>
							<option value="Libre">Libre</option>
							<option value="Senior">Senior</option>
						</select>
					</div>

					<div className="container ml-[8%] items-center">
						<p className="text-md font-mono mt-1">Ordenar: Por nombre</p>
						<button
							name="ASC"
							value="ASC"
							onClick={(e) => handleSortName(e)}
							className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-lg mt-4"
						>
							/\
						</button>
						<button
							name="DESC"
							value="DESC"
							onClick={(e) => handleSortName(e)}
							className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-lg ml-5 mt-4"
						>
							\/
						</button>
					</div>

					<div className="container">
						<button
							onClick={(e) => handleGetAllTournaments(e)}
							className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg ml-3"
						>
							Quitar filtros
						</button>
					</div>
				</div>
			</div>

			{/*  CONTAINER DE CARDS  */}
			<div className="bg-red-500 rounded-lg mt-5 justify-between items-center flex">
				<button
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg ml-5"
					onClick={(event) => handlePrev(event)}
				>
					{'<<'}
				</button>
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
									/>
								</div>
							);
					  })
					: 'No se Encontro nada'}
				<button
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-[1%]"
					onClick={(event) => handleNext(event)}
				>
					{'>>'}
				</button>
			</div>

		</div>
	);
}
