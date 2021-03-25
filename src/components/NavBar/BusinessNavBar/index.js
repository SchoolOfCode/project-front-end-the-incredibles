import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
} from 'react-router-dom';
import HomePage from '../../HomePage';

import '../../../index.css';
import SignInUpButton from '../../Buttons/SignInUpButton';
import SignOutButton from '../../Buttons/SignOutButton';
import css from '../NavBar.module.css';

function BusinessNavBar(props) {
	const { isAuthenticated } = useAuth0();

	return (
		<Router>
			<div className={css.navFlex}>
				<div className={css.innerFlex}>
					<div>
						<h1> CartShop</h1>
					</div>
					<nav className={css.linkFlex}>
						<NavLink
							to={'/'}
							exact
							className={css.links}
							activeClassName={css.active}
						>
							My CartShop
						</NavLink>
						<NavLink
							to={'/about'}
							className={css.links}
							activeClassName={css.active}
						>
							About
						</NavLink>
						<NavLink
							to={'/tutorial'}
							className={css.links}
							activeClassName={css.active}
						>
							Tutorial
						</NavLink>
					</nav>
					{isAuthenticated ? (
						<SignOutButton />
					) : (
						<SignInUpButton textContent='Sign in/up' />
					)}
				</div>
			</div>
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
	);
}

export default BusinessNavBar;
