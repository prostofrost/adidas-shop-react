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
  &.active {
    color: #fff
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <div>
        <MobileNav onClick={this.toggleMenu} />
        <Wrapper isHidden={!this.state.isOpen}>
          <Nav>
            <Menu title="Football">
              <Link to="/products/football/cleats">Cleats</Link>
              <Link to="/products/football/apparel">Apparel</Link>
              <Link to="/products/football/accessories">Accessories</Link>
            </Menu>

            <Menu title="Running">
              <Link to="/products/running/shoes">Shoes</Link>
              <Link to="/products/running/apparel">Apparel</Link>
              <Link to="/products/running/accessories">Accessories</Link>
            </Menu>

            <Menu title="Basketball">
              <Link to="/products/basketball/shoes">Shoes</Link>
              <Link to="/products/basketball/apparel">Apparel</Link>
              <Link to="/products/basketball/accessories">Accessories</Link>
            </Menu>
          </Nav>
        </Wrapper>
      </div>
    );
  }
}

export default Navigation;
