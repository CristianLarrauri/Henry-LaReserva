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
	getIdReview
} from '../redux/actions';

export default function Reviews() {
	const dispatch = useDispatch();
	const allReviews = useSelector((state) => state.allReviews);
	const userDetail = useSelector((state) => state.actualUser);

	const [review, setReview] = useState({
		id: '',
		nombreUsuario: '',
		comentario: '',
		calificacionComplejo: 0
	});

	useEffect(() => {
		dispatch(getReviews());
	}, []);

	useEffect(() => {
		if (userDetail.username !== undefined) {
			setReview({
				nombreUsuario: userDetail.username,
				comentario: '',
				calificacionComplejo: 0
			});
		}
	}, [userDetail]);

	const [rating, setRating] = useState(0);
	const ratingChanged = (newRating) => {
		setReview({
			...review,
			calificacionComplejo: newRating
		});
		setRating(newRating);
	};

	const handleChange = (e) => {
		setReview({
			...review,
			comentario: e.target.value
		});
	};

	const handleDeleteReview = (e) => {
		dispatch(deleteReviews(e.target.value));
		console.log('etar', e.target.value);
		alert('el comentario ha sido borrado');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postReviews(review));
		console.log('reviewSubmited', review);
		alert('se ha guardado tu comentario');
	};

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
									<h1>Usuario: {ele.nombreUsuario}</h1>
									<p>{ele.comentario}</p>
									<h2>Puntuacion: {ele.calificacionComplejo}</h2>
									<p>Fecha de reseña: {ele.date}</p>
									{userDetail.admin === true ? (
										<button
											onClick={(e) => handleDeleteReview(e)}
											value={ele.id}
										>
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
				<h2>{userDetail.username}</h2>
				<StarsRating
					value={review.calificacionComplejo}
					name="calificacionComplejo"
					count={5}
					size={30}
					color2={'#ffd700'}
					onChange={(e) => ratingChanged(e)}
				/>
				<h2>Tu puntuacion: {rating}</h2>
				<input
					name="comentario"
					value={review.comentario}
					type="text"
					placeholder="deja tu comentario aqui"
					onChange={(e) => handleChange(e)}
				></input>
				<button
					type="submit"
					onClick={(e) => handleSubmit(e)}
					value={review.id}
				>
					Envia tu comentario
				</button>
			</form>

			<Footer />
		</div>
	);
}
