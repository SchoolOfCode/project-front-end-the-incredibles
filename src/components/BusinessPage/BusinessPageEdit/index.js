import React from "react";
import PublishCartShopButton from "../../Buttons/PublishCartShopButton";
import RemoveProductButton from "../../Buttons/RemoveProductButton";
import Button from "../../Buttons/Button";
import Input from "../../Inputs/Input";
import {
  currentProduct,
  addProductsForm,
  businessInfoForm,
  container,
  currentProductsContainer,
} from "./BusinessPageEdit.module.css";
import useGetInfo from '../../../hooks/useUpdateInfo';

function BusinessPageEdit({ businessInfo, setBusinessInfo, toggleCanEdit }) {
  const { businessName, businessAbout, isTrading, products } = businessInfo;

  const {updateData, removeProduct, addProduct} = useGetInfo(businessInfo, setBusinessInfo);

  return (
    <div className={container}>
      <form className={businessInfoForm}>
        <Input
          type="text"
          labelText="Business Name:"
          id="businessName"
          updateInfo={updateData}
          currentInfo={businessName}
        />
        <Input
          type="text"
          labelText="About The Business:"
          id="businessAbout"
          updateInfo={updateData}
          currentInfo={businessAbout}
        />
      </form>
      <form className={addProductsForm}>
        <h2>Add Your Products</h2>
        <Input
          type="text"
          labelText="Product Name:"
          id="productName"
          updateInfo={() => console.log()}
        />
        {/* <Input /> */}
        <Input
          type="text"
          labelText="Price:"
          id="price"
          updateInfo={() => console.log()}
        />
        <Input
          type="number"
          labelText="Quantity:"
          id="inventoryQuantity"
          updateInfo={() => console.log()}
        />
        <Button
          textContent="Add Product"
          onClick={(e) => {
            e.preventDefault();
            const newProd = e.target.form[0].value;
            const newQuant = e.target.form[2].value;
            const newPrice = e.target.form[1].value;
            addProduct(newProd, newQuant, newPrice);
            console.log(businessInfo);
          }}
        />
      </form>
      <div className={currentProductsContainer}>
        <ul>
          {products.map((product, i) => (
            <li key={i} className={currentProduct}>
              <span> {product.productName}</span>
              <span> {product.price}</span>
              <RemoveProductButton onClick={() => removeProduct(i)} />
            </li>
          ))}
        </ul>
      </div>
      <PublishCartShopButton
        onClick={
          toggleCanEdit
          // console.log(businessInfo);
          //also needs to send to DB
        }
      />
    </div>
  );
}

export default BusinessPageEdit;
