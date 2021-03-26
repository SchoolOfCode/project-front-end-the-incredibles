import Button from "../Button"

function RemoveProductButton({onClick}) {
	return (
		<Button className="removeProduct" textContent="remove" onClick={onClick}/>
	);
}

export default RemoveProductButton;
