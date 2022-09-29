import axios from 'axios';
export const CREATE_TOURNAMENT = 'CREATE_TOURNAMENT';
export const GET_ALL_TOURNAMENTS = 'GET_ALL_TOURNAMENTS';
export const NAME_SORT = 'NAME_SORT';
export const GENDER_FILTER = 'GENDER_FILTER';
export const DIV_FILTER = 'DIV_FILTER';
export const SEARCH_TOURNAMENTS = 'SEARCH_TOURNAMENTS';
export const TOURNAMENT_DETAILS = 'TOURNAMENT_DETAILS';
export const GET_TOURNAMENTS_HOME = 'GET_TOURNAMENTS_HOME';
export const CREATE_PLAYER = 'CREATE_PLAYER';
export const GET_SCORERS_TABLE = 'GET_SCORERS_TABLE';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const CREATE_USER = 'CREATE_USER';
export const BAN_USER = 'BAN_USER';
export const TO_ADMIN = 'TO_ADMIN';
export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const GET_NEXT_FIVE_TOURNAMENTS = 'GET_NEXT_FIVE_TOURNAMENTS';
export const GET_NEXT_TOURNAMENT = 'GET_NEXT_TOURNAMENT';
export const GET_TOURNAMENTS_ADMIN = 'GET_TOURNAMENTS_ADMIN';
export const DELETE_TOURNAMENT = 'DELETE_TOURNAMENT';
export const MODIFY_TOURNAMENTS = 'MODIFY_TOURNAMENTS';
export const GET_REVIEWS = 'GET_REVIEWS';
export const POST_REVIEWS = 'POST_REVIEWS';
export const DELETE_REVIEWS = 'DELETE_REVIEWS';
export const GET_ID_REVIEW = 'GET_ID_REVIEW';
export const SET_ACTUAL_USER = 'SET_ACTUAL_USER';

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

