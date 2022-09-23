import NextTournaments from "../../components/NextTournaments.jsx";
import {
  CREATE_TOURNAMENT,
  GET_ALL_TOURNAMENTS,
  TOURNAMENT_DETAILS,
  SEARCH_TOURNAMENTS,
  GET_TOURNAMENTS_HOME,
  CREATE_PLAYER,
  GET_NEXT_FIVE_TOURNAMENTS,
  GET_NEXT_TOURNAMENT
} from "../actions/index.js";

let initialState = {
  tournaments: [],
  tournamentDetail: {},
  teams: [],
  players: [],
  users: [],
  userProfile: {},
  tournamentsHome: [],
  nextTournaments: {next: [], nextFive: []}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TOURNAMENT:
      return {
        ...state,
      };
    case GET_ALL_TOURNAMENTS:
      console.log("entrando", state.tournaments);
      return {
        ...state,
        tournaments: action.payload,
      };
      	case CREATE_PLAYER:
			return {
				...state
			};
      case GET_TOURNAMENTS_HOME:
      return {
        ...state,
        tournamentsHome: action.payload,
      };
    case SEARCH_TOURNAMENTS:
      return {
        ...state,
        tournaments: [action.payload],
      };
    case TOURNAMENT_DETAILS:
      return {
        ...state,
        tournamentDetail: action.payload,
      };
		case GET_ALL_TOURNAMENTS:
			return {
				...state,
				tournaments: action.payload
			};

		case SEARCH_TOURNAMENTS:
			return {
				...state,
				tournaments: [action.payload]
			};
		case TOURNAMENT_DETAILS:
			return {
				...state,
				tournamentDetail: action.payload
			};
    case GET_NEXT_FIVE_TOURNAMENTS:
      return {
        ...state, 
        nextTournaments: {...state.nextTournaments, nextFive: action.payload}}
    case GET_NEXT_TOURNAMENT:
      console.log('Estoy entrando la concha de tu hermana');
      
      return {
        ...state,
        nextTournaments: {...state.nextTournaments, next: action.payload}
      }
		default:
			return state;
	}
}

export default rootReducer;
