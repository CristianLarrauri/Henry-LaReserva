import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTournament } from '../redux/actions';
// import PopUp from '../components/PopUp';

export default function CreateTournament() {
	const dispatch = useDispatch();
	// const [x, setX] = useState({});

	const [input, setInput] = useState({
		name: '',
		amountOfTeams: '',
		dateInit: '',
		dateFinish: '',
		genre: '',
		category: ''
	});

	const handleChange = (e) => {
		e.preventDefault();
		setInput({
			...input,
			[e.target.name]: e.target.value
		});

		setFormErrors(
			validate({
				...input,
				[e.target.name]: e.target.value
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let error = Object.keys(validate(input));
		if (error.length !== 0) {
			// setX({
			// 	title: 'Error',
			// 	msg: 'Llene los campos correctamente'
			// });

			alert('Llene todos los campos necesarios');
		} else {
			dispatch(createTournament(input));
			alert('torneo creado exitosamente');
			setInput({
				name: '',
				amountOfTeams: 0,
				dateInit: '',
				dateFinish: '',
				genre: '',
				category: '',
				description: ''
			});
		}
	};

	const [formErrors, setFormErrors] = useState({});
	function validateName(str) {
		if (!/^[a-zA-Z\s]*$/.test(input.name)) return true;
		if (str.length < 1) return true;
		if (str[0] === ' ') return true;
	}

	function validateAmount(num) {
		if (isNaN(num)) return true;
		if (num < 8 || num > 40) return true;
		if (num.indexOf('.') !== -1) return true;
		if (num.indexOf(',') !== -1) return true;
		if (num.indexOf('-') !== -1) return true;
	}

	function validateDate(str) {
		if (!str) return true;
	}

	function validateSelect(select) {
		if (!select) return true;
	}

	function validateDescription(text) {
		if (!text) return true;
	}

	function validate(data) {
		let errors = {};

		if (validateName(data.name)) errors.name = 'Nombre invalido';
		if (validateAmount(data.amountOfTeams))
			errors.amountOfTeams = 'Cantidad inadaecuada';
		if (validateDate(data.dateInit))
			errors.dateInit = 'Ingrese una fecha de inicio';
		if (validateDate(data.dateFinish))
			errors.dateFinish = 'Ingrese una fecha de finalizacion';
		if (validateSelect(data.genre))
			errors.genre = 'Seleccione el genero del torneo';
		if (validateSelect(data.category))
			errors.category = 'Seleccione la categoria del torneo';
		if (validateDescription(data.description))
			errors.description = 'Ingrese una descripcion del torneo';
		return errors;
	}

	return (
		<div>
			{/* <PopUp msg={x} />; */}
			<div>
				<Link to="/home">
					<button>Volver</button>
				</Link>
			</div>
			<h1>Crea tu torneo</h1>
			<form>
				<div>
					<div>
						<label>Nombre del torneo: </label>
						<input
							type="text"
							value={input.name}
							name="name"
							onChange={handleChange}
						></input>
						{formErrors.name ? (
							<h4>
								<small>{formErrors.name}</small>
							</h4>
						) : (
							false
						)}
					</div>
					<div>
						<label>Cantidad de equipos: </label>
						<input
							type="number"
							value={input.amountOfTeams}
							onChange={(e) => handleChange(e)}
							name="amountOfTeams"
						></input>
						{formErrors.amountOfTeams ? (
							<h4>
								<small>{formErrors.amountOfTeams}</small>
							</h4>
						) : (
							false
						)}
					</div>
					<div>
						<label>Fecha inicio/fin: </label>
						<p>Inicio: </p>
						<input
							type="date"
							placeholder="DD/MM/AA"
							value={input.dateInit}
							name="dateInit"
							onChange={handleChange}
						></input>
						{formErrors.dateInit ? (
							<h4>
								<small>{formErrors.dateInit}</small>
							</h4>
						) : (
							false
						)}
						<p>Fin: </p>
						<input
							type="date"
							placeholder="DD/MM/AA"
							value={input.dateFinish}
							name="dateFinish"
							onChange={handleChange}
						></input>
						{formErrors.dateFinish ? (
							<h4>
								<small>{formErrors.dateFinish}</small>
							</h4>
						) : (
							false
						)}
					</div>
					<div>
						<label>Genero: </label>
						<select
							name="genre"
							value={input.genre}
							onChange={(e) => handleChange(e)}
						>
							<option></option>
							<option>Masculino</option>
							<option>Femenino</option>
							<option>Mixto</option>
						</select>
						{formErrors.genre ? (
							<h4>
								<small>{formErrors.genre}</small>
							</h4>
						) : (
							false
						)}
					</div>
					<div>
						<label>Categoria: </label>
						<select
							name="category"
							value={input.category}
							onChange={(e) => handleChange(e)}
						>
							<option></option>
							<option key={'Sub20'}>Sub20</option>
							<option key={'Libre'}>Libre</option>
							<option key={'Senior'}>Senior</option>
						</select>
						{formErrors.category ? (
							<h4>
								<small>{formErrors.category}</small>
							</h4>
						) : (
							false
						)}
					</div>
					<div>
						<label>Descripcion del torneo: </label>
						<input
							type="text"
							value={input.description}
							name="description"
							onChange={handleChange}
						></input>
						{formErrors.description ? (
							<h4>
								<small>{formErrors.description}</small>
							</h4>
						) : (
							false
						)}
					</div>
				</div>
				<button type="submit" onClick={(e) => handleSubmit(e)}>
					Inscribir
				</button>
			</form>
			<Footer />
		</div>
	);
}
