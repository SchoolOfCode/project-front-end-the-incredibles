import React from "react";
import Button from "../Buttons/Button";
import BusinessProfile from "../BusinessProfile";
import ProductCard from "../ProductCard";
import mockData from "../../libs/mockData.js";
import useBasket from "../../hooks/useBasket";

import {
  container,
  profileContainer,
  cardContainer,
} from "./CustomerPage.module.css";
import Basket from "../Basket";

function CustomerPage() {
  const { cartItems, onAdd, onRemove } = useBasket();
  const {
    businessName,
    businessAbout,
    businessImg,
    isTrading,
    products,
  } = mockData;

  return (
    <div className={container}>
      <Basket cartItems={cartItems} onRemove={onRemove} />
      <div className={profileContainer}>
        <BusinessProfile
          name={businessName}
          about={businessAbout}
          img={businessImg}
          isTrading={isTrading}
        />
      </div>
      <div className={cardContainer}>
        {products.map((product, i) => (
          <ProductCard product={product} key={i} onClick={onAdd} />
        ))}
      </div>
    </div>
  );
}

export default CustomerPage;
