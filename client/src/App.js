import './App.css';
import Landing from './components/Landing';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import PlayerInscription from './components/PlayerInscription';
import CreateTournament from './components/CreateTournament';
import AllTournaments from './components/AllTournaments';
import Ban from './components/Ban';
import ComplexDetail from './components/ComplexDetail';
import TournamentDetail from './components/TournamentDetails';
import ModifyTournaments from './components/ModifyTournament';
import FormPago from './components/MP/FormPago';
import About from './components/About';
import DashBoardAdmin from './components/DashBoardAdmin';
import Auth0ProviderWithHistory from './auth0Provider';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from './redux/actions';
import Reviews from './components/Reviews';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Loading from './components/Loading';
import PanelUser from './components/PanelUser';

function App() {
	const actualUser = useSelector((state) => state.actualUser);
	const {loginWithRedirect} = useAuth0();
	const [userInfo, setUserInfo] = useState({
		username: undefined,
		ban: undefined,
		admin: undefined
	});

	useEffect(() => {
		//Esto se corre cada vez que actualUser cambia
		//Solo entro si tengo algo cargado en actualUser en la store de redux
		//Este estado se carga cuando el usuario se logea o si entro a la pagina ya logeado
		//Pero tarda un poquito en cargar

		if (actualUser.username !== undefined) {
			setUserInfo({
				username: actualUser.username,
				ban: actualUser.ban,
				admin: actualUser.admin
			});
		}
	}, [actualUser]);

	return (
		<Auth0ProviderWithHistory>
			<BrowserRouter>
				<div>
					<Switch>
						{/*CUALQUIERA*/}
						<Route exact path="/" component={Landing} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/complex" component={ComplexDetail} />
						<Route exact path="/ban" component={Ban} />
						<Route exact path="/tournaments" component={AllTournaments} />
						<Route exact path="/details/:id" component={TournamentDetail} />
						<Route exact path="/loading" component={Loading} />

						{/* LOGEADO Y NO BANEADO*/}
						{(userInfo.ban===true && <Route exact path="/pago" component={Ban}/>) ||
						 (userInfo.ban===false && <Route exact path="/pago" component={FormPago}/>) ||
						 (userInfo.ban===undefined) && <Route exact path="/pago" component={Loading}/> ||
						 (userInfo.ban==='dc') && <Route exact path="/pago" component={Home}/>}
						{/* LOGEADO Y NO BANEADO*/}

						{/*Pasarela pagos*/}
						{(userInfo.ban === true && (
							<Route exact path="/pago" component={Ban} />
						)) ||
						(userInfo.ban === false && (
							<Route exact path="/pago" component={FormPago} />
						)) ||
						(userInfo.ban === undefined && (
							<Route exact path="/pago" component={Loading} />
						)) ||
						(userInfo.ban === 'dc' && (
							<Route exact path='/pago'
							render={(props) => <Login {...props} authed={false} to={'/pago'}/>}/>
						))}
						
						{/*Inscripciones*/}
						{(userInfo.ban === true && (
							<Route exact path="/inscription" component={Ban} />
						)) ||
							(userInfo.ban === false && (
								<Route
									exact
									path="/inscription"
									component={PlayerInscription}
								/>
							)) ||
							(userInfo.ban === undefined && (
								<Route exact path="/inscription" component={Loading} />
							)) ||
							(userInfo.ban === 'dc' && (
								<Route exact path='/inscription'
								render={(props) => <Login {...props} authed={false} to={'/inscription'}/>}/>
							))}

						{/*Panel usuario*/}
						{(userInfo.ban === true && (
							<Route exact path="/panel" component={Ban} />
						)) ||
							(userInfo.ban === false && (
								<Route exact path="/panel" component={PanelUser} />
							)) ||
							(userInfo.ban === undefined && (
								<Route exact path="/panel" component={Loading} />
							)) ||
							(userInfo.ban === 'dc' && (
								<Route exact path='/panel'
								render={(props) => <Login {...props} authed={false} to={'/panel'}/>}/>
							))}

						{/*NO BANEADO*/}

						{/*Reviews*/}
						{(userInfo.ban === true && (
							<Route exact path="/reviews" component={Ban} />
						)) ||
							((userInfo.ban === false || userInfo.ban === 'dc') && (
								<Route exact path="/reviews" component={Reviews} />
							)) ||
							(userInfo.ban === undefined && (
								<Route exact path="/reviews" component={Loading} />
							))}


						{/*Panel admin*/}
						{(userInfo.admin === true && (
							<Route exact path="/admin" component={DashBoardAdmin} />
						)) ||
						(userInfo.admin === undefined && (
							<Route exact path="/admin" component={Loading} />
						)) || 
						(userInfo.admin==='dc' && (
							<Route exact path='/admin'
							render={(props) => <Login {...props} authed={false} to={'/admin'}/>}/>
						)) ||
						(<Route exact path="/admin" component={Home}/>)
						}

						{/*Admin/Modify*/}
						{(userInfo.admin === true && (
							<Route
								exact path="/admin/modify/:id"
								component={ModifyTournaments}
							/>
						)) ||
						(userInfo.admin === undefined && (
							<Route exact path="/admin/modify/:id" component={Loading} />
						)) || 
						(userInfo.admin==='dc' && (
							<Route exact path='/admin/modify/:id'
							render={(props) => <Login {...props} authed={false} to={'/admin/modify/:id'}/>}/>
						)) ||
						(<Route exact path="/admin/modify/:id" component={Home} />)
						}

						{/*Crear torneo*/}
						{(userInfo.admin === true && (
							<Route exact path="/create" component={CreateTournament} />
						)) ||
						(userInfo.admin === undefined && (
							<Route exact path="/create" component={Loading} />
						)) || 
						(userInfo.admin === 'dc' && (
							<Route exact path='/create'
							render={(props) => <Login {...props} authed={false} to={'/create'}/>}/>
						)) ||
						(<Route exact path="/create" component={Home} />)
						}

					</Switch>
				</div>
			</BrowserRouter>
		</Auth0ProviderWithHistory>
	);
}

export default App;
