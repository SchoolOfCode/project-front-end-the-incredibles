import React from 'react';
import {
	BrowserRouter as Router,
	// NavLink,
	Route,
	Switch,
} from 'react-router-dom';
import '../../index.css';
// import SignInUpButton from '../Buttons/SignInUpButton';
// import SignOutButton from '../Buttons/SignOutButton';
import HomePage from '../HomePage';
import BusinessNavBar from '../NavBar/BusinessNavBar';
import './App.css';

function App() {
	return (
		<div className='app'>
			<Router>
				<BusinessNavBar />
				<Switch>
					<Route path='/about'>
						<p>about</p>
					</Route>
					<Route path='/tutorial'>
						<p>tut</p>
					</Route>
					<Route path='/'>
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
