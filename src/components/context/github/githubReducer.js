import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				isLoading: false,
			};
		case GET_USER:
			return {
				...state,
				singleUser: action.payload,
				isLoading: false,
			};
		case SEARCH_USERS:
			return {
				...state,
				user: action.payload,
				isLoading: false,
			};
		case CLEAR_USERS:
			return {
				...state,
				user: [],
				isLoading: false,
			};
		case SET_LOADING:
			return {
				...state,
				isLoading: true,
			};
		default:
			return;
	}
};
