import {
	CREATE_TOURNAMENT,
	GET_ALL_TOURNAMENTS,
	NAME_SORT,
	GENDER_FILTER,
	DIV_FILTER,
	TOURNAMENT_DETAILS,
	SEARCH_TOURNAMENTS
} from '../actions/index.js';

let initialState = {
	tournaments: [],
	tournamentDetail: {},
	teams: [],
	players: [],
	users: [],
	userProfile: {}
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_TOURNAMENT:
			return {
				...state
			};
		case GET_ALL_TOURNAMENTS:
			console.log(state.tournaments)
			return {
				...state,
				tournaments: action.payload
			};
		case NAME_SORT:
			return {
				...state,
				tournaments: action.payload
			};
		case GENDER_FILTER:
			return {
				...state,
				tournaments: action.payload
			};
		case DIV_FILTER:
			return {
				...state,
				tournaments: action.payload
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
		default:
			return state;	
	}
}

export default rootReducer;
