import RemoveProductButton from "../Buttons/RemoveProductButton";

import {currentProductsContainer, currentProduct} from "./CurrentProductList.module.css";

function CurrentProductList({products,removeProduct}) {
    return (
        <ul className={currentProductsContainer}>
          {products.map((product, i) => (
            <li key={i} className={currentProduct}>
              <span> {product.productName}</span>
              <span> {product.price}</span>
              <RemoveProductButton onClick={() => removeProduct(i)} />
            </li>
          ))}
        </ul>
    )
}

export default CurrentProductList
