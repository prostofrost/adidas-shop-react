import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    margin-bottom: 200px;
  }
`;

const Img = styled.img`
  width: 40px;
  @media only screen and (min-width: 768px) {
    width: 77px;
  }
`;

export default () =>
  (<Wrapper>
    <Link to="/">
      <Img src={require('./logo.svg')} alt="Adidas Logo" />
    </Link>
  </Wrapper>);
