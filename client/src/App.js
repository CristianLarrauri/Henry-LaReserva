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

function App() {
	const actualUser = useSelector((state) => state.actualUser);
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
						<Route exact path="/login" component={Login} />
						<Route exact path="/ban" component={Ban} />
						<Route exact path="/tournaments" component={AllTournaments} />
						<Route exact path="/details/:id" component={TournamentDetail} />
						<Route exact path="/loading" component={Loading} />
						{/* LOGEADO Y NO BANEADO*/}
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
								<Route exact path="/pago" component={Home} />
							))}

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
								<Route exact path="/inscription" component={Home} />
							))}

						{/*NO BANEADO*/}
						{(userInfo.ban === true && (
							<Route exact path="/reviews" component={Ban} />
						)) ||
							((userInfo.ban === false || userInfo.ban === 'dc') && (
								<Route exact path="/reviews" component={Reviews} />
							)) ||
							(userInfo.ban === undefined && (
								<Route exact path="/reviews" component={Loading} />
							))}

						{/*ADMIN*/}
						{(userInfo.admin === true && (
							<Route exact path="/admin" component={DashBoardAdmin} />
						)) ||
							(userInfo.admin === undefined && (
								<Route exact path="/admin" component={Loading} />
							)) || <Route exact path="/admin" component={Home} />}

						{(userInfo.admin === true && (
							<Route
								exact
								path="/admin/modify/:id"
								component={ModifyTournaments}
							/>
						)) ||
							(userInfo.admin === undefined && (
								<Route exact path="/admin/modify/:id" component={Loading} />
							)) || <Route exact path="/admin/modify/:id" component={Home} />}

						{(userInfo.admin === true && (
							<Route exact path="/create" component={CreateTournament} />
						)) ||
							(userInfo.admin === undefined && (
								<Route exact path="/create" component={Loading} />
							)) || <Route exact path="/create" component={Home} />}
					</Switch>
				</div>
			</BrowserRouter>
		</Auth0ProviderWithHistory>
	);
}

export default App;
