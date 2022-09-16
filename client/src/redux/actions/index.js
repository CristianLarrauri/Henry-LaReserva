import axios from 'axios';
export const CREATE_TOURNAMENT = 'CREATE_TOURNAMENT';
export const GET_ALL_TOURNAMENTS = 'GET_ALL_TOURNAMENTS';
export const NAME_SORT = 'NAME_SORT';
export const GENDER_FILTER = 'GENDER_FILTER';
export const DIV_FILTER = 'DIV_FILTER';


export const createTournament = (payload) => {
	return async function (dispatch) {
		try {
			const info = await axios.post(
				'http://localhost:3001/tournaments',
				payload
			);

			return dispatch({
				type: CREATE_TOURNAMENT,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};


export const getAllTournaments = () => {
	return async function (dispatch) {
		try {
			const info = await axios.get(
				'',
				payload
			);

			return dispatch({
				type: GET_ALL_TOURNAMENTS,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const nameSort = () => {
	return async function (dispatch) {
		try {
			const info = await axios.get(
				'',
				payload
			);

			return dispatch({
				type: NAME_SORT,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const genderFilter = (payload) => {
	return async function (dispatch) {
		try {
			const info = await axios.get(
				'',
				payload
			);

			return dispatch({
				type: GENDER_FILTER,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const divFilter = (payload) => {
	return async function (dispatch) {
		try {
			const info = await axios.get(
				'',
				payload
			);

			return dispatch({
				type: DIV_FILTER,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};