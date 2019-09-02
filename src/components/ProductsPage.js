import React, { Component } from "react";
import { ProductConsumer } from "../context";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

class ProductsPage extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <React.Fragment>
              <Link to="/">
                <p className="text-subtitle my-5 mx-5">back to search</p>
              </Link>

              {value.productList.length === 0 && value.loading === false ? (
                <div>
                  <p className="mx-5">No results matched your search</p>
                </div>
              ) : (
                <ProductList value={value} />
              )}
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ProductsPage;
