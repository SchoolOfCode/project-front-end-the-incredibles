import Button from "../Button"

function AddToCartButton() {
	return (
		<Button className="addToCart" textContent="add" onClick={console.log("Add to cart")}/>
	);
}

export default AddToCartButton;
