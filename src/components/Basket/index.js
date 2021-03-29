import CheckoutButton from "../Buttons/CheckoutButton";
import ProductInBasket from "../ProductInBasket";
import { basket } from "./Basket.module.css";
import Stripe from "../Stripe";

function Basket({ cartItems, onRemoveAll, onRemoveOne, onAdd }) {
  let count = 0;
  cartItems.map((item)=>{count+=item.price})

  return (
    <div className={`${basket} basket`}>
      <h2>Basket</h2>
      {cartItems &&
        cartItems.map((product, i) => (
          <ProductInBasket
            key={i}
            product={product}
            onRemoveAll={onRemoveAll}
            onRemoveOne={onRemoveOne}
            onAdd={onAdd}
          />
        ))}
      <CheckoutButton onClick={Stripe.handleClick} />
    </div>
  );
}

export default Basket;
