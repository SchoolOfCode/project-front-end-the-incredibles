import React from "react";
import Button from "../../Buttons/Button";
import BusinessProfile from "../../BusinessProfile";
import ProductCard from "../../ProductCard";

import {
  container,
  profileContainer,
  cardContainer,
} from "./BusinessPageStatic.module.css";

function BusinessPageStatic({ businessInfo, toggleCanEdit }) {
  const {
    businessName,
    about,
    businessImg,
    isTrading,
    products,
  } = businessInfo;

  return (
    <div className={container}>
      <div className={profileContainer}>
        <BusinessProfile
          name={businessName}
          about={about}
          img={businessImg}
          isTrading={isTrading}
        />
      </div>
      <Button textContent="edit" onClick={toggleCanEdit} />
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

export default BusinessPageStatic;
