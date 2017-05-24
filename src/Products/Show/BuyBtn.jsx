import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
  font-size: 16px;
  padding: 0px 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  transition: all 0.3s ease;
  @media only screen and (min-width: 380px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 32px;
    left: 30%;
  }
  @media only screen and (min-width: 1200px) {
    left: 414px;
  }
  & button {
    font-family: 'AvenirNext_bold';
    color: #fff;
    width: 100%;
    text-transform: uppercase;
    border: none;
    background: none;
    padding: 20px 0;
    background-image: linear-gradient(to right, #4949aa, #27275d);
    @media only screen and (min-width: 768px) {
      padding: 40px 0;
    }
  }
  & button:hover {
    background-image: linear-gradient(17deg, #966dd8, #0c09bf);
  }
`;

export default () => (
  <Btn>
    <button>Buy Now</button>
  </Btn>
);
