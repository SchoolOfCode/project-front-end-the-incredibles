import Button from "../Button"

function AddToCartButton() {
	return (
		<Button className="blackBtn" textContent="Checkout" onClick={console.log("checkout")}/>
	);
}

export default AddToCartButton;
