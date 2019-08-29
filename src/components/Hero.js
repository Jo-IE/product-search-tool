import React, { Component } from "react";
import styled from "styled-components";

class Hero extends Component {
  state = {};
  render() {
    return (
      <HeroWrapper id="hero">
        <FormWrapper>
          <div className="mx-auto text-center my-auto">
            <form className="form-inline">
              <div className="input-group">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search Products"
                  aria-label="Search"
                />
                <div class="input-group-append">
                  <button className="btn btn-dark" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </FormWrapper>
      </HeroWrapper>
    );
  }
}

const HeroWrapper = styled.div`
  background-color: var(--mainCreme);
  height: 100vh;
`;

const FormWrapper = styled.div`
  background-color: var(--mainLavender);
  height: 30%;
  width: 33%;
  border-radius: 4px;
  box-shadow: -4px 10px 1px 6px var(--mainDark);
  position: relative;
  left: 34%;
  top: 35%;
  display: flex;
  opacity: 0.8;
`;

export default Hero;
