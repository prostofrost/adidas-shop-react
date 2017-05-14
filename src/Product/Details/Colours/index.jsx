import React from 'react';
import styled from 'styled-components';

const Colours = styled.div`
  & button {
    width: 20px;
    height: 20px;
    background: #ccc;
    border: none;
    border-radius: 50%;
    margin-left: 8px;
    border: 2px solid #fff;
    transition: all 0.5s ease;
    background-color: #c5c5c5;
    &:hover {
      border: 2px solid #0e0e0e;
    }
  }
  & button.grey {
    background-color: #c5c5c5;
  }
  & button.blue {
    background-color: #4d87ca;
  }
  & button.black {
    background-color: #4a4a4a;
  }
  & button.palegrey {
    background-color: #e0e0e0;
  }
`;

export default () => (
  <Colours>
    <button className="grey" />
    <button className="active blue" />
    <button className="black" />
    <button className="palegrey" />
  </Colours>
);
