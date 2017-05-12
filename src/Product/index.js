import React from 'react';
import Name from './Details/Name';
import SaveBtn from './Details/SaveBtn';
import Colours from './Details/Colours';
import Price from './Details/Price';
import Label from '../Label';
import Gallery from './Gallery';
import Description from './Description';
import BuyBtn from './BuyBtn';

export default () => {
  return (
    <div>
      <div className="product-page">
        <header className="product-info">
          <div className="product-title">
            <Name />
            <SaveBtn />
          </div>
          <div className="product-sets">
            <div className="product-sets-color-and-sale">
              <Colours />
              <Label />
            </div>
            <Price />
          </div>
        </header>
        <Gallery />
        <Description />
      </div>
      <BuyBtn />
    </div>
  );
};
