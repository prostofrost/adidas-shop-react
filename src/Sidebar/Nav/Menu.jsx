import React, { Component } from 'react';
import styled from 'styled-components';

import dropdown from './dropdown.svg';

const NavSub = styled.nav`
  font-family: "AndaleMono";
  margin: 0 0 55px;
  padding: 0;
`;

const MenuItem = styled.button`
  font-family: 'AvenirNext_bold';
  display: inline-block;
  background: none;
  border: none;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 35px;
  transition: all 0.4s ease;
  color: #fff;
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    width: 14px;
    height: 9px;
    background: url(${dropdown}) no-repeat;
    position: absolute;
    right: -20px;
    top: 10px;
    transition: all 0.4s ease;
    ${props =>
      props.isActive &&
      `
      transform: rotate(-180deg);
    `}
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <div>
        <MenuItem isActive={this.state.isOpen} onClick={this.handleClick}>
          {this.props.title}
        </MenuItem>
        {this.state.isOpen && <NavSub>{this.props.children}</NavSub>}
      </div>
    );
  }
}

export default Menu;
