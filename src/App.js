import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar title='PTO' />
						<div className='container'>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};
export default App;
