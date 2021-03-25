import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Footer from '../Footer';
import LandingPage from '../LandingPage';
import styles from './HomePage.module.css';

function HomePage() {
	const { isAuthenticated } = useAuth0();

	return (
		<div className={styles.HomePage}>
			{isAuthenticated ? <p> you're logged in</p> : <LandingPage />}
		</div>
	);
}

export default HomePage;
