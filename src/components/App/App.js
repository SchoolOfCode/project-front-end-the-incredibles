import HomePage from "../HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export default App;

/*
 <Router>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </Router>
    */
