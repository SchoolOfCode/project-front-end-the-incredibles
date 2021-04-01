import { storeLink, link } from './StoreLink.module.css';

function StoreLink({ businessName }) {
	const linkAddress = `https://cartshop.netlify.app/${businessName.replace(/ /g, '-')}`;
	return (
		<p className={storeLink}>
			Your personal store link is:{' '}
			<a className={link} href={linkAddress}> {linkAddress} </a>
		</p>
	);
}

export default StoreLink;
