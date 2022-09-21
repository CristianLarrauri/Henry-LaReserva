import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlayers } from '../redux/actions';
import axios from 'axios';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import popUpStyles from '../styles/PopUpStyles.module.css';
import { Link } from 'react-router-dom';

export default function PlayerInscription() {
	const dispatch = useDispatch();
	const [team, setTeam] = React.useState([]);
	//Esto controla el popUp, si esta vacio no aparece, pero si tiene algo aparece el popUp
	//Si queres usarlo setealo con el siguiente formato: {title: 'TituloPopUp', msg:'Mensaje del popUp'}
	const [popUpError, setPopUpError] = useState({});

	//Estados locales para cada jugador que luego seran metidos al array "team"
	const [player1, setPlayer1] = React.useState({
		name: '',
		surname: '',
		dni: 0
	});
	const [player2, setPlayer2] = React.useState({
		name: '',
		surname: '',
		dni: 0
	});
	const [player3, setPlayer3] = React.useState({
		name: '',
		surname: '',
		dni: 0
	});
	const [player4, setPlayer4] = React.useState({
		name: '',
		surname: '',
		dni: 0
	});
	const [player5, setPlayer5] = React.useState({
		name: '',
		surname: '',
		dni: 0
	});
	const [player6, setPlayer6] = React.useState({
		name: '',
		surname: '',
		dni: 0
	});
	const [player7, setPlayer7] = React.useState({
		name: '',
		surname: '',
		dni: 0
	});
	const [player8, setPlayer8] = React.useState({
		name: '',
		surname: '',
		dni: 0
	});

	//Estado que guardará el valor del boton checkbox

	const [compromise, setCompromise] = React.useState(false);

	const [errors, setErrors] = React.useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (team.length < 8) {
			setPopUpError({title:'Error!',msg:'Faltan jugadores.'})//Esto es un alert, en la linea 12 la explicacion
		} else if (Object.values(errors).length > 0) {
			setPopUpError({title:'Error!', msg: 'Faltan datos o hay datos incorrectos.'});
		} else if (!compromise) {
			setPopUpError({title:'Error!', msg: 'Por favor, lee atentamente la condicion final y tilda la casilla "Entiendo".'});
		} else {
			dispatch(createPlayers(team));
			setPopUpError({title:'Exito!', msg: 'Equipo inscripto correctamente.'});
			/* console.log(team); */
		}
	};

	//Las tres siguientes funciones son exclusivas del checkbox de compromise

	const handleCompromiseChange = (e) => {
		console.log('Valor target ' + e.target.checked);
		console.log('Valor compromise 1 ' + compromise);
		setCompromise(e.target.checked == 1);
		setTeam([
			player1,
			player2,
			player3,
			player4,
			player5,
			player6,
			player7,
			player8
		]);
	};

	const handleChange1 = (e) => {
		e.preventDefault();
		setPlayer1({
			...player1,
			[e.target.name]: e.target.value
		});
	};
	const handleChange2 = (e) => {
		e.preventDefault();
		setPlayer2({
			...player2,
			[e.target.name]: e.target.value
		});
	};
	const handleChange3 = (e) => {
		e.preventDefault();
		setPlayer3({
			...player3,
			[e.target.name]: e.target.value
		});
	};
	const handleChange4 = (e) => {
		e.preventDefault();
		setPlayer4({
			...player4,
			[e.target.name]: e.target.value
		});
	};
	const handleChange5 = (e) => {
		e.preventDefault();
		setPlayer5({
			...player5,
			[e.target.name]: e.target.value
		});
	};
	const handleChange6 = (e) => {
		e.preventDefault();
		setPlayer6({
			...player6,
			[e.target.name]: e.target.value
		});
	};
	const handleChange7 = (e) => {
		e.preventDefault();
		setPlayer7({
			...player7,
			[e.target.name]: e.target.value
		});
	};
	const handleChange8 = (e) => {
		e.preventDefault();
		setPlayer8({
			...player8,
			[e.target.name]: e.target.value
		});
	};

	const handleErrors1 = (e) => {
		e.preventDefault();
		setErrors(validate1(player1));
	};

	const handleErrors2 = (e) => {
		e.preventDefault();
		setErrors(validate2(player2));
	};

	const handleErrors3 = (e) => {
		e.preventDefault();
		setErrors(validate3(player3));
	};

	const handleErrors4 = (e) => {
		e.preventDefault();
		setErrors(validate4(player4));
	};

	const handleErrors5 = (e) => {
		e.preventDefault();
		setErrors(validate5(player5));
	};

	const handleErrors6 = (e) => {
		e.preventDefault();
		setErrors(validate6(player6));
	};

	const handleErrors7 = (e) => {
		e.preventDefault();
		setErrors(validate7(player7));
	};

	const handleErrors8 = (e) => {
		e.preventDefault();
		setErrors(validate8(player8));
	};

	const validate1 = (data) => {
		let error = {};
		if (!data.name) {
			error.name1 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name1 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name1 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name1 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname1 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.surname)) {
			error.surname1 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname1 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname1 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni1 = 'Campo requerido';
		} else if (data.dni.toString().length !== 8) {
			error.dni1 = 'El dni debe tener 8 digitos';
		}
		return error;
	};

	const validate2 = (data) => {
		let error = {};
		if (!data.name) {
			error.name2 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name2 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name2 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name2 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.surname)) {
			error.surname2 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.surname.length <= 2) {
			error.surname2 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.surname.length >= 10) {
			error.surname2 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni2 = 'Campo requerido';
		} else if (data.dni.toString().length !== 8) {
			error.dni2 = 'El dni debe tener 8 digitos';
		}
		return error;
	};

	const validate3 = (data) => {
		let error = {};
		if (!data.name) {
			error.name3 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name3 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name3 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name3 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname3 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname3 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.surname3 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.surname3 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni3 = 'Campo requerido';
		} else if (data.dni.toString().length !== 8) {
			error.dni3 = 'El dni debe tener 8 digitos';
		}
		return error;
	};

	const validate4 = (data) => {
		let error = {};
		if (!data.name) {
			error.name4 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name4 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name4 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name4 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname4 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname4 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.surname4 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.surname4 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni4 = 'Campo requerido';
		} else if (data.dni.toString().length !== 8) {
			error.dni4 = 'El dni debe tener 8 digitos';
		}
		return error;
	};

	const validate5 = (data) => {
		let error = {};
		if (!data.name) {
			error.name5 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name5 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name5 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name5 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname5 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname5 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.surname5 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.surname5 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni5 = 'Campo requerido';
		} else if (data.dni.toString().length !== 8) {
			error.dni5 = 'El dni debe tener 8 digitos';
		}
		return error;
	};

	const validate6 = (data) => {
		let error = {};
		if (!data.name) {
			error.name6 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name6 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name6 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname6 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname6 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.surname6 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.surname6 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni6 = 'Campo requerido';
		} else if (data.dni.toString().length !== 8) {
			error.dni6 = 'El dni debe tener 8 digitos';
		}
		return error;
	};

	const validate7 = (data) => {
		let error = {};
		if (!data.name) {
			error.name7 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name7 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name7 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name7 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname7 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname7 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.surname7 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.surname7 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni7 = 'Campo requerido';
		} else if (data.dni.toString().length !== 8) {
			error.dni7 = 'El dni debe tener 8 digitos';
		}
		return error;
	};

	const validate8 = (data) => {
		let error = {};
		if (!data.name) {
			error.name8 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name8 = 'El nombre debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.name8 = 'El nombre debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.name8 = 'El nombre no puede contener más de 10 caracteres';
		}
		if (!data.surname) {
			error.surname8 = 'Campo requerido';
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname8 = 'El apellido debe estar solamente compuesto por letras';
		} else if (data.name.length <= 2) {
			error.surname8 = 'El apellido debe contener más de 2 caracteres';
		} else if (data.name.length >= 10) {
			error.surname8 = 'El apellido no puede contener más de 10 caracteres';
		}
		if (!data.dni) {
			error.dni8 = 'Campo requerido';
		} else if (data.dni.toString().length !== 8) {
			error.dni8 = 'El dni debe tener 8 digitos';
		}
		return error;
	};

	return (
		<div className='w-full min-h-screen flex flex-col justify-between'>
			<Nav/>

			{/*Esto es el popUp*/}
			<div
				className={
					popUpError.title
					? popUpStyles.popUpOverlay
					: popUpStyles.popUpOverlay_hidden
				}>

				<div className={popUpError.title ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
						<h2>{popUpError.title}</h2>
						<p>{popUpError.msg}</p>
						<button
							onClick={() => setPopUpError({})}
							className={popUpStyles.okBtn}
						>
							Ok
						</button>
					</div>
			</div>


			<div className='min-h-screen flex flex-col items-center relative'>

				<button className='absolute w-[200px] h-[70px] bg-green-500
				text-xl font-medium rounded-full left-3 top-6 text-white
				hover:scale-110 duration-300 animate-appear'>
					<Link to='/home'>
						Volver
					</Link>
				</button>

				<h2 className='text-3xl font-bold text-green-500 mb-10 mt-24 animate-appear'>Inscribi a tu equipo</h2>

				<form className='bg-gray-100 w-5/6 flex flex-col items-center text-center min-w-[350px] animate-appear'>

					<div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 1</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange1(e)}
								onKeyUp={(e) => handleErrors1(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.name1?{opacity:1}:{opacity:0}}>
								<p>{errors.name1}</p>
							</div>

						</div>
						
						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange1(e)}
								onKeyUp={(e) => handleErrors1(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.surname1?{opacity:1}:{opacity:0}}>
								<p>{errors.surname1}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>		
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="number"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange1(e)}
								onKeyUp={(e) => handleErrors1(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.dni1?{opacity:1}:{opacity:0}}>
								<p>{errors.dni1}</p>
							</div>
						</div>
					</div>

					<div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 2</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange2(e)}
								onKeyUp={(e) => handleErrors2(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.name2?{opacity:1}:{opacity:0}}>
								<p>{errors.name2}</p>
							</div>

						</div>
						
						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange2(e)}
								onKeyUp={(e) => handleErrors2(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.surname2?{opacity:1}:{opacity:0}}>
								<p>{errors.surname2}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>		
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="number"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange2(e)}
								onKeyUp={(e) => handleErrors2(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.dni2?{opacity:1}:{opacity:0}}>
								<p>{errors.dni2}</p>
							</div>
						</div>
					</div>

					<div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 3</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange3(e)}
								onKeyUp={(e) => handleErrors3(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.name3?{opacity:1}:{opacity:0}}>
								<p>{errors.name3}</p>
							</div>

						</div>
						
						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange3(e)}
								onKeyUp={(e) => handleErrors3(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.surname3?{opacity:1}:{opacity:0}}>
								<p>{errors.surname3}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>		
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="number"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange3(e)}
								onKeyUp={(e) => handleErrors3(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.dni3?{opacity:1}:{opacity:0}}>
								<p>{errors.dni3}</p>
							</div>
						</div>
					</div>

					<div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 4</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange4(e)}
								onKeyUp={(e) => handleErrors4(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.name4?{opacity:1}:{opacity:0}}>
								<p>{errors.name4}</p>
							</div>

						</div>
						
						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange4(e)}
								onKeyUp={(e) => handleErrors4(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.surname4?{opacity:1}:{opacity:0}}>
								<p>{errors.surname4}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>		
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="number"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange4(e)}
								onKeyUp={(e) => handleErrors4(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.dni4?{opacity:1}:{opacity:0}}>
								<p>{errors.dni4}</p>
							</div>
						</div>
					</div>

					<div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 5</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange5(e)}
								onKeyUp={(e) => handleErrors5(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.name5?{opacity:1}:{opacity:0}}>
								<p>{errors.name5}</p>
							</div>

						</div>
						
						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange5(e)}
								onKeyUp={(e) => handleErrors5(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.surname5?{opacity:1}:{opacity:0}}>
								<p>{errors.surname5}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>		
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="number"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange5(e)}
								onKeyUp={(e) => handleErrors5(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.dni5?{opacity:1}:{opacity:0}}>
								<p>{errors.dni5}</p>
							</div>
						</div>
					</div>

					<div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 6</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange6(e)}
								onKeyUp={(e) => handleErrors6(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.name6?{opacity:1}:{opacity:0}}>
								<p>{errors.name6}</p>
							</div>

						</div>
						
						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange6(e)}
								onKeyUp={(e) => handleErrors6(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.surname6?{opacity:1}:{opacity:0}}>
								<p>{errors.surname6}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>		
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="number"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange6(e)}
								onKeyUp={(e) => handleErrors6(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.dni6?{opacity:1}:{opacity:0}}>
								<p>{errors.dni6}</p>
							</div>
						</div>
					</div>

					<div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador 7</h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange7(e)}
								onKeyUp={(e) => handleErrors7(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.name7?{opacity:1}:{opacity:0}}>
								<p>{errors.name7}</p>
							</div>

						</div>
						
						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange7(e)}
								onKeyUp={(e) => handleErrors7(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.surname7?{opacity:1}:{opacity:0}}>
								<p>{errors.surname7}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>		
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="number"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange7(e)}
								onKeyUp={(e) => handleErrors7(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.dni7?{opacity:1}:{opacity:0}}>
								<p>{errors.dni7}</p>
							</div>
						</div>
					</div>

					<div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3'>
						<h2 className='text-2xl text-green-500 font-medium mt-4'>Jugador </h2>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Nombre: </label>
							<input
								type="text"
								name="name"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px] text-gray-500 text-lg'
								onChange={(e) => handleChange8(e)}
								onKeyUp={(e) => handleErrors8(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.name8?{opacity:1}:{opacity:0}}>
								<p>{errors.name8}</p>
							</div>

						</div>
						
						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>Apellido: </label>
							<input
								type="text"
								name="surname"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange8(e)}
								onKeyUp={(e) => handleErrors8(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.surname8?{opacity:1}:{opacity:0}}>
								<p>{errors.surname8}</p>
							</div>

						</div>

						<div className='flex flex-col justify-end items-center h-[140px]
						relative my-10 lg:flex-row lg:justify-between lg:items-end lg:h-[120px]
						min-w-[320px]'>		
							<label className='text-2xl font-medium 
							text-green-500 mb-3'>DNI: </label>
							<input
								type="number"
								name="dni"
								className='w-4/6 h-[50px] bg-gray-100 border-b border-green-500
								outline-none pl-2 min-w-[300px]'
								onChange={(e) => handleChange8(e)}
								onKeyUp={(e) => handleErrors8(e)}
							></input>

							<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-50 top-0 lg:right-0 duration-300'
							style={errors.dni8?{opacity:1}:{opacity:0}}>
								<p>{errors.dni8}</p>
							</div>
						</div>
					</div>


					<div className='bg-gray-200 w-5/6 min-w-[330px] my-6 p-3 flex items-center flex-col relative'>
						<h3>
							<b>CONDICIÓN NECESARIA</b>
						</h3>

						<p className='mt-3'>
							Todos los datos suministrados deben <b>VERIDICOS</b>. En caso de que
							los datos no sean comprobables o incorrectos al momento de arrancar
							el partido, el equipo quedará <b>DESCALIFICADO.</b>
						</p>


						<div className='flex mt-6'>
							<input
								type="checkbox"
								name="compromise"
								className='w-[30px]'
								value={compromise}
								onChange={(e) => handleCompromiseChange(e)}
							/>
							<p className='ml-1 font-medium text-lg'>Entiendo y acepto las condiciones.</p>
						</div>

						<div className='absolute bg-red-500 p-2 text-white font-medium
							rounded-lg shadow shadow-black right-0 bottom-0 duration-300'
							style={errors.compromise?{opacity:1}:{opacity:0}}>
							<p>{errors.compromise}</p>
						</div>

						<button type="submit" onClick={handleSubmit}
						className='bg-white w-[200px] h-[70px] rounded-full text-xl font-medium
						text-green-500 my-6 hover:bg-green-500 hover:text-white hover:scale-110
						duration-300'>
							Confirmar
						</button>
					</div>
				<div>
					
			</div>

			</form>

			</div>
			
			<Footer/>
		</div>
	);
}


