import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
} from 'react-router-dom';
import '../../../index.css';
import Button from '../../Buttons/Button';
import CustomerPage from '../../CustomerPage';
import css from '../NavBar.module.css';

function CustomerNavBar(props) {
	const [ basketOpen, setBasketOpen ] = useState(false);

	function toggleBasket() {
		const basket = document.querySelector('.basket');
		basket.classList.toggle('showBasket');
		setBasketOpen(!basketOpen);
	}

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
						Macrambé Master
					</NavLink>

					<Button
						textContent={basketOpen ? 'X' : 'basket'}
						onClick={toggleBasket}
					/>
				</nav>
			</div>
			<Switch>
				<Route path='/store'>
					<CustomerPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default CustomerNavBar;
