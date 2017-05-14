import React from 'react';
import styled from 'styled-components';

const Colours = styled.div`
  margin-right: 5px;
`;

const Button = styled.button`
  width: 20px;
  height: 20px;
  background: #ccc;
  border: none;
  border-radius: 50%;
  margin-left: 8px;
  border: 2px solid #fff;
  transition: all 0.5s ease;
  background-color: ${p => (p.color ? `${p.color};` : '#c5c5c5;')};
  &:hover {
    border: 2px solid #0e0e0e;
  }
`;

export default () => (
  <Colours>
    <Button color="#c5c5c5" />
    <Button color="#4d87ca" />
    <Button color="#4a4a4a" />
    <Button color="#e0e0e0" />
  </Colours>
);
