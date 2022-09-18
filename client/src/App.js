import './App.css';
import Landing from './components/Landing';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import TeamInscription from './components/TeamInscription';
import PlayerInscription from './components/PlayerInscription';
import CreateTournament from './components/CreateTournament';
import Nav from './components/Nav';


import Error404 from './components/Error404';

function App() {
	return (
		<BrowserRouter>
			<div>
				{/* <Nav /> */}			
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
					<Route exact path='/404' component={Error404}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