export const modifyTournaments = (
	id,
	name,
	amountOfTeams,
	dateInit,
	dateFinish,
	genre,
	category,
	description
) => {
	return async function (dispatch) {
		try {
			const info = await axios.put(`http://localhost:3001/tournaments/${id}`, {
				name,
				amountOfTeams,
				dateInit,
				dateFinish,
				genre,
				category,
				description
			});
			return dispatch({
				type: MODIFY_TOURNAMENTS,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const createPlayers = (payload) => {
	return async (dispatch) => {
		try {
			const info = await axios.post('http://localhost:3001/players', payload);
			return dispatch({
				type: CREATE_PLAYER,
				payload: info.data
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
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const getTournamentsAdmin = (payload) => {
	return async (dispatch) => {
		try {
			const info = await axios.get('http://localhost:3001/tournaments/panel');
			return dispatch({
				type: GET_TOURNAMENTS_ADMIN,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const tournamentDetails = (id) => {
	return async function (dispatch) {
		try {
			const info = await axios.get(`http://localhost:3001/tournaments/${id}`);
			return dispatch({
				type: TOURNAMENT_DETAILS,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const searchTournaments = (name) => {
	return async function (dispatch) {
		try {
			const info = await axios.get(
				`http://localhost:3001/tournaments?name=${name}`
			);
			return dispatch({ type: SEARCH_TOURNAMENTS, payload: info.data });
		} catch (error) {
			console.log(error);
		}
	};
};

export const getTournamentsHome = (page, order, property) => {
	return async (dispatch) => {
		try {
			const info = await axios.get(
				`http://localhost:3001/home?page=${page}&order=${order}&property=${property}`
			);
			dispatch({
				type: GET_TOURNAMENTS_HOME,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const getAllUsers = (payload) => {
	return async (dispatch) => {
		try {
			const info = await axios.get('http://localhost:3001/users', payload);
			dispatch({
				type: GET_ALL_USERS,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const createUser = (payload) => {
	return async (dispatch) => {
		try {
			const info = await axios.post(
				'http://localhost:3001/users/post',
				payload
			);
			dispatch({
				type: CREATE_USER,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const banUser = (id) => {
	return async (dispatch) => {
		try {
			const info = await axios.put(`http://localhost:3001/users/ban/${id}`);
			dispatch({
				type: BAN_USER,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const toAdmin = (id) => {
	return async (dispatch) => {
		try {
			const info = await axios.put(`http://localhost:3001/users/admin/${id}`);
			dispatch({
				type: TO_ADMIN,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const getUserDetails = (email) => {
	return async function (dispatch) {
		const info = await axios.get(`http://localhost:3001/users/${email}`);
		return dispatch({
			type: GET_USER_DETAILS,
			payload: info.data
		});
	};
};

export function getNext5Tournaments() {
	return async (dispatch) => {
		try {
			const nextTournaments = await axios.get(
				'http://localhost:3001/next?index=1&limit=5'
			);

			dispatch({
				type: GET_NEXT_FIVE_TOURNAMENTS,
				payload: nextTournaments.data
			});
		} catch (err) {
			console.error(err.message);
		}
	};
}

export function getNextTournament() {
	return async (dispatch) => {
		try {
			const nextTournament = await axios.get(
				'http://localhost:3001/next?index=0&limit=1'
			);

			dispatch({
				type: GET_NEXT_TOURNAMENT,
				payload: nextTournament.data
			});
		} catch (err) {
			console.error(err.message);
		}
	};
}

export function deleteTournament(id) {
	return async (dispatch) => {
		try {
			const info = await axios.delete(
				`http://localhost:3001/tournaments/${id}`
			);
			dispatch({
				type: DELETE_TOURNAMENT,
				payload: info.data
			});
		} catch (error) {}
	};
}

// --------------------------------------------------
// Aqui todas las actions necesarias para MercadoPago

export function postOrder(tournamentId) {
	return async function (dispatch) {
		try {
			const newOrder = await axios({
				method: 'post',
				url: '/order',
				data: { tournamentId }
			});
			return dispatch({
				type: 'NEW_ORDER',
				payload: newOrder.data
			});
		} catch (e) {
			console.log(e);
		}
	};
}

export function getMercadoPago(orderId) {
	return async function (dispatch) {
		try {
			const mp = await axios.get(`/mercadopago/${orderId}`);
			return dispatch({
				type: 'MP_DATA',
				payload: mp.data
			});
		} catch (e) {
			console.log(e);
		}
	};
}

/* -----------------------------------------Necesarias para reviews------------------------------------------------------------------------------*/

export function getReviews() {
	return async function (dispatch) {
		try {
			const info = await axios.get(`http://localhost:3001/reviews`);
			console.log('info', info.data);
			return dispatch({
				type: 'GET_REVIEWS',
				payload: info.data
			});
		} catch (e) {
			console.log(e);
		}
	};
}

export function postReviews(payload) {
	return async function (dispatch) {
		try {
			const info = await axios.post(`http://localhost:3001/reviews`, payload);
			return dispatch({
				type: 'POST_REVIEWS',
				payload: info.data
			});
		} catch (e) {
			console.log(e);
		}
	};
}

export function deleteReviews(id) {
	return async function (dispatch) {
		try {
			const info = await axios.delete(`http://localhost:3001/reviews/${id}`);
			return dispatch({
				type: 'DELETE_REVIEWS',
				payload: info.data
			});
		} catch (e) {
			console.log(e);
		}
	};
}

export function getIdReview(id) {
	return async function (dispatch) {
		try {
			const info = await axios.get(`http://localhost:3001/reviews/${id}`);
			return dispatch({
				type: 'GET_ID_REVIEW',
				payload: info.data
			});
		} catch (e) {
			console.log(e);
		}
	};
}

export function setActualUser(username, ban, admin) {
	return {
		type: SET_ACTUAL_USER,
		payload: {
			username: username,
			ban: ban,
			admin: admin
		}
	};
}
