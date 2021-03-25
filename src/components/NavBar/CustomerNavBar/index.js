
import React from 'react';
import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
} from 'react-router-dom';
import HomePage from '../../HomePage';

import '../../../index.css';
import Button from "../../Buttons/Button"
import css from '../NavBar.module.css';

function CustomerNavBar(props) {
	return (
		<Router>
			<div className={css.navFlex}>
				<div className={css.innerFlex}>
					<nav className={css.linkFlex}>
						<NavLink
							to={'/store'}
							exact
							className={css.links}
							activeClassName={css.active}
						>
							Pete the Meat
						</NavLink>
					</nav>
					<Button textContent='Basket' />
				</div>
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
