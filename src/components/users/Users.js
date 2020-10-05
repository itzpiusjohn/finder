import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from './Spinner';
import githubContext from '../context/github/githubContext';

const Users = () => {
	const gitContext = useContext(githubContext);
	const { isLoading, user } = gitContext;
	if (isLoading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle}>
				{user.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};
const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem',
};

export default Users;
