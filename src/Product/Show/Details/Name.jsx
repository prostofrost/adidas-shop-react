import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 36px;
  line-height: 42px;
  color: #3a3a3a;
  text-transform: uppercase;
  margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 68px;
  }
  @media only screen and (min-width: 992px) {
    margin: 0 0 8px;
  }
`;

export default () => (
  <Title>
    Ultra&nbsp;<br className="no-mobile-992" />boost
  </Title>
);
