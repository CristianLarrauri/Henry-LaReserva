import './App.css';
import Landing from './components/Landing';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import TeamInscription from './components/TeamInscription';
import PlayerInscription from './components/PlayerInscription';

import CreateTournament from './components/CreateTournament';

import Nav from './components/Nav';


function App() {
	return (
		<BrowserRouter>
			<div>
				<Nav/>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/inscription" component={TeamInscription} />
					<Route
						exact
						path="/inscription/players"
						component={PlayerInscription}
					/>
					<Route exact path="/create" component={CreateTournament} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
