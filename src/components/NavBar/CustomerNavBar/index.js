import React from 'react';
import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
} from 'react-router-dom';
import '../../../index.css';
import css from '../NavBar.module.css';

function CustomerNavBar(props) {
	return (
		<Router>
			<div className={css.navFlex}>
				<nav className={css.linkFlex}>
					<h1> CartShop</h1>
					<NavLink
						to={'/store'}
						exact
						className={css.links}
						activeClassName={css.active}
					>
						Pete the Meat
					</NavLink>
					<NavLink
						to={'/basket'}
						exact
						className={css.links}
						activeClassName={css.active}
					>
						Basket
					</NavLink>
				</nav>
			</div>
			<Switch>
				<Route path='/store'>
					<p>The store cartShop would be here</p>
				</Route>
			</Switch>
		</Router>
	);
}

export default CustomerNavBar;
