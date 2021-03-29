import React, { useState } from "react";
import {
  BrowserRouter as Router,
  // NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "../../index.css";
import Footer from "../Footer";
import BusinessNavBar from "../NavBar/BusinessNavBar";
import CustomerNavBar from "../NavBar/CustomerNavBar";
import "./App.css";
import QuantityInput from "../Inputs/QuantityInput";
import ProductCard from "../ProductCard";
import Blob from "../blob/src/Blob";
import Button from "../Buttons/Button";
import useGet from "../../hooks/useGet";

function App() {
  const [num, setNum] = useState(0);
  const [data, setData] = useGet(num);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/store">
            <CustomerNavBar />
          </Route>
          <Route path="/">
            <BusinessNavBar />
          </Route>
        </Switch>
      </Router>
      <Button
        textContent={"HOWDY"}
        onClick={() => {
          setNum(num + 1);
        }}
      />
      <Blob />
      <Footer />
    </div>
  );
}

export default App;
