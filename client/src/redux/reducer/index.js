import { CREATE_TOURNAMENT } from '../actions';

let initialState = {
	tournaments: []
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_TOURNAMENT:
			return {
				...state
			};
	}
}

export default rootReducer;
