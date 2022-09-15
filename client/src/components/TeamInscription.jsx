import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamInscription() {
	return (
		<div>
			<h1>NavBar</h1>
			<h2>Nombre del torneo</h2>
			<h4>Inicio: 26/6/11 - Finalizacion:... </h4>
			<h3>Inscribi tu equipo</h3>
			<form>
				<label>Nombre de tu equipo: </label>
				<input type="text"></input>
				<label>Escudo/bandera/imagen: </label>
				<input type="text"></input>
			</form>
			<Link to="/inscription/players">
				<button>Continua el registro</button>
			</Link>
		</div>
	);
}