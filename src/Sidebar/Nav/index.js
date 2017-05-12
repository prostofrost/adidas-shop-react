import './styles.css';
import React from 'react';

export default () => {
  return (
    <nav className="menu">
      <div className="menu-item menu-dropdown">
        <a href="#" className="active">Sports</a>
        <div className="menu-submenu">
          <div className="menu-submenu-item">
            <a href="#" className="active">Shoes</a>
          </div>
          <div className="menu-submenu-item"><a href="#">Clothing</a></div>
          <div className="menu-submenu-item"><a href="#">Accesories</a></div>
        </div>
      </div>
      <div className="menu-item"><a href="#">Brands</a></div>
      <div className="menu-item"><a href="#">Micoach</a></div>
    </nav>
  );
};
