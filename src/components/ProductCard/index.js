import React, { useState } from "react";
import Button from "../Buttons/Button";
import QuantityInput from "../Inputs/QuantityInput";
import styles from "./ProductCard.module.css";

function ProductCard({ product, onClick }) {
  const { productName, price, img, inventoryQuantity } = product;
  const [desiredQuantity, setDesiredQuantity] = useState(0);
  const inStockClass = inventoryQuantity ? "Stocked" : "OutOfStock";
  return (
    <div className={`${styles.ContentFlex} ${styles[inStockClass]}`}>
      <div className={styles.innerContent}>
        <img
          src={img.src}
          alt={img.alt}
        />
        <p className={styles.name}>{productName}</p>
        <p className={styles.price}>£{price}</p>
        <QuantityInput setState={setDesiredQuantity} />
        {product.inventoryQuantity ? (
          <Button classNames="addToCart" textContent="add" onClick={() => onClick(product, desiredQuantity)} />
        ) : (
          <p>Out of stock</p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
