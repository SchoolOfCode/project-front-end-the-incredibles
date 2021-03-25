import React from "react";
import styles from "./ProductCard.module.css";
import AddtoCartButton from "../Buttons/AddToCartButton";
import QuantityInput from "../Inputs/NumberInput";

function ProductCard() {
  return (
    <div className={styles.ContentFlex}>
      <div className={styles.innerContent}>
        <img
          src="https://images.unsplash.com/photo-1590069832258-a222a34722c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <p>Macrame</p>
        <p>£2000</p>
        <QuantityInput />
        <AddtoCartButton />
      </div>
    </div>
  );
}

export default ProductCard;
