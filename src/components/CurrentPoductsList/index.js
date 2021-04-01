import Button from "../Buttons/Button";
import Product from '../Product/index';

import {currentProductsContainer, currentProduct} from "./CurrentProductList.module.css";

function CurrentProductList({products,removeProduct}) {

  async function deleteProduct(id){
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/business/deletebyproduct/${id}`, {method:'DELETE', headers:  { 'Content-Type' : 'application/json' }})
  }

    return (
        <ul className={currentProductsContainer}>
          <h2>Current Products:</h2>
          {products.map((product, i) => (
            <Product product={product} i={i} removeProduct={removeProduct} deleteProduct={deleteProduct}/>
            // <li key={i} className={currentProduct}>
            //   <span> {product.productName}</span>
            //   <span> £{product.productPrice}</span>
            //   <Button className="removeProduct" textContent="remove" onClick={() => {removeProduct(i)
            //   deleteProduct(product.productId)}} />
            // </li>
          ))}
        </ul>
    )
}

export default CurrentProductList
