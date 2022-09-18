import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function PlayerInscription() {
	return (
		<div style={{width:'100%',minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
			<Nav/>
			
			<div>
				<h1>NavBar</h1>
				<h1>Nombre: del torneo</h1>
				<h1>Incribe los miembros del equipo</h1>
				<form>
					<div>
						<h1>#1</h1>
						<label>Nombre: </label>
						<input type="text" value="name"></input>
						<label>Apellido: </label>
						<input type="text" value="surname"></input>
						<label>DNI: </label>
						<input type="number" value="dni"></input>
					</div>
					<div>
						<h1>#2</h1>
						<label>Nombre: </label>
						<input type="text" value="name"></input>
						<label>Apellido: </label>
						<input type="text" value="surname"></input>
						<label>DNI: </label>
						<input type="number" value="dni"></input>
					</div>
					<div>
						<h1>#3</h1>
						<label>Nombre: </label>
						<input type="text" value="name"></input>
						<label>Apellido: </label>
						<input type="text" value="surname"></input>
						<label>DNI: </label>
						<input type="number" value="dni"></input>
					</div>
					<div>
						<h1>#4</h1>
						<label>Nombre: </label>
						<input type="text" value="name"></input>
						<label>Apellido: </label>
						<input type="text" value="surname"></input>
						<label>DNI: </label>
						<input type="number" value="dni"></input>
					</div>
					<div>
						<h1>#5</h1>
						<label>Nombre: </label>
						<input type="text" value="name"></input>
						<label>Apellido: </label>
						<input type="text" value="surname"></input>
						<label>DNI: </label>
						<input type="number" value="dni"></input>
					</div>
					<div>
						<h1>#6</h1>
						<label>Nombre: </label>
						<input type="text" value="name"></input>
						<label>Apellido: </label>
						<input type="text" value="surname"></input>
						<label>DNI: </label>
						<input type="number" value="dni"></input>
					</div>
					<div>
						<h1>#7</h1>
						<label>Nombre: </label>
						<input type="text" value="name"></input>
						<label>Apellido: </label>
						<input type="text" value="surname"></input>
						<label>DNI: </label>
						<input type="number" value="dni"></input>
					</div>
					<div>
						<h1>#8</h1>
						<label>Nombre: </label>
						<input type="text" value="name"></input>
						<label>Apellido: </label>
						<input type="text" value="surname"></input>
						<label>DNI: </label>
						<input type="number" value="dni"></input>
					</div>
					<div>
						<button type="submit">Confirmar</button>
					</div>
				</form>
			</div>

			<Footer/>
		</div>
	);
}
