import React, { Component } from "react";
import Hero from "./Hero";

import { ProductConsumer } from "../context";

class LandingPage extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <React.Fragment>
              <Hero
                validateProduct={value.validateProduct}
                inputError={value.inputError}
                handleProductChange={value.handleProductChange}
                product={value.product}
                toggleLoading={value.toggleLoading}
              />
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default LandingPage;
