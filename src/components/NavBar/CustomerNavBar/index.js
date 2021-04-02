import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
	useParams,
} from 'react-router-dom';
import useGet from '../../../hooks/useGet';
import '../../../index.css';
import Button from '../../Buttons/Button';
import CustomerPage from '../../CustomerPage';
import css from '../NavBar.module.css';

function CustomerNavBar() {
	//useState hook to track whether basket button is clicked
	const [ basketOpen, setBasketOpen ] = useState(false);
	const { businessUrl } = useParams();

	const { isLoading, data: businessInfo } = useGet(`store/${businessUrl}`);
	//
	function toggleBasket() {
		const basket = document.querySelector('.basket');
		//switches basket between visible and not visible
		basket.classList.toggle('showBasket');
		//changes the state of the basketopen to be the opposite of existing state
		setBasketOpen(!basketOpen);
	}

	if (isLoading) {
		return <div className={'loading'}>Loading</div>;
	}
	return (
		<Router>
			<div className={css.navFlex}>
				<nav className={css.linkFlex}>
					<h1> CartShop</h1>
					{/* NavLink allows styling attributes to be added to Link */}
					<NavLink
						to={businessUrl}
						className={css.links}
						activeClassName={css.active}
					>
						{businessInfo.businessName}
					</NavLink>
					{/* Turnary operator which changes button value to X or basket by tracking basketopen state */}
					<Button
						textContent={basketOpen ? 'X' : 'basket'}
						onClick={toggleBasket}
					/>
				</nav>
			</div>
			<Switch>
				<Route path='/store/:businessUrl'>
					<CustomerPage businessInfo={businessInfo} />
				</Route>
			</Switch>
		</Router>
	);
}

export default CustomerNavBar;
