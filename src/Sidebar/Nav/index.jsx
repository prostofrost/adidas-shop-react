import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import Menu from './Menu';

import menuicon from './menu-icon.svg';

const MobileNav = styled.button`
  display: block;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  background: url(${menuicon}) no-repeat;
  position: absolute;
  top: 18px;
  right: 20px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: ${props => (props.hide ? 'none' : 'block')};
  @media only screen and (min-width: 768px) {
    display: ${props => props.hide && 'block'};
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
        <Wrapper hide={!this.state.isOpened}>
          <Nav>
            <Menu title="Football">
              <Link to="/football/shoes">Shoes</Link>
              <Link to="/football/clothing">Clothing</Link>
              <Link to="/football/accesories">Accesories</Link>
            </Menu>

            <Menu title="Running">
              <Link to="/running/shoes">Shoes</Link>
              <Link to="/running/clothing">Clothing</Link>
              <Link to="/running/accesories">Accesories</Link>
            </Menu>

            <Menu title="Basketball">
              <Link to="/basketball/shoes">Shoes</Link>
              <Link to="/basketball/clothing">Clothing</Link>
              <Link to="/basketball/accesories">Accesories</Link>
            </Menu>
          </Nav>
        </Wrapper>
      </div>
    );
  }
}

export default Navigation;
