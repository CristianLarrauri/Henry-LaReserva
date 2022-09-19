import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions"
import axios from 'axios';

export default function TeamInscription(props) {
	let { id } = props.match.params
	// const dispatch = useDispatch();
	// React.useEffect(() => {
	// 	dispatch(actions.tournamentDetail(id));
	// }, [dispatch]);

	// const tournament = useSelector(state => state.tournament)

	const [team, setTeam] = useState({
		name: "",
		image: ""
	});

	const [formErrors, setFormErrors] = useState({})

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(team));
		if(!team.name){
			alert("Colocale un nombre a tu equipo")
		}
		if(Object.values(formErrors).length > 0){
			alert("Hay errores en nombre")
		}else{
			axios.post("")
			setTeam({
				name: "",
				image: ""
			})
			
		}
	}

	const handleChange = (e) => {
		e.preventDefault();
		setTeam({
			...team,
			[e.target.name]: e.target.value
		});
	};

	const handleError = (e) => {
		e.preventDefault();
		setFormErrors(validate(team))
	}

	function validate(data) {
		let errors = {}
		if (!data.name) {
			errors.name = 'Campo requerido'
		}
		if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			errors.name = 'El nombre debe estar formado solo por letras'
		}
		if (data.name.length < 3) {
			errors.name = 'El nombre debe tener por lo menos 3 caracteres'
		}
		if (data.name.length >= 18) {
			errors.name = 'El nombre es demasiado largo (máx. 18 letras)'
		}
		return errors
	}



	return (
		<div>
			{/* <h2>Incripcion Torneo {tournament.name}</h2>
			<img src={tournament.image} alt={tournament.name} />
			<h4>Inicio: {tournament.dateInit} - Finalizacion: {tournament.dateFinish} </h4> */}
			<h3>Inscribi tu equipo</h3>
			<form>
				<label>Nombre de tu equipo: </label>
				<input type="text" value={team.name} name="name" onChange={e=>handleChange(e)} onKeyUp={e => handleError(e)}></input>
				{formErrors.name ? (
					<h4>
						<small>{formErrors.name}</small>
					</h4>
				) : null}
				<br />
				<label>Escudo/bandera/imagen: </label>
				<input type="text" value={team.image} name='image' placeholder='URL de la imagen' onChange={e=>handleChange(e)}></input>
			</form>
			<Link to="/inscription/players">
				<button>Continua el registro</button>
			</Link>
		</div>
	);
}
