import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage";
import Default from "./components/Default";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ProductsPage from "./components/ProductsPage";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/search" component={ProductsPage} />

          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
