import React from 'react';
import CallToAction from '../CallToAction';
import Profile from "./Profile.png"
import Cards from "./Cards.png"
import styles from './LandingPage.module.css';

function LandingPage() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<CallToAction />
			</div>
			<div className={styles.feature}>
				<div className={styles.featureContainer}>
					<img
					className={styles.profileImg}
					src={Profile}
					alt='Example CartShop Profile'
					/>
					<img
					className={styles.cardsImg}
					src={Cards}
					alt='Example CartShop Product Grid'
					/>
					</div>
			</div>
		</div>
	);
}

export default LandingPage;
