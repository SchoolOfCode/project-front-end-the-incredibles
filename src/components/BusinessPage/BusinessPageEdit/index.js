import React from "react";
import useGetInfo from "../../../hooks/useUpdateInfo";
import AddProductsForm from "../../AddProductsForm";
import BusinessInfoForm from "../../BusinessInfoForm";
import Button from "../../Buttons/Button";
import CurrentProductList from "../../CurrentPoductsList";
import { container, publishContainer } from "./BusinessPageEdit.module.css";

function BusinessPageEdit({ businessInfo, setBusinessInfo, toggleCanEdit }) {
  const { updateData, removeProduct, addProduct, updateDatabase } = useGetInfo(
    businessInfo,
    setBusinessInfo
  );

  return (
    <div className={container}>
      <BusinessInfoForm updateData={updateData} businessInfo={businessInfo} />

      <AddProductsForm addProduct={addProduct} />
      <CurrentProductList
        // updateProducts = {}
        products={businessInfo.products}
        removeProduct={removeProduct}
      />

      <div className={publishContainer}>
        <Button
          className="blackBtn"
          textContent="Publish CartShop"
          onClick={
            () => {
              updateDatabase();
              toggleCanEdit();
            }
          }
        />
        <p>Don't worry, you can change this information at any time!</p>
      </div>
    </div>
  );
}

export default BusinessPageEdit;
