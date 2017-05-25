import React, { Component } from 'react';
import Name from './Name';
import Colors from './Colors';
import Label from '../../components/Label';
import Gallery from './Gallery';
import Description from './Description';
import BuyBtn from './BuyBtn';
import { Product, Info, Sets, Wrapper, Price, SaveBtn } from './styled';

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#77d9e8'];

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { color: colors[0] };
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <Product>
        <Info>
          <Name />
          <SaveBtn color={this.state.color}>save</SaveBtn>
        </Info>

        <Sets>
          <Wrapper>
            <Colors colors={colors} onChange={this.handleChangeColor} />
            <Label />
          </Wrapper>
          <Price color={this.state.color}>$170</Price>
        </Sets>

        <Gallery />
        <Description />
        <BuyBtn />
      </Product>
    );
  }
}

export default Details;
