import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  font-family: 'AvenirNext';
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 1px;
  color: #d8d8d8;
  & span {
    color: #6e6e6e;
  }
  @media only screen and (min-width: 768px) {
    font-size: 33px;
    line-height: 1.52;
    letter-spacing: 2.6px;
  }
`;

export default () => (
  <Text>
    <p>
      <span>Adidas&nbsp;</span>
      is a German multinational corporation, headquartered in Herzogenaurach, Germany,
      that designs and manufactures shoes, clothing and accessories.
    </p>
  </Text>
);
