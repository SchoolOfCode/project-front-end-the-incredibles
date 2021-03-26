import React from "react";
import CustomerPage from "../../CustomerPage";
import Button from "../../Buttons/Button";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "../../../index.css";
import css from "../NavBar.module.css";

function CustomerNavBar(props) {
  return (
    <Router>
      <div className={css.navFlex}>
        <nav className={css.linkFlex}>
          <h1> CartShop</h1>
          <NavLink
            to={"/store"}
            exact
            className={css.links}
            activeClassName={css.active}
          >
            Macrambé Master
          </NavLink>

          <Button textContent={"basket"}></Button>
        </nav>
      </div>
      <Switch>
        <Route path="/store">
          <CustomerPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default CustomerNavBar;
