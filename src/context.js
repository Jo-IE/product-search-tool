import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      inputError: "",
      productList: [],
      loading: true,
      hasError: false
    };
    this.getProducts = this.getProducts.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.validateProduct = this.validateProduct.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
  }

  getProducts() {
    // set timeout to throw error on network time out
    function timeout(ms, promise) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          reject(new Error("timeout"));
        }, ms);
        promise.then(resolve, reject);
      });
    }

    timeout(10000, fetch("/display-products"))
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            productList: data,
            loading: false,
            hasError: false
          };
        });
      }) //handle error, stop loader from spinning
      .catch(err => {
        this.setState(() => {
          return {
            loading: false,
            hasError: true
          };
        });
      });
  }

  toggleLoading() {
    this.setState(() => {
      return {
        loading: true
      };
    });
  }
  validateProduct() {
    //ensure that user has typed at least one character
    this.setState(currentState => {
      return {
        inputError:
          currentState.product.length > 0
            ? ""
            : "Please enter a topic to search"
      };
    });
  }

  handleProductChange(evt) {
    //store product name that user types in state
    const value = evt.target.value;
    this.setState(() => {
      return {
        product: value
      };
    });
  }
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
