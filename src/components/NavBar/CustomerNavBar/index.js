import React from "react";
import css from "../NavBar.module.css";
import Button from "../../Buttons/Button";
// import { Link } from "react-router-dom";

function CustomerNavBar(props) {
  return (
    <div className={css.navFlex}>
      <div className={css.innerFlexCustomer}>
        <div>
          <h2>Pete the meat</h2>
        </div>
        <div className={css.basketButtonFlex}>
          {/* <Link className={css.links} to={`/`}>
            Basket
          </Link> */}
          {/* <h3>Pete the meats cartshop</h3> */}
          <Button textContent="Basket" />
        </div>
      </div>
    </div>
  );
}

export default CustomerNavBar;
