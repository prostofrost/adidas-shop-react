import React from 'react';
import styled from 'styled-components';

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
  font-family: 'AvenirNext_bold';
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
