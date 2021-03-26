import Button from "../Button";

function PublishCartShopButton({ onClick }) {
  return (
    <Button className="blackBtn" textContent="Checkout" onClick={onClick} />
  );
}

export default PublishCartShopButton;
