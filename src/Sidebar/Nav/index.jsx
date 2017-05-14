import React from 'react';
import { Nav, Item, NavSub, Link } from './styled';

export default () => (
  <Nav>
    <Item>
      <Link isActive isDropdown>Sports</Link>
      <NavSub>
        <Item subitem>
          <Link isActive>Shoes</Link>
        </Item>
        <Item subitem><Link>Clothing</Link></Item>
        <Item subitem><Link>Accesories</Link></Item>
      </NavSub>
    </Item>
    <Item><Link>Brands</Link></Item>
    <Item><Link>Micoach</Link></Item>
  </Nav>
);
