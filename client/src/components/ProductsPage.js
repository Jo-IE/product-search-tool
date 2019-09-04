import React, { Component } from "react";
import { ProductConsumer } from "../context";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

class ProductsPage extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <React.Fragment>
              <ScrollUpButton />
              <Link to="/">
                <p className="text-subtitle my-5 mx-5">back to search</p>
              </Link>
              {/* if the search has returned and the array is empty, render a 'no results' or 'network eror paragraph */}
              {value.productList.length === 0 && value.loading === false ? (
                value.hasError === false ? (
                  <div>
                    <p className="mx-5 text-subtitle">
                      No results matched your search
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="mx-5 text-subtitle">
                      something went wrong, please try again.
                    </p>
                  </div>
                )
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
