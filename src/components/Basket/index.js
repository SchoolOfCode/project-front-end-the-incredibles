import ProductInBasket from "../ProductInBasket";
import { basket } from "./Basket.module.css";
import Stripe from "../Stripe";

function Basket({ cartItems, onRemoveAll, onRemoveOne, onAdd }) {
  let count = 0;
  cartItems.map((item) => {
    return (count += parseInt(item.price) * parseInt(item.qty) * 100);
  });
  //   const [handleClick, message, redirect] = Stripe();

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
      <Stripe total={count} />
    </div>
  );
}

export default Basket;
