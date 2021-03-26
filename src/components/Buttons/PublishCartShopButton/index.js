import Button from "../Button"

function AddToCartButton({onClick}) {
	return (
		<Button className="blackBtn" textContent="Publish" onClick={onClick}/>
	);
}

export default AddToCartButton;
