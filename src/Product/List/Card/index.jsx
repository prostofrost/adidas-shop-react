import React from 'react';
import { Link } from 'react-router-dom';
import Label from '../../../components/Label';

import { Price, Card } from './styled';

export default () => (
  <Card isSale>
    <Label />
    <img
      src={require('./shoes-1.jpg')}
      srcSet={`${require('./shoes-1@2x.jpg')} 2x,${require('./shoes-1@3x.jpg')} 3x`}
      alt="Adidas"
    />
    <Price>
      <Link to="/item">
        $170
      </Link>
    </Price>
  </Card>
);
