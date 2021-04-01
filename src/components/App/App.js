import React from 'react';
import {
	BrowserRouter as Router,
	// NavLink,
	Route,
	Switch,
} from 'react-router-dom';
import '../../index.css';
import Footer from '../Footer';
import BusinessNavBar from '../NavBar/BusinessNavBar';
import CustomerNavBar from '../NavBar/CustomerNavBar';
import './App.css';

function App() {
	const businessUrl = '';
	return (
		<div className='app'>
			<Router>
				<Switch>
					<Route exact path='/store/:businessUrl'>
						{/* taken to business store page for viewing by customer */}
						<CustomerNavBar url={businessUrl} />
					</Route>
					<Route path='/'>
						{/* main page. taken to business page for business owners  */}
						<BusinessNavBar />
					</Route>
				</Switch>
			</Router>

			<Footer />
		</div>
	);
}

export default App;
