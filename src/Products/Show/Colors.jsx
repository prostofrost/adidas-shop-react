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
  background-color: ${props => props.color || '#c5c5c5'};
  &:hover {
    border: 2px solid #0e0e0e;
  }
`;

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#77d9e8'];

export default props => (
  <div>
    {colors.map(color => (
      <Button key={color.id} color={color} onClick={() => props.onChange(color)} />
    ))}
  </div>
);
