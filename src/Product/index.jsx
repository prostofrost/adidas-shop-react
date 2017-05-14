import React from 'react';
import Name from './Details/Name';
import SaveBtn from './Details/SaveBtn';
import Colours from './Details/Colours';
import Price from './Details/Price';
import Label from '../Label';
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
