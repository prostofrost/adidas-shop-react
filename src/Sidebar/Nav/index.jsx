import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import Menu from './Menu';

import menuIcon from './menu-icon.svg';

const MobileNav = styled.button`
  display: block;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  background: url(${menuIcon}) no-repeat;
  position: absolute;
  top: 18px;
  right: 20px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: ${props => (props.isHidden ? 'none' : 'block')};
  @media only screen and (min-width: 768px) {
    display: ${props => props.isHidden && 'block'};
  }
`;

const Nav = styled.nav`
  display: block;
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  margin-top: 50px;
  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const Link = styled(NavLink)`
  position: relative;
  display: block;
  margin-bottom: 25px;
  text-decoration: none;
  transition: all 0.4s ease;
  color: #3c3c3c;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <div>
        <MobileNav onClick={this.toggleMenu} />
        <Wrapper isHidden={!this.state.isOpened}>
          <Nav>
            <Menu title="Football">
              <Link to="/products/football/shoes">Shoes</Link>
              <Link to="/products/football/clothing">Clothing</Link>
              <Link to="/products/football/accesories">Accesories</Link>
            </Menu>

            <Menu title="Running">
              <Link to="/products/running/shoes">Shoes</Link>
              <Link to="/products/running/clothing">Clothing</Link>
              <Link to="/products/running/accesories">Accesories</Link>
            </Menu>

            <Menu title="Basketball">
              <Link to="/products/basketball/shoes">Shoes</Link>
              <Link to="/products/basketball/clothing">Clothing</Link>
              <Link to="/products/basketball/accesories">Accesories</Link>
            </Menu>
          </Nav>
        </Wrapper>
      </div>
    );
  }
}

export default Navigation;
