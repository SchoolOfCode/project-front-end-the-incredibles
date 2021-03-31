import React, { useState } from "react";
import Button from "../Buttons/Button";
import QuantityInput from "../Inputs/QuantityInput";
import styles from "./ProductCard.module.css";

function ProductCard({ product, onClick }) {
  // this is all the product information 
  // product here is the...

  const { productName, productPrice, productImage, quantity } = product;
  const [desiredQuantity, setDesiredQuantity] = useState(0);
  const inStockClass = quantity ? "Stocked" : "OutOfStock";
  return (
    <div className={`${styles.ContentFlex} ${styles[inStockClass]}`}>
      <div className={styles.innerContent}>
        <img
          src={productImage}
          alt={"product"}
        />
        <p className={styles.name}>{productName}</p>
        <p className={styles.price}>£{productPrice}</p>
        <QuantityInput setState={setDesiredQuantity} />
        {product.quantity ? (
          <Button className="addToCart" textContent="add" onClick={() => onClick(product, parseInt(desiredQuantity))} />
        ) : (
          <p>Out of stock</p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
