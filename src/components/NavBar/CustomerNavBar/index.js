import { Spinner } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	NavLink,
	Route,
	Switch,
	useParams,
} from 'react-router-dom';
import useGetForCustomer from '../../../hooks/useGetForCustomer';
import '../../../index.css';
import Button from '../../Buttons/Button';
import CustomerPage from '../../CustomerPage';
import Logo from '../../Logo';
import css from '../NavBar.module.css';

function CustomerNavBar() {
	//useState hook to track whether basket button is clicked
	const [ basketOpen, setBasketOpen ] = useState(false);
	const [ itemsInBasket, setItemsInBasket ] = useState(0);
	// hook from React Router to extract business URL
	const { businessUrl } = useParams();
	const { isLoading, data: businessInfo } = useGetForCustomer(
		`shop/${businessUrl}`
	);

	//
	function toggleBasket() {
		const basket = document.querySelector('.basket');
		//switches basket between visible and not visible
		basket.classList.toggle('showBasket');
		//changes the state of the basketopen to be the opposite of existing state
		setBasketOpen(!basketOpen);
	}

	if (isLoading) {
		return (
			<div className={'loading'}>
				<Spinner color='#FF5A5F' size='xl' />
			</div>
		);
	}
	return (
		<Router>
			<div className={css.navFlex}>
				<nav className={css.linkFlex}>
					<Logo />
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
						className='basket'
						textContent={
							basketOpen ? (
								<i className='fas fa-times' />
							) : (
								<span>
									{itemsInBasket}
									<i className='fas fa-shopping-cart' />
								</span>
							)
						}
						onClick={toggleBasket}
					/>
				</nav>
			</div>
			<Switch>
				<Route path='/shop/:businessUrl'>
					<CustomerPage
						businessInfo={businessInfo}
						setItemsInBasket={setItemsInBasket}
					/>
				</Route>
			</Switch>
		</Router>
	);
}

export default CustomerNavBar;
