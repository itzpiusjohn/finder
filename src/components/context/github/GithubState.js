import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
} from '../types';

const GithubState = (props) => {
	const initialState = {
		user: [],
		singleUser: {},
		repos: [],
		isLoading: false,
	};
	const [state, dispatch] = useReducer(githubReducer, initialState);

	/**
	 *
	 * @param {} searchs for git user by username
	 *    */
	const searchUsers = async (text) => {
		setIsLoading();
		try {
			const res = await axios.get(
				`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			dispatch({
				type: SEARCH_USERS,
				payload: res.data.items,
			});
		} catch (error) {
			console.log(error);
		}
	};
	/**
	 *
	 * @param {*} gets single user from gitHub
	 */
	const getUser = async (username) => {
		setIsLoading();
		try {
			const res = await axios.get(
				`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			dispatch({
				type: GET_USER,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const getUserRepos = async (username) => {
		setIsLoading();
		try {
			const res = await axios.get(
				`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			dispatch({ type: GET_REPOS, payload: res.data });
		} catch (error) {
			console.log(error);
		}
	};
	//Clear User...
	const clearResults = () => dispatch({ type: CLEAR_USERS });

	//Set loading handler
	const setIsLoading = () => dispatch({ type: SET_LOADING });

	return (
		<githubContext.Provider
			value={{
				user: state.user,
				singleUser: state.singleUser,
				repos: state.repos,
				loading: state.isLoading,
				searchUsers,
				clearResults,
				getUser,
				getUserRepos,
			}}
		>
			{props.children}
		</githubContext.Provider>
	);
};

export default GithubState;
