import React from 'react';
import '../../index.css';
import styles from './Footer.module.css';

function Footer({ textContent = 'made with love in birmingham' }) {
	return (
		<div className={styles.footerFlex}>
			<div className={styles.contentFlex}>
				<p>{textContent}</p>
				<a href='https://github.com/orgs/SchoolOfCode/teams/the-incredibles'>
					<i class='fab fa-github' />
				</a>
			</div>
		</div>
	);
}

export default Footer;
