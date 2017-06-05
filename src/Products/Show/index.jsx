import React, { Component } from 'react';

import Colors from './Colors';
import Label from '../../components/Label';
import Gallery from './Gallery';
import BuyBtn from './BuyBtn';

import { Product, Info, Title, Sets, Wrapper, Price, Description, SaveBtn } from './styled';

import apiLink from '../../constants/apiLink';

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#77d9e8'];

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, selectedColorIndex: 0 };
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  fetchData(props) {
    const { section, category, id } = props.match.params;
    fetch(`${apiLink()}/products/${section}/${category}/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ product: data }));
  }

  handleChangeColor(selectedColorIndex) {
    this.setState({ selectedColorIndex });
  }

  render() {
    const card = this.state.product;
    return (
      <Product>
        <Info>
          <Title>{card.title}</Title>
          <SaveBtn color={colors[this.state.selectedColorIndex]}>save</SaveBtn>
        </Info>

        <Sets>
          <Wrapper>
            <Colors colors={colors} onChange={this.handleChangeColor} />
            <Label isSale={card.sale} />
          </Wrapper>
          <Price color={colors[this.state.selectedColorIndex]}>
            {`$${card.price / 100}`}
          </Price>
        </Sets>

        <Gallery />
        <Description>{card.description}</Description>
        <BuyBtn />
      </Product>
    );
  }
}

export default Details;
