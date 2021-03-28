import React from "react";
import PublishCartShopButton from "../../Buttons/PublishCartShopButton";
import RemoveProductButton from "../../Buttons/RemoveProductButton";
import AddProductsForm from "../../AddProductsForm"

import {
  currentProduct,
  container,
  currentProductsContainer,
} from "./BusinessPageEdit.module.css";
import useGetInfo from '../../../hooks/useUpdateInfo';
import BusinessInfoForm from '../../BusinessInfoForm';
import CurrentProductList from '../../CurrentPoductsList';

function BusinessPageEdit({ businessInfo, setBusinessInfo, toggleCanEdit }) {
  const {updateData, removeProduct, addProduct} = useGetInfo(businessInfo, setBusinessInfo);

  return (
    <div className={container}>
      <BusinessInfoForm updateData={updateData} businessInfo={businessInfo}/>

      <AddProductsForm addProduct={addProduct}/>
      <CurrentProductList products={businessInfo.products} removeProduct={removeProduct}/>
      
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
