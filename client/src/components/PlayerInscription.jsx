import React from 'react';

import axios from 'axios';


//AGREGAR EN LINEA 74 RUTA PARA INSCRIPCION

import Footer from '../components/Footer';
import Nav from '../components/Nav';


export default function PlayerInscription() {

	const [team, setTeam] = React.useState([])


	//Estados locales para cada jugador que luego seran metidos al array "team"

	const [player1, setPlayer1] = React.useState({
		name:"",
		surname:"",
		dni:0
	})
	const [player2, setPlayer2] = React.useState({
		name:"",
		surname:"",
		dni:0
	})
	const [player3, setPlayer3] = React.useState({
		name:"",
		surname:"",
		dni:0
	})
	const [player4, setPlayer4] = React.useState({
		name:"",
		surname:"",
		dni:0
	})
	const [player5, setPlayer5] = React.useState({
		name:"",
		surname:"",
		dni:0
	})
	const [player6, setPlayer6] = React.useState({
		name:"",
		surname:"",
		dni:0
	})
	const [player7, setPlayer7] = React.useState({
		name:"",
		surname:"",
		dni:0
	})
	const [player8, setPlayer8] = React.useState({
		name:"",
		surname:"",
		dni:0
	})

	//Estado que guardará el valor del boton checkbox

	const [compromise, setCompromise] = React.useState(false)

	const [errors, setErrors] = React.useState({})


	const handleSubmit = (e) => {
		e.preventDefault();
		if(team.length < 8) {
			alert('Faltan jugadores')
		} else if(Object.values(errors).length>0){
			alert('Faltan datos o hay datos incorrectos')
		} else if(!compromise){
			alert('Por favor, lee atentamente la condicion final y tilda la casilla "Entiendo"')
		} else {


			//COLOCAR RUTA PARA INSCRIPCIÓN	
	
	
	
			axios.post(``)



			alert('Equipo inscripto')
			console.log(team)
		}
	}

	//Las tres siguientes funciones son exclusivas del checkbox de compromise

	const handleCompromiseChange = (e) => {
		console.log('Valor target '+e.target.checked)
		console.log('Valor compromise 1 '+compromise)
		setCompromise(e.target.checked==1)
		setTeam([
			player1,
			player2,
			player3,
			player4,
			player5,
			player6,
			player7,
			player8,
		])
	}

	const handleChange1 = (e) => {
		e.preventDefault()
		setPlayer1({
			...player1,
			[e.target.name]: e.target.value
		})

	}
	const handleChange2 = (e) => {
		e.preventDefault()
		setPlayer2({
			...player2,
			[e.target.name]: e.target.value
		})

	}
	const handleChange3 = (e) => {
		e.preventDefault()
		setPlayer3({
			...player3,
			[e.target.name]: e.target.value
		})

	}
	const handleChange4 = (e) => {
		e.preventDefault()
		setPlayer4({
			...player4,
			[e.target.name]: e.target.value
		})

	}
	const handleChange5 = (e) => {
		e.preventDefault()
		setPlayer5({
			...player5,
			[e.target.name]: e.target.value
		})

	}
	const handleChange6 = (e) => {
		e.preventDefault()
		setPlayer6({
			...player6,
			[e.target.name]: e.target.value
		})

	}
	const handleChange7 = (e) => {
		e.preventDefault()
		setPlayer7({
			...player7,
			[e.target.name]: e.target.value
		})
 
	}
	const handleChange8 = (e) => {
		e.preventDefault()
		setPlayer8({
			...player8,
			[e.target.name]: e.target.value
		})

	}

	const handleErrors1 = (e) => {
		e.preventDefault()
		setErrors(validate1(player1))
	}

	const handleErrors2 = (e) => {
		e.preventDefault()
		setErrors(validate2(player2))
	}

	const handleErrors3 = (e) => {
		e.preventDefault()
		setErrors(validate3(player3))
	}

	const handleErrors4 = (e) => {
		e.preventDefault()
		setErrors(validate4(player4))
	}

	const handleErrors5 = (e) => {
		e.preventDefault()
		setErrors(validate5(player5))
	}

	const handleErrors6 = (e) => {
		e.preventDefault()
		setErrors(validate6(player6))
	}

	const handleErrors7 = (e) => {
		e.preventDefault()
		setErrors(validate7(player7))
	}

	const handleErrors8 = (e) => {
		e.preventDefault()
		setErrors(validate8(player8))
	}



	const validate1 = (data) => {
		let error = {}
		if(!data.name){
			error.name1 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name1 = "El nombre debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.name1 = "El nombre debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.name1 = "El nombre no puede contener más de 10 caracteres"
		
		}
		if(!data.surname){
			error.surname1 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.surname)) {
			error.surname1 = "El apellido debe estar solamente compuesto por letras"
		}
		else if (data.surname.length <= 2) {
			error.surname1 = "El apellido debe contener más de 2 caracteres"
		} else if (data.surname.length >= 10) {
			error.surname1 = "El apellido no puede contener más de 10 caracteres"
		
		}
		if(!data.dni){
			error.dni1 = 'Campo requerido'
		} else if (data.dni.toString().length !== 8 ){
			error.dni1 = 'El dni debe tener 8 digitos'
		}
		return error
	}

	const validate2 = (data) => {
		let error = {}
		if(!data.name){
			error.name2 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name2 = "El nombre debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.name2 = "El nombre debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.name2 = "El nombre no puede contener más de 10 caracteres"
		
		}
		if(!data.surname){
			error.surname = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.surname)) {
			error.surname2 = "El apellido debe estar solamente compuesto por letras"
		}
		else if (data.surname.length <= 2) {
			error.surname2 = "El apellido debe contener más de 2 caracteres"
		} else if (data.surname.length >= 10) {
			error.surname2 = "El apellido no puede contener más de 10 caracteres"
		
		}
		if(!data.dni){
			error.dni2 = 'Campo requerido'
		} else if (data.dni.toString().length !== 8 ){
			error.dni2 = 'El dni debe tener 8 digitos'
		}
		return error
	}

	const validate3 = (data) => {
		let error = {}
		if(!data.name){
			error.name3 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name3 = "El nombre debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.name3 = "El nombre debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.name3 = "El nombre no puede contener más de 10 caracteres"
		
		}
		if(!data.surname){
			error.surname3 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname3 = "El apellido debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.surname3 = "El apellido debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.surname3 = "El apellido no puede contener más de 10 caracteres"
		
		}
		if(!data.dni){
			error.dni3 = 'Campo requerido'
		} else if (data.dni.toString().length !== 8 ){
			error.dni3 = 'El dni debe tener 8 digitos'
		}
		return error
	}

	const validate4 = (data) => {
		let error = {}
		if(!data.name){
			error.name4 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name4 = "El nombre debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.name4 = "El nombre debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.name4 = "El nombre no puede contener más de 10 caracteres"
		
		}
		if(!data.surname){
			error.surname4 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname4 = "El apellido debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.surname4 = "El apellido debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.surname4 = "El apellido no puede contener más de 10 caracteres"
		
		}
		if(!data.dni){
			error.dni4 = 'Campo requerido'
		} else if (data.dni.toString().length !== 8 ){
			error.dni4 = 'El dni debe tener 8 digitos'
		}
		return error
	}

	const validate5 = (data) => {
		let error = {}
		if(!data.name){
			error.name5 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name5 = "El nombre debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.name5 = "El nombre debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.name5 = "El nombre no puede contener más de 10 caracteres"
		
		}
		if(!data.surname){
			error.surname5 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname5 = "El apellido debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.surname5 = "El apellido debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.surname5 = "El apellido no puede contener más de 10 caracteres"
		
		}
		if(!data.dni){
			error.dni5 = 'Campo requerido'
		} else if (data.dni.toString().length !== 8 ){
			error.dni5 = 'El dni debe tener 8 digitos'
		}
		return error
	}


	const validate6 = (data) => {
		let error = {}
		if(!data.name){
			error.name6 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name = "El nombre debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.name6 = "El nombre debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.name6 = "El nombre no puede contener más de 10 caracteres"
		
		}
		if(!data.surname){
			error.surname6 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname6 = "El apellido debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.surname6 = "El apellido debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.surname6 = "El apellido no puede contener más de 10 caracteres"
		
		}
		if(!data.dni){
			error.dni6 = 'Campo requerido'
		} else if (data.dni.toString().length !== 8 ){
			error.dni6 = 'El dni debe tener 8 digitos'
		}
		return error
	}

	const validate7 = (data) => {
		let error = {}
		if(!data.name){
			error.name7 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name7 = "El nombre debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.name7 = "El nombre debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.name7 = "El nombre no puede contener más de 10 caracteres"
		
		}
		if(!data.surname){
			error.surname7 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname7 = "El apellido debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.surname7 = "El apellido debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.surname7 = "El apellido no puede contener más de 10 caracteres"
		
		}
		if(!data.dni){
			error.dni7 = 'Campo requerido'
		} else if (data.dni.toString().length !== 8 ){
			error.dni7 = 'El dni debe tener 8 digitos'
		}
		return error
	}

	const validate8 = (data) => {
		let error = {}
		if(!data.name){
			error.name8 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.name8 = "El nombre debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.name8 = "El nombre debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.name8 = "El nombre no puede contener más de 10 caracteres"
		
		}
		if(!data.surname){
			error.surname8 = "Campo requerido"
		} else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			error.surname8 = "El apellido debe estar solamente compuesto por letras"
		}
		else if (data.name.length <= 2) {
			error.surname8 = "El apellido debe contener más de 2 caracteres"
		} else if (data.name.length >= 10) {
			error.surname8 = "El apellido no puede contener más de 10 caracteres"
		
		}
		if(!data.dni){
			error.dni8 = 'Campo requerido'
		} else if (data.dni.toString().length !== 8 ){
			error.dni8 = 'El dni debe tener 8 digitos'
		}
		return error
	}

	return (

		<div>
			<h1>NavBar</h1>
			<h1>Nombre: del torneo</h1>
			<h1>Incribe los miembros del equipo</h1>
			<form>
				<div>
					<h1>#1</h1>
					<label>Nombre: </label>
					<input type="text" name='name' onChange={e => handleChange1(e)} onKeyUp={e => handleErrors1(e)}></input>
					{errors.name1 ? <div><small>{errors.name1}</small></div> : false}
					<br />
					<label>Apellido: </label>
					<input type="text" name='surname' onChange={e => handleChange1(e)}  onKeyUp={e => handleErrors1(e)}></input>
					{errors.surname1 ? <div> <small>{errors.surname1}</small> <br /></div> : false}
					<br />
					<label>DNI: </label>
					<input type="number" name='dni' onChange={e => handleChange1(e)}  onKeyUp={e => handleErrors1(e)}></input>
					{errors.dni1 ? <div><small>{errors.dni1}</small><br /></div> : false}
					<br />
				</div>
				<div>
					<h1>#2</h1>
					<label>Nombre: </label>
					<input type="text" name='name' onChange={handleChange2}  onKeyUp={e => handleErrors2(e)}></input>
					{errors.name2 ? <div><small>{errors.name2}</small><br /></div> : false}
					<br />
					<label>Apellido: </label>
					<input type="text" name='surname' onChange={handleChange2}  onKeyUp={e => handleErrors2(e)}></input>
					{errors.surname2 ? <div><small>{errors.surname2}</small><br /></div> : false}
					<br />
					<label>DNI: </label>
					<input type="number" name='dni' onChange={handleChange2}  onKeyUp={e => handleErrors2(e)}></input>
					{errors.dni2 ? <div><small>{errors.dni2}</small><br /></div> : false}
					<br />
				</div>
				<div>
					<h1>#3</h1>
					<label>Nombre: </label>
					<input type="text" name='name' onChange={handleChange3}  onKeyUp={e => handleErrors3(e)}></input>
					{errors.name3 ? <div><small>{errors.name3}</small><br /></div> : false}
					<br />
					<label>Apellido: </label>
					<input type="text" name='surname' onChange={handleChange3}  onKeyUp={e => handleErrors3(e)}></input>
					{errors.surname3 ? <div><small>{errors.surname3}</small><br /></div> : false}
					<br />
					<label>DNI: </label>
					<input type="number" name='dni' onChange={handleChange3}  onKeyUp={e => handleErrors3(e)}></input>
					{errors.dni3 ? <div><small>{errors.dni3}</small><br /></div> : false}
					<br />
				</div>
				<div>
					<h1>#4</h1>
					<label>Nombre: </label>
					<input type="text" name='name' onChange={handleChange4}  onKeyUp={e => handleErrors4(e)}></input>
					{errors.name4 ? <div><small>{errors.name4}</small><br /></div> : false}
					<br />
					<label>Apellido: </label>
					<input type="text" name='surname' onChange={handleChange4}  onKeyUp={e => handleErrors4(e)}></input>
					{errors.surname4 ? <div><small>{errors.surname4}</small><br /></div> : false}
					<br />
					<label>DNI: </label>
					<input type="number" name='dni' onChange={handleChange4}  onKeyUp={e => handleErrors4(e)}></input>
					{errors.dni4 ? <div><small>{errors.dni4}</small><br /></div> : false}
					<br />
				</div>
				<div>
					<h1>#5</h1>
					<label>Nombre: </label>
					<input type="text" name='name' onChange={handleChange5}  onKeyUp={e => handleErrors5(e)}></input>
					{errors.name5 ? <div><small>{errors.name5}</small><br /></div> : false}
					<br />
					<label>Apellido: </label>
					<input type="text" name='surname' onChange={handleChange5}  onKeyUp={e => handleErrors5(e)}></input>
					{errors.surname5 ? <div><small>{errors.surname5}</small><br /></div> : false}
					<br />
					<label>DNI: </label>
					<input type="number" name='dni' onChange={handleChange5}  onKeyUp={e => handleErrors5(e)}></input>
					{errors.dni5 ? <div><small>{errors.dni5}</small><br /></div> : false}
					<br />
				</div>
				<div>
					<h1>#6</h1>
					<label>Nombre: </label>
					<input type="text" name='name' onChange={handleChange6}  onKeyUp={e => handleErrors6(e)}></input>
					{errors.name6 ? <div><small>{errors.name6}</small><br /></div> : false}
					<br />
					<label>Apellido: </label>
					<input type="text" name='surname' onChange={handleChange6}  onKeyUp={e => handleErrors6(e)}></input>
					{errors.surname6 ? <div><small>{errors.surname6}</small><br /></div> : false}
					<br />
					<label>DNI: </label>
					<input type="number" name='dni' onChange={handleChange6}  onKeyUp={e => handleErrors6(e)}></input>
					{errors.dni6 ? <div><small>{errors.dni6}</small><br /></div> : false}
					<br />
				</div>
				<div>
					<h1>#7</h1>
					<label>Nombre: </label>
					<input type="text" name='name' onChange={handleChange7}  onKeyUp={e => handleErrors7(e)}></input>
					{errors.name7 ? <div><small>{errors.name7}</small><br /></div> : false}
					<br />
					<label>Apellido: </label>
					<input type="text" name='surname' onChange={handleChange7}  onKeyUp={e => handleErrors7(e)}></input>
					{errors.surname7 ? <div><small>{errors.surname7}</small><br /></div> : false}
					<br />
					<label>DNI: </label>
					<input type="number" name='dni' onChange={handleChange7}  onKeyUp={e => handleErrors7(e)}></input>
					{errors.dni7 ? <div><small>{errors.dni7}</small><br /></div> : false}
					<br />
				</div>
				<div>
					<h1>#8</h1>
					<label>Nombre: </label>
					<input type="text" name='name' onChange={handleChange8}  onKeyUp={e => handleErrors8(e)}></input>
					{errors.name8 ? <div><small>{errors.name8}</small><br /></div> : false}
					<br />
					<label>Apellido: </label>
					<input type="text" name='surname' onChange={handleChange8}  onKeyUp={e => handleErrors8(e)}></input>
					{errors.surname8 ? <div><small>{errors.surname8}</small><br /></div> : false}
					<br />
					<label>DNI: </label>
					<input type="number" name='dni' onChange={handleChange8}  onKeyUp={e => handleErrors8(e)}></input>
					{errors.dni8 ? <div><small>{errors.dni8}</small><br /></div> : false}
					<br />
				</div>
				<h3><b>CONDICIÓN NECESARIA</b></h3>
				<div> <p> Todos los datos suministrados deben <b>VERIDICOS</b>. En caso de que los datos no sean comprobables o incorrectos al momento de arrancar el partido, el equipo quedará <b>DESCALIFICADO.</b> </p></div>
				<br />
				<input type="checkbox" name='compromise' value={compromise} onChange={e=>handleCompromiseChange(e)}  /> Entiendo
				{errors.compromise ? <div><small>{errors.compromise}</small></div> : false }
				<br />
				<div>
					<button type="submit" onClick={handleSubmit}>Confirmar</button>
				</div>
			</form>

		</div>
	);
}
