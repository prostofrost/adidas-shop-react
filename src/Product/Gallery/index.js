import React from 'react';

export default () => {
  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        <img src={require('./shoes-3@3x.jpg')} alt="Adidas Utra Boost" />
      </div>
      <div className="product-gallery-thumbnails">
        <button className="product-gallery-thumbnails-item active">
          <img
            src={require('./shoes-3-thumb1.jpg')}
            srcSet={require('./shoes-3-thumb1@2x.jpg') + ' 2x'}
            alt="Adidas Utra Boost"
          />
        </button>
        <button className="product-gallery-thumbnails-item">
          <img
            src={require('./shoes-3-thumb2.jpg')}
            srcSet={require('./shoes-3-thumb2@2x.jpg') + ' 2x'}
            alt="Adidas Utra Boost"
          />
        </button>
        <button className="product-gallery-thumbnails-item">
          <img
            src={require('./shoes-3-thumb3.jpg')}
            srcSet={require('./shoes-3-thumb3@2x.jpg') + ' 2x'}
            alt="Adidas Utra Boost"
          />
        </button>
        <button className="product-gallery-thumbnails-item">
          <img
            src={require('./shoes-3-thumb4.jpg')}
            srcSet={require('./shoes-3-thumb4@2x.jpg') + ' 2x'}
            alt="Adidas Utra Boost"
          />
        </button>
        <div className="product-gallery-decor">
          <div className="product-gallery-decor-lines" />
        </div>
        <button className="product-gallery-thumbnails-more">
          see<br />more<br />photos
        </button>
      </div>
    </div>
  );
};
