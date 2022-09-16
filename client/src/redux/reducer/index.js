import {
	CREATE_TOURNAMENT,
	GET_ALL_TOURNAMENTS,
	NAME_SORT,
	GENDER_FILTER,
	DIV_FILTER
} from '../actions';

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
			return {
				...state,
				tournaments: action.payload
			}
		case NAME_SORT:
			return {
				...state,
				tournaments: action.payload
			}
		case GENDER_FILTER:
			return {
				...state,
				tournaments: action.payload
			}
		case DIV_FILTER:
			return {
				...state,
				tournaments: action.payload
			}
	}
}

export default rootReducer;
