import Button from '../Button';

function PublishCartShopButton() {
	return (
		<Button
			className='blackBtn'
			textContent='Publish CartShop'
			onClick={console.log('publish')}
		/>
	);
}

export default PublishCartShopButton;
