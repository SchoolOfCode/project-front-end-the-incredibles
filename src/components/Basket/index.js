import ProductInBasket from "../ProductInBasket";
import { basket } from "./Basket.module.css";
import Stripe from "../Stripe";



function Basket({ inBasket, onRemoveAll, onRemoveOne, onAdd }) {
  function reduceBasket(acc, curr) {
    const price = curr.productPrice
    const quantity = curr.quantityInBasket
    const currTotal = (price * quantity) * 100;

    return acc + currTotal;
  }
  const total = inBasket.reduce((acc, curr) => reduceBasket(acc, curr), 0.00);

  return (
    <div className={`${basket} basket`}>
      <h2>Basket</h2>
      {inBasket &&
        inBasket.map((product, i) => (
          <ProductInBasket
            key={i}
            product={product}
            onRemoveAll={() => onRemoveAll(product)}
            onRemoveOne={() => onRemoveOne(product)}
            onAdd={() => onAdd(product, 1)}
          />
        ))}
      <Stripe total={total} />
    </div>
  );
}

export default Basket;
