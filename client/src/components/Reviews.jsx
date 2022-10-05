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
	getIdReview,
	getEnabledReviews,
	reportAllowReview
} from '../redux/actions';
import { IoStarSharp, IoStarHalf } from 'react-icons/io5';
import popUpStyles from '../styles/PopUpStyles.module.css';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

export default function Reviews() {
	const dispatch = useDispatch();
	const allReviews = useSelector((state) => state.enabledReviews);
	const { user } = useAuth0();
	const userDetail = useSelector((state) => state.actualUser);
	const [popUpError, setPopUpError] = useState({});
	const { loginWithRedirect } = useAuth0();
	const history = useHistory();

	const [review, setReview] = useState({
		id: '',
		nombreUsuario: '',
		comentario: '',
		calificacionComplejo: 0
	});

	useEffect(() => {
		dispatch(getEnabledReviews());
	}, []);

	useEffect(() => {
		if (user !== undefined) {
			setReview({
				nombreUsuario: user.email,
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

	const handleReportReview = (e) => {
		dispatch(reportAllowReview(e.target.value));
		setPopUpError({
			title: 'Exito',
			msg: 'El comentario ha sido reportado'
		});
	};

	const handleChange = (e) => {
		setReview({
			...review,
			comentario: e.target.value
		});
	};

	const handleDeleteReview = (e) => {
		dispatch(deleteReviews(e.target.value));

		setPopUpError({
			title: 'Exito',
			msg: 'El comentario ha sido borrado'
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let error = Object.keys(validate(review));
		if (error.length !== 0) {
			setPopUpError({
				title: 'Error',
				msg: 'Debe ingresar un comentario y un puntaje'
			});
		} else {
			dispatch(postReviews(review));
			setPopUpError({
				title: 'Gracias!',
				msg: 'Se ha guardado tu comentario.'
			});
		}
	};

	function drawStars(calification) {
		const Intstars = Math.floor(calification);
		const middleStars = calification - Math.floor(calification);
		let totalStars = [];

		for (let f = 0; f < Intstars; f++) {
			totalStars.push(<IoStarSharp className="text-xl text-green-700" />);
		}

		if (middleStars >= 0.5)
			totalStars.push(<IoStarHalf className="text-xl text-green-700" />);
		return totalStars;
	}

	function validateComentario(str) {
		if (!str) return true;
	}

	function validateStars(num) {
		if (!num) return true;
	}

	function validate(data) {
		let errors = {};
		if (validateComentario(data.comentario))
			errors.comentario = 'debe ingresar un comentario';
		if (validateStars(data.calificacionComplejo))
			errors.calificacionComplejo = 'debe ingresar un puntaje';
		return errors;
	}

	//----------------funcionalidad del promedio de puntuacion-----------------------------------------------------
	let puntuacion = allReviews.map((p) => p.calificacionComplejo);
	let totalpuntos = 0;
	for (let i = 0; i <= puntuacion.length - 1; i++) {
		totalpuntos = parseFloat(totalpuntos) + parseFloat(puntuacion[i]);
	}
	let promedio = (totalpuntos / puntuacion.length).toFixed(2);
	//-------------------------------------------------------------------------------------------------------------
	return (
		<div className="min-h-screen w-full flex flex-col justify-between items-center bg-white">
			<Nav />
			<div
				className={
					popUpError.title
						? popUpStyles.popUpOverlay
						: popUpStyles.popUpOverlay_hidden
				}
			>
				<div
					className={
						popUpError.title ? popUpStyles.popUp : popUpStyles.popUp_hidden
					}
				>
					<h2>{popUpError.title}</h2>
					<p>{popUpError.msg}</p>
					<button
						onClick={() => {
							setPopUpError({});
							window.location.reload(false);
						}}
						className={popUpStyles.okBtn}
					>
						Ok
					</button>
				</div>
			</div>

			<div className="mt-10 w-full flex justify-around items-center flex-wrap">
				<div className="text-center bg-gray-100 p-3 shadow shadow-gray-700">
					<h2 className="text-gray-700 text-3xl font-bold">Reseñas</h2>

					<div className="text-center">
						<h2 className="text-gray-700 text-xl font-medium">
							{isNaN(promedio)
								? 'No hay datos suficientes.'
								: `Promedio : ${promedio}/5 estrellas`}
						</h2>

						<h2 className="text-gray-700 text-xl font-medium">
							{puntuacion.length} reseñas
						</h2>
					</div>

					{allReviews.length ? (
						allReviews?.map((ele) => {
							return (
								<div
									value={ele.id}
									className="bg-white w-[300px] text-left my-3 break-words 
									p-3 sm:w-[600px] shadow shadow-gray-700 hover:shadow-gray-100 duration-300"
								>
									<h1 className="font-medium text-xl">{ele.nombreUsuario}</h1>
									<div className="flex mt-1">
										{/*Stars wrapper*/}
										{drawStars(ele.calificacionComplejo)}
									</div>
									<p className="text-lg my-2">{ele.comentario}</p>
									<p className="font-medium">{ele.date}</p>
									<button
										onClick={(e) => handleReportReview(e)}
										value={ele.id}
										className="bg-red-500 text-white p-3 rounded-full font-medium 
												hover:bg-red-700 duration-300 hover:scale-110 my-3 ml-2"
									>
										Reportar Comentario
									</button>
									{userDetail.admin === true ? (
										<button
											onClick={(e) => handleDeleteReview(e)}
											value={ele.id}
											className="bg-green-500 text-white p-3 rounded-full font-medium 
												hover:bg-green-700 duration-300 hover:scale-110 my-3 ml-2"
										>
											Eliminar Comentario
										</button>
									) : null}
								</div>
							);
						})
					) : (
						<div
							className="bg-white w-[300px] text-left my-3 break-words 
						p-3 sm:w-[600px] shadow shadow-gray-700 hover:shadow-gray-100
						duration-300 text-center"
						>
							<h1 className="font-medium text-xl">
								{'No se encontraron reseñas :('}
							</h1>
						</div>
					)}
				</div>

				<div className="p-6 bg-gray-100 m-6 shadow-gray-700 shadow">
					{userDetail.username === undefined ? (
						<div
							className="bg-white w-[300px] text-left my-3 break-words 
					p-3 sm:w-[600px] shadow shadow-gray-700 hover:shadow-gray-100
					duration-300 text-center"
						>
							<div className="w-full text-center">
								<h2 className="text-2xl font-bold mb-3">Deja tu opinion!</h2>
							</div>
							<h2 className="font-medium text-xl text-red-700">
								{'Espere por favor..'}
							</h2>
						</div>
					) : userDetail.username === 'dc' ? (
						<div
							className="bg-white w-[300px] text-left my-3 break-words 
					p-3 sm:w-[600px] shadow shadow-gray-700 hover:shadow-gray-100
					duration-300 flex flex-col items-center"
						>
							<div className="w-full text-center">
								<h2 className="text-2xl font-bold mb-3">Deja tu opinion!</h2>
							</div>
							<h2 className="font-medium text-xl text-red-700">
								{'Necesitas estar conectado para dejar una reseña'}
							</h2>

							<button
								className="bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
								hover:scale-110 duration-300 text-white
								flex justify-center items-center animate-appear
								font-medium text-lg"
								onClick={() =>
									loginWithRedirect({
										redirectUri: 'http://localhost:3000/reviews'
									})
								}
							>
								Conectate
							</button>
						</div>
					) : (
						<form className="text-gray-700 flex flex-col items-center">
							<h1 className="text-2xl font-bold mb-3">Deja tu opinion!</h1>

							<div className="w-full">
								<h2 className="text-xl font-medium mb-1">{user.email + ':'}</h2>
							</div>

							<textarea
								name="comentario"
								value={review.comentario}
								type="text"
								placeholder="Deja tu comentario aqui."
								onChange={(e) => handleChange(e)}
								className="w-[600px] min-h-[200px] outline-none p-1
						bg-white shadow shadow-gray-700 hover:shadow-gray-100 duration-300"
							></textarea>

							<StarsRating
								value={review.calificacionComplejo}
								name="calificacionComplejo"
								count={5}
								size={30}
								color2={'#15803d'}
								onChange={(e) => ratingChanged(e)}
							/>

							<button
								type="submit"
								onClick={(e) => handleSubmit(e)}
								value={review.id}
								className="bg-green-500 text-white p-3 rounded-full font-medium 
						hover:bg-green-700 duration-300 hover:tex-green-700
						hover:scale-110 my-3 ml-2 min-w-[200px]"
							>
								Enviar
							</button>
						</form>
					)}
				</div>
			</div>

			<button
				to="/home"
				className="bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
			hover:scale-110 duration-300 text-white
			flex justify-center items-center animate-appear"
				onClick={() => history.goBack()}
			>
				<p className="text-xl font-bold flex items-center justify-center">
					<BiArrowBack className="mr-3" />
					Volver
				</p>
			</button>

			<Footer />
		</div>
	);
}
