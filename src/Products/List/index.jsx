import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import styled from 'styled-components';

import Filters from './Filters';
import Card from './Card';

const Wrapper = styled.div`
  margin-top: 5em;
  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const ListWrapper = styled.div`
  padding: 0.7em 1em 0.7em 1em;
  @media only screen and (min-width: 768px) {
    padding: 0.7em 1em 0.7em 1em;
  }
`;

const CardCol = ({ children }) => <Col xs={12} sm={6} lg={4}>{children}</Col>;

export default () => (
  <Wrapper>
    <Filters />
    <ListWrapper>
      <Row>
        <CardCol>
          <Card
            to="/products/detail"
            price="$170"
            src={require('./shoes-1.jpg')}
            alt="Adidas shoes"
          />
        </CardCol>
        <CardCol>
          <Card
            to="/products/detail"
            price="$270"
            src={require('./shoes-2.jpg')}
            alt="Adidas shoes"
          />
        </CardCol>
        <CardCol>
          <Card
            isSale
            to="product/detail"
            price="$340"
            src={require('./shoes-3.jpg')}
            alt="Adidas shoes"
          />
        </CardCol>
        <CardCol>
          <Card
            isSale
            to="/products/detail"
            price="$570"
            src={require('./shoes-2.jpg')}
            alt="Adidas shoes"
          />
        </CardCol>
        <CardCol>
          <Card
            to="/products/detail"
            price="$92"
            src={require('./shoes-3.jpg')}
            alt="Adidas shoes"
          />
        </CardCol>
        <CardCol>
          <Card
            isSale
            to="/products/detail"
            price="$92"
            src={require('./shoes-1.jpg')}
            alt="Adidas shoes"
          />
        </CardCol>
      </Row>
    </ListWrapper>
  </Wrapper>
);
