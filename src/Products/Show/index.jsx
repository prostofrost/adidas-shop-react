import React from 'react';
import Name from './Name';
import SaveBtn from './SaveBtn';
import Colours from './Colours';
import Price from './Price';
import Label from '../../components/Label';
import Gallery from './Gallery';
import Description from './Description';
import BuyBtn from './BuyBtn';
import { Product, Info, Title, Sets, ColourSale } from './styled';

export default () => (
  <Product>
    <Info>
      <Title>
        <Name />
        <SaveBtn />
      </Title>

      <Sets>
        <ColourSale>
          <Colours />
          <Label />
        </ColourSale>
        <Price />
      </Sets>

    </Info>
    <Gallery />
    <Description />
    <BuyBtn />
  </Product>
);
