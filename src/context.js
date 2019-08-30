import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    product: "",
    inputError: ""
  };

  validateProduct = () => {
    this.setState(currentState => {
      return {
        inputError:
          currentState.product.length > 1 ? null : "Please enter a product name"
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider>{this.props.children}</ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
