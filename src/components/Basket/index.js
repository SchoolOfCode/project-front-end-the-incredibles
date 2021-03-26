import React, { useState } from "react";
import { basket } from "./Basket.module.css";
import CheckoutButton from "../Buttons/CheckoutButton";
import AddtoCartButton from "../Buttons/AddToCartButton";
import mockData from "../../libs/mockData";
import RemoveProductButton from "../Buttons/RemoveProductButton";

function Basket() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(
      (cartProd) => cartProd.productId === product.productId
    );
    if (exist) {
      setCartItems(
        cartItems.map((cartProd) =>
          cartProd.productId === product.productId
            ? { ...exist, qty: exist.qty + 1 }
            : cartProd
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find(
      (cartProd) => cartProd.productId === product.productId
    );
    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((cartProd) => cartProd.productId !== product.productId)
      );
    } else {
      setCartItems(
        cartItems.map((cartProd) =>
          cartProd.productId === product.productId
            ? { ...exist, qty: exist.qty - 1 }
            : cartProd
        )
      );
    }
  };

  return (
    <div className={`${basket} basket`}>
      <h2>Basket</h2>
      {mockData.products.map((product) => {
        return (
          <div>
            <AddtoCartButton onClick={() => onAdd(product)} /> -
            <RemoveProductButton onClick={() => onRemove(product)} />
          </div>
        );
      })}

      <CheckoutButton onClick={() => console.log(cartItems)} />
    </div>
  );
}

export default Basket;
