import React, { Component } from "react";
import styled from "styled-components";

class Hero extends Component {
  state = {};
  render() {
    return (
      <HeroWrapper>
        <FormWrapper>
          <div className="mx-auto text-center my-auto">
            <form className="form-inline">
              <input
                className="form-control "
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">
                <i className="fa fa-search"></i>
              </button>
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
  height: 50%;
  width: 50%;
  border-radius: 4px;
  box-shadow: 5px 0px var(--mainDark);
  position: relative;
  left: 25%;
  top: 25%;
  display: flex;
`;

export default Hero;
