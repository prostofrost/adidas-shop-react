import React from 'react';
import styled from 'styled-components';
import Icon from './search.svg';

const Form = styled.form`
  display: none;
  padding: 0 22px;
  position: relative;
  @media only screen and (min-width: 768px) {
    display: block;
    margin-bottom: 150px;
  }
`;

const Input = styled.input`
  font-size: 24px;
  text-transform: uppercase;
  background: transparent;
  border-width: 0 0 4px;
  border-style: solid;
  border-color: #373737;
  color: #3a3a3a;
  padding: 0 0 10px 55px;
  width: 100%;
  box-sizing: border-box;
  background: url(${Icon}) 10px 0 no-repeat;
  transition: all 0.3s ease;
  &:focus {
    border-color: #dcdcdc;
  }
`;

export default () => (
  <Form>
    <Input />
  </Form>
);
