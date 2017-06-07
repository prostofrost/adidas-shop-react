import React, { Component } from 'react';

import Colors from './Colors';
import Label from '../../components/Label';
import Gallery from './Gallery';
import BuyBtn from './BuyBtn';
import Price from '../../components/Price';

import { Product, Info, Title, Sets, Wrapper, StPrice, Description, SaveBtn } from './styled';

import { get } from '../../api';

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#77d9e8'];

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, selectedColorIndex: 0 };
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  fetchData(props) {
    const { section, category, id } = props.match.params;
    get(`v1/products/${section}/${category}/${id}`)
      .then(product => this.setState({ product }));
  }

  handleChangeColor(selectedColorIndex) {
    this.setState({ selectedColorIndex });
  }

  render() {
    const product = this.state.product;
    return (
      <Product>
        <Info>
          <Title>{product.title}</Title>
          <SaveBtn color={colors[this.state.selectedColorIndex]}>save</SaveBtn>
        </Info>

        <Sets>
          <Wrapper>
            <Colors colors={colors} onChange={this.handleChangeColor} />
            <Label isSale={product.sale} />
          </Wrapper>
          <StPrice color={colors[this.state.selectedColorIndex]}>
            <Price currency={product.currency}>{product.price}</Price>
          </StPrice>

        </Sets>

        <Gallery images={product.images} />
        <Description>{product.description}</Description>
        <BuyBtn />
      </Product>
    );
  }
}

export default Details;
