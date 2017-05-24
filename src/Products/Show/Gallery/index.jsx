import React from 'react';
import { Gallery, BigImg, Thumbnails, Thumb } from './styled';

export default () => (
  <Gallery>
    <BigImg>
      <img src={require('./shoes-3@3x.jpg')} alt="Adidas Utra Boost" />
    </BigImg>
    <Thumbnails>
      <Thumb isActive>
        <img
          src={require('./shoes-3-thumb1.jpg')}
          srcSet={`${require('./shoes-3-thumb1@2x.jpg')} 2x`}
          alt="Adidas Utra Boost"
        />
      </Thumb>
      <Thumb>
        <img
          src={require('./shoes-3-thumb2.jpg')}
          srcSet={`${require('./shoes-3-thumb2@2x.jpg')} 2x`}
          alt="Adidas Utra Boost"
        />
      </Thumb>
      <Thumb>
        <img
          src={require('./shoes-3-thumb3.jpg')}
          srcSet={`${require('./shoes-3-thumb3@2x.jpg')} 2x`}
          alt="Adidas Utra Boost"
        />
      </Thumb>
      <Thumb>
        <img
          src={require('./shoes-3-thumb4.jpg')}
          srcSet={`${require('./shoes-3-thumb4@2x.jpg')} 2x`}
          alt="Adidas Utra Boost"
        />
      </Thumb>
      <Thumb>
        <img
          src={require('./shoes-3-thumb2.jpg')}
          srcSet={`${require('./shoes-3-thumb4@2x.jpg')} 2x`}
          alt="Adidas Utra Boost"
        />
      </Thumb>
    </Thumbnails>
  </Gallery>
);
