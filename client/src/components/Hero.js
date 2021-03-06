import React, { Component } from "react";
import styled from "styled-components";

class Hero extends Component {
  //set loading to true when on landing page
  componentDidMount() {
    this.props.toggleLoading();
  }
  render() {
    return (
      <HeroWrapper>
        <h1 className="text-title text-center py-5 ">Discover cool products</h1>
        <FormWrapper>
          <div className="mx-auto text-center my-auto">
            <form
              className="form-inline"
              method="POST"
              action="/search-products"
            >
              <div className="input-group ">
                <input
                  className="form-control"
                  name="productname"
                  type="search"
                  placeholder="Search by Topic"
                  aria-label="Search"
                  onBlur={() => this.props.validateProduct()}
                  onChange={this.props.handleProductChange}
                  value={this.props.product}
                />
                <div className="input-group-append ">
                  <button className="btn btn-dark" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
            {/* input error */}
            <p>{this.props.inputError}</p>
          </div>
        </FormWrapper>
      </HeroWrapper>
    );
  }
}

const HeroWrapper = styled.div`
  background-color: var(--mainCreme);
  min-height: 100vh;
  min-width: 100vw;
  padding: 0;
`;

const FormWrapper = styled.div`
  background-color: var(--mainLavender);
  min-height: 30vh;
  width: 33%;
  border-radius: 4px;
  box-shadow: -4px 10px 1px 6px var(--mainDark);
  position: relative;
  left: 34%;
  top: 15%;
  transition: all 0.5s linear;
  display: flex;
  @media only screen and (max-width: 750px) {
    background-color: var(--mainCreme);
    box-shadow: none;
  }
`;

export default Hero;
