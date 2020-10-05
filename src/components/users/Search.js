import React, { useContext, useState } from 'react';

import githubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';

const Search = () => {
	const gitContext = useContext(githubContext);
	const alertContext = useContext(AlertContext);
	const [text, setText] = useState('');
	const { setAlert } = alertContext;
	const onChange = (e) => setText(e.target.value);

	const onSubmit = (e) => {
		e.preventDefault();
		if (text.charAt(0) === ' ' || text === '') {
			setAlert('Search param connot be empty', 'light');
		} else {
			gitContext.searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					onChange={onChange}
					value={text}
					type='text'
					name='text'
					placeholder='search for users...'
				/>
				<input type='submit' value='Search' className='btn btn-dark btn-block' />
			</form>
			{gitContext.user.length > 0 ? (
				<button
					className='btn btn-light btn-block'
					onClick={gitContext.clearResults}
				>
					Clear
				</button>
			) : null}
		</div>
	);
};

export default Search;
