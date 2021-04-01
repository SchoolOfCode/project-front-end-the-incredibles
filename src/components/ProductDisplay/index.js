import React from "react";


function ProductDisplay({ handleClick }){

    return (
      <section>
        <div className="product">
          <img
            src="https://www.ftd.com/blog/wp-content/uploads/2018/11/macrame-style-hero-720x475.jpg"
            alt="Macrame for the masses"
          />
          <div className="description">
            <h3>Macrame for the masses</h3>
            <h5>£20.00</h5>
          </div>
        </div>
        <button type="button" id="checkout-button" role="link" onClick={handleClick}>
          Checkout
        </button>
      </section>
    );
    };

export default ProductDisplay;