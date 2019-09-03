import React, { Component } from "react";

import Product from "./Product";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

class ProductList extends Component {
  componentDidMount() {
    this.props.value.getProducts();
  }
  render() {
    console.log(this.props.value);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
              {this.props.value.loading === true ? (
                <ClipLoader
                  css={override}
                  sizeUnit={"px"}
                  color={"var(--mainLavender)"}
                  size={100}
                  loading={this.props.value.loading}
                />
              ) : (
                this.props.value.productList.map(product => {
                  return <Product key={product.node.id} product={product} />;
                })
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const override = css`
  display: block;
  left: 50%;
  position: relative;
`;

export default ProductList;
