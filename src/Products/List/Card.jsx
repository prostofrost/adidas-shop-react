import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Label from '../../components/Label';
import Price from '../../components/Price';

const Card = styled.div`
  position: relative;
  background: #f4f4f4;
  margin: 15px 0;
  padding: 8px;
  z-index: 1;
  & img {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 22px;
  right: 16px;
`;

const PriceLink = styled(Link) `
  width: 100%;
  text-align: center;
  background: #fff;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 20px 0;
  background-image: ${props => (props.isSale ? 'linear-gradient(17deg, #0c09bf, #966dd8)' : 'none')};
  color: ${props => (props.isSale ? '#fff' : '#111')};
  @media only screen and (min-width: 380px) {
    font-size: 30px;
    padding: 25px 0;
  }
  &:hover {
    background: #f4f4f4;
    background-image: ${props => props.isSale && 'linear-gradient(17deg, #966dd8, #0c09bf)'};
  }
`;

export default props =>
  (<Card>
    {props.isSale && <Wrapper><Label /></Wrapper>}
    <img src={props.src} alt={props.alt} />
    <PriceLink isSale={props.isSale} to={props.to}>
      <Price currency={props.currency}>{props.price}</Price>
    </PriceLink>
  </Card>);
