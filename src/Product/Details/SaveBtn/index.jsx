import React from 'react';
import styled from 'styled-components';

const Save = styled.button`
  display: none;
  background: #e3e3e3;
  border: none;
  color: #fff;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  text-transform: uppercase;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background: #4d42f8;
  }
  @media only screen and (min-width: 992px) {
    display: block;
  }
`;

export default () => <Save>save</Save>;
