import React from "react";
import useBasket from "../../hooks/useBasket";
import mockData from "../../libs/mockData.js";
import Basket from "../Basket";
import BusinessProfile from "../BusinessProfile";
import ProductCardGrid from "../ProductCardGrid";
import { container, profileContainer } from "./CustomerPage.module.css";

function CustomerPage() {
  //calls the custom hook which is a useReducer hook that is used in several methods (i.e. onAdd, onRemoveAll etc)
  const { cartItems, onAdd, onRemoveAll, onRemoveOne } = useBasket();
  const { products } = mockData;

  return (
    <div className={container}>
      {/* these are where all the methods are being handed down as props to the basket component */}
      <Basket
        cartItems={cartItems}
        onRemoveAll={onRemoveAll}
        onRemoveOne={onRemoveOne}
        onAdd={onAdd}
      />
      <div className={profileContainer}>
        {/* at the point mockdata will be replaced by our actual db info */}
        <BusinessProfile businessInfo={mockData} />
      </div>
      {/* products is an array in mockdata which is passed down as a prop to this componenet and can add using the onAdd method */}
      <ProductCardGrid products={products} onClick={onAdd} />
    </div>
  );
}

export default CustomerPage;
