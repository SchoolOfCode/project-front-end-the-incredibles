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
          src={product.img.src}
          alt={product.img.alt}
        />
        <p className={styles.name}>{product.productName}</p>
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
