import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
  background: #ff5c5c;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  padding: 8px 20px;
  display: ${props => (props.isHidden ? 'none' : 'block')};
  @media only screen and (min-width: 992px) {
    margin-left: 20px;
  }
`;

export default props => <Label isHidden={!props.isSale}>sale</Label>;
