import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import useGet from "../../../hooks/useGet";
import "../../../index.css";
import Button from "../../Buttons/Button";
import CustomerPage from "../../CustomerPage";
import Logo from "../../Logo";
import css from "../NavBar.module.css";
import { Spinner } from "@chakra-ui/react";
import "../../../index.css";

function CustomerNavBar() {
  //useState hook to track whether basket button is clicked
  const [basketOpen, setBasketOpen] = useState(false);
  const [itemsInBasket, setItemsInBasket] = useState(0)
  const { businessUrl } = useParams();
  //this has to stay as store for now
  const { isLoading, data: businessInfo } = useGet(`store/${businessUrl}`);
  
  //
  function toggleBasket() {
    const basket = document.querySelector(".basket");
    //switches basket between visible and not visible
    basket.classList.toggle("showBasket");
    //changes the state of the basketopen to be the opposite of existing state
    setBasketOpen(!basketOpen);
  }

  if (isLoading) {
    return (
      <div className={"loading"}>
        <Spinner color="#FF5A5F" size="xl" />
      </div>
    );
  }
  return (
    <Router>
      <div className={css.navFlex}>
        <nav className={css.linkFlex}>
          <Logo />
          {/* NavLink allows styling attributes to be added to Link */}
          <NavLink
            to={businessUrl}
            className={css.links}
            activeClassName={css.active}
          >
            {businessInfo.businessName}
          </NavLink>
          {/* Turnary operator which changes button value to X or basket by tracking basketopen state */}
          <Button
            textContent={
              basketOpen ? (
                <i class="fas fa-times"></i>
              ) : (
                <i class="fas fa-shopping-cart">{itemsInBasket}</i>
              )
            }
            onClick={toggleBasket}
          />
        </nav>
      </div>
      <Switch>
        <Route path="/shop/:businessUrl">
          <CustomerPage businessInfo={businessInfo} setItemsInBasket={setItemsInBasket}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default CustomerNavBar;
