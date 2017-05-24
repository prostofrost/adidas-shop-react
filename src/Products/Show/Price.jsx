import React from 'react';
import styled from 'styled-components';

const Price = styled.h2`
  font-size: 70px;
  color: #e2e2e2;
  margin: 0 0 10px;
  @media only screen and (min-width: 380px) {
    font-size: 80px;
  }
  @media only screen and (min-width: 992px) {
    color: #e2e2e2;
    padding: 0;
    margin: 35px 0 0;
  }
`;

export default () => <Price>$170</Price>;
