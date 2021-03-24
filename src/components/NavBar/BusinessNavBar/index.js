import React from "react";
import css from "../NavBar.module.css";
// import { Link } from "react-router-dom";
import "../../../index.css";
import SignInUpButton from "../../Buttons/SignInUpButton";
import SignOutButton from "../../Buttons/SignOutButton";

function BusinessNavBar(props) {
  return (
    <div className={css.navFlex}>
      <div className={css.innerFlex}>
        <div>
          <h1> CartShop</h1>
        </div>
        <div className={css.linkFlex}>
          {/* <Link className={css.links} to={`/`}>
            My Cartshop
          </Link>
          <Link className={css.links} to={`/`}>
            About
          </Link>
          <Link className={css.links} to={`/`}>
            Tutorial
          </Link> */}
          <a href="#" className={css.links}>
            My CartShop
          </a>
          <a href="#" className={css.links}>
            About
          </a>
          <a href="#" className={css.links}>
            Tutorial
          </a>

          <SignOutButton />
        </div>
      </div>
    </div>
  );
}

export default BusinessNavBar;
