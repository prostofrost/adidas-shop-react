import React, { Component } from 'react';
import Name from './Name';
import Colors from './Colors';
import Label from '../../components/Label';
import Gallery from './Gallery';
import Description from './Description';
import BuyBtn from './BuyBtn';
import { Product, Info, Sets, Wrapper, Price, SaveBtn } from './styled';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { color: '#e2e2e2' };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(color) {
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
            <Colors onChange={this.changeColor} />
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
