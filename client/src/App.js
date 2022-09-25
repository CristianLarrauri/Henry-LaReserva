import './App.css';
import Landing from './components/Landing';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import TeamInscription from './components/TeamInscription';
import PlayerInscription from './components/PlayerInscription';
import CreateTournament from './components/CreateTournament';
import AllTournaments from './components/AllTournaments';
import Error404 from './components/Error404';
import ComplexDetail from './components/ComplexDetail';
import TournamentDetail from './components/TournamentDetails';
import ModifyTournaments from './components/ModifyTournament';
import Formpago from './components/Formpago.jsx';
import About from './components/About';
import DashBoardAdmin from './components/DashBoardAdmin';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Switch>
        	<Route exact path="/admin/modify/:id" component={ModifyTournaments} />
					<Route exact path="/admin" component={DashBoardAdmin} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/pago" component={Formpago} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/inscription" component={TeamInscription} />
          <Route exact path="/inscription" component={PlayerInscription} />
          <Route exact path="/tournaments" component={AllTournaments} />
          <Route exact path="/create" component={CreateTournament} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/details/:id" component={TournamentDetail} />
          <Route exact path="/complex" component={ComplexDetail} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
