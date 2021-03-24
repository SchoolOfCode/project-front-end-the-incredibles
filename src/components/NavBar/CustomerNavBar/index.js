import React from "react";
import css from "../NavBar.module.css";
// import { Link } from "react-router-dom";

function CustomerNavBar(props) {
  return (
    <div className={css.navFlex}>
      <div className={css.innerFlex}>
        <div>
          <h1>Pete the meat</h1>
        </div>
        <div className={css.linkFlex}>
          {/* <Link className={css.links} to={`/`}>
            Basket
          </Link> */}
          {/* <h3>Pete the meats cartshop</h3> */}
          <button>Basket?</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerNavBar;
