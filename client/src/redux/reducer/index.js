import {
  CREATE_TOURNAMENT,
  GET_ALL_TOURNAMENTS,
  TOURNAMENT_DETAILS,
  SEARCH_TOURNAMENTS,
} from "../actions/index.js";

let initialState = {
  tournaments: [],
  tournamentDetail: {},
  teams: [],
  players: [],
  users: [],
  userProfile: {},
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

    default:
      return state;
  }
}

export default rootReducer;
