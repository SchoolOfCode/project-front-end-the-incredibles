import React, { useState } from "react";
import AddtoCartButton from "../Buttons/AddToCartButton";
import QuantityInput from "../Inputs/QuantityInput";
import styles from "./ProductCard.module.css";

function ProductCard({ product, onClick }) {
  const [desiredQuantity, setDesiredQuantity] = useState(0);
  //const { name, price, inventoryQuantity } = product;
  const inStockClass = product.inventoryQuantity ? "Stocked" : "OutOfStock";
  return (
    <div className={`${styles.ContentFlex} ${styles[inStockClass]}`}>
      <div className={styles.innerContent}>
        <img
          src="https://images.unsplash.com/photo-1590069832258-a222a34722c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <p className={styles.name}>{product.productName}</p>
        <p>{desiredQuantity}</p>
        <p className={styles.price}>£{product.price}</p>
        <QuantityInput setState={setDesiredQuantity} />
        {product.inventoryQuantity ? (
          <AddtoCartButton onClick={() => onClick(product, desiredQuantity)} />
        ) : (
          <p>Out of stock</p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
