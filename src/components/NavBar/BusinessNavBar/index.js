import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
} from 'react-router-dom';
import '../../../index.css';
import SignInUpButton from '../../Buttons/SignInUpButton';
import SignOutButton from '../../Buttons/SignOutButton';
import HomePage from '../../HomePage';
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
						{/* <Link className={css.links} to={`/`}>
            My Cartshop
            </Link>
            <Link className={css.links} to={`/`}>
            About
            </Link>
            <Link className={css.links} to={`/`}>
            Tutorial
          </Link> */}
						<NavLink
							to='/'
							className={css.links}
							activeClassName={css.active}
						>
							My CartShop
						</NavLink>
						<NavLink
							to='/about'
							className={css.links}
							activeClassName={css.active}
						>
							About
						</NavLink>
						<NavLink
							to='/tutorial'
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
				<Switch>
					<Route path='/about'>
						<p>ABOUT PAGE WOW</p>
					</Route>
					<Route path='/users'>
						<p>TUTORIAL WOW</p>
					</Route>
					<Route path='/'>
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default BusinessNavBar;
