import Button from "../Button";

function AddToCartButton({ onClick }) {
  return <Button className="addToCart" textContent="add" onClick={onClick} />;
}

export default AddToCartButton;
