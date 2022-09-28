import NextTournaments from '../../components/NextTournaments.jsx';
import {
	CREATE_TOURNAMENT,
	GET_ALL_TOURNAMENTS,
	TOURNAMENT_DETAILS,
	SEARCH_TOURNAMENTS,
	GET_TOURNAMENTS_HOME,
	CREATE_PLAYER,
	GET_ALL_USERS,
	CREATE_USER,
	BAN_USER,
	TO_ADMIN,
	GET_NEXT_FIVE_TOURNAMENTS,
	GET_NEXT_TOURNAMENT,
	GET_TOURNAMENTS_ADMIN,
	DELETE_TOURNAMENT,
	MODIFY_TOURNAMENTS,
	SET_ACTUAL_USER
} from '../actions/index.js';

let initialState = {
	tournaments: [],
	tournamentsAdmin: [],
	tournamentDetail: {},
	teams: [],
	players: [],
	users: [],
	userProfile: {},
	tournamentsHome: [],
	nextTournaments: { next: [], nextFive: [] },
	order: "",
	mpData: [],
	actualUser: {
		username: undefined,
		ban: undefined,
		admin: undefined,
	}
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_TOURNAMENT:
			return {
				...state
			};
		case GET_ALL_TOURNAMENTS:
			console.log('entrando', state.tournaments);
			return {
				...state,
				tournaments: action.payload
			};
		case GET_TOURNAMENTS_ADMIN:
			return {
				...state,
				tournamentsAdmin: action.payload
			};
		case CREATE_PLAYER:
			return {
				...state
			};
		case GET_TOURNAMENTS_HOME:
			return {
				...state,
				tournamentsHome: action.payload
			};
		case SEARCH_TOURNAMENTS:
			return {
				...state,
				tournaments: action.payload
			};
		case TOURNAMENT_DETAILS:
			return {
				...state,
				tournamentDetail: action.payload
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
		case DELETE_TOURNAMENT:
			return {
				...state
			};
		case MODIFY_TOURNAMENTS:
			return {
				...state,
				tournamentDetail: action.payload
			};
		case GET_ALL_USERS:
			return {
				...state,
				users: action.payload
			};
		case CREATE_USER:
			return {
				...state
			};
		case BAN_USER:
			return {
				...state
			};
		case TO_ADMIN:
			return {
				...state
			};
		case GET_NEXT_FIVE_TOURNAMENTS:
			return {
				...state,
				nextTournaments: { ...state.nextTournaments, nextFive: action.payload }
			};
		case GET_NEXT_TOURNAMENT:
			return {
				...state,
				nextTournaments: { ...state.nextTournaments, next: action.payload }
			};

		// MercadoPago
		case "MP_DATA":
			return {
				...state,
				mpData: action.payload
			}
		case "NEW_ORDER":
			return {
				...state,
				order: action.payload
			}
		case "CREATE_ORDER":
			return {
				...state,
				order: action.payload
			}
		case SET_ACTUAL_USER:
			return {
				...state,
				actualUser: action.payload
			}
		default:
			return state;
	}
}

export default rootReducer;
