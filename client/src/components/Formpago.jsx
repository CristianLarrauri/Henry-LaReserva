import { useAuth0, User } from '@auth0/auth0-react';
import React, { useState } from 'react';
import * as actions from '../redux/actions';
import axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUserDetails } from '../redux/actions/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Formpago(props) {
	let { id } = props.match.params;

	const { user, isAuthenticated, isLoading } = useAuth0();
	const history = useHistory();
	const userDetail = useSelector((state) => state.userDetail);
	const dispatch = useDispatch();
	const [userEmail, setUserEmail] = useState('');

	useEffect(() => {
		axios.get(`http://localhost:3001/users/${userEmail}`).then((data) => {
			if (data.data.ban) {
				history.push('/home'); //Lo mando a home
			}
		});
	}, [userEmail]); //Esto se correo cuando el email cambie/El email solo cambia si el user esta logeado

	if (!isLoading && userEmail === '') {
		//Si no esta cargando y
		if (!isAuthenticated) {
			//Si no esta logeado
			history.push('/home'); //Lo mando a home
		} else {
			//Si esta logeado
			setUserEmail(user.email); //Guardo su email en un estado para obligar al elemento a recargarse
		}
	}

	const [team, setTeam] = useState({
		name: '',
		image: ''
	});

	const [formErrors, setFormErrors] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(team));
		if (!team.name) {
			alert('Colocale un nombre a tu equipo');
		}
		if (Object.values(formErrors).length > 0) {
			alert('Hay errores en nombre');
		} else {
			axios.post('');
			setTeam({
				name: '',
				image: ''
			});
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		setTeam({
			...team,
			[e.target.name]: e.target.value
		});
	};

	const handleError = (e) => {
		e.preventDefault();
		setFormErrors(validate(team));
	};

	function validate(data) {
		let errors = {};
		if (!data.name) {
			errors.name = 'Campo requerido';
		}
		if (!/^[a-zA-Z\s]*$/.test(data.name)) {
			errors.name = 'El nombre debe estar formado solo por letras';
		}
		if (data.name.length < 3) {
			errors.name = 'El nombre debe tener por lo menos 3 caracteres';
		}
		if (data.name.length >= 18) {
			errors.name = 'El nombre es demasiado largo (máx. 18 letras)';
		}
		return errors;
	}

	return (
		<div className="w-full min-h-screen flex flex-col justify-between">
			<Nav />

			<div className="w-full flex flex-col items-center">
				<h1 className="text-3xl font-bold text-green-500 my-10">
					Inscribi tu equipo
				</h1>

				<form className="bg-gray-100 w-4/6 min-w-[330px] flex flex-col items-center">
					<div
						className="w-5/6 min-h-[160px] flex flex-col justify-end items-center
					lg:flex-row lg:items-end relative lg:min-h-[120px] lg:justify-between"
					>
						<label
							className="text-2xl font-medium 
						text-green-500 mb-2"
						>
							Nombre de tu equipo:{' '}
						</label>
						<input
							type="text"
							value={team.name}
							name="name"
							onChange={(e) => handleChange(e)}
							onKeyUp={(e) => handleError(e)}
							placeholder="Nombre del equipo"
							className="w-3/6 h-[50px] bg-gray-100 border-b border-green-500 outline-none
						pl-[10px] min-w-[300px] ml-3 text-lg text-gray-500"
						/>

						<div
							className="absolute right-50 top-2 bg-red-600 text-white rounded-lg
						p-2 font-medium shadow shadow-black duration-500 lg:right-0 lg:top-4"
							style={formErrors.name ? { opacity: 1 } : { opacity: 0 }}
						>
							<p>{formErrors.name}</p>
						</div>
					</div>

					<div
						className="w-5/6 min-h-[160px] flex flex-col justify-end items-center
					lg:flex-row lg:items-end relative lg:min-h-[120px] lg:justify-between
					mt-10"
					>
						<label
							className="text-2xl font-medium
						text-green-500 mb-2"
						>
							Escudo/bandera/imagen:{' '}
						</label>
						<input
							type="text"
							value={team.image}
							name="image"
							placeholder="URL de la imagen"
							onChange={(e) => handleChange(e)}
							className="w-3/6 h-[50px] bg-gray-100 border-b border-green-500 outline-none
						pl-[10px] min-w-[300px] ml-3 text-lg text-gray-500"
						/>

						{/*Agregar error de no imagen aca, solo necesitas reemplazar donde dice formsErrors.name
						por formsErros.image o el nombre que le pongas*/}
						<div
							className="absolute right-50 top-2 bg-red-600 text-white rounded-lg
						p-2 font-medium shadow shadow-black duration-500 lg:right-0 lg:top-4"
							style={formErrors.name ? { opacity: 1 } : { opacity: 0 }}
						>
							<p>{formErrors.name}</p>
						</div>
					</div>

					<Link to="/inscription/players">
						<button
							className="bg-white my-10 rounded-full w-[200px] h-[70px]
					text-green-500 font-medium text-xl hover:text-white hover:bg-green-500
					duration-300 hover:scale-110"
						>
							Continuar registro
						</button>
					</Link>
				</form>
			</div>

			<Footer />
		</div>
	);
}

{
	/* ------------------------------ */
}
// export default function Formpago(){

//     const { user, isAuthenticated } = useAuth0()

//     return(
//         <div>
//             <h1>HOLA</h1>
//             <form action=""></form>
//         </div>
//     )
// }
