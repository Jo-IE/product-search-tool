import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    product: "",
    inputError: "",
    productList: [],
    loading: true,
    hasError: false
  };
  getProducts = () => {
    function timeout(ms, promise) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          /*res.redirect("/");
          res.end();*/
          reject(new Error("timeout"));
        }, ms);
        promise.then(resolve, reject);
      });
    }

    timeout(10000, fetch("/display-products"))
      .then(res => {
        /*if (res.message === "error") {
          //response has error, set error to true, loading to false

          this.setState(() => {
            return {
              hasError: true,
              loading: false
            };
          });
        }*/
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState(() => {
          return {
            productList: data,
            loading: false,
            hasError: false
          };
        });
      })
      .catch(err => {
        this.setState(() => {
          return {
            loading: false,
            hasError: true
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
