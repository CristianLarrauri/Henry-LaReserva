import './App.css';
import Landing from './components/Landing';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import TeamInscription from './components/TeamInscription';
import PlayerInscription from './components/PlayerInscription';
import CreateTournament from './components/CreateTournament';
import AllTournaments from './components/AllTournaments';
import Ban from './components/Ban';
import ComplexDetail from './components/ComplexDetail';
import TournamentDetail from './components/TournamentDetails';
import ModifyTournaments from './components/ModifyTournament';
import Formpago from './components/Formpago.jsx';
import About from './components/About';
import DashBoardAdmin from './components/DashBoardAdmin';
import Auth0ProviderWithHistory from './auth0Provider';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from './redux/actions';

function App() {
	//!isLoading && !user(NO LOGUEADO)
	//!isLoading &&	user (lOGUEADO)
	const dispatch = useDispatch();
	const { user, isAuthenticated, isLoading } = useAuth0();
	const userDetail = useSelector((state) => state.userDetail);
	console.log('det', userDetail);
	console.log('aaa', isLoading, user);
	const admin = userDetail.admin;
	const ban = userDetail.ban;

	useEffect(() => {
		if (!isLoading && user) dispatch(getUserDetails(user.email));
	});

	return (
		<Auth0ProviderWithHistory>
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/complex" component={ComplexDetail} />
						<Route exact path="/ban" component={Ban} />
						<Route exact path="/tournaments" component={AllTournaments} />
						<Route exact path="/details/:id" component={TournamentDetail} />
						<Route exact path="/inscription" component={PlayerInscription} />
						<Route exact path="/pago" component={Formpago} />
						<Route exact path="/admin" component={DashBoardAdmin} />
						<Route
							exact
							path="/admin/modify/:id"
							component={ModifyTournaments}
						/>
						<Route exact path="/create" component={CreateTournament} />
					</Switch>
				</div>
			</BrowserRouter>
		</Auth0ProviderWithHistory>
	);
}

export default App;
