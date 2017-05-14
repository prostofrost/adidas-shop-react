import React from 'react';
import styled from 'styled-components';

const Price = styled.h2`
  font-size: 80px;
  color: #e2e2e2;
  margin: 0;
  @media only screen and (min-width: 992px) {
    font-size: 80px;
    color: #e2e2e2;
    padding: 0;
    margin: 35px 0 0;
  }
`;

export default () => <Price>$170</Price>;
