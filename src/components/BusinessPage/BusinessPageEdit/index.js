import {useState} from "react";
import useProductForm from '../../../hooks/useProductForm';
import useUpdateBusiness from "../../../hooks/useUpdateBusiness";
import AddProductsForm from "../../AddProductsForm";
import BusinessInfoForm from "../../BusinessInfoForm";
import Button from "../../Buttons/Button";
import CurrentProductList from "../../CurrentPoductsList";
import { container, publishContainer } from "./BusinessPageEdit.module.css";

function BusinessPageEdit({ businessInfo, setBusinessInfo, toggleCanEdit }) {
  const [products, setProducts] = useState([...businessInfo.products]);

  const {updateProduct, removeProduct, addProduct} = useProductForm(products, setProducts, businessInfo.id);
  const { updateBusiness, updateData} = useUpdateBusiness(
    businessInfo,
    setBusinessInfo
  );

  return (
    <div className={container}>
      <BusinessInfoForm updateData={updateData} businessInfo={businessInfo} />

      <AddProductsForm addProduct={addProduct} />

      
      <CurrentProductList
        products={products}
        updateProduct={updateProduct}
        removeProduct={removeProduct}
      />

      <div className={publishContainer}>
        <Button
          className="blackBtn"
          textContent="Publish CartShop"
          onClick={
            () => {
              updateBusiness();
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
