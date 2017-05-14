import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Img = styled.img`
  width: 40px;
  @media only screen and (min-width: 768px) {
    width: inherit;
  }
`;

export default () => (
  <Wrapper>
    <Link to="/">
      <Img
        src={require('./logo.png')}
        srcSet={`${require('./logo@2x.png')} 2x,${require('./logo@3x.png')} 3x`}
        alt="Adidas Logo"
      />
    </Link>
  </Wrapper>
);
