import React from "react";
import mockData from "../../libs/mockData";
import BusinessProfile from "../BusinessProfile";
import ProductCard from "../ProductCard";
import "../../index.css";

import {
  container,
  profileContainer,
  cardContainer,
} from "./BusinessPage.module.css";

function BusinessPage() {
  const { name, about, img, isTrading, products } = mockData;

  return (
    <div className={container}>
      <div className={profileContainer}>
        <BusinessProfile
          name={name}
          about={about}
          img={img}
          isTrading={isTrading}
        />
      </div>
      <div className={cardContainer}>
        {products.map((product, i) => (
          <ProductCard name={product.name} price={product.price} key={i} inventoryQuantity={product.inventoryQuantity }/>
        ))}
      </div>
    </div>
  );
}

export default BusinessPage;
