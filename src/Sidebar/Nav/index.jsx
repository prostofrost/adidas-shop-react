import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import Menu from './Menu';

const Nav = styled.nav`
  display: none;
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    display: block;
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

export default () => (
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
);
