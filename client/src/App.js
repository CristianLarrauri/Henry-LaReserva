import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import TeamInscription from './components/TeamInscription';
import PlayerInscription from './components/PlayerInscription';
import Landing from './components/Landing';


function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/inscription" component={TeamInscription} />
					<Route
						exact
						path="/inscription/players"
						component={PlayerInscription}
					/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
