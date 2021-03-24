import Button from "../Button"

function RemoveProductButton() {
	return (
		<Button className="removeProduct" textContent="remove" onClick={console.log("remove product")}/>
	);
}

export default RemoveProductButton;
