import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import githubContext from '../context/github/githubContext';

const User = ({ match }) => {
	const gitContext = useContext(githubContext);
	const { getUser, isLoading, singleUser, repos, getUserRepos } = gitContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gist,
		hireable,
		company,
	} = singleUser;

	if (isLoading) return <Spinner />;
	return (
		<Fragment>
			<Link to='/' className='btn btn-light'>
				Go Back
			</Link>
			Hireable:{' '}
			{hireable ? (
				<i className='fas fa-check text-success' />
			) : (
				<i className='fas fa-times-circle text-danger' />
			)}
			<div className='card grid-2'>
				<div className='all-center'>
					<img
						src={avatar_url}
						className='round-img'
						alt=''
						style={{ width: '150px' }}
					/>
					<h1>{name}</h1>
					<p>Location:{location}</p>
				</div>
				<div>
					{bio && (
						<Fragment>
							<h3>Bio</h3>
							<p>{bio}</p>
						</Fragment>
					)}
					<a href={html_url} className='btn brn-dark my-1'>
						Goto github Profile
					</a>
					<ul>
						<li>
							{login && (
								<Fragment>
									<strong>Username:</strong>
									{login}
								</Fragment>
							)}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Company: </strong>
									{company}
								</Fragment>
							)}
						</li>
						<li>
							{blog && (
								<Fragment>
									<strong>Blog :</strong>
									{blog}
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className='card text-center'>
				<div className='badge badge-primary'>Followers: {followers}</div>
				<div className='badge badge-success'>Following: {following}</div>
				<div className='badge badge-light'>Public repos: {public_repos}</div>
				<div className='badge badge-primary'>Public Gist: {public_gist}</div>
			</div>
			<Repos repos={repos} />
		</Fragment>
	);
};

export default User;
