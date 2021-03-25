import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
} from 'react-router-dom';
import '../../index.css';
import SignInUpButton from '../Buttons/SignInUpButton';
import SignOutButton from '../Buttons/SignOutButton';
import HomePage from '../HomePage';
import css from '../NavBar/NavBar.module.css';
import './App.css';

function App() {
	const { isAuthenticated } = useAuth0();
	return (
		<Router>
			<div className='App'>
				<nav className='nav-bar'>
					<h1>www.veg.com</h1>

					<ul>
						<li>
							<NavLink to='/' activeClassName='active' inactiveClassName='inactive'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/about' activeClassName='active'
              inactiveClassName='inactive'>
								About
							</NavLink>
						</li>
						<li>
							<NavLink to='/ace-ventura' activeClassName='active'>
								Ace Ventura
							</NavLink>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path='/ace-ventura'>
						<p>one</p>
					</Route>
					<Route path='/about'>
						<p>two</p>
					</Route>
					<Route path='/'>
						<p>three</p>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

/*
 <Router>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </Router>
    */
