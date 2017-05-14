/* eslint react/prop-types: 0 */

import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import React from 'react';
import Filters from './Filters';
import Card from './Card';

const List = styled.div`
  padding: 0.7em 1em;
  @media only screen and (min-width: 768px) {
    padding: 0.7em 1.5em;
  }
`;

const Sep = styled.hr`
  margin: 0 -1.5em 0.5em;
  height: 3px;
  border: 0 none;
  color: #e7e7e7;
  background-color: #e7e7e7;
`;

const CardCol = ({ children }) => <Col xs={12} sm={6} lg={4}>{children}</Col>;

export default () => (
  <List>
    <Filters />
    <Sep />
    <Row>
      <CardCol><Card /></CardCol>
      <CardCol><Card /></CardCol>
      <CardCol><Card /></CardCol>
      <CardCol><Card /></CardCol>
      <CardCol><Card /></CardCol>
      <CardCol><Card /></CardCol>
    </Row>
  </List>
);
