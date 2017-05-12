import './styles.css';
import React from 'react';
import Label from '../../Label';

export default () => {
  return (
    <div className="product-card product-card-sale">
      <Label />
      <img
        src={require('./shoes-1.jpg')}
        srcSet={
          require('./shoes-1@2x.jpg') +
            ' 2x,' +
            require('./shoes-1@3x.jpg') +
            ' 3x'
        }
        alt="Adidas"
      />
      <a href="/product-page.html" className="product-card-price">
        $170
      </a>
    </div>
  );
};
