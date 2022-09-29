import React from 'react';
import { useState } from 'react';
import StarsRating from 'stars-rating';
import Footer from './Footer';
import Nav from './Nav';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getReviews,
	postReviews,
	deleteReviews,
	getUserDetails
} from '../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';

export default function Reviews() {
	const dispatch = useDispatch();
	const { user, isAuthenticated, isLoading } = useAuth0();
	const allReviews = useSelector((state) => state.allReviews);
	const userDetail = useSelector((state) => state.userDetail);

	console.log('allr', allReviews);

	const [review, setReview] = useState({
		id: '',
		nombreUsuario: !isLoading && user ? user.email : '', // error
		comentario: '',
		calificacionComplejo: 0
	});

	const [rating, setRating] = useState(0);

	const ratingChanged = (newRating) => {
		setRating(newRating);
		setReview({
			...review,
			nombreUsuario: user ? user.email : '',
			calificacionComplejo: rating
		});
	};

	const handleChange = (e) => {
		setReview({
			...review,
			nombreUsuario: user ? user.email : '',
			comentario: e.target.value
		});
	};

	const handleDeleteReview = (e) => {
		dispatch(deleteReviews(e.target.value.id));
		console.log('etv', e.target.value);
		alert('el comentario ha sido borrado');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postReviews(review));
		alert('se ha guardado tu comentario');
	};

	useEffect(() => {
		dispatch(getReviews());
		if (!isLoading && user) dispatch(getUserDetails(user.email));
		// dispatch(getUserDetails(user.email));
	}, []);
	//----------------funcionalidad del promedio de puntuacion-----------------------------------------------------
	let puntuacion = allReviews.map((p) => p.calificacionComplejo);
	let totalpuntos = 0;
	for (let i = 0; i <= puntuacion.length - 1; i++) {
		totalpuntos = parseFloat(totalpuntos) + parseFloat(puntuacion[i]);
	}
	let promedio = (totalpuntos / puntuacion.length).toFixed(2);
	//-------------------------------------------------------------------------------------------------------------
	return (
		<div>
			{console.log('review', review)}
			{console.log('ud', userDetail)}
			<Nav />
			<h2>
				Puntuacion : {promedio}/5 - {puntuacion.length} reseñas
			</h2>
			<h2>Reseñas anteriores</h2>
			<div>
				{allReviews
					? allReviews?.map((ele) => {
							return (
								<div value={ele.id}>
									<h1>{ele.id}</h1>
									<h1>Usuario: {ele.nombreUsuario}</h1>
									<p>{ele.comentario}</p>
									<h2>Puntuacion: {ele.calificacionComplejo}</h2>
									<p>Fecha de reseña: {ele.date}</p>
									{/* {ele.nombreUsuario === user.email ? (
										<button>Modificar Comentario</button>
									) : (
										''
									)} */}

									{userDetail.admin === true ? (
										// ||	userDetail.email === user.email
										<button onClick={handleDeleteReview}>
											Eliminar Comentario
										</button>
									) : (
										''
									)}
								</div>
							);
					  })
					: 'No se encontaron reseñas'}
			</div>

			<form>
				<h1>Deja tu opinion sobre nosotros</h1>
				<StarsRating
					value={review.calificacionComplejo}
					name="calificacionComplejo"
					count={5}
					size={30}
					color2={'#ffd700'}
					onChange={ratingChanged}
				/>
				<h2>Tu puntuacion: {rating}</h2>
				<input
					name="comentario"
					type="text"
					placeholder="deja tu comentario aqui"
					onChange={(e) => handleChange(e)}
				></input>
				<button type="submit" onClick={(e) => handleSubmit(e)}>
					Envia tu comentario
				</button>
			</form>

			<Footer />
		</div>
	);
}
