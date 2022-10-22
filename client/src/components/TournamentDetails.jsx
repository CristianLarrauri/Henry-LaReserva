import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from './Footer';
import ScorersTable from '../components/ScorersTable';
import TeamsTable from '../components/TeamsTable';
import popUpStyles from '../styles/PopUpStyles.module.css';
import {
	BsCalendarDate,
	BsGenderFemale,
	BsGenderMale,
	BsGenderAmbiguous,
	BsFillPersonFill
} from 'react-icons/bs';

import { BiCategoryAlt, BiArrowBack } from 'react-icons/bi';
import ball from '../images/blackBall.png';
import { useHistory } from 'react-router-dom';

const TournamentDetail = (props) => {
	let { id } = props.match.params;
	const dispatch = useDispatch();
	const history = useHistory();

	React.useEffect(() => {
		dispatch(actions.tournamentDetails(id));
	}, [dispatch]);

	let tournament = useSelector((state) => state.tournamentDetail);

	const userDetail = useSelector((state) => state.actualUser);

	const [fixture, setFixture] = React.useState('');
	const [errorFixture, setErrorFixture] = React.useState('');
	const [loading, setLoading] = React.useState(1);
	const [popUpError, setPopUpError] = React.useState({ title: '', msg: '' });

	const handleFixture = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		let size = 0;
		if (files) {
			size += files[0].size;
		}

		data.append('file', files[0]);
		data.append('upload_preset', 'ReservaTeams');
		setLoading(2);
		try {
			const res = await fetch(
				'https://api.cloudinary.com/v1_1/maurodavid/image/upload',
				{
					method: 'POST',
					body: data
				}
			);
			const file = await res.json();
			let array = file.secure_url.split('.');
			let format = array[array.length - 1];

			if (size > 2000000) {
				setErrorFixture('El archivo es demasiado grande');
			} else {
				if (format === 'jpg' || format === 'png') {
					setErrorFixture('');
					setFixture(file.secure_url);
					setLoading(0);
				} else {
					setErrorFixture('Solo se admiten archivos formato jpeg o png');
					setLoading(1);
				}
			}
		} catch (error) {
			setErrorFixture('Solo se admiten archivos formato jpeg o png');
			setLoading(1);
		}
	};

	const handleUpdateFixture = (e) => {
		e.preventDefault();

		setLoading(1);
		dispatch(actions.putFixture(id, fixture));
	};

	return (
		<div className="bg-white w-full min-h-screen flex flex-col justify-between items-center">
			<Nav />
			<div className="w-full min-h-screen flex flex-col items-center relative animate-appear">
				<div className="bg-gray-100 w-5/6 p-5 mt-10 flex flex-col items-center shadow shadow-gray-700">
					{/*info container*/}
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
								onClick={(e) => {
									setPopUpError({});
									handleUpdateFixture(e);
									window.location.reload(false);
								}}
								className={popUpStyles.okBtn}
							>
								Si
							</button>

							<button
								onClick={() => setPopUpError({})}
								className={popUpStyles.okBtn}
							>
								Cancelar
							</button>
						</div>
					</div>

					<div className="w-3/6 text-gray-800 text-center">
						<h1 className="font-bold text-2xl">TORNEO</h1>
						<h2 className="font-bold text-xl">{`"${tournament.name}"`}</h2>

						<div className="w-full flex justify-between my-3 flex-wrap">
							<div className="flex items-center my-1">
								<BsCalendarDate className="text-2xl" />
								<p className="font-medium text-xl ml-3">{`Desde: ${tournament.dateInit}`}</p>
							</div>

							<div className="flex items-center my-1">
								<BsCalendarDate className="text-2xl" />
								<p className="font-medium text-xl ml-3">{`Hasta: ${tournament.dateFinish}`}</p>
							</div>
						</div>

						<div className="flex justify-between mt-6 flex-wrap">
							<div className="flex my-1">
								<BiCategoryAlt className="text-2xl" />
								<p className="font-medium text-xl ml-3">{`Categoria: ${
									tournament.category === 'Free'
										? 'Libre'
										: tournament.category === 'Sub20'
										? 'Sub20'
										: 'Senior'
								}`}</p>
							</div>

							<div className="flex my-1">
								{tournament.genre === 'Masculino' ? (
									<BsGenderMale className="text-2xl" />
								) : tournament.genre === 'Femenino' ? (
									<BsGenderFemale className="text-2xl" />
								) : (
									<BsGenderAmbiguous className="text-2xl" />
								)}
								<p className="font-medium text-xl ml-3">{`Genero: ${
									tournament.genre === 'Masculino'
										? 'Masculino'
										: tournament.genre === 'Femenino'
										? 'Femenino'
										: 'Mixto'
								}`}</p>
							</div>

							<div className="flex my-1">
								<BsFillPersonFill className="text-2xl" />
								<p className="font-medium text-xl ml-3">{`Cupos disponibles: ${tournament.amountOfTeams}`}</p>
							</div>
						</div>

						<div className="text-left mt-10">
							<h3 className="font-medium text-xl ml-3">
								Descripcion: {tournament.description}
							</h3>
						</div>

						<div className="w-full flex justify-center items-center">
							{tournament.state === 'Proximo' &&
							tournament.amountOfTeams !== 0 ? (
								<Link
									to={`/inscription?id=${id}`}
									className="bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
								hover:bg-white hover:text-green-700 hover:scale-110 duration-300 text-white
								flex justify-center items-center"
								>
									<p className="text-xl font-bold">Inscribite</p>
								</Link>
							) : (
								false
							)}
							{tournament.state === 'Proximo' &&
							tournament.amountOfTeams === 0 ? (
								<h1 className="text-2xl font-bold text-grey-700 mt-4">
									No hay cupos disponibles para este torneo, intenta con otro
								</h1>
							) : (
								false
							)}
						</div>
					</div>
				</div>

				<div
					className="w-5/6 mt-10 flex items-center flex-col 
				xl:flex-row xl:justify-between xl:items-start">
					<div className="bg-gray-100 min-w-full sm:min-w-[500px] h-full min-h-[150px] p-5 m-3 shadow shadow-gray-700">
						<TeamsTable id={id} />
					</div>

					<div className="bg-gray-100 max-h-[681px] min-h-[220px] min-w-full sm:min-w-[500px] m-3 p-5 shadow shadow-gray-700 overflow-auto">
						<ScorersTable id={id} />
					</div>
				</div>

				{tournament.fixture && (
					<div
						className="bg-green-700 w-[320px] h-[180px] lg:w-[960px] lg:h-[540px]
					sm:w-[640px] sm:h-[360px] flex justify-center items-center overflow-hidden mt-10
					shadow shadow-gray-700"
					>
						<img
							className="w-full h-full"
							src={tournament.fixture}
							alt="fixture.png"
						/>
					</div>
				)}

				{userDetail.admin === true ? (
					<div className=" mt-10 w-5/6 flex flex-col items-center">
						<div className="bg-gray-100 p-3 flex flex-col items-center shadow shadow-gray-700 my-12 min-w-fit m-3">
							<label
								className="text-2xl font-medium
							text-gray-700 mb-2"
							>
								Cargar fixture
							</label>

							<input
								id="inputFile"
								type="file"
								name="image"
								onChange={(e) => handleFixture(e)}
								className="text-xl text-gray-700 bg-white p-2 w-5/6 shadow shadow-gray-700"
							/>

							<p className="">Tamaño recomendado 1280*720</p>
						</div>

						{loading === 2 ? (
							<div>
								<p className="text-gray-700 font-medium my-3 text-xl">
									Cargando...
								</p>
								<img
									className="w-[80px] h-[80px] animate-spin"
									src={ball}
									alt="ball.png"
								/>
							</div>
						) : (
							false
						)}
						{loading === 0 ? (
							<div className="flex flex-col items-center">
								<div
									className="bg-green-700 w-[320px] h-[180px] lg:w-[960px] lg:h-[540px]
								sm:w-[640px] sm:h-[360px] flex justify-center items-center overflow-hidden"
								>
									<img
										className="w-full h-full"
										src={fixture}
										alt="fixture.png"
									/>
								</div>

								<button
									className="bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
								hover:scale-110 duration-300 text-white
								flex justify-center items-center font-bold text-xl"
									onClick={() =>
										setPopUpError({
											title: 'Seguro?',
											msg: 'Esta seguro que desea usar esta imagen?'
										})
									}
								>
									Actualizar
								</button>
							</div>
						) : (
							false
						)}

						<div
							className="absolute right-50 top-2 bg-red-600 text-white rounded-lg
							p-2 font-medium shadow shadow-black duration-500 lg:right-0 lg:top-4"
							style={errorFixture ? { opacity: 1 } : { opacity: 0 }}
						>
							<p>{errorFixture}</p>
						</div>
					</div>
				) : (
					false
				)}

				<button
					onClick={() => history.goBack()}
					className="bg-green-500 w-[180px] h-[80px] rounded-full m-8 z-50
					hover:scale-110 duration-300 text-white
					flex justify-center items-center animate-appear my-20"
				>
					<p className="text-xl font-bold flex items-center justify-center">
						<BiArrowBack className="mr-3" />
						Volver
					</p>
				</button>
			</div>

			<Footer />
		</div>
	);
};

export default TournamentDetail;
