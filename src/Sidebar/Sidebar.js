import React from 'react';
import logo from './logo.png';

export default () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Adidas Logo" />
        </a>
      </div>
      <form className="search search-m">
        <input type="search" />
      </form>
      <nav>
        <ul className="menu">
          <li>
            <a href="#" className="menu-dropdown active">Sports</a>
            <ul className="menu-submenu">
              <li><a href="#" className="active">Shoes</a></li>
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Accesories</a></li>
            </ul>
          </li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Micoach</a></li>
        </ul>
      </nav>
    </aside>
  );
};
