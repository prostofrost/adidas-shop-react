import React from 'react';
import Name from './Name';
import SaveBtn from './SaveBtn';
import Colours from './Colours';
import Price from './Price';
import Label from '../../components/Label';
import Gallery from './Gallery';
import Description from './Description';
import BuyBtn from './BuyBtn';
import { Product, Info, Sets, Wrapper } from './styled';

export default () => (
  <Product>
    <Info>
      <Name />
      <SaveBtn />
    </Info>

    <Sets>
      <Wrapper>
        <Colours />
        <Label />
      </Wrapper>
      <Price />
    </Sets>

    <Gallery />
    <Description />
    <BuyBtn />
  </Product>
);
