import React, { Component } from "react";
import styled from "styled-components";
import StarRatingComponent from "react-star-rating-component";

class Product extends Component {
  render() {
    const {
      name,
      description,
      reviewsRating,
      tagline,
      votesCount,
      thumbnail,
      url
    } = this.props.product.node;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card h-100">
          <a target="_blank" rel="noopener noreferrer" href={url}>
            <img src={thumbnail.url} alt="product" className="card-img-top" />
          </a>

          <div className="card-body d-flex justify-content-between">
            <div className="row">
              <div className="col text-left">
                <p className=" text-subtitle">{name}</p>
                <p className="text-muted">{tagline}</p>

                <StarRatingComponent
                  name={"reviews"}
                  value={reviewsRating}
                  starColor={"var(--mainRed)"}
                  className="text-left"
                />

                <p>
                  <span className="text-red">Description: </span>
                  {description}
                </p>
                <div className="card-footer">
                  <p>
                    <span className="text-red pr-3">
                      <i className="fa fa-vote-yea "></i>
                    </span>
                    {votesCount} votes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    overflow-x: auto;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }

  .card-img-top {
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
`;

export default Product;
