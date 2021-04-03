import ProductInBasket from "../ProductInBasket";
import { basket } from "./Basket.module.css";
import Stripe from "../Stripe";


function Basket({ inBasket, onRemoveAll, onRemoveOne, onAdd }) {
  const total = inBasket.reduce((acc, curr) =>  acc += (parseInt(curr.productPrice) * parseInt(curr.quantityInBasket) * 100), 0);
  
 
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
