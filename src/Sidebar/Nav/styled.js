import styled from 'styled-components';
import Dropdown from './dropdown.svg';

export const Nav = styled.nav`
  display: none;
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

export const Item = styled.div`
  margin-bottom: 35px;
  margin-bottom: ${props => (props.submenuitem ? '25px' : '35px')};
`;

export const Link = styled.a`
  text-decoration: none;
  transition: all 0.4s ease;
  color: ${props => (props.active ? '#fff' : '#3c3c3c')};
  &:hover {
    color: #fff;
  }
  ${props => props.isDropdown && `
    position: relative;
    transition: all 0.4s ease;
    &::before {
      content: '';
      display: block;
      width: 14px;
      height: 9px;
      background: url(${Dropdown}) no-repeat;
      position: absolute;
      right: -20px;
      top: 10px;
      transition: all 0.4s ease;
    }
    &:hover::before {
      transform: rotate(-180deg);
    }
  `};
`;

export const NavSub = styled.nav`
  font-family: "AndaleMono";
  margin: 35px 0 55px;
  padding: 0;
`;
