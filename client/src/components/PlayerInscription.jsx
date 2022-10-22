import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import popUpStyles from '../styles/PopUpStyles.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

export default function PlayerInscription() {
	const id = queryString.parse(useLocation().search).id || '';
	const history = useHistory();
	const {user} = useAuth0();
	const [activeTournaments, setActiveTournaments] = useState([]);
	const [inputs, setInput] = useState({
		tournament: id,
		teamName: '',
		playerName:['','','','','','','',''],
		playerSurname: ['','','','','','','',''],
		playerDni: ['','','','','','','',''],
		mail:''
	})
	const validations = {
		tournament: (tournament) => validateTournament(tournament),
		teamName: (name) => validateTeamName(name),
		playerName: (name) => validatePlayerName(name),
		playerSurname: (surname) => validatePlayerSurname(surname),
		playerDni: (dni) => validateDni(dni)
	}
	const [errors, setErrors] = useState({
		tournament: '',
		teamName: '',
		playerName: '',
		playerSurname: '',
		playerDni: ''
	})
	const [popUpError, setPopUpErrors] = useState({title: '', msg: ''});
	const [phase, setPhase] = useState(0);

	useEffect(() => {
		axios.get('http://localhost:3001/tournaments/panel')
		.then(res => {
			setActiveTournaments(
				res.data.filter(tournament => tournament.state==="Proximo" && tournament.enabled)
			);
		})
		.catch(() => {console.error("No se encontro ningun torneo.")})
	}, [])

	function handleChange(e){
		setInput({...inputs, [e.target.id]: e.target.value});
		validations[e.target.id](e.target.value);
	}

	function handlePlayerChange(e){
		let actualArr = inputs[e.target.id];
		actualArr[phase - 1] = e.target.value;
		setInput({...inputs, [e.target.id]: actualArr})
		validations[e.target.id](e.target.value);
	}

	function validateTournament(tournament){
		if(tournament==='null') return setErrors({...errors, tournament: 'Debe seleccionar un torneo.'})
		return setErrors({...errors, tournament: ''})
	}

	function validateTeamName(name){
		if(name.length < 4) return setErrors({...errors, teamName: 'Minimo de 4 caracteres.'})
		if(name.length > 40) return setErrors({...errors, teamName: 'El nombre no puede tener mas de 40 caracteres.'})
		return setErrors({...errors, teamName: ''})
	}

	function validatePlayerName(name){
		if(name.length < 2) return setErrors({...errors, playerName: 'El nombre debe tener al menos dos letras.'})
		if(name.length > 15) return setErrors({...errors, playerName: 'El nombre no puede tener mas de 15 caracteres.'}) 
		if(!/^[A-Za-z]+$/.test(name)) return setErrors({...errors, playerName: 'El nombre solo puede contener letras.'})
		return setErrors({...errors, playerName: ''});	
	}

	function validatePlayerSurname(surname){
		if(surname.length < 2) return setErrors({...errors, playerSurname: 'El apellido debe tener al menos dos letras.'})
		if(surname.length > 15) return setErrors({...errors, playerSurname: 'El apellido no puede tener mas de 15 caracteres.'}) 
		if(!/^[A-Za-z]+$/.test(surname)) return setErrors({...errors, playerSurname: 'El apellido solo puede contener letras.'})
		return setErrors({...errors, playerSurname: ''});	
	}

	function validateDni(dni){
		if(!/^\d+$/.test(dni) && dni.length > 0) return setErrors({...errors, playerDni: 'Este campo solo acepta numeros.'})
		if(dni.length !== 8) return setErrors({...errors, playerDni: 'El dni debe tener 8 digitos.'})
		return setErrors({...errors, playerDni: ''});
	}

	function errorMsg(errorName){
		return errors[errorName] && 
		<div className='bg-red-700 absolute right-0 font-medium p-1 rounded-lg 
		text-white shadow shadow-gray-700 top-[35px] lg:top-0 min-w-[280px] text-center'>
			{errors[errorName]}
		</div>
	}

	function handlePopUpClose(){
		if(popUpError.title === 'Listo!'){history.push('/pago')} //redirect aca
		setPopUpErrors({title: '', msg: ''})
	}

	function nextPhase(e){
		e.preventDefault();

		switch(phase){
			case 0:
				if(Object.keys(errors).some(error => errors[error] !== '') || !inputs.teamName || !inputs.tournament){//Si hay algun error
					setPopUpErrors({title:'Error!',msg:'Complete la informacion correctamente antes de enviar.'});
				}
				else{
					setInput({...inputs, mail: user.email});
					setPhase(phase + 1);
				}
			break;
			case 8://Aca se termina todo
				if(Object.keys(errors).some(error => errors[error] !== '') || !inputs.playerName[phase-1] 
				|| !inputs.playerSurname[phase-1] || !inputs.playerDni[phase-1]){//Si hay algun error
					setPopUpErrors({title:'Error!',msg:'Complete la informacion correctamente antes de enviar.'});
				}
				else{
					localStorage.setItem('tournamentPlayers', JSON.stringify(inputs));
					setPopUpErrors({title:'Listo!',msg:'Todos los jugadores cargados correctamente.Sera redirigido a la pasarela de pago.'})
				}
			break;
			default:
				if(Object.keys(errors).some(error => errors[error] !== '') || !inputs.playerName[phase-1] 
				|| !inputs.playerSurname[phase-1] || !inputs.playerDni[phase-1]){//Si hay algun error
					setPopUpErrors({title:'Error!',msg:'Complete la informacion correctamente antes de enviar.'});
				}
				else{
					setPopUpErrors({title:'Exito!',msg:'Jugador cargado correctamente, por favor complete los datos del siguiente jugador.'})
					setPhase(phase + 1);
				}
			break;
		}

	}

	return(
		<div className='flex flex-col justify-between min-h-screen'>
			<div className={
					popUpError.title
					? popUpStyles.popUpOverlay
					: popUpStyles.popUpOverlay_hidden
				}>
				<div
				className={popUpError.title ? popUpStyles.popUp : popUpStyles.popUp_hidden}>
					<h2>{popUpError.title}</h2>
					<p className='font-medium text-lg'>{popUpError.msg}</p>
					<button
						onClick={() => handlePopUpClose()}
						className={popUpStyles.okBtn}>
						Ok
					</button>
				</div>
			</div>

			<Nav/>
			<div className='flex flex-col items-center'>
				<h1 className='text-green-500 font-bold text-4xl my-6'>{phase===0?'Inscribi a tu equipo':`Jugador ${phase}`}</h1>

				{phase===0?<form className='bg-gray-100 w-5/6 p-3 min-w-fit shadow shadow-gray-700'>

					<div className='flex justify-between flex-col lg:flex-row items-center 
					lg:items-end my-3 relative h-[125px] lg:h-[100px] min-w-fit'>
						<label htmlFor="tournament" className='text-3xl font-bold text-green-500'>Torneo:</label>
						<select id="tournament" onChange={(e) => handleChange(e)} value={inputs.tournament}
						className='w-3/6 h-[50px] border-b-2 border-green-500 text-gray-700 pl-1 outline-non min-w-[280px]'>
							<option value='null'>Seleccione un torneo</option>
							{activeTournaments?.map((tournament, index) => {
								return <option key={`opt${index}`} value={tournament.id}>{tournament.name}</option>
							})}
						</select>
						{errorMsg('tournament')}
					</div>
					
					<div className='flex justify-between flex-col lg:flex-row items-center 
					lg:items-end my-3 relative h-[125px] lg:h-[100px] min-w-fit'>
						<label htmlFor="" className='text-3xl font-bold text-green-500'>Nombre del equipo:</label>
						<input type="text" 
						className='w-3/6 h-[50px] border-b-2 border-green-500 text-gray-700 pl-1 outline-non min-w-[280px] outline-none'
						onChange={(e) => handleChange(e)}
						value={inputs.teamName}
						id='teamName'/>
						{errorMsg('teamName')}
					</div>
					
					<div className='bg-gray-200 text-center shadow shadow-gray-700 p-1 mt-[60px] mb-[10px]'>
						<p className='text-xl font-bold'>Por favor, completá con los datos REALES de los jugadores.</p>
						<p className='text-xl'>Recordá que los datos serán pedidos por el personal de la cancha antes de iniciar el partido.</p>
					</div>

					<div className='w-full flex justify-center mt-[50px] mb-[20px]'>
						<button className='bg-green-500 w-[200px] h-[60px] rounded-full 
						text-white font-bold text-xl duration-300 hover:scale-110'
						onClick={(e) => nextPhase(e)}>
							Aceptar
						</button>
					</div>
				</form>:

				<form className='bg-gray-100 w-5/6 p-3 min-w-fit shadow shadow-gray-700'>
					<div className='flex justify-between flex-col lg:flex-row items-center 
					lg:items-end my-3 relative h-[125px] lg:h-[100px] min-w-fit'>
						<label htmlFor="" className='text-3xl font-bold text-green-500'>Nombre:</label>
						<input type="text" 
						className='w-3/6 h-[50px] border-b-2 border-green-500 text-gray-700 pl-1 outline-non min-w-[280px] outline-none'
						onChange={(e) => handlePlayerChange(e)}
						value={inputs.playerName[phase - 1]}
						id='playerName'/>
						{errorMsg('playerName')}
					</div>

					<div className='flex justify-between flex-col lg:flex-row items-center 
					lg:items-end my-3 relative h-[125px] lg:h-[100px] min-w-fit'>
						<label htmlFor="" className='text-3xl font-bold text-green-500'>Apellido:</label>
						<input type="text" 
						className='w-3/6 h-[50px] border-b-2 border-green-500 text-gray-700 pl-1 outline-non min-w-[280px] outline-none'
						onChange={(e) => handlePlayerChange(e)}
						value={inputs.playerSurname[phase - 1]}
						id='playerSurname'/>
						{errorMsg('playerSurname')}
					</div>

					<div className='flex justify-between flex-col lg:flex-row items-center 
					lg:items-end my-3 relative h-[125px] lg:h-[100px] min-w-fit'>
						<label htmlFor="" className='text-3xl font-bold text-green-500'>DNI:</label>
						<input type="text" 
						className='w-3/6 h-[50px] border-b-2 border-green-500 text-gray-700 pl-1 outline-non min-w-[280px] outline-none'
						onChange={(e) => handlePlayerChange(e)}
						value={inputs.playerDni[phase - 1]}
						id='playerDni'/>
						{errorMsg('playerDni')}
					</div>

					<div className='w-full flex justify-center mt-[50px] mb-[20px]'>
						<button className='bg-green-500 w-[200px] h-[60px] rounded-full 
						text-white font-bold text-xl duration-300 hover:scale-110'
						onClick={(e) => nextPhase(e)}>
							Aceptar
						</button>
					</div>
				</form>
				}
			</div>
			<Footer/>
		</div>
	);
}
