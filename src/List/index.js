import './styles.css';
import React from 'react';
import Filters from './Filters';
import Card from './Card';
import { Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <div className="product-list">
      <Filters />
      <hr className="separator" />
      <Row>
        <Col xs={12} sm={6} lg={4}>
          <Card />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <Card />
        </Col>
      </Row>
    </div>
  );
};
