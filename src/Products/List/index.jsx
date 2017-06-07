import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import styled from 'styled-components';

import Filters from './Filters';
import Card from './Card';

import imageLink from '../../constants/imageLink';
import { get } from '../../api';

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

const Loading = styled.div`
  font-family: 'AvenirNext_bold';
  font-size: 32px;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  color: #d6d6d6;
`;

const CardCol = ({ children }) => <Col xs={12} sm={6} lg={4}>{children}</Col>;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], isFetching: true };
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps);
  }

  fetchData(props) {
    const { section, category } = props.match.params;
    get(`v1/products/${section}/${category}`)
      .then(data => this.setState({ products: data.items, isFetching: false }));
  }

  render() {
    const { isFetching } = this.state;
    return (
      <Wrapper>
        <Filters />
        {isFetching
          ? <Loading>Loading...</Loading>
          : <ListWrapper>
            <Row>
              {this.state.products.map(card =>
                (<CardCol key={card.id}>
                  <Card
                    isSale={card.isSale}
                    to={`${this.props.match.url}/${card.id}`}
                    src={imageLink(card.images[0].id, card.images[0].fileName, 512)}
                    alt={card.title}
                    price={card.price}
                    currency={card.currency}
                  />
                </CardCol>),
              )}
            </Row>
          </ListWrapper>}
      </Wrapper>
    );
  }
}

export default List;
