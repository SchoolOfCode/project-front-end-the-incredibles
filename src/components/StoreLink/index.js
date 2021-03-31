import { storeLink, link } from './StoreLink.module.css';

function StoreLink({ businessName }) {
	const linkAddress = `https://localhost:3000/store/
						${businessName.replace(/ /g, '-')}`;
	return (
		<p className={storeLink}>
			Your personal store link is:{' '}
			<a className={link} href={linkAddress}> {linkAddress} </a>
		</p>
	);
}

export default StoreLink;
