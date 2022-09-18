import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTournament } from '../redux/actions';
import styles from '../styles/CreateTournament.module.css';
import popUpStyles from '../styles/PopUpStyles.module.css';
import {IoIosArrowBack} from 'react-icons/io'
import Nav from '../components/Nav';

export default function CreateTournament() {
	const dispatch = useDispatch();
	const [popUpError, setPopUpError] = useState({});

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
			setPopUpError({
				title: 'Error',
				msg: 'Llene los campos correctamente'
			});

		} else {
			dispatch(createTournament(input));
			setPopUpError({
				title: 'Exito!',
				msg: 'Torneo creado correctamente.'
			});
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

	const [formErrors, setFormErrors] = useState({
		name: 'Nombre invalido',
		amountOfTeams: 'Cantidad inadecuada',
		dateFinish: 'Ingrese una fecha de finalizacion',
		dateInit: 'Ingrese una fecha de inicio',
		genre: 'Seleccione el genero del torneo',
		category: 'Seleccione la categoria del torneo',
		description: 'Ingrese una descripcion del torneo'
	});

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
		if (select==='' || select==='Seleccione un genero' || select==='Seleccione una categoria') return true;
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
		<Nav/>
		<div className={styles.mainWrapper}>
			<h1>Crear torneo</h1>
			<div className={popUpError.title?popUpStyles.popUpOverlay:popUpStyles.popUpOverlay_hidden}>
				<div className={popUpError.title?popUpStyles.popUp:popUpStyles.popUp_hidden}>
					<h2>{popUpError.title}</h2>
					<p>{popUpError.msg}</p>
					<button onClick={() => setPopUpError({})} className={popUpStyles.okBtn}>Ok</button>
				</div>
			</div>

			<button className={styles.backBtn}>
				<Link to='/home' className={styles.linkBack}>
					<IoIosArrowBack/>
					<p>Volver</p>
				</Link>
			</button>
			<form className={styles.mainForm}>
					<div className={styles.infoSection}>
						<label>Nombre del torneo: </label>
						<input
							className={styles.stringInput}
							type="text"
							value={input.name}
							name="name"
							onChange={handleChange}
						></input>
						<div style={{left:'35%'}} className={formErrors.name?
						styles.error_visible:styles.error_hidden}>
							{formErrors.name}
						</div>
					</div>
					<div className={styles.infoSection}>
						<label>Cantidad de equipos: </label>
						<input
							className={styles.dropdownInput}
							type="number"
							value={input.amountOfTeams}
							onChange={(e) => handleChange(e)}
							name="amountOfTeams"
						></input>

						<div style={{left:'30%'}} className={formErrors.amountOfTeams?
						styles.error_visible:styles.error_hidden}>
							{formErrors.amountOfTeams}
						</div>
					</div>
					<div className={styles.dateSection}>
						<label>Fecha inicio/fin: </label>
						<div className={styles.dateInputsWrapper}>
							<input
								className={styles.dateInput}
								type="date"
								placeholder="DD/MM/AA"
								value={input.dateInit}
								name="dateInit"
								onChange={handleChange}
							></input>
							<input
								className={styles.dateInput}
								type="date"
								placeholder="DD/MM/AA"
								value={input.dateFinish}
								name="dateFinish"
								onChange={handleChange}
							></input>
						</div>

						<div style={{left:'22%'}} className={formErrors.dateFinish ||
						formErrors.dateInit?
						styles.error_visible:styles.error_hidden}>
							{formErrors.dateFinish?formErrors.dateFinish:formErrors.dateInit}
						</div>
					</div>
					<div className={styles.infoSection}>
						<label>Genero: </label>
						<select
							className={styles.dropdownInput}
							name="genre"
							value={input.genre}
							onChange={(e) => handleChange(e)}
						>
							<option>Seleccione un genero</option>
							<option>Masculino</option>
							<option>Femenino</option>
							<option>Mixto</option>
						</select>

						<div style={{left:'22%'}} className={formErrors.genre?
						styles.error_visible:styles.error_hidden}>
							{formErrors.genre}
						</div>
					</div>
					<div className={styles.infoSection}>
						<label>Categoria: </label>
						<select
							className={styles.dropdownInput}
							name="category"
							value={input.category}
							onChange={(e) => handleChange(e)}
						>
							<option>Seleccione una categoria</option>
							<option key={'Sub20'}>Sub20</option>
							<option key={'Libre'}>Libre</option>
							<option key={'Senior'}>Senior</option>
						</select>
						<div style={{left:'21%'}} className={formErrors.category?
						styles.error_visible:styles.error_hidden}>
							{formErrors.category}
						</div>
					</div>

					<div className={styles.infoSection}>
						<label>Descripcion: </label>
						<input
							className={styles.stringInput}
							type="text"
							value={input.description}
							name="description"
							onChange={handleChange}
						></input>

						<div style={{left:'20%'}} className={formErrors.description?
						styles.error_visible:styles.error_hidden}>
							{formErrors.description}
						</div>

					</div>
				
				<button className={styles.sendBtn} type="submit" onClick={(e) => handleSubmit(e)}>
					Inscribir
				</button>
			</form>
		</div>

		<Footer/>
		</div>
	);
}
