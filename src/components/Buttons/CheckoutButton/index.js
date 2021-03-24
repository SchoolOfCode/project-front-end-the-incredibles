import Button from '../Button';

function PublishCartShopButton() {
	return (
		<Button
			className='blackBtn'
			textContent='Checkout'
			onClick={console.log('checkout')}
		/>
	);
}

export default PublishCartShopButton;
