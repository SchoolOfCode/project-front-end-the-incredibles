import Button from "../Buttons/Button";

import {currentProductsContainer, currentProduct} from "./CurrentProductList.module.css";

function CurrentProductList({products,removeProduct}) {
    return (
        <ul className={currentProductsContainer}>
          <h2>Current Products:</h2>
          {products.map((product, i) => (
            <li key={i} className={currentProduct}>
              <span> {product.productName}</span>
              <span> £{product.price}</span>
              <Button className="removeProduct" textContent="remove" onClick={() => removeProduct(i)} />
            </li>
          ))}
        </ul>
    )
}

export default CurrentProductList
