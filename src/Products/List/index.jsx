import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import styled from 'styled-components';

import Card from './Card';

import imageLink from '../../constants/imageLink';
import { get } from '../../api';

import Icon from './search.svg';

const Wrapper = styled.div`
  margin-top: 5em;
  @media only screen and (min-width: 768px) {
    margin-top: 1em;
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

const Form = styled.form`
  padding: 0 22px;
  position: relative;
  @media only screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  font-family: 'AvenirNext_bold';
  font-size: 20px;
  text-transform: uppercase;
  background: transparent;
  border-width: 0 0 4px;
  border-style: solid;
  border-color: #dcdcdc;
  color: #3a3a3a;
  padding: 0 0 10px 55px;
  width: 100%;
  box-sizing: border-box;
  background: url(${Icon}) 10px 0 no-repeat;
  transition: all 0.3s ease;
  &:focus {
    border-color: #373737;
  }
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    padding: 0 0 10px 55px;
  }
`;

function lowerCaseSearchValue(searchValue) {
  return (x => x.title.toLowerCase().includes(searchValue.toLowerCase()) || !searchValue);
}

const CardCol = ({ children }) => <Col xs={12} sm={6} lg={4}>{children}</Col>;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], isFetching: true, searchValue: '' };
    this.handleSearch = this.handleSearch.bind(this);
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

  handleSearch(e) {
    this.setState({ searchValue: e.target.value });
  }

  render() {
    const { isFetching } = this.state;
    return (
      <Wrapper>
        <Form>
          <Input type="text" onChange={this.handleSearch} value={this.state.searchValue} />
        </Form>
        {isFetching
          ? <Loading>Loading...</Loading>
          : <ListWrapper>
            <Row>
              {this.state.products.filter(lowerCaseSearchValue(this.state.searchValue)).map(card =>
                (<CardCol key={card.id}>
                  <Card
                    isSale={card.isSale}
                    to={`${this.props.match.url}/${card.id}`}
                    src={imageLink(card.images[0].id, card.images[0].fileName, 512)}
                    alt={card.title}
                    price={card.price}
                    currency={card.currency}
                    title={card.title}
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
