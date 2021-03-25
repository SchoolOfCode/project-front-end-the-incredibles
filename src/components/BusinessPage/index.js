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
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default BusinessPage;
