import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "../../HomePage";
import About from "../../About";
import "../../../index.css";
import SignInUpButton from "../../Buttons/SignInUpButton";
import SignOutButton from "../../Buttons/SignOutButton";
import css from "../NavBar.module.css";
import Tutorial from "../../Tutorial";
import Logo from "../../Logo"


function BusinessNavBar(props) {
  const { isAuthenticated, user } = useAuth0();



  return (
    <Router>
      <div className={css.navFlex}>
        <nav className={css.linkFlex}>
          <Logo />
          <NavLink
            to={"/"}
            exact
            className={css.links}
            activeClassName={css.active}
          >
            My CartShop
          </NavLink>
          <NavLink
            to={"/about"}
            className={css.links}
            activeClassName={css.active}
          >
            About
          </NavLink>
          <NavLink
            to={"/tutorial"}
            className={css.links}
            activeClassName={css.active}
          >
            Tutorial
          </NavLink>
          {isAuthenticated ? (
            <SignOutButton />
          ) : (
            <SignInUpButton textContent="Sign in/up" />
          )}
        </nav>
      </div>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/tutorial">
          <Tutorial />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default BusinessNavBar;
