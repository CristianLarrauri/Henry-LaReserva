import axios from "axios";
export const CREATE_TOURNAMENT = "CREATE_TOURNAMENT";
export const GET_ALL_TOURNAMENTS = "GET_ALL_TOURNAMENTS";
export const NAME_SORT = "NAME_SORT";
export const GENDER_FILTER = "GENDER_FILTER";
export const DIV_FILTER = "DIV_FILTER";
export const SEARCH_TOURNAMENTS = "SEARCH_TOURNAMENTS";
export const TOURNAMENT_DETAILS = "TOURNAMENT_DETAILS";
export const TORNEITOS = "TORNEITOS";
export const GET_TOURNAMENTS_HOME = "GET_TOURNAMENTS_HOME"

export const createTournament = (payload) => {
  return async function (dispatch) {
    try {
      const info = await axios.post(
        "http://localhost:3001/tournaments",
        payload
      );

      return dispatch({
        type: CREATE_TOURNAMENT,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllTournaments = (
  page,
  order,
  property,
  category,
  genre,
  state
) => {
  return async (dispatch) => {
    try {
      const info = await axios.get(
        `http://localhost:3001/tournaments?page=${page}&order=${order}&property=${property}&category=${category}&genre=${genre}&state=${state}`
      );
      dispatch({
        type: GET_ALL_TOURNAMENTS,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const nameSort = (payload) => {
// 	return async function (dispatch) {
// 		try {
// 			const info = await axios.get('', payload);
// 			return dispatch({
// 				type: NAME_SORT,
// 				payload: info.data
// 			});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// };

export const tournamentDetails = (id) => {
  return async function (dispatch) {
    try {
      const info = await axios.get(`http://localhost:3001/tournaments/${id}`);
      return dispatch({
        type: TOURNAMENT_DETAILS,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const genderFilter = (payload) => {
// 	return async function (dispatch) {
// 		try {
// 			const info = await axios.get('', payload);
// 			return dispatch({
// 				type: GENDER_FILTER,
// 				payload: info.data
// 			});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// };

// export const divFilter = (payload) => {
// 	return async function (dispatch) {
// 		try {
// 			const info = await axios.get('', payload);
// 			return dispatch({
// 				type: DIV_FILTER,
// 				payload: info.data
// 			});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// };

export const searchTournaments = (name) => {
  return async function (dispatch) {
    try {
      const info = await axios.get(
        "http://localhost:3001/tournaments?name=" + name
      );
      return dispatch({ type: SEARCH_TOURNAMENTS, payload: info.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTournamentsHome = (
  page,
  order,
  property,
) => {
  return async (dispatch) => {
    try {
      const info = await axios.get(
        `http://localhost:3001/home?page=${page}&order=${order}&property=${property}`
      );
      dispatch({
        type: GET_TOURNAMENTS_HOME,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}; 
