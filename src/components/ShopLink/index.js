import { shopLink, link } from './StoreLink.module.css';

function ShopLink({ businessName }) {
	const linkAddress = `https://cartshop.netlify.app/shop/${businessName.replace(/ /g, '-').replace(/\W/g, "")}`;
	return (
		<p className={shopLink}>
			Your personal shop link is:{' '}
			<a className={link} href={linkAddress}> {linkAddress} </a>
		</p>
	);
}

export default ShopLink;
