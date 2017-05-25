import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 20px;
  height: 20px;
  background: #ccc;
  border: none;
  border-radius: 50%;
  margin-left: 8px;
  border: 2px solid transparent;
  transition: all 0.5s ease;
  background-color: ${props => `${props.color}`};
  &:hover {
    border: 2px solid #0e0e0e;
  }
`;

export default props => (
  <div>
    {props.colors.map((color, index) => (
      <Button key={color} color={color} onClick={() => props.onChange(index)} />
    ))}
  </div>
);