{/*CODIGO ORIGINAL DE MAURO, BORRAR MAS ADELANTE SI YA NO SIRVE*/}
{/* <form>
				<div>
					<h1>#1</h1>
					<label>Nombre: </label>
					<input
						type="text"
						name="name"
						onChange={(e) => handleChange1(e)}
						onKeyUp={(e) => handleErrors1(e)}
					></input>
					{errors.name1 ? (
						<div>
							<small>{errors.name1}</small>
						</div>
					) : (
						false
					)}
					<br />
					
					<label>Apellido: </label>
					<input
						type="text"
						name="surname"
						onChange={(e) => handleChange1(e)}
						onKeyUp={(e) => handleErrors1(e)}
					></input>
					{errors.surname1 ? (
						<div>
							{' '}
							<small>{errors.surname1}</small> <br />
						</div>
					) : (
						false
					)}
					<br />

					<label>DNI: </label>
					<input
						type="number"
						name="dni"
						onChange={(e) => handleChange1(e)}
						onKeyUp={(e) => handleErrors1(e)}
					></input>
					{errors.dni1 ? (
						<div>
							<small>{errors.dni1}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />

				</div>


				<div>
					<h1>#2</h1>
					<label>Nombre: </label>
					<input
						type="text"
						name="name"
						onChange={handleChange2}
						onKeyUp={(e) => handleErrors2(e)}
					></input>
					{errors.name2 ? (
						<div>
							<small>{errors.name2}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>Apellido: </label>
					<input
						type="text"
						name="surname"
						onChange={handleChange2}
						onKeyUp={(e) => handleErrors2(e)}
					></input>
					{errors.surname2 ? (
						<div>
							<small>{errors.surname2}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>DNI: </label>
					<input
						type="number"
						name="dni"
						onChange={handleChange2}
						onKeyUp={(e) => handleErrors2(e)}
					></input>
					{errors.dni2 ? (
						<div>
							<small>{errors.dni2}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
				</div>
				<div>
					<h1>#3</h1>
					<label>Nombre: </label>
					<input
						type="text"
						name="name"
						onChange={handleChange3}
						onKeyUp={(e) => handleErrors3(e)}
					></input>
					{errors.name3 ? (
						<div>
							<small>{errors.name3}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>Apellido: </label>
					<input
						type="text"
						name="surname"
						onChange={handleChange3}
						onKeyUp={(e) => handleErrors3(e)}
					></input>
					{errors.surname3 ? (
						<div>
							<small>{errors.surname3}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>DNI: </label>
					<input
						type="number"
						name="dni"
						onChange={handleChange3}
						onKeyUp={(e) => handleErrors3(e)}
					></input>
					{errors.dni3 ? (
						<div>
							<small>{errors.dni3}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
				</div>
				<div>
					<h1>#4</h1>
					<label>Nombre: </label>
					<input
						type="text"
						name="name"
						onChange={handleChange4}
						onKeyUp={(e) => handleErrors4(e)}
					></input>
					{errors.name4 ? (
						<div>
							<small>{errors.name4}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>Apellido: </label>
					<input
						type="text"
						name="surname"
						onChange={handleChange4}
						onKeyUp={(e) => handleErrors4(e)}
					></input>
					{errors.surname4 ? (
						<div>
							<small>{errors.surname4}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>DNI: </label>
					<input
						type="number"
						name="dni"
						onChange={handleChange4}
						onKeyUp={(e) => handleErrors4(e)}
					></input>
					{errors.dni4 ? (
						<div>
							<small>{errors.dni4}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
				</div>
				<div>
					<h1>#5</h1>
					<label>Nombre: </label>
					<input
						type="text"
						name="name"
						onChange={handleChange5}
						onKeyUp={(e) => handleErrors5(e)}
					></input>
					{errors.name5 ? (
						<div>
							<small>{errors.name5}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>Apellido: </label>
					<input
						type="text"
						name="surname"
						onChange={handleChange5}
						onKeyUp={(e) => handleErrors5(e)}
					></input>
					{errors.surname5 ? (
						<div>
							<small>{errors.surname5}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>DNI: </label>
					<input
						type="number"
						name="dni"
						onChange={handleChange5}
						onKeyUp={(e) => handleErrors5(e)}
					></input>
					{errors.dni5 ? (
						<div>
							<small>{errors.dni5}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
				</div>
				<div>
					<h1>#6</h1>
					<label>Nombre: </label>
					<input
						type="text"
						name="name"
						onChange={handleChange6}
						onKeyUp={(e) => handleErrors6(e)}
					></input>
					{errors.name6 ? (
						<div>
							<small>{errors.name6}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>Apellido: </label>
					<input
						type="text"
						name="surname"
						onChange={handleChange6}
						onKeyUp={(e) => handleErrors6(e)}
					></input>
					{errors.surname6 ? (
						<div>
							<small>{errors.surname6}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>DNI: </label>
					<input
						type="number"
						name="dni"
						onChange={handleChange6}
						onKeyUp={(e) => handleErrors6(e)}
					></input>
					{errors.dni6 ? (
						<div>
							<small>{errors.dni6}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
				</div>
				<div>
					<h1>#7</h1>
					<label>Nombre: </label>
					<input
						type="text"
						name="name"
						onChange={handleChange7}
						onKeyUp={(e) => handleErrors7(e)}
					></input>
					{errors.name7 ? (
						<div>
							<small>{errors.name7}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>Apellido: </label>
					<input
						type="text"
						name="surname"
						onChange={handleChange7}
						onKeyUp={(e) => handleErrors7(e)}
					></input>
					{errors.surname7 ? (
						<div>
							<small>{errors.surname7}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>DNI: </label>
					<input
						type="number"
						name="dni"
						onChange={handleChange7}
						onKeyUp={(e) => handleErrors7(e)}
					></input>
					{errors.dni7 ? (
						<div>
							<small>{errors.dni7}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
				</div>
				<div>
					<h1>#8</h1>
					<label>Nombre: </label>
					<input
						type="text"
						name="name"
						onChange={handleChange8}
						onKeyUp={(e) => handleErrors8(e)}
					></input>
					{errors.name8 ? (
						<div>
							<small>{errors.name8}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>Apellido: </label>
					<input
						type="text"
						name="surname"
						onChange={handleChange8}
						onKeyUp={(e) => handleErrors8(e)}
					></input>
					{errors.surname8 ? (
						<div>
							<small>{errors.surname8}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
					<label>DNI: </label>
					<input
						type="number"
						name="dni"
						onChange={handleChange8}
						onKeyUp={(e) => handleErrors8(e)}
					></input>
					{errors.dni8 ? (
						<div>
							<small>{errors.dni8}</small>
							<br />
						</div>
					) : (
						false
					)}
					<br />
				</div>

				<h3>
					<b>CONDICIÓN NECESARIA</b>
				</h3>
				<div>
					{' '}
					<p>
						{' '}
						Todos los datos suministrados deben <b>VERIDICOS</b>. En caso de que
						los datos no sean comprobables o incorrectos al momento de arrancar
						el partido, el equipo quedará <b>DESCALIFICADO.</b>{' '}
					</p>
				</div>
				<br />
				<input
					type="checkbox"
					name="compromise"
					value={compromise}
					onChange={(e) => handleCompromiseChange(e)}
				/>{' '}
				Entiendo
				{errors.compromise ? (
					<div>
						<small>{errors.compromise}</small>
					</div>
				) : (
					false
				)}
				<br />
				<div>
					<button type="submit" onClick={handleSubmit}>
						Confirmar
					</button>
				</div>
			</form> */}