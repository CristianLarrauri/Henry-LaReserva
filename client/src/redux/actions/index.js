import axios from 'axios';
export const CREATE_TOURNAMENT = 'CREATE_TOURNAMENT';

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
