import React from 'react';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTournament } from '../redux/actions';
import styles from '../styles/CreateTournament.module.css';
import popUpStyles from '../styles/PopUpStyles.module.css';
import { IoIosArrowBack } from 'react-icons/io';
import Nav from '../components/Nav';
import { useHistory } from 'react-router-dom';

export default function CreateTournament() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [popUpError, setPopUpError] = useState({});

	const [input, setInput] = useState({
		name: '',
		amountOfTeams: '',
		dateInit: '',
		dateFinish: '',
		genre: '',
		category: '',
		description: ''
	});

	const [errors, setErrors] = useState({
		name: '',
		amountOfTeams: '',
		dateInit: '',
		dateFinish: '',
		genre: '',
		category: '',
		description: ''
	});

	const validations = {
		name: (name) => validateName(name),
		amountOfTeams: (amount) => validateAmount(amount),
		genre: (genre) => validateGenre(genre),
		category: (category) => validateCategory(category),
		description: (description) => validateDescription(description),
		dateInit: (dateInit) => validateDateInit(dateInit),
		dateFinish: (dateFinish) => validateDateFinish(dateFinish)
	}

	function validateName(name){
		if(name.length <= 0) return setErrors({...errors, name: "Este campo no puede estar vacio."})  
		if(/[^A-Za-z 0-9]/g.test(name)) return setErrors({...errors, name: "Caracteres especiales no admitidos."})
		return setErrors({...errors, name: ''})
	}

	function validateAmount(amount){
		if(amount.length < 1) return setErrors({...errors, amountOfTeams: 'Este campo no puede estar vacio.'})
		if(amount < 8) return setErrors({...errors, amountOfTeams: 'Minimo de 8 equipos.'});
		if(amount > 40) return setErrors({...errors, amountOfTeams: 'Maximo de 40 equipos.'})
		return setErrors({...errors, amountOfTeams: ''});
	}

	function validateGenre(genre){
		if(genre.length > 14) return setErrors({...errors, genre: 'Seleccione un genero.'});
		return setErrors({...errors, genre: ''})
	}
	
	function validateCategory(category){
		if(category.length > 14) return setErrors({...errors, category: 'Seleccione una categoria.'});
		return setErrors({...errors, category: ''})
	}

	function validateDescription(description){
		if(description.length <= 0) return setErrors({...errors, description: "Este campo no puede estar vacio."})
		if(description.length > 200) return setErrors({...errors, description: "200 caracteres maximo."})
		return setErrors({...errors, description: ''})
	}

	function validateDateInit(dateInit){
		const today = Date.now();

		if(new Date(dateInit) < today) return setErrors({...errors, dateInit: 'La fecha de inicio no puede ser en el pasado o hoy mismo.'})

		if(input.dateFinish && new Date(input.dateFinish) <= new Date(dateInit)){//Si hay un fecha de inicio definida
			return setErrors({...errors, dateInit: 'La fecha de inicio no puede ser pasada o igual a la de finalizacion.'})
		}

		return setErrors({...errors, dateInit: ''}) 
	}

	function validateDateFinish(dateFinish){
		const today = Date.now();

		if(new Date(dateFinish) < today) return setErrors({...errors, dateFinish: 'La fecha de finalizacion no puede ser en el pasado o hoy mismo.'});

		if(input.dateInit && new Date(input.dateInit) >= new Date(dateFinish)){//Si hay un fecha de inicio definida
			return setErrors({...errors, dateFinish: 'La fecha de finalizacion no puede ser anterior o igual a la de inicio.'})
		}

		return setErrors({...errors, dateFinish: ''});
	}

	function handleChange(e){
		setInput({...input, [e.target.name]: e.target.value})
		validations[e.target.name](e.target.value);
	}

	function handleSubmit(e){
		e.preventDefault();

		if(Object.keys(errors).some(element => errors[element] !=='') || Object.keys(input).some(element =>  input[element] === '')){
			setPopUpError({
				title: 'Error!',
				msg: 'Algunos campos contienen errores o estan vacios.'
			});
		}
		else{
			dispatch(createTournament(input));

			setPopUpError({
				title: 'Exito!',
				msg: 'Torneo creado correctamente.'
			});
		}
	}

	function handlePopUpClose(){
		setPopUpError({title:'',msg:''});
		if(popUpError.title === 'Exito!') history.push('/admin');
	}

	return (
		<div>
			<Nav />
			<div className={styles.mainWrapper}>
				<h1 className='mb-10'>Crear torneo</h1>

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
							onClick={() => handlePopUpClose()}
							className={popUpStyles.okBtn}
						>
							Ok
						</button>
					</div>
				</div>

				<form className='w-4/6 bg-gray-100 p-3 shadow shadow-gray-700 flex 
				flex-col items-center min-w-[280px]'>

					<div className='w-5/6 flex flex-col lg:flex-row items-center lg:items-end 
					justify-between my-3 relative h-[120px] '>
						<label>Nombre: </label>
						<input
							className='w-3/6 h-[50px] border-b-2 border-green-500 min-w-[250px] bg-gray-100'
							type="text"
							value={input.name}
							name="name"
							onChange={(e) => handleChange(e)}
						></input>
						<div
							className={
								errors.name ? styles.error_visible : styles.error_hidden
							}
						>
							{errors.name}
						</div>
					</div>

					<div className='w-5/6 flex flex-col lg:flex-row items-center lg:items-end 
					justify-between my-3 relative h-[120px] '>
						<label>Cantidad equipos: </label>
						<input
							className='w-3/6 h-[50px] rounded-lg min-w-[250px]'
							type="number"
							value={input.amountOfTeams}
							onChange={(e) => handleChange(e)}
							name="amountOfTeams"
						></input>

						<div
							className={
								errors.amountOfTeams
									? styles.error_visible
									: styles.error_hidden
							}
						>
							{errors.amountOfTeams}
						</div>
					</div>
					<div className='w-5/6 flex flex-col lg:flex-row items-center lg:items-end 
					justify-between my-3 relative h-[120px] '>
						<label>Fecha inicio/fin: </label>

						<div className='w-3/6 flex justify-center lg:justify-between'>
							<input
								className='w-5/12 h-[50px] min-w-[110px] rounded-lg mx-1'
								type="date"
								placeholder="DD/MM/AA"
								value={input.dateInit}
								name="dateInit"
								onChange={(e) => handleChange(e)}
							></input>
							<input
								className='w-5/12 h-[50px] min-w-[110px] rounded-lg mx-1'
								type="date"
								placeholder="DD/MM/AA"
								value={input.dateFinish}
								name="dateFinish"
								onChange={(e) => handleChange(e)}
							></input>
						</div>

						<div
							className={
								errors.dateFinish || errors.dateInit
									? styles.error_visible
									: styles.error_hidden
							}
						>
							{errors.dateFinish
								? errors.dateFinish
								: errors.dateInit}
						</div>
					</div>
					<div className='w-5/6 flex flex-col lg:flex-row items-center lg:items-end 
					justify-between my-3 relative h-[120px] '>
						<label>Genero: </label>
						<select
							className='w-3/6 h-[50px] rounded-lg min-w-[250px]'
							name="genre"
							value={input.genre}
							onChange={(e) => handleChange(e)}
						>
							<option>Seleccione un genero</option>
							<option>Masculino</option>
							<option>Femenino</option>
							<option>Mixto</option>
						</select>

						<div
							className={
								errors.genre ? styles.error_visible : styles.error_hidden
							}
						>
							{errors.genre}
						</div>
					</div>
					<div className='w-5/6 flex flex-col lg:flex-row items-center lg:items-end 
					justify-between my-3 relative h-[120px] '>
						<label>Categoria: </label>
						<select
							className='w-3/6 h-[50px] rounded-lg min-w-[250px]'
							name="category"
							value={input.category}
							onChange={(e) => handleChange(e)}
						>
							<option>Seleccione una categoria</option>
							<option key={'Sub20'}>Sub20</option>
							<option key={'Libre'}>Libre</option>
							<option key={'Senior'}>Senior</option>
						</select>
						<div
							className={
								errors.category ? styles.error_visible : styles.error_hidden
							}
						>
							{errors.category}
						</div>
					</div>

					<div className='w-5/6 flex flex-col lg:flex-row items-center lg:items-end 
					justify-between my-3 relative h-[120px] '>
						<label>Descripcion: </label>
						<input
							className='w-3/6 h-[50px] border-b-2 border-green-500 min-w-[250px] bg-gray-100'
							type="text"
							value={input.description}
							name="description"
							onChange={(e) => handleChange(e)}
						></input>

						<div
							className={
								errors.description
									? styles.error_visible
									: styles.error_hidden
							}
						>
							{errors.description}
						</div>
					</div>

					<button
						className={styles.sendBtn}
						type="submit"
						onClick={(e) => handleSubmit(e)}
					>
						Crear Torneo
					</button>
				</form>

				<div className='w-full flex justify-center py-10'>
					<button className='flex items-center justify-center bg-green-500 w-[200px] h-[70px]
					rounded-full text-white text-2xl font-bold duration-300 hover:scale-110'
					onClick={() => history.goBack()}>
						<IoIosArrowBack />
						<p>Volver</p>
					</button>
				</div>
			</div>

			<Footer />
		</div>
	);
}
