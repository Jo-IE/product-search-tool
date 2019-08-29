import React, { Component } from "react";
import styled from "styled-components";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <NavWrapper className="navbar ">
        <a className="navbar-brand nav-link" href="#hero">
          <i className="fa fa-user-secret"></i>
        </a>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainDark) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default NavBar;
