import React from "react";
import Button from "../Buttons/Button";
import BusinessProfile from "../BusinessProfile";
import ProductCard from "../ProductCard";
import mockData from "../../libs/mockData.js";

import {
  container,
  profileContainer,
  cardContainer,
} from "./CustomerPage.module.css";
import Basket from '../Basket';

function CustomerPage() {
  const {
    businessName,
    businessAbout,
    businessImg,
    isTrading,
    products,
  } = mockData;

  return (
    <div className={container}>
      <Basket/>
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
          <ProductCard
            name={product.name}
            price={product.price}
            key={i}
            inventoryQuantity={product.inventoryQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerPage;
