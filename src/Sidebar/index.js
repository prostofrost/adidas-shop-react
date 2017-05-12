import './styles.css';
import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Nav from './Nav';

export default () => {
  return (
    <aside className="sidebar">
      <Logo />
      <Search />
      <Nav />
    </aside>
  );
};
