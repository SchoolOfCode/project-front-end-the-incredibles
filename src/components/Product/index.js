import {useState} from 'react';
import Button from '../Buttons/Button/index';
import {currentProductsContainer, currentProduct} from "../CurrentPoductsList/CurrentProductList.module.css";
import Input from "../Inputs/Input"



export default function Product({product, i, removeProduct, deleteProduct}) {

    const [ canEditProduct, setCanEditProduct ] = useState(false);

    function toggleCanEdit() {
		setCanEditProduct(!canEditProduct);
    }


    async function editProduct(id){
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/business/updatebyproduct/${id}`, {method:'PUT', body: JSON.stringify({...productData}),headers:  { 'Content-Type' : 'application/json' }})
      }
    const [productData, setProductData] = useState({...product});

    function updateData(value, field){
        setProductData({...productData, [field]:value})
        console.log(value)
    }


    return (
            <li key={i} className={currentProduct}>
                
                {canEditProduct &&
                 <>
                  <Input type="text"
                  labelText="Product Name:"
                  id="productName"
                  updateInfo={(e) => updateData(e.target.value, "productName")}
                  currentInfo={product.productName}/>
                  <Input type="number"
                  labelText="Product Price:"
                  id="productPrice"
                  updateInfo={(e) => updateData(e.target.value, "productPrice")}
                  currentInfo={product.productPrice}/>
                  <Input type="number"
                  labelText="Product Quantity:"
                  id="quantity"
                  updateInfo={(e) => updateData(e.target.value, "quantity")}
                  currentInfo={product.quantity}/>
                  </>
                }
              <span> {product.productName}</span>
              <span> £{product.productPrice}</span>
              <span> {product.Quantity}</span>
              <Button className="removeProduct" textContent="remove" onClick={() => {removeProduct(i)
              deleteProduct(product.productId)}} />
              <Button className="updateProduct" textContent="edit" onClick ={()=>{toggleCanEdit()}}/>
              {canEditProduct && <Button className="submitProduct" textContent="submit" onClick ={()=>{editProduct(productData.productId)}}/>}
            </li>

    )
}