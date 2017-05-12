import './styles.css';
import React from 'react';

export default () => {
  return (
    <div className="logo">
      <a href="#">
        <img
          src={require('./logo.png')}
          srcSet={
            require('./logo@2x.png') + ' 2x,' + require('./logo@3x.png') + ' 3x'
          }
          alt="Adidas Logo"
        />
      </a>
    </div>
  );
};
