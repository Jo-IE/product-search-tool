import React, { Component } from "react";
import Hero from "./Hero";
import ProductList from "./ProductList";
import { ProductConsumer } from "../context";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <React.Fragment>
              <Hero />
              <ProductList />
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default LandingPage;
