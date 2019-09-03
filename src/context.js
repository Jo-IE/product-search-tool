import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    product: "",
    inputError: "",
    productList: [],
    loading: true,
    error: false
  };
  getProducts = () => {
    fetch("/display-products")
      .then(res => {
        if (res.status !== 200) {
          //response has error, set error to true, loading to false
          this.setState(() => {
            return {
              error: true,
              loading: false
            };
          });
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState(() => {
          return {
            productList: data,
            loading: false
          };
        });
      });
  };

  toggleLoading = () => {
    this.setState(() => {
      return {
        loading: true
      };
    });
  };
  validateProduct = () => {
    //ensure that user has typed at least one character
    this.setState(currentState => {
      return {
        inputError:
          currentState.product.length > 0 ? "" : "Please enter a product name"
      };
    });
  };

  handleProductChange = evt => {
    //store product name that user types in state
    const value = evt.target.value;
    this.setState(() => {
      return {
        product: value
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          validateProduct: this.validateProduct,
          handleProductChange: this.handleProductChange,
          getProducts: this.getProducts,
          toggleLoading: this.toggleLoading
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
