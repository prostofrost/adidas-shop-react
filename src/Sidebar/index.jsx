import styled from 'styled-components';
import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Nav from './Nav';

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #0e0e0e;
  padding: 18px 0 18px 20px;
  box-sizing: border-box;
  z-index: 2;
  @media only screen and (min-width: 768px) {
    position: relative;
    text-align: center;
    padding: 50px 0 0;
    flex: 0 0 30%;
  }
  @media only screen and (min-width: 1200px) {
    flex: 0 0 414px;
  }
`;

export default () => (
  <Sidebar>
    <Logo />
    <Search />
    <Nav />
  </Sidebar>
);
